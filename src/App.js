
import Header from './componente/Header/Header';
import styled from "styled-components";
import Pesquisa from './componente/pesquisa/Pesquisa';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
li {
  list-style: none;
}
`
function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;
