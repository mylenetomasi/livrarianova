import axios from "axios";
export default class AutoresApi {
  async buscarTodosOsAutores() {
    const response = await axios.get("https://livrariamylene.herokuapp.com/autors");
    return response.data;
  }

  async buscarAutores(id) {
    const response = await axios.get(`https://livrariamylene.herokuapp.com/autors/${id}`);
    return response.data;
  }

  async adicionarAutor(autor) {
    const response = await axios.post("https://livrariamylene.herokuapp.com/autors", autor);
    return response.data;
  }

  async excluirAutor(id) {
    const response = await axios.delete(`https://livrariamylene.herokuapp.com/autors/${id}`);
    return response.data;
  }

  async atualizarAutor(autor) {
    const response = await axios.put(
      `https://livrariamylene.herokuapp.com/autors/${autor.id}`,
      autor
    );
    return response.data;
  }
}