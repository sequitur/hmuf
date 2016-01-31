<template>
    <div class="ship row" transition="expand">
      <div class="factsheet four columns">
        <table class="u-full-width">
          <tbody>
            <tr>
              <th>Class</th>
              <td>
                {{ class }}
              </td>
            </tr>
            <tr>
              <th>Commissioned</th>
              <td>
                year {{ commissioned }}
              </td>
            </tr>
            <tr>
              <th>Fate</th>
              <td>
                {{ fate }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="description seven columns">
        <h2>{{ prefix }} {{ name }}</h2>
        {{{ desc }}}
      </div>
    </div>
</template>

<script>
  import Ship from "./ships.js";

  export default {
  	data () { return new Ship() },
  }
</script>
