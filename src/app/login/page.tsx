'use client'
import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
    const router = useRouter();
    
    // ✨ CONTROLADOR DE VISTA: Decide si muestra 'login' o 'registro'
    const [vistaActual, setVistaActual] = useState<'login' | 'registro'>('login');

    // Estado independiente para guardar los datos de Login
    const [loginDatos, setLoginDatos] = useState({ 
        correo: '', 
        contrasena: '' 
    });

    // Estado independiente para guardar los datos de Registro
    const [registroDatos, setRegistroDatos] = useState({ 
        nombre: '', 
        correo: '', 
        contrasena: '' 
    });

    // --- FUNCIONES MANEJADORAS ---
    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginDatos({ ...loginDatos, [e.target.name]: e.target.value });
    };

    const handleRegistroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegistroDatos({ ...registroDatos, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Enviando Login:", loginDatos);
        // Aquí iría tu lógica de inicio de sesión real
    };

    const handleRegistroSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Enviando Registro:", registroDatos);
        // Aquí iría tu lógica para crear el usuario en la base de datos
    };

    return (
        // Contenedor principal de pantalla completa (Fondo gris)
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#64748B', padding: '2rem' }}>
            
            {/* TARJETA BLANCA (Marco contenedor) */}
            <div style={{
                position: 'relative', // Permite colocar la flecha en la esquina
                width: '100%',
                maxWidth: '420px',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '3rem 2rem 2.5rem 2rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
            }}>
                
                {/* BOTÓN DE VOLVER (Siempre visible, anclado a la esquina superior izquierda) */}
                <Button 
                    onClick={() => router.push('/')} 
                    startIcon={<ArrowBackIcon />} 
                    style={{
                        position: 'absolute', 
                        top: '1.2rem', 
                        left: '1rem',  
                        color: '#64748b', 
                        textTransform: 'none', 
                        fontWeight: 'bold',
                        fontSize: '0.9rem'
                    }}
                >
                    Volver
                </Button>

                {/* ICONO CENTRAL (Siempre visible) */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
                    <AccountCircleIcon style={{ fontSize: '110px', color: '#94a3b8' }} />
                </div>

                {/* 
                  ✨ RENDERIZADO CONDICIONAL ✨ 
                  Si la vista es 'login', dibuja el form de inicio de sesión.
                  Si no, dibuja el form de crear cuenta. 
                */}
                {vistaActual === 'login' ? (
                    
                    /* ================= FORMULARIO DE LOGIN ================= */
                    <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            <label style={{ fontWeight: '600', color: '#334155', fontSize: '0.9rem' }}>Correo electrónico</label>
                            <input 
                                type="email" name="correo" value={loginDatos.correo} onChange={handleLoginChange} 
                                 required
                                style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} 
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            <label style={{ fontWeight: '600', color: '#334155', fontSize: '0.9rem' }}>Contraseña</label>
                            <input 
                                type="password" name="contrasena" value={loginDatos.contrasena} onChange={handleLoginChange} 
                                required
                                style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} 
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                            <Button type="submit" variant="contained" style={{ backgroundColor: '#0f172a', color: 'white', width: '100%', padding: '0.8rem', borderRadius: '8px', textTransform: 'none', fontSize: '1rem', fontWeight: 'bold' }}>
                                Iniciar sesión
                            </Button>
                            {/* Botón mágico que cambia la vista a 'registro' */}
                            <Button variant="text" onClick={() => setVistaActual('registro')} style={{ color: '#64748b', textTransform: 'none', fontWeight: '600' }}>
                                Registrarse
                            </Button>
                        </div>
                    </form>

                ) : (

                    /* ================= FORMULARIO DE REGISTRO ================= */
                    <form onSubmit={handleRegistroSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            <label style={{ fontWeight: '600', color: '#334155', fontSize: '0.9rem' }}>Nombre</label>
                            <input 
                                type="text" name="nombre" value={registroDatos.nombre} onChange={handleRegistroChange} 
                                 required
                                style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} 
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            <label style={{ fontWeight: '600', color: '#334155', fontSize: '0.9rem' }}>Correo electrónico</label>
                            <input 
                                type="email" name="correo" value={registroDatos.correo} onChange={handleRegistroChange} 
                                 required
                                style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} 
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            <label style={{ fontWeight: '600', color: '#334155', fontSize: '0.9rem' }}>Contraseña</label>
                            <input 
                                type="password" name="contrasena" value={registroDatos.contrasena} onChange={handleRegistroChange} 
                                 required
                                style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} 
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                            <Button type="submit" variant="contained" style={{ backgroundColor: '#0f172a', color: 'white', width: '100%', padding: '0.8rem', borderRadius: '8px', textTransform: 'none', fontSize: '1rem', fontWeight: 'bold' }}>
                                Crear cuenta
                            </Button>
                            {/* Botón mágico que regresa la vista a 'login' */}
                            <Button variant="text" onClick={() => setVistaActual('login')} style={{ color: '#64748b', textTransform: 'none', fontWeight: '600' }}>
                                ¿Ya tienes cuenta? Inicia sesión
                            </Button>
                        </div>
                    </form>

                )}
            </div>
        </div>
    );
}