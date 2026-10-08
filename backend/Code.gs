const PEDIDOS_ORIGINALES = [
  {
    "id": 1,
    "name": "PABLO BATISTA BARRETO",
    "quantity": 1,
    "sizes": "2XL × 1",
    "verified": true
  },
  {
    "id": 2,
    "name": "Martin Molina",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 3,
    "name": "Santiago Suárez Tarrago",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 4,
    "name": "Gabriel Garcia",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 5,
    "name": "Alejandro Daniel Antunez Brizolara",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 6,
    "name": "Alvaro Gorgoroso",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 7,
    "name": "Leo Corrales",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 8,
    "name": "Aaron Bustelo",
    "quantity": 2,
    "sizes": "XL × 2",
    "verified": true
  },
  {
    "id": 9,
    "name": "Cleber PEREZ",
    "quantity": 6,
    "sizes": "S × 1 · M × 2 · L × 1 · XL × 1 · 2XL × 1",
    "verified": true
  },
  {
    "id": 10,
    "name": "Diego Machín",
    "quantity": 9,
    "sizes": "L × 7 · M × 1 · 2XL × 1",
    "verified": true
  },
  {
    "id": 11,
    "name": "EDGARDO NOVO MELGAR",
    "quantity": 2,
    "sizes": "L × 2",
    "verified": true
  },
  {
    "id": 12,
    "name": "Alexander Rivero",
    "quantity": 1,
    "sizes": "S × 1",
    "verified": true
  },
  {
    "id": 13,
    "name": "Christian Ferreira",
    "quantity": 5,
    "sizes": "M × 2 · L × 2 · 3XL × 1",
    "verified": true
  },
  {
    "id": 14,
    "name": "Juan Braga",
    "quantity": 1,
    "sizes": "XL × 1",
    "verified": true
  },
  {
    "id": 15,
    "name": "Nicolas Pintos",
    "quantity": 5,
    "sizes": "M × 2 · L × 2 · M-FEM × 1",
    "verified": true
  },
  {
    "id": 16,
    "name": "sebastian goro",
    "quantity": 2,
    "sizes": "L × 1 · L-FEM × 1",
    "verified": true
  },
  {
    "id": 17,
    "name": "fabian charlon",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 18,
    "name": "Matias Aviega",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 19,
    "name": "Nahuel Silveira",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 20,
    "name": "Juan Gómez",
    "quantity": 3,
    "sizes": "L × 2·M × 1",
    "verified": true
  },
  {
    "id": 21,
    "name": "Damianni Silva",
    "quantity": 5,
    "sizes": "M × 1 · L × 2 · XL × 2",
    "verified": true
  },
  {
    "id": 22,
    "name": "Marcela Farías",
    "quantity": 1,
    "sizes": "S × 1",
    "verified": true
  },
  {
    "id": 23,
    "name": "leonardo melo",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 24,
    "name": "Nicolás Di Santi",
    "quantity": 2,
    "sizes": "L × 1 · S-FEM × 1",
    "verified": true
  },
  {
    "id": 25,
    "name": "Liber SOUTO",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 26,
    "name": "José Ferreira",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 27,
    "name": "Valentina Freitas",
    "quantity": 1,
    "sizes": "S-FEM × 1",
    "verified": true
  },
  {
    "id": 28,
    "name": "Yean ZAPIRAIN",
    "quantity": 1,
    "sizes": "XL × 1",
    "verified": true
  },
  {
    "id": 29,
    "name": "JOAQUIN NÚÑEZ SILVEIRA",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 30,
    "name": "Jonathan Moreira",
    "quantity": 1,
    "sizes": "XL × 1",
    "verified": true
  },
  {
    "id": 31,
    "name": "VICENTE LOPEZ",
    "quantity": 2,
    "sizes": "L × 1 · XL-FEM × 1",
    "verified": true
  },
  {
    "id": 32,
    "name": "Ken Costa",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 33,
    "name": "Luis Hernández",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 34,
    "name": "Marcelo Meneses",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 35,
    "name": "Giovany De Mello",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 36,
    "name": "Álvaro Agustin Morales Miranda",
    "quantity": 1,
    "sizes": "XL × 1",
    "verified": true
  },
  {
    "id": 37,
    "name": "Alexis Facundo Cardozo Burgues",
    "quantity": 1,
    "sizes": "XL × 1",
    "verified": true
  },
  {
    "id": 38,
    "name": "Marcelo Camargo",
    "quantity": 1,
    "sizes": "XL × 1",
    "verified": true
  },
  {
    "id": 39,
    "name": "Leonardo Perdomo",
    "quantity": 5,
    "sizes": "M × 2 · L × 2 · XL × 1",
    "verified": true
  },
  {
    "id": 40,
    "name": "Nicolás Gómez",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 41,
    "name": "milton samuel fernandez do canto",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 42,
    "name": "Rodrigo Silvera",
    "quantity": 2,
    "sizes": "L × 2",
    "verified": true
  },
  {
    "id": 43,
    "name": "Gonzalo Bidarte",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 44,
    "name": "Marcos Molina",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 45,
    "name": "Gary Silvera",
    "quantity": 2,
    "sizes": "12 × 1 · XL × 1",
    "verified": true
  },
  {
    "id": 46,
    "name": "Romina González",
    "quantity": 1,
    "sizes": "XS × 1",
    "verified": true
  },
  {
    "id": 47,
    "name": "Ernesto Correa",
    "quantity": 1,
    "sizes": "XL × 1",
    "verified": false
  },
  {
    "id": 48,
    "name": "Bruna Alvez",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 49,
    "name": "Alda Machado",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 50,
    "name": "Nicolás Fagúndez",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 51,
    "name": "Nicolás Gomez",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 52,
    "name": "Leonardo Otte",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 53,
    "name": "Diego Giménez",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 54,
    "name": "Erik Rebelo",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 55,
    "name": "Cintia Rodriguez",
    "quantity": 1,
    "sizes": "S × 1",
    "verified": true
  },
  {
    "id": 56,
    "name": "Erik Rebelo",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 57,
    "name": "Fabio ZUCHETO",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 58,
    "name": "Gonzalo REAL",
    "quantity": 1,
    "sizes": "XL × 1",
    "verified": false
  },
  {
    "id": 59,
    "name": "Alan Barbat",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 60,
    "name": "Jose Anzolabehere",
    "quantity": 1,
    "sizes": "S × 1",
    "verified": true
  },
  {
    "id": 61,
    "name": "Maximiliano GAGO",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 62,
    "name": "Diego García pereyra",
    "quantity": 1,
    "sizes": "3XL × 1",
    "verified": true
  },
  {
    "id": 63,
    "name": "Darwin Enrique",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 64,
    "name": "Federico García",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 65,
    "name": "Bruno Maidana",
    "quantity": 14,
    "sizes": "XL × 2 · M × 4 · L × 6 · 2XL × 1 · S × 1",
    "verified": true
  },
  {
    "id": 66,
    "name": "Julio Acosta",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 67,
    "name": "Guillermo Sención",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 68,
    "name": "Martín Netto",
    "quantity": 1,
    "sizes": "S × 1",
    "verified": true
  },
  {
    "id": 69,
    "name": "Victoria Lara Torena",
    "quantity": 2,
    "sizes": "M-FEM × 1 · L-FEM × 1",
    "verified": true
  },
  {
    "id": 70,
    "name": "Wilmar Lara",
    "quantity": 1,
    "sizes": "XL × 1",
    "verified": true
  },
  {
    "id": 71,
    "name": "rodrigo gronenbrg",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 72,
    "name": "Emiliano Paris",
    "quantity": 1,
    "sizes": "S × 1",
    "verified": true
  },
  {
    "id": 73,
    "name": "Jonathan Fontoura",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 74,
    "name": "Gaston Acuña",
    "quantity": 3,
    "sizes": "XL × 1 · L × 1 · M × 1",
    "verified": true
  },
  {
    "id": 75,
    "name": "Mario Oneil",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 76,
    "name": "Gonzalo Noste",
    "quantity": 20,
    "sizes": "L × 3 · XL × 2 · 2XL × 8 · S-FEM × 5 · M-FEM × 2",
    "verified": false
  },
  {
    "id": 77,
    "name": "BOMBEROS BELGRANO",
    "quantity": 16,
    "sizes": "M × 7 · L × 6 · XL × 3",
    "verified": true
  },
  {
    "id": 78,
    "name": "Manuela Bentos",
    "quantity": 1,
    "sizes": "S × 1",
    "verified": true
  },
  {
    "id": 79,
    "name": "Michael Aunchayna",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 80,
    "name": "Ezequiel LLANES",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 81,
    "name": "Federico Ferreira",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": false
  },
  {
    "id": 82,
    "name": "Juan Machado",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": false
  },
  {
    "id": 83,
    "name": "Sebastián Camejo",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 84,
    "name": "VALERIA VASCONCELLOS",
    "quantity": 12,
    "sizes": "S × 3 · M × 2 · L × 4 · XL × 1 · 2XL × 1 · 3XL × 1",
    "verified": true
  },
  {
    "id": 85,
    "name": "VIVIANA BORLINQUI",
    "quantity": 2,
    "sizes": "M-FEM × 1 · L-FEM × 1",
    "verified": true
  },
  {
    "id": 86,
    "name": "JORGE GUTIERREZ",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 87,
    "name": "PABLO ONORATO",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 88,
    "name": "INES MURIALDO",
    "quantity": 1,
    "sizes": "S-FEM × 1",
    "verified": false
  },
  {
    "id": 89,
    "name": "VICTOR FAGUNDEZ",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": false
  },
  {
    "id": 90,
    "name": "PABLO ARAUJO",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 91,
    "name": "JAVIER DURE",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": false
  },
  {
    "id": 92,
    "name": "ALEJANDRO CUELLO",
    "quantity": 3,
    "sizes": "L × 1 · S-FEM × 1 · XL × 1",
    "verified": false
  },
  {
    "id": 93,
    "name": "ROBERT LOPEZ",
    "quantity": 1,
    "sizes": "XL × 1",
    "verified": true
  },
  {
    "id": 94,
    "name": "FLORENCIA POSADAS",
    "quantity": 1,
    "sizes": "S-FEM × 1",
    "verified": true
  },
  {
    "id": 95,
    "name": "SANDRO NASSO",
    "quantity": 1,
    "sizes": "M × 1",
    "verified": true
  },
  {
    "id": 96,
    "name": "VICTORIA BARBOZA",
    "quantity": 1,
    "sizes": "S-FEM × 1",
    "verified": true
  },
  {
    "id": 97,
    "name": "LEONARDO CORRALES",
    "quantity": 1,
    "sizes": "L × 1",
    "verified": true
  },
  {
    "id": 98,
    "name": "Sebastián Fernandez",
    "quantity": 2,
    "sizes": "8 × 1·L × 1",
    "verified": false
  }
];

