import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useRouter } from "next/navigation";

function useAuth() {
    
    const router = useRouter();
    const [token, setToken] = useState("");

    useEffect(() => {
        const tkn = window.localStorage.getItem("token");
        setToken(tkn);
        if (!tkn) {
            toast.error("debes iniciar sesion otra vez 🥹")
            router.push("/login");
        }
    }, [navigate]); // en el segundo argumento del useEffect se le pasa un array de dependencias, si se deja vacio se ejecuta una sola vez, si se le pasa una variable se ejecuta cada vez que esa variable cambia
    
    return token;
}

export default useAuth;