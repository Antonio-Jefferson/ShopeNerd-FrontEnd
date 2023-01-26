import SignUp from "../components/SignUp";
import { StyledH2, StyledLink } from "../styles/commonStyles";

export default function SignUpPage() {
    return (
        <>
            <StyledH2>Criar Conta</StyledH2>
            <SignUp />
            <StyledLink to="/sign-in">Já possui cadastro? Entre agora!</StyledLink>
        </>
    )
}