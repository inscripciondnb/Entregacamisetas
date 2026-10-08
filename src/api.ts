declare global {interface Window{ENTREGAS_CONFIG:{apiUrl:string};[key:string]:any}}
let accessKey='';
export function setAccessKey(key:string){accessKey=key;}
function jsonp(params:Record<string,string>):Promise<any>{
 const base=window.ENTREGAS_CONFIG?.apiUrl;
 if(!base||!/^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(base))return Promise.reject(Error('Falta configurar la URL de Apps Script en configuracion.js.'));
 return new Promise((resolve,reject)=>{
  const cb='entregas_'+crypto.randomUUID().replaceAll('-','');const script=document.createElement('script');
  const clean=()=>{clearTimeout(timer);script.remove();delete window[cb];};
  const timer=setTimeout(()=>{clean();reject(Error('No se pudo conectar con Google. Comprueba la conexión y la implementación de Apps Script.'));},25000);
  window[cb]=(data:any)=>{clean();resolve(data);};script.onerror=()=>{clean();reject(Error('No se pudo conectar con Google.'));};
  const url=new URL(base);Object.entries({...params,key:accessKey,callback:cb,_:String(Date.now())}).forEach(([k,v])=>url.searchParams.set(k,v));script.src=url.toString();document.head.append(script);
 });
}
export async function apiFetch(path:string, options?:RequestInit){
 if(!options?.method||options.method==='GET'){
  const data=await jsonp({action:'list'});return {ok:!!data.ok,json:async()=>data};
 }
 const payload=JSON.parse(String(options.body||'{}'));
 const opId=crypto.randomUUID();
 const body={...payload,action:path.endsWith('/reset')?'reset':payload.action,key:accessKey,opId};
 // Google acepta un POST simple; la confirmación se obtiene por separado.
 try{await fetch(window.ENTREGAS_CONFIG.apiUrl,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(body)});}catch{ /* Consultar confirmación: el servidor puede haber recibido el cambio. */ }
 for(let i=0;i<15;i++){
  const data=await jsonp({action:'receipt',opId});
  if(data.complete)return {ok:!!data.ok,json:async()=>data};
  await new Promise(resolve=>setTimeout(resolve,1000));
 }
 throw Error('No se pudo confirmar el cambio. Actualiza el listado para comprobar su estado antes de repetirlo.');
}