// Ejecutar UNA VEZ desde el editor de Apps Script. Repetir no borra los datos.
function configurarAplicacion() {
 const props = PropertiesService.getScriptProperties();
 if (!props.getProperty('SHEET_ID')) {
  const ss = SpreadsheetApp.create('Entrega camisetas - Copa Integracion 2026');
  const sheet = ss.getSheets()[0]; sheet.setName('Pedidos');
  sheet.getRange(1,1,1,8).setValues([['N.º','Nombre','Cantidad','Talles','Verificado','Entregado','Fecha de entrega','Revisión']]);
  sheet.getRange(2,1,PEDIDOS_ORIGINALES.length,8).setValues(PEDIDOS_ORIGINALES.map(o=>[o.id,o.name,o.quantity,o.sizes,o.verified,false,'',0]));
  sheet.setFrozenRows(1);sheet.autoResizeColumns(1,8);
  props.setProperty('SHEET_ID',ss.getId());
 }
 if (!props.getProperty('ACCESS_KEY')) props.setProperty('ACCESS_KEY',Utilities.getUuid());
 Logger.log('PLANILLA: https://docs.google.com/spreadsheets/d/'+props.getProperty('SHEET_ID'));
 Logger.log('CLAVE DE ACCESO: '+props.getProperty('ACCESS_KEY'));
}
function hoja_(){
 const id=PropertiesService.getScriptProperties().getProperty('SHEET_ID');
 if(!id)throw Error('Ejecuta configurarAplicacion en el editor antes de utilizar la web.');
 return SpreadsheetApp.openById(id).getSheetByName('Pedidos');
}
function autorizado_(key){
 const expected=PropertiesService.getScriptProperties().getProperty('ACCESS_KEY');
 return expected&&typeof key==='string'&&key===expected;
}
function respuesta_(data,cb){
 const json=JSON.stringify(data).replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029');
 if(cb&&/^entregas_[a-f0-9]{32}$/.test(cb))return ContentService.createTextOutput(cb+'('+json+');').setMimeType(ContentService.MimeType.JAVASCRIPT);
 return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}
