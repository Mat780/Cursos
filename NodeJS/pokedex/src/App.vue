<template>
  <div id="app">
    <div class="column is-half is-offset-one-quarter">
      <h2 class="is-size-2">Pokedex</h2><hr>
      <input type="text" placeholder="Buscar Pokemon" v-model="search" class="input is-primary">
      <button class="button is-fullwidth is-success" id="btnSearch" @click="searchBtn()">Buscar</button>
      <div v-for="(poke, index) in filteredPokemons" :key="poke.url">
        <Pokemon :name="poke.name" :url="poke.url" :num="index+1" />
      </div>
    </div>
  </div>
</template>

<script> 
import axios from 'axios';
import Pokemon from './components/Pokemon.vue'

export default {
  name: 'App',

  data(){
    return{
      pokemons: [],
      filteredPokemons: [],
      search: ''
    }
  },

  components: {
    Pokemon
  },

  beforeCreate: function(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then( res => {
      this.pokemons = res.data.results;
      this.filteredPokemons = res.data.results;
    })
  },

  methods: {
    searchBtn: function() {
    
      this.search = this.search.toLowerCase();

      if(this.search == '' || this.search == ' '){
        this.filteredPokemons = this.pokemons;
      } else {
        this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name == this.search);
      }

    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#btnSearch{
  margin-top: 2%;
}
</style>
