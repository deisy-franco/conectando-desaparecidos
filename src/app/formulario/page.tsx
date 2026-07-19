'use client'
import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

import Formulario from '../components/Formulario'
import Plantilla from '../components/FichaDeBusqueda';
import { Button } from '@mui/material';

export default function Page(){
    const [datos,setDatos] = useState({
        nombre:'',
        edad:'',
        genero:'',
        foto: '/logo.png',
        fecha:'',
        vestimenta:'',
        estatura:'',
        complexion:'',
        cara:'',
        piel:'',
        cabello:'',
        ojos:'',
        nariz:'',
        boca:'',
        labios:'',
        detalles:'',
        email:'',
        tel:'',
        lugarEstado: '',
        lugarMunicipio: '',
        ultUbiEstado: '',
        ultUbiMunicipio: ''
    });

    const plantillaRef = useRef(null);
    
      // 2. LAS FUNCIONES VIVEN AQUÍ
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        if (name === 'edad'){
            if (Number(value) > 125 || Number(value) < 0) return;
            if (value.includes('.')) return;
        }

        if (name === 'estatura') {
            // Convertimos el texto a número para evaluarlo
            const numEstatura = Number(value);
    
            // Si es mayor a 2.60 o menor a 0, bloqueamos el guardado
            if (numEstatura > 2.60 || numEstatura < 0) return; 
        }

        if (name === 'lugarEstado') {
            setDatos({...datos, lugarEstado: value, lugarMunicipio: '' });
            return;
        }

        if (name === 'ultUbiEstado') {
            setDatos({...datos, ultUbiEstado: value, ultUbiMunicipio: '' });
            return;
        }

        if (name === 'tel') {
            // Esta pequeña expresión regular revisa que SOLO haya números (del 0 al 9) o que esté vacío
            if (!/^\d*$/.test(value)) return;

            // Protegemos que no se pasen de 10 dígitos (por si falla el HTML)
            if (value.length > 10) return;
        }

        setDatos({ ...datos, [e.target.name]: e.target.value });
    };
    
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files?.[0];
        if (archivo) {
          setDatos({ ...datos, foto: URL.createObjectURL(archivo) });
        }
    };

    const descargarPNG = async () => {
    if (!plantillaRef.current) return;
    // 1. Tomamos la captura
    const canvas = await html2canvas(plantillaRef.current, { scale: 2 });
    // 2. Generamos la URL de los datos
    const imagenData = canvas.toDataURL('image/png');
    // 3. Creamos un enlace invisible
    const link = document.createElement('a');
    link.href = imagenData;
    // 4. ¡LA PARTE CLAVE! El atributo 'download' obliga al navegador a descargar
    // en lugar de intentar navegar a la URL.
    link.download = `ficha-registro.png`; 
    // 5. Agregamos el enlace al documento, hacemos clic y lo limpiamos
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };

    return(
        
        <div style={{display:'flex',  gap: '2rem', padding: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{flex:1}}>
                <Formulario datos={datos}
                handleChange={handleChange}
                handleImageUpload={handleImageUpload}>
                </Formulario>
            </div>
            <div style={{flex:1}}>
                <div style={{height: 'fit-content'}} ref={plantillaRef}>    
                    <Plantilla datos={datos}></Plantilla>
                </div>
                <Button onClick={descargarPNG} variant="contained" style={{margin:'1rem'}}>
                    Descargar PNG
                </Button>
                <Button variant="contained" color="success" style={{margin:'1rem'}}>
                    Publicar
                </Button>
            </div>
        </div>  
    );
}