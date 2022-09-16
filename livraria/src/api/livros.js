import axios from "axios";
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const response = await axios.get("https://livrariamylene.herokuapp.com/livros");
    return response.data;
  }

  async buscarLivros(id) {
    const response = await axios.get(`https://livrariamylene.herokuapp.com/livros/${id}`);
    return response.data;
  }

  async adicionarLivro(livros) {
    const response = await axios.post("https://livrariamylene.herokuapp.com/livros", livros);
    return response.data;
  }

  async excluirLivro(id) {
    const response = await axios.delete(`https://livrariamylene.herokuapp.com/livros/${id}`);
    return response.data;
  }

  async atualizarLivro(livro) {
    const response = await axios.put(
      `https://livrariamylene.herokuapp.com/livros/${livro.id}`,
      livro
    );
    return response.data;
  }
}