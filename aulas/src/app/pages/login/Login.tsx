import { useState } from "react"

export const Login = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleEntrar = () => {
        console.log('Seu e-mail é: ' + email);
        console.log('Sua senha é: ' + password);
    }

    return (
        <div>
            <form>

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