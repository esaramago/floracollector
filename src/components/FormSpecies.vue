<template>
  <div class="c-stack">

    <sl-card class="c-stack">
      <h3 class="c-heading" level="3">Selecione a espécie</h3>

      <div class="c-autocomplete">
        
        <sl-input
          label="Espécie"
          placeholder="Pesquise..."
          @input="onSearchSpecies"
          v-model="search.text"
          help-text="Pesquise pela espécie da planta a adicionar"
        ></sl-input>
        
        <sl-menu v-show="search.result && search.result.length">
          <sl-menu-item
          v-for="species in search.result"
          :value="species.id"
          @click="onSelectSpecies(species.id)"
          >{{species.scientific_name}}</sl-menu-item>
        </sl-menu>
      </div>

    </sl-card>
    
    <template v-if="plant.species">

      <hr>

      <sl-card direction="landscape">
        <img
          slot="image"
          :src="plant.species.image_url"
          :alt="plant.species.scientific_name"
        />
          <h3 class="c-heading" level="3">{{ plant.species.scientific_name }}</h3>
          Nome comum: <strong>{{ plant.species.common_name }}</strong><br>
          Família: <strong>{{ plant.species.family }}</strong>
      </sl-card>

      <sl-card>
        <h3 class="c-heading" level="3">Origem</h3>

        <bs-row>
          <bs-col col="3">acadca</bs-col>
          <bs-col col="6">acadca</bs-col>
        </bs-row>
      </sl-card>
    </template>

  </div>
</template>
<script setup>

import { ref, reactive } from 'vue'

import '@shoelace-style/shoelace/dist/components/card/card.js'
import '@shoelace-style/shoelace/dist/components/input/input.js'
import '@shoelace-style/shoelace/dist/components/menu/menu.js'
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js'
import '@shoelace-style/shoelace/dist/components/button/button.js'

import apiCall from '@utils/apiCall'

const search = reactive({
  timeout: null,
  text: '',
  result: null,
})

function onSearchSpecies(event) {

  if (search.text) {
    clearTimeout(search.timeout)
    search.timeout = setTimeout(() => {
      apiCall({
        url: `/trefle/species/search`,
        data: {
          q: search.text
        },
        success: response => {
          const acceptedSpecies = response.data.data.filter(data => data.status === 'accepted') // remove unaccepted status species
          search.result = acceptedSpecies
        },
        error: error => {
          
        },
      })
      
    }, 500)
  } else {
    search.result = null
  }
}

const plant = reactive({
  species: null
})
function onSelectSpecies(speciesId) {

  const species = search.result.find(spec => spec.id === speciesId)
  plant.species = species

  search.text = ''
  search.result = null
}
</script>

<style scoped>

</style>