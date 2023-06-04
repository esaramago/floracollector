<template>
  <header class="c-header">
    <nav class="c-navigation">
      <RouterLink to="/">Coleção</RouterLink>
      <RouterLink to="/create">Adicionar planta</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>
<script>
  import { RouterLink, RouterView } from 'vue-router'
</script>