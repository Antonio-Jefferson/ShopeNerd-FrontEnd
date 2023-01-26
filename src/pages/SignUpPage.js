import { Link } from "react-router-dom";
import SignUp from "../components/SignUp";
import { ContainerForm, LayoutPage, ConteinerHeader, Logo, StyledH2, StyledLink } from "../styles/commonStyles";

export default function SignUpPage() {
    return (
        <LayoutPage>
            <ConteinerHeader>
                <Logo>
                    <h1><Link to="/">ShopeNerd</Link></h1>
                </Logo>
                <p>Faça <Link to="/sign-in">LOGIN</Link>  ou <br /> crie seu <Link to="/sign-up">CADASTRO</Link></p>
            </ConteinerHeader>
            <ContainerForm>
                <StyledH2>Criar Conta</StyledH2>
                <SignUp />
                <StyledLink to="/sign-in">Já possui cadastro? Entre agora!</StyledLink>
            </ContainerForm>
        </LayoutPage>
    )
}