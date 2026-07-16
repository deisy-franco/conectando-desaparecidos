import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Button } from '@mui/material';


export default function Plantilla({ datos }) {

  const circleStyle = {
    backgroundColor: '#7b1113', // El color rojo oscuro de tu imagen
    color: '#ffffff',           // El icono en color blanco
    borderRadius: '50%',        // Esto hace que el fondo sea un círculo perfecto
    padding: '0.4rem',          // Espacio entre el icono y el borde del círculo
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25px',              // Ancho y alto fijos para que no se deforme
    height: '25px'
  };

  return (
    <div style={{
      flex: '1',
      minwidth: '400px',
      minHeight: '500px',
      backgroundColor: '#f8fafc',
      border: '2px solid #7b1113',
      padding: '1.5rem',
      boxSizing: 'border-box',
      borderRadius: '20px'
    }}>
      
        {datos.foto && (
          <div style={{ display: 'flex',gap:'1.5rem',paddingBottom: '1rem' }}>
            <img 
              src={datos.foto} 
              alt="Foto del usuario" 
              style={{ 
                maxWidth: '200px',  /* 1. La pared: Ninguna foto será más ancha que esto */
                maxHeight: '200px',
                width: '150px',    /* Tu ancho fijo (puedes cambiar este número) */
                height: 'auto',    /* ✨ LA MAGIA: El alto se calcula solo para no deformar */
                display: 'block',  /* Evita un espacio en blanco fantasma debajo de la foto */
                borderRadius: '8px' /* Opcional, para que las esquinas se vean bonitas */
              }} />
            <ul>
              <li style={{fontSize:20,paddingBottom: '1rem'}}><strong>FICHA DE BÚSQUEDA</strong></li>
              <li>{datos.nombre}</li>
              <li><strong>Edad:</strong> {datos.edad}</li>
              <li><strong>Genero:</strong> {datos.genero}</li>
            </ul>
            
          </div>
        )}
        <ul>
          <li><strong>Fecha de desaparición:</strong>{datos.fecha}</li>
          <li><strong>Lugar:</strong>{datos.lugar}</li>
          <li><strong>Última ubicación:</strong>{datos.ubicacion}</li>
          <li><strong>Vestimenta:</strong>{datos.vestimenta}</li>
        </ul>
        <p><strong>Descripción fisica</strong></p>
        <ul>
          <li><strong>Estatura:</strong>{datos.estatura}</li>
          <li><strong>Complexión:</strong>{datos.complexion}</li>
          <li><strong>Cara:</strong>{datos.cara}</li>
          <li><strong>Color de piel:</strong>{datos.piel}</li>
          <li><strong>Cabello:</strong>{datos.cabello}</li>
          <li><strong>Ojos:</strong>{datos.ojos}</li>
          <li><strong>Nariz:</strong>{datos.nariz}</li>
          <li><strong>Boca:</strong>{datos.boca}</li>
          <li><strong>Labios:</strong>{datos.labios}</li>
          <li><strong>Señas Particulares:</strong>{datos.detalles}</li>
        </ul>

        <p><strong>Reporta cualquier pista aqui:</strong></p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
      
          {/* Grupo del Teléfono */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={circleStyle}>
              <FaPhoneAlt size={14} /> 
            </div>
            <span>{datos.tel}</span>
          </div>

          {/* Una barrita separadora opcional como en tu imagen */}
          <span style={{ color: '#ccc' }}>|</span>

          {/* Grupo del Correo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={circleStyle}>
              <FaEnvelope size={14}/>
            </div>
            <span>{datos.email}</span>
          </div>

        </div>
    </div>
  );
}