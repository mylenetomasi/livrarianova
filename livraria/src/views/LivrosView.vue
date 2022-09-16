<script>
  import LivrosApi from "@/api/livros.js";
  const livrosApi = new LivrosApi();
  export default {
    data() {
      return {
        livro: {},
        livros: [],
      };
    },
    async created() {
      this.livros = await livrosApi.buscarTodosOsLivros();
    },
    methods: {
      async salvar() {
        if (this.livro.id) {
          await livrosApi.atualizarLivro(this.livro);
        } else {
          await livrosApi.adicionarLivro(this.livro);
        }
        this.livros = await livrosApi.buscarTodosOsLivros();
        this.livro = {};
      },
      async excluir(livro) {
        await livrosApi.excluirLivro(livro.id);
        this.livros = await livrosApi.buscarTodosOsLivros();
      },
      editar(livro) {
        Object.assign(this.livro, livro);
      },
    },
  };
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Livros</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Nome" v-model="livro.nome" />
      <input
        type="number"
        placeholder="Quantidade"
        v-model="livro.quantidade"
      />
      <input type="number" placeholder="Preço" v-model="livro.preco" />

      <button @click="salvar(Livro)">Salvar</button>
    </div>
    <div class="list-livros">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Categoria</th>
            <th>Editora</th>
            <th>Autor</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.nome }}</td>
            <td>{{ livro.categoria }}</td>
            <td>{{ livro.editora }}</td>
            <td>{{ livro.autor }}</td>
            <td>{{ livro.quantidade }}</td>
            <td>{{ livro.preco }}</td>
            <td>
              <button class="excluir" @click="excluir(livro)">Excluir</button>
              <button class="excluir" @click="editar(livro)">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
  .title {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
  .form-input {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  .form-input input {
    width: 30%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 0 10px;
  }

  .form-input button {
    margin-left: 1%;
    width: 20%;
    height: 40px;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 10px;
    background-color: rgb(0, 0, 0);
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  .list-editoras {
    display: flex;
    justify-content: center;
  }

  table {
    width: 80%;
    margin: 2% auto;
    border-collapse: collapse;
  }

  table tr th {
    border: 1px solid #ccc;
    padding: 10px;
    font-weight: bold;
  }

  table tr td {
    border: 1px solid #ccc;
    padding: 10px;
  }

  table tr:nth-child(odd) {
    background-color: #ccc;
  }
  .excluir {
    background-color: black;
    color: white;
    border: white;
    border-radius: 20px;
    width: 93%;
    height: 30px;
  }
</style>
