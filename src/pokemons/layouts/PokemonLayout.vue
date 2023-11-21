<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import { pokemonRoute } from '@/pokemons/router';
import type { RouterLink } from '@/router/list-routes';


const routeLinks: RouterLink[] = pokemonRoute.children?.map(({name, path, props}) => {
    let p = (props as { title: string});
    return {
        name: name?.toString() ?? '',
        path: path,
        title: p.title
    }
}) || [];
</script>


<template>
    <div>
        <NavBar title="My App List" :links="routeLinks" is-secondary />
        <RouterView />
    </div>
</template>

