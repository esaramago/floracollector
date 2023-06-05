<template>
  <sl-card>
    <h2>{{ plant.species.scientific_name }}</h2>
    <sl-button>Adicionar</sl-button>
  </sl-card>
</template>
<script setup>
  const props = defineProps({
    plant: {
      type: Object,
    }
  })
</script>