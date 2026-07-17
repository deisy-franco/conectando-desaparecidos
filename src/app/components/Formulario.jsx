
export default function Formulario({datos,handleChange, handleImageUpload}){
    return(
        <div style={{flex:'1', minWidth:'300px',backgroundColor: '#f8fafc',padding:'1.5rem', borderRadius: '10px'}}>
            <h2><strong>Ingresa los datos</strong></h2>
            <ul>
                <li><strong>Nombre completo:</strong>
                    <input type="text" name="nombre" value={datos.nombre} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Edad:</strong>
                    <input type="text" name="edad" value={datos.edad} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Genero:</strong>
                    <input type="text" name="genero" value={datos.genero} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Fotografía de evidencia:</strong>
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={inputStyle} />
                </li>
                <li><strong>Fecha de desaparición:</strong>
                    <input type="date" name="fecha" value={datos.fecha} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Lugar:</strong>
                    <input type="text" name="lugar" value={datos.lugar} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Ultima ubicaión:</strong>
                    <input type="text" name="ubicacion" value={datos.ubicacion} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Vestimenta:</strong>
                    <input type="text" name="vestimenta" value={datos.vestimenta} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Estatura:</strong>
                    <input type="text" name="estatura" value={datos.estatura} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Complexión:</strong>
                    <input type="text" name="complexion" value={datos.complexion} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Cara:</strong>
                    <input type="text" name="cara" value={datos.cara} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Color de piel:</strong>
                    <input type="text" name="piel" value={datos.piel} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Cabello:</strong>
                    <input type="text" name="cabello" value={datos.cabello} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Ojos:</strong>
                    <input type="text" name="ojos" value={datos.ojos} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Nariz:</strong>
                    <input type="text" name="nariz" value={datos.nariz} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Boca:</strong>
                    <input type="text" name="boca" value={datos.boca} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Labios:</strong>
                    <input type="text" name="labios" value={datos.labios} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Señas particulares:</strong>
                    <textarea name="detalles" value={datos.detalles} onChange={handleChange} style={{ ...inputStyle, height: '80px' }} />
                </li>
            </ul>
            <p><strong>Medios de comunicación</strong></p>
            <ul>
                <li><strong>Correo electronico:</strong>
                    <input type="text" name="email" value={datos.email} onChange={handleChange} style={inputStyle} />
                </li>
                <li><strong>Numero telefonico:</strong>
                    <input type="text" name="tel" value={datos.tel} onChange={handleChange} className="inputStyle" />
                </li>
            </ul>
                
            
        </div>
    );
}

const inputStyle = { width: '100%', padding: '0.2rem', marginTop: '0.25rem', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' };
