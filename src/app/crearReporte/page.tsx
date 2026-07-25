'use client'
import React, { useState } from 'react';
import FormularioReporte from '../components/FormularioReporte'

// ✨ 1. IMPORTAMOS EL ENRUTADOR
import { useRouter } from 'next/navigation';

export default function Page(){

    // ✨ 2. LO INICIALIZAMOS
    const router = useRouter();

    const [datos,setDatos]= useState({
        tipoDeReporte:'',
        categoriaReporte:'',
        descripcion:'',
        fecha:'',
        fotos: [] as File[],
        lugarEstado:'', // ✨ Corregido: antes decía "luegarEstado"
        lugarMunicipio:'',
        coordenadas: { lat: 21.8818, lng: -102.2915 },
        anonimo: false  // ✨ Agregado: para controlar el checkbox desde cero
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement; 
        const { name, value, type, checked } = target;
        
        // ✨ Corregido: Cambiado a tipoDeReporte para que funcione el reset
        if (name === 'tipoDeReporte') {
            setDatos({
                ...datos,
                tipoDeReporte: value,   
                categoriaReporte: ''    
            });
            return;
        }
        
        // El checkbox se guarda perfecto como booleano (true/false) gracias a esta línea
        setDatos({ 
            ...datos, 
            [name]: type === 'checkbox' ? checked : value 
        });
    };

    const handleFotosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const archivosArray = Array.from(e.target.files);
            setDatos({
                ...datos,
                fotos: archivosArray
            });
        }
    };

    const handleCoordenadasChange = (nuevasCoordenadas: { lat: number, lng: number }) => {
        setDatos({ ...datos, coordenadas: nuevasCoordenadas });
    };

    // ✨ 3. CREAMOS LA FUNCIÓN DEL BOTÓN PUBLICAR
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        
        console.log("=== DATOS DEL REPORTE A GUARDAR ===");
        console.log(datos); // Podrás ver en consola que 'anonimo' será true o false

        // Redirige a la página principal
        router.push('/reportes'); 
    };

    return(
        <div style={{display:'flex', justifyContent:'center',backgroundColor:'#ffffff'}}>
            {/* ✨ 4. PASAMOS LA FUNCIÓN handleSubmit */}
            <FormularioReporte 
                datos={datos} 
                handleChange={handleChange} 
                handleFotosChange={handleFotosChange} 
                handleCoordenadasChange={handleCoordenadasChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}