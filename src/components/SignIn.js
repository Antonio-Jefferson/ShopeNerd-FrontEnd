import axios from "axios";
import { useContext, useState } from "react";
import { StyledForm } from "../styles/commonStyles";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { setToken, setName } = useContext(AuthContext);
    const navigate = useNavigate();

    async function signIn(event) {
        event.preventDefault();
        setIsLoading(true);
        const body = { email, password };
        try {
            const response = await axios.post("http://localhost:5005/sign-in", body);
            console.log(response.data);
            setToken(response.data.token);
            setName(response.data.name);
            setIsLoading(false);
            navigate("/");
        } catch (err) {
            setIsLoading(false);
            return alert("Email e/ou senha incorreto(s).");
        }
    }

    return (
        <>
            <StyledForm onSubmit={signIn}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required disabled={isLoading} />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" required disabled={isLoading} />
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
                    /> : "Entrar"}
                </button>
            </StyledForm>
        </>
    )
}