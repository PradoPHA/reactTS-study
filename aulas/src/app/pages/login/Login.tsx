import { useEffect, useMemo, useState } from "react"

export const Login = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // if (window.confirm('Você gosta de musculação?')){
    //     console.log('É dos meus!');
    // } else{
    //     console.log('Não sabe o que tá perdendo...');
    // } // NÃO INTERESSANTE, USAR useEffect!!!

    // Acontece apenas uma vez! Útil para chamadas de API para mostrar, calcular etc.
    // useEffect(() => {
    //     const verify = window.confirm('Você gosta de musculação?');
        
    //     if (verify){
    //         console.log('É dos meus!');
    //     } else{
    //         console.log('Não sabe o que tá perdendo...');
    //     }
    // }, []);

    // useEffect

    // useEffect(() => {
    //     console.log(email);
    // }, [email]);
    
    // useEffect(() => {
    //     console.log(password);
    // }, [password]);

    //useMemo

    // const emailLength = useMemo(() => {
    //     console.log('EXECUTOU!');
    //     return email.length * 1000;
    // }, [email.length]);

    // useCallback

    // const handleEntrar = useCallback(() => {
    //     console.log(email);
    //     console.log(password);
    // }, []);

    const handleEntrar = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <div>
            <form>

                <p> Caracteres * 1000 no E-mail: {email.length /*poderia ser emailLength no uso de useMemo*/}</p>

                <label>
                    <span>E-mail</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password" value={password} onChange={p => setPassword(p.target.value)}/>
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
                
            </form>
        </div>
    )
}