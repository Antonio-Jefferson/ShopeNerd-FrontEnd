import axios from "axios";
import { useContext, useState } from "react";
import { StyledForm } from "../styles/commonStyles";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    async function signUp(event) {
        event.preventDefault();
        setIsLoading(true);
        const body = { name, email, password, confirmPassword };
        try {
            await axios.post("https://shope-nerd-api-v1.onrender.com/sign-up", body);
            setIsLoading(false);
            navigate("/sign-in");
        } catch (err) {
            alert("Um ou mais campos estão inválidos, tente novamente.");
            setIsLoading(false);
        }
    }

    return (
        <div>

            <StyledForm onSubmit={signUp}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome" required disabled={isLoading}/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required disabled={isLoading}/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" required disabled={isLoading}/>
                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="Confirmar senha"
                    required
                    disabled={isLoading}
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    /> : "Cadastrar"}
                </button>
            </StyledForm>

        </div>
    )
}