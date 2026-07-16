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
        lugar:'',
        ubicacion:'',
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
        tel:''
    });

    const plantillaRef = useRef(null);
    
      // 2. LAS FUNCIONES VIVEN AQUÍ
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                <Button onClick={descargarPNG} variant="contained">
                    Descargar PNG
                </Button>
            </div>
        </div>  
    );
}