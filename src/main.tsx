import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {apiFetch,setAccessKey} from './api';
function Entry(){
 const [logged,setLogged]=useState(false),[key,setKey]=useState(''),[busy,setBusy]=useState(false),[error,setError]=useState('');
 async function login(e:React.FormEvent){e.preventDefault();setBusy(true);setError('');try{setAccessKey(key.trim());const r=await apiFetch('/api/orders');const d=await r.json();if(!r.ok)throw Error(d.error);setLogged(true);}catch(e){setError(e instanceof Error?e.message:'No se pudo ingresar.');}finally{setBusy(false);}}
 if(logged)return <App/>;
 return <div className="loginpage"><form className="modal" onSubmit={login}><p className="eyebrow">COPA INTEGRACIÓN 2026</p><h2>Control de entregas</h2><p>Ingresa la clave de acceso para consultar y registrar las entregas.</p><label htmlFor="accesskey">Clave de acceso</label><input id="accesskey" className="keyinput" type="password" autoComplete="current-password" required value={key} onChange={e=>setKey(e.target.value)}/>{error&&<div role="alert" className="error">{error}</div>}<button className="confirm loginbutton" disabled={busy}>{busy?'Conectando…':'Ingresar'}</button></form></div>;
}
createRoot(document.getElementById('root')!).render(<Entry/>);
