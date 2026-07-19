'use client'
import React, { useState, useRef } from 'react';
import Tarjeta from '../components/Tarjeta';

export default function Page(){

    const [datos,setDatos]= useState({
        nombre:'Tlacuache',
        status:'Desaparecid@',
        lugarEstado:'Aguascalientes',
        lugarMunicipio:'Aguascalientes',
        edad:'3 años',
        foto: '/descarga (4).jpg',
        fecha:'11/07/2026'
    });

    return(
        <div style={{display:'flex',  gap: '2rem', padding: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Tarjeta datos={datos}></Tarjeta>
            <Tarjeta datos={datos}></Tarjeta>
            <Tarjeta datos={datos}></Tarjeta>
            <Tarjeta datos={datos}></Tarjeta>
            <Tarjeta datos={datos}></Tarjeta>
        </div>
    );
}