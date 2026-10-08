import { build } from 'esbuild';
import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await build({entryPoints:['src/main.tsx'],bundle:true,minify:true,jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},outfile:'dist/aplicacion.js'});
for(const file of ['index.html','estilos.css','favicon.svg','configuracion.js'])await copyFile(file,'dist/'+file);
console.log('Aplicación lista para Vercel: dist/');
