import { useState } from "react";
import { StyledForm } from "../styles/commonStyles";
export default function SignIn() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    function signIn(event){
        event.preventDefault();
    }

    return (
        <>
            <StyledForm onSubmit={signIn}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" required />
                <button type="submit">Entrar</button>
            </StyledForm>
        </>
    )
}