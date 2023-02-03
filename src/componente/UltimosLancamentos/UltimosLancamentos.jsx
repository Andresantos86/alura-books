import { livros } from '../../componente/pesquisa/DadosPesquisa'
import styled from 'styled-components'
import Card from '../Card/Card'
import  imgLivro  from '../../img/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo>ULTIMOS LANÇAMENTOS</Titulo>
      <NovosLivrosContainer>
        {livros.map(livro => (
          <img src={livro.src} alt="imagem livro" />
        ))}
      </NovosLivrosContainer>
      <Card 
        titulo='Nossas indicações'
        subtitulo='Angular 11' 
        descricao='Construindo uma aplicação'
        img={imgLivro}   />       
    </UltimosLancamentosContainer>

  )

}
export default UltimosLancamentos