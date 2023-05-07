import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const mudaTexto=(texto) =>{
  if(texto === 'CATEGORIAS'){
    return 'categorias'
  }else if(texto === 'FAVORITOS') {
    return 'favoritos'
  } else if(texto === 'MINHA ESTANTE'){
    return 'estante'
  }else{
    return
  }
}

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Link to={`/${mudaTexto(texto)}`}>
          <Opcao><p>{texto}</p></Opcao>
        </Link>
      ))}
    </Opcoes>
  )
}

export default OpcoesHeader