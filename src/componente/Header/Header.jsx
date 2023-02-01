import IconesReader from "../iconesReader/IconesReader";
import Logo from "../Logo/Logo";
import OpcoesHeader from "../opcoesHeader/OpcoesHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;

`
function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesReader />
    </HeaderContainer>
  )
}
export default Header