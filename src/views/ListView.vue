<template>
  <div class="c-stack">
    <h2 class="c-heading" level="2">Coleção</h2>
    <sl-card>
      <table class="c-table">
        <thead>
          <tr>
            <th width="30"></th>
            <th>Espécie</th>
            <th>Código</th>
            <th>Origem</th>
            <th>Colheita da semente</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Quercus Coccifera</td>
            <td>14234234234</td>
            <td>38.727263, -9.135921</td>
            <td>11/12/2022</td>
            <td>
              <RouterLink to="/create">
                <sl-icon type="button" name="pencil"></sl-icon>
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </sl-card>
  </div>
</template>
<script setup lang="ts">

import '@shoelace-style/shoelace/dist/components/card/card.js'
import '@shoelace-style/shoelace/dist/components/icon/icon.js'

</script>