function doGet(e){
 const p=e.parameter||{};
 try{
  if(!autorizado_(p.key))return respuesta_({ok:false,complete:true,error:'Clave de acceso incorrecta.'},p.callback);
  if(p.action==='receipt'){
   const value=CacheService.getScriptCache().get('receipt:'+p.opId);
   return respuesta_(value?JSON.parse(value):{ok:true,complete:false},p.callback);
  }
  if(p.action!=='list')throw Error('Solicitud inválida.');
  const h=hoja_();const values=h.getRange(2,1,PEDIDOS_ORIGINALES.length,8).getValues();
  const orders=values.map(r=>({id:Number(r[0]),name:String(r[1]),quantity:Number(r[2]),sizes:String(r[3]),verified:r[4]===true,deliveredAt:r[5]===true?(r[6] instanceof Date?r[6].toISOString():String(r[6])):null,revision:Number(r[7])}));
  return respuesta_({ok:true,orders:orders},p.callback);
 }catch(error){return respuesta_({ok:false,complete:true,error:String(error.message||error)},p.callback);}
}
function doPost(e){
 let p, lock;
 try {
  p=JSON.parse(e.postData.contents);
  if(!autorizado_(p.key))throw Error('Clave de acceso incorrecta.');
  if(typeof p.opId!=='string'||! /^[a-f0-9-]{36}$/.test(p.opId))throw Error('Solicitud inválida.');
  lock=LockService.getScriptLock();lock.waitLock(20000);
  const cache=CacheService.getScriptCache(),receiptKey='receipt:'+p.opId;
  const previous=cache.get(receiptKey);if(previous)return respuesta_(JSON.parse(previous));
  const h=hoja_();let result;
  if(p.action==='reset'){
   if(p.confirmation!=='reset-deliveries')throw Error('Confirma el reinicio.');
   const range=h.getRange(2,5,PEDIDOS_ORIGINALES.length,4),rows=range.getValues();let count=0;
   rows.forEach(r=>{if(r[1]===true){r[1]=false;r[2]='';r[3]=Number(r[3])+1;count++;}});
   range.setValues(rows);SpreadsheetApp.flush();result={ok:true,complete:true,resetCount:count};
  }else{
   if(!Number.isInteger(p.id)||p.id<1||p.id>PEDIDOS_ORIGINALES.length||!['verify','deliver','undo'].includes(p.action))throw Error('Solicitud inválida.');
   const range=h.getRange(p.id+1,5,1,4),r=range.getValues()[0];
   if(Number(r[3])!==p.revision)throw Error('Este pedido cambió en otro dispositivo. Actualiza el listado.');
   if(p.action==='deliver'&&r[0]!==true)throw Error('Primero verifica el pedido.');
   if(p.action==='verify')r[0]=true;
   if(p.action==='deliver'){if(r[1]!==true)r[2]=new Date().toISOString();r[1]=true;}
   if(p.action==='undo'){r[1]=false;r[2]='';}
   r[3]=Number(r[3])+1;range.setValues([r]);SpreadsheetApp.flush();result={ok:true,complete:true};
  }
  cache.put(receiptKey,JSON.stringify(result),21600);return respuesta_(result);
 } catch(error){
  const result={ok:false,complete:true,error:String(error.message||error)};
  if(p&&autorizado_(p.key)&&typeof p.opId==='string')CacheService.getScriptCache().put('receipt:'+p.opId,JSON.stringify(result),21600);
  return respuesta_(result);
 } finally {if(lock&&lock.hasLock())lock.releaseLock();}
}
