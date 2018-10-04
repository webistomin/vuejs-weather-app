<template>
  <div id="app" :style="getBackgroundColor">
    <header>
      <search-city></search-city>
    </header>
    <main>
      <forecast></forecast>
    </main>
  </div>
</template>

<script>
  import Forecast from './components/Forecast';
  import SearchCity from './components/SearchCity';

  export default {
    components: {
      Forecast,
      SearchCity,
    },
    computed: {
      getBackgroundColor() {
        const averageTemperature = this.$store.getters.getAverageTemperature;

        switch (true) {
          default:
            return 'background-color: cornflowerblue';
          case averageTemperature > 30:
            return 'background-color: #ff4500';
          case averageTemperature > 20 && averageTemperature < 30:
            return 'background-color: #ffd700';
          case averageTemperature > 10 && averageTemperature < 20:
            return 'background-color: #9acd32';
          case averageTemperature > 0 && averageTemperature < 10:
            return 'background-color: #836fff';
          case averageTemperature < 0:
            return 'background-color: #63b8ff';
        }
      },
    },
  };
</script>

<style lang="less">
  #app {
    transition: all 0.3s ease-in-out;
  }

  body {
    margin: 0;
    font-family: 'Quattrocento', serif;
    font-weight: 400;
    background-color: cornflowerblue;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  blockquote {
    margin: 0;
  }

  p {
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
  }

  *:focus {
    outline: thin dotted;
  }
</style>
