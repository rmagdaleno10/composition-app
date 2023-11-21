
import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = 'pokemons';

export const pokemonRoute: RouteRecordRaw = {
    path: `/${ROUTE_NAME}`,
    redirect: `/${ROUTE_NAME}/by/:id`,
    component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
    children: [
        {
            path: `/${ROUTE_NAME}/by/:id`,
            props: { title: 'Pokémon por Id' },
            name: 'pokemon-id',
            component: () => import('@/pokemons/pages/PokemonById.vue')
        },
        {
            path: `/${ROUTE_NAME}/list`,
            props: { title: 'Listado de Pokémon' },
            name: 'pokemon-list',
            component: () => import('@/pokemons/pages/PokemonList.vue')
        },
        {
            path: `/${ROUTE_NAME}/search`,
            props: { title: 'Busqueda de Pokémon' },
            name: 'pokemon-search',
            component: () => import('@/pokemons/pages/PokemonSearch.vue')
        },
    ]
}