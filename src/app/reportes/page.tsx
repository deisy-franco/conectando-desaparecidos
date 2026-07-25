'use client'
import React, { useState, useRef } from 'react';
import TarjetaReporte from '../components/TarjetaReporte';

export default function Page(){

    const [datos,setDatos]= useState({
        tipoDeReporte:'Tlacuache',
        categoriaReporte:'Desaparecid@',
        lugarEstado:'Aguascalientes',
        lugarMunicipio:'Aguascalientes',
        fotos: ['/descarga (4).jpg','/logo.png','descarga (5).jpg'] as any,
        fecha:'11/07/2026',
        coordenadas: { lat: 21.8818, lng: -102.2915 },
        descripcion:'',
        usuario:''
    });

    return(
        <div style={{display:'flex',  gap: '2rem', padding: '2rem', flexWrap: 'wrap', justifyContent: 'center', backgroundColor:'#f8fafc'}}>
            <TarjetaReporte datos={datos}></TarjetaReporte>
            <TarjetaReporte datos={datos}></TarjetaReporte>
            <TarjetaReporte datos={datos}></TarjetaReporte>
            <TarjetaReporte datos={datos}></TarjetaReporte>
            <TarjetaReporte datos={datos}></TarjetaReporte>
        </div>
    );
}