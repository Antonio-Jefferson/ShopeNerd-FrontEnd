import axios from "axios";
import { useState } from "react";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    async function signUp(event) {
        event.preventDefault();
        const body = { name, email, password, confirmPassword };
        try {
            await axios.post("http://localhost:5005/sign-up", body);
        } catch (err) {
            return alert("Error ao mandar a requisição a API.");
        }
    }

    return (
        <div>
            <h2>Criar Conta</h2>
            <form onSubmit={signUp}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome" required />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" required />
                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="Confirmar senha"
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
            <a>Já possui cadastro? Entre agora!</a>
        </div>
    )
}