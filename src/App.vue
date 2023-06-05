<template>
  <header class="c-header">
    <RouterLink to="/">
      <h1 class="c-heading" level="1">
        <font-awesome-icon icon="leaf" class="u-color-primary-900"></font-awesome-icon>
        Flora Index
      </h1>
    </RouterLink>
    <nav class="c-navigation">
      <RouterLink to="/">
        <font-awesome-icon icon="table"></font-awesome-icon>
        Coleção
      </RouterLink>
      <RouterLink to="/create">
        <font-awesome-icon icon="plus"></font-awesome-icon>
        Adicionar planta
      </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>
<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>