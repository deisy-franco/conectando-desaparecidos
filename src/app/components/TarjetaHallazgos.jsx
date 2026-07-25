import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TodayIcon from '@mui/icons-material/Today';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import PersonIcon from '@mui/icons-material/Person';
import Hallazgo from './Hallazgo'
import Modal from '@mui/material/Modal'; 
import React, { useState } from 'react';
import Box from '@mui/material/Box';


const estiloModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  maxWidth: '95vw',    // Evita que se salga en celulares
  maxHeight: '95vh',   // Evita que se salga a lo alto
  overflowY: 'auto',   // Agrega scroll si la ficha es muy larga
  bgcolor: 'transparent',
  outline: 'none',     // Quita el borde azul que ponen algunos navegadores al hacer clic
};

export default function TarjetaHallazgo({datos}) {

  const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
      <>
        <div style={{
            width: '300px',
            backgroundColor:'#FFFFFF',
            border: '1.5px solid #e2e8f0',
            borderRadius: '12px',
            padding: '1.2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'}}
        >

            {datos.fotos && datos.fotos.length > 0 && (
          <div style={{ display: 'flex',gap:'1.5rem',paddingBottom: '1rem' }}>
            <img 
              src={datos.fotos[0]} 
              alt="Foto del usuario" 
              style={{ 
                maxWidth: '100px',  /* 1. La pared: Ninguna foto será más ancha que esto */
                maxHeight: '100px',
                width: '100px',    /* Tu ancho fijo (puedes cambiar este número) */
                height: 'auto',    /* ✨ LA MAGIA: El alto se calcula solo para no deformar */
                display: 'block',  /* Evita un espacio en blanco fantasma debajo de la foto */
                borderRadius: '8px' /* Opcional, para que las esquinas se vean bonitas */
              }} />

            <ul>
              <li><strong>{datos.tipoDeHallazgo}</strong></li>
              <li style={{ 
              border: '1px solid #e2e8f0', 
              backgroundColor: '#f8fafc', 
              padding: '0.2rem 0.5rem', 
              borderRadius: '4px', 
              fontSize: '1rem', 
              fontWeight: 'bold',
              width: 'fit-content',
              margin:'1rem'}}>Hallazgo</li>
              <li><TodayIcon></TodayIcon>{datos.fecha}</li>
              <li><LocationPinIcon></LocationPinIcon>{datos.lugarMunicipio}, {datos.lugarEstado}</li>
              <li><Button variant="outlined" color="error" onClick={handleOpen}>Ver detalle</Button></li>
            </ul>
            
          </div>
        )}

        </div>
        <Modal
                open={open}
                onClose={handleClose} // Esto hace la magia de cerrarse al hacer clic afuera
                aria-labelledby="modal-ficha-busqueda"
            >
                <Box sx={estiloModal}>
                    {/* Renderizamos tu componente Plantilla pasándole los datos de esta tarjeta */}
                    <Hallazgo datos={datos} />
                </Box>
            </Modal>
            </>
    );
}