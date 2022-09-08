<template>
    <div class="main">
      <RouterLink class="item" to="/editoras">Editoras</RouterLink>
      <RouterLink class="item" to="/categorias">Categorias</RouterLink>    
      <RouterLink class="item" to="/autores">Autores</RouterLink>    
      <RouterLink class="item" to="/livros">Livros</RouterLink>
    </div>
</template>
<style scoped>
.main{
    background: #ffffff;
    border-radius: 10px;
    min-width: 20px;
    /* height: 350px ; */
    border-radius: 20px;
    margin-left: 35%;
    margin-right:35% ;
    margin-top: 7%;
    border: 1px solid rgb(0, 0, 0);
    font-size: 2rem ;
    font-family: 'Times New Roman', Times, serif;
    padding: 20px; 
    
}          

.item {
    background-color: rgb(0, 0, 0);
    margin: 20px;
    border-radius: 20px;
    text-align: center;
    display: flex;
    color: #ffffff;
    padding-left: 175px;
    padding-top: 5px;
    height: 70px;
}

</style>