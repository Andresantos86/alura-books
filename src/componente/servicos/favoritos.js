import axios from "axios";

const favoritosApi = axios.create({baseURL:"http://localhost:8000/favoritos"})

async function getFavoritos(){
  const response = await favoritosApi.get('/')
  return response.data
}

async function postFavorito(id){
  const response = await favoritosApi.post(`/${id}`)
  return response.data
}
async function deleteFavorito(id){
  const response = await favoritosApi.delete(`/${id}`)
  return response.data
}
export {
  getFavoritos,
  postFavorito,
  deleteFavorito
}