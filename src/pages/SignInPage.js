import { Link } from "react-router-dom";
import SignIn from "../components/SignIn";
import { ContainerForm, LayoutPage, Logo, ConteinerHeader, StyledH2, StyledLink } from "../styles/commonStyles";

export default function SignInPage() {
    return (
        <LayoutPage>
            <ConteinerHeader>
                <Logo>
                    <h1><Link to="/">ShopeNerd</Link></h1>
                </Logo>
                <p>Faça <Link to="/sign-in">LOGIN</Link>  ou <br /> crie seu <Link to="/sign-up">CADASTRO</Link></p>
            </ConteinerHeader>
            <ContainerForm>
                <StyledH2>Fazer Login</StyledH2>
                <SignIn />
                <StyledLink to="/sign-up">Já possui cadastro? Entre agora!</StyledLink>
            </ContainerForm>
        </LayoutPage>
    )
}

