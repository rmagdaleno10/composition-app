
<script setup lang="ts">

import pokemonApi from '../api/pokemonApi';
pokemonApi.get('/pokemon?limit=10')
    .then( response => console.log(response.data.results) );

</script>

<template>
    <div>
        <h1>Pokemon List</h1>
        <p>this is a pokemon list!!</p>
    </div>
</template>

