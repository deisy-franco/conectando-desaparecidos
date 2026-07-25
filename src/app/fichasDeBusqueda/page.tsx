'use client'
import React, { useState, useRef } from 'react';
import Tarjeta from '../components/Tarjeta';

export default function Page(){

    const [datos,setDatos] = useState({
            nombre:'Tlacuache',
            edad:'3',
            genero:'Masculino',
            foto: '/descarga (4).jpg',
            fecha:'2026-07-23',
            vestimenta:'Playera de manga larga gris claro con mangas de color gris obscuro, pantalon gris obscuro, guantes rosas, tenis rosas',
            estatura:'0.7',
            complexion:'Robusta',
            cara:'Alargada (en forma de gota)',
            piel:'Blanca',
            cabello:'Liso',
            ojos:'Grandes de color negro',
            nariz:'Pequeña y de color rosa',
            boca:'Pequeña',
            labios:'Delgados',
            detalles:'Es un tlacuache',
            email:'up230231@gmail.com',
            tel:'4494619993',
            lugarEstado: 'Aguascalientes',
            lugarMunicipio: 'Aguascalientes',
            ultUbiEstado: 'Aguascalientes',
            ultUbiMunicipio: 'Calvillo',
            status:'Desaparecida'
    });

    return(
        <div style={{display:'flex',  gap: '2rem', padding: '2rem', flexWrap: 'wrap', justifyContent: 'center', backgroundColor:'#F8fafc' }}>
            <Tarjeta datos={datos}></Tarjeta>
            <Tarjeta datos={datos}></Tarjeta>
            <Tarjeta datos={datos}></Tarjeta>
            <Tarjeta datos={datos}></Tarjeta>
            <Tarjeta datos={datos}></Tarjeta>
        </div>
    );
}