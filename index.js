import express  from "express" // si no se utiliza type mode se deberia de declarar como const express = require('express');
import { crud_cliente } from "./controlador/crud_clientes.js"
//Paso 7


//Paso 1
const app_e = express() // crear variable para acceder al expressjs
app_e.use(express.urlencoded({extended:false}));
app_e.use(express.json());
// Paso 4 (directorios estaticas)
app_e.use(express.static('./vistas'))
app_e.use(express.static('./controlador'))
app_e.use(express.static('./modelo'))
// Paso 5 configurar el motor vistas
app_e.set('views','./vistas')
app_e.set('view engine','ejs')
//Paso 2
app_e.listen('5000',function(){
    console.log('Aplicacion Iniciada : http://localhost:5000/')
})
// Paso 3
app_e.get('/',crud_cliente.leer);
app_e.post('/crud_c',crud_cliente.cud);