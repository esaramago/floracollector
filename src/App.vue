<template>
  <header class="c-header">
    <RouterLink to="/">
      <h1 class="c-heading" level="1">
        <sl-icon name="leaf" class="u-color-primary-900"></sl-icon>
        Flora Index
      </h1>
    </RouterLink>
    <nav class="c-navigation">
      <RouterLink to="/">
        <sl-icon name="table"></sl-icon>
        Coleção
      </RouterLink>
      <RouterLink to="/create">
        <sl-icon name="plus"></sl-icon>
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