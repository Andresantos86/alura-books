import axios from "axios";

const livrosApi = axios.create({baseURL:"http://localhost:8000/livro"})

async function getLivros(){
  const response = await livrosApi.get('/')
  return response.data
}

export {
  getLivros
}