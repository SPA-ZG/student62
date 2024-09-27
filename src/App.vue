<script setup>
import { RouterLink, RouterView } from "vue-router";
import ClockComponent from "./components/ClockComponent.vue";
</script>

<template>
  <h1>Projekt 6 iz predmeta Napredni razvoj programske potpore za web</h1>
  <header>
    <nav>
      <RouterLink to="/">Početna</RouterLink>
      |
      <RouterLink to="/teams">NBA ekipe</RouterLink>
      |
      <RouterLink to="/ufc">UFC kategorije</RouterLink>
      |
      <RouterLink to="/darts">Pikado turnir</RouterLink>
      <ClockComponent />
    </nav>
  </header>
  <RouterView />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
