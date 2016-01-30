<template>
  <div class="main">
      <h1>Her Majesty's Unending Fleet</h1>
    <div class="ship">
      <div class="factsheet">
        <p>Class: {{ class }}</p>
        <p>Commissioned: {{ commissioned }}</p>
        <p>Fate: {{ fate }}</p>
      </div>
      <div class="description">
        <h2>{{ prefix }} {{ name }}</h2>
        {{{ desc }}}
      </div>
    </div>
    <div class="controls">
      <button type="button" v-on:click="newShip">View Another Ship</button>
    </div>
  </div>
</template>

<script>
  import ships from "./ships.js";

  export default {
    replace: false,
  	data () { return ships.currentShip },
    methods: {
      newShip () {
        ships.newShip();
      }
    }
  }
</script>
