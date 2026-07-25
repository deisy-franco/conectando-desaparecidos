'use client'
import React, { useState, useRef } from 'react';
import TarjetaHallazgo from '../components/TarjetaHallazgos';

export default function Page(){

    const [datos,setDatos]= useState({
        tipoDeHallazgo:'Persona Localizada con Vida',
        categoriaHallazgo:'Extravío',
        descripcion:'Se encontro en calvillo con sus chamucos',
        fecha:'23-07-2026',
        fotos: ['/descarga (4).jpg','/logo.png','descarga (5).jpg'] as any,
        lugarEstado:'Aguascalientes',
        lugarMunicipio:'Calvillo',
        coordenadas: { lat: 21.8818, lng: -102.2915 }
    });

    return(
        <div style={{display:'flex',  gap: '2rem', padding: '2rem', flexWrap: 'wrap', justifyContent: 'center', backgroundColor:'#f8fafc'}}>
            <TarjetaHallazgo datos={datos}></TarjetaHallazgo>
            <TarjetaHallazgo datos={datos}></TarjetaHallazgo>
            <TarjetaHallazgo datos={datos}></TarjetaHallazgo>
            <TarjetaHallazgo datos={datos}></TarjetaHallazgo>
            <TarjetaHallazgo datos={datos}></TarjetaHallazgo>
        </div>
    );
}