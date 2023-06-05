<template>
  <div class="c-stack">
    
    <h1 class="c-heading" level="1">Adicionar planta</h1>

    <sl-card>

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

    <sl-card v-if="plant.species">
      <h2>{{ plant.species.scientific_name }}</h2>
      <sl-button>Adicionar</sl-button>
    </sl-card>
  </div>
</template>
<script setup>

  import { ref, reactive } from 'vue'
  import '@shoelace-style/shoelace/dist/components/card/card.js'
  import '@shoelace-style/shoelace/dist/components/input/input.js'
  import '@shoelace-style/shoelace/dist/components/menu/menu.js'
  import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js'
  import '@shoelace-style/shoelace/dist/components/button/button.js'

  import { TOKENS } from '@utils/constants'
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
          url: `/trefle/species/search?token=${TOKENS.treffle}&q=${search.text}`,
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