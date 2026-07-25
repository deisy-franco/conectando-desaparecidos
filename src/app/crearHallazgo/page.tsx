'use client'
import React, { useState } from 'react';
import FormularioHallazgo from '../components/FormularioHallazgo'

// ✨ 1. IMPORTAMOS EL ENRUTADOR
import { useRouter } from 'next/navigation';

export default function Page(){
    // ✨ 2. INICIALIZAMOS EL ENRUTADOR
    const router = useRouter();

    const [datos,setDatos]= useState({
            tipoDeHallazgo:'',
            categoriaHallazgo:'',
            descripcion:'',
            fecha:'',
            fotos: [] as File[],
            ubicacion:'',
            coordenadas: { lat: 21.8818, lng: -102.2915 }
        });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const {name, value} = e.target;
            
        if (name === 'tipoDeHallazgo') {
        setDatos({
          ...datos,
          tipoDeHallazgo: value,
          categoriaHallazgo: '' 
        });
            return;
        }
        
        setDatos({ ...datos, [e.target.name]: e.target.value });
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

    // ✨ 3. CREAMOS LA FUNCIÓN QUE SE EJECUTA AL DAR CLICK EN PUBLICAR
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita que la página intente recargarse al enviar el form

        console.log("=== DATOS DEL HALLAZGO ===");
        console.log(datos);

        // Cambiamos de página (cambia '/inicio' por la ruta a la que quieras ir)
        router.push('/hallazgos'); 
    };
    
    return(
        <div style={{display:'flex', justifyContent:'center',backgroundColor:'#ffffff'}}>
            {/* ✨ 4. LE PASAMOS LA FUNCIÓN handleSubmit AL COMPONENTE */}
            <FormularioHallazgo 
                datos={datos} 
                handleChange={handleChange} 
                handleFotosChange={handleFotosChange} 
                handleCoordenadasChange={handleCoordenadasChange} 
                handleSubmit={handleSubmit}
            />
        </div>
    );
}