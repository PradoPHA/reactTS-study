import {  useRef, useState } from "react"
import { Link } from "react-router-dom";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // useRef

    // const inputPasswordRef = useRef<HTMLInputElement>(null);

    // useEffect

    // useEffect(() => {
    //     console.log(email);
    // }, [email]);

    // useEffect(() => {
    //     console.log(password);
    // }, [password]);

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

                <p> Qtd caracteres no Email: {email.length /*poderia ser emailLength no uso de useMemo*/}</p>

                <InputLogin
                    label="E-mail"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    // onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label="Senha"
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                    type="password"
                />
                {/* <label>
                    <span>Senha</span>
                    <input ref={inputPasswordRef} type="password" value={password}
                        onChange={p => setPassword(p.target.value)}
                    />
                </label> */}

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>

                <Link to="/pagina-inicial">Dashboard</Link>

            </form>
        </div>
    )
}