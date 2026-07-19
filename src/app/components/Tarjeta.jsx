import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TodayIcon from '@mui/icons-material/Today';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import PersonIcon from '@mui/icons-material/Person';

export default function Tarjeta({datos}) {


    return(
        <div style={{
            width: '300px',
            backgroundColor:'#FFFFFF',
            border: '1.5px solid #e2e8f0',
            borderRadius: '12px',
            padding: '1.2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'}}
        >

            {datos.foto && (
          <div style={{ display: 'flex',gap:'1.5rem',paddingBottom: '1rem' }}>
            <img 
              src={datos.foto} 
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
              <li><strong>{datos.nombre}</strong></li>
              <li style={{color: '#c62828', 
              border: '1px solid #c62828', 
              backgroundColor: '#fff0f0', // Un fondo rojizo muy tenue
              padding: '0.2rem 0.5rem', 
              borderRadius: '4px', 
              fontSize: '1rem', 
              fontWeight: 'bold',
              width: 'fit-content',
              margin:'1rem'}}>{datos.status}</li>
              <li><TodayIcon></TodayIcon>{datos.fecha}</li>
              <li><LocationPinIcon></LocationPinIcon>{datos.lugarMunicipio}, {datos.lugarEstado}</li>
              <li><PersonIcon></PersonIcon>{datos.edad}</li>
              <li><Button variant="outlined" color="error">Ver ficha</Button></li>
            </ul>
            
          </div>
        )}

        </div>
    );
}