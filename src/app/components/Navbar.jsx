'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Navbar({}){
  const { usuario } = useAuth();

  const pathname = usePathname();

  if (pathname === '/login') {
        return null; 
    }

  const obtenerEstiloEnlace = (rutaDestino) => {
        // Si la ruta del navegador coincide con el destino del enlace:
        if (pathname === rutaDestino) {
            return {
                color: '#cc0000', // Rojo
                fontWeight: 'bold', // Negritas
                textDecoration: 'none',
                borderBottom: '2px solid #cc0000', // Opcional: Una línea roja debajo para que se vea más pro
                paddingBottom: '4px'
            };
        }
        
        // Si no estamos en esa página (Estilo normal):
        return {
            color: '#334155', // Gris oscuro normal
            fontWeight: 'normal',
            textDecoration: 'none'
        };
    };

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      width: '100%', 
      backgroundColor: '#ffffff', 
      padding: '1rem 2rem', // Ajustado para dar respiro a los lados en pantalla completa
      boxSizing: 'border-box',
      borderBottom: '1px solid #eaeaea' // Opcional: una línea muy sutil para separar el navbar del resto de la página
    }}>
      
      {/* Logo y Título */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src="/logo.png" alt="Logo Conectando Desaparecidos" style={{ width: '45px', height: 'auto' }} />
        <Link href="/" style={{ textDecoration: 'none', color: 'black', display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
          <span style={{ fontWeight: '900', fontSize: '1.1rem' }}>Conectando</span>
          <span style={{ fontWeight: '900', fontSize: '1.1rem' }}>Desaparecidos</span>
        </Link>
      </div>

      {/* Enlaces de navegación */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
        <li>
          <Link href="/" style={obtenerEstiloEnlace('/')}>
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/fichasDeBusqueda" style={obtenerEstiloEnlace('/fichasDeBusqueda')}>
            Fichas de Búsqueda
          </Link>
        </li>
        <li>
          <Link href="/formulario" style={obtenerEstiloEnlace('/formulario')}>
            Crear Ficha de busqueda
          </Link>
        </li>
        <li>
          <Link href="/hallazgos" style={obtenerEstiloEnlace('/hallazgos')}>
            Hallazgos
          </Link>
        </li>
        {usuario.id && (<li>
          <Link href="/crearHallazgo" style={obtenerEstiloEnlace('/crearHallazgo')}>
            Crear hallazgo
          </Link>
        </li>)}
        <li>
          <Link href="/reportes" style={obtenerEstiloEnlace('/reportes')}>
            Reportes
          </Link>
        </li>
        {usuario.id && (<li>
            <Link href="/crearReporte" style={obtenerEstiloEnlace('/crearReporte')}>
            Crear Reporte
            </Link>
        </li>)}
      </ul>

      {/* Botón de iniciar sesion */}
      <div>
        <Link href="/login" style={{ 
          backgroundColor: '#a30808', 
          color: '#ffffff', 
          padding: '0.6rem 1.5rem', 
          borderRadius: '6px', 
          textDecoration: 'none', 
          fontWeight: 'bold',
          fontSize: '0.95rem'
        }}>
          Iniciar Sesion
        </Link>
      </div>
      
    </nav>
  );
};
