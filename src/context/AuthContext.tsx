'use client'
import React, { createContext, useContext, useState } from 'react';

// 1. Quitamos isLogged de la definición
type Usuario = {
    id: string;
    nombre: string;
    rol: string;
};

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    
    // 2. Si id está vacío (''), significa que no hay usuario logueado
    const [usuario, setUsuario] = useState<Usuario>({
        id: 'usuario', 
        nombre: 'Administrador Pruebas',
        rol: 'admin'
    });

    return (
        <AuthContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);