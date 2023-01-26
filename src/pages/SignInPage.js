import SignIn from "../components/SignIn";
import { StyledH2, StyledLink } from "../styles/commonStyles";

export default function SignInPage(){
    return(
        <>
            <StyledH2>Fazer Login</StyledH2>
            <SignIn/>
            <StyledLink to="/sign-up">Já possui cadastro? Entre agora!</StyledLink>
        </>
    )
}