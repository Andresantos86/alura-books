
import { useState } from 'react'
import styled from 'styled-components'
import Input from '../Input/Input'
import { useEffect } from 'react'
import { getLivros } from '../servicos/livros'
import { postFavorito } from '../servicos/favoritos'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa(){
  const [livrosPesquisados, setLivrosPesquisados] = useState([])
  const [livros, setLivros] = useState([])

  async function fetch(){
    const livrosApi = await getLivros()
    console.log("resp", livrosApi)
    setLivros(livrosApi)
  }

  async function inserirFavorito(id){
    await postFavorito(id)
    alert(`Livro de id:${id} foi inserido aos favoritos`)
  }

  useEffect(()=>{
    fetch()
  },[])

  return(
    <PesquisaContainer>
      <Titulo>Vamos buscar algo para ler?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input 
        placeholder="Digite aqui o titulo" 
        onBlur={evento => {
          const textoDigitado = evento.target.value
          const resultadoPesquisa = livros.filter(livro=> livro.nome.includes(textoDigitado))
          setLivrosPesquisados(resultadoPesquisa)
        }}/>      
        {livrosPesquisados.map(livro  =>(
          <Resultado onClick={() => inserirFavorito(livro.id)}>            
            {/* <img src={livro.src} alt="nome" /> */}
            <p>{livro.nome}</p>
          </Resultado>
        ))}  
    </PesquisaContainer>
  )
}
export default Pesquisa