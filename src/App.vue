<template>
  <div id="app">
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
  };
</script>

<style lang="less">
  body {
    margin: 0;
    font-family: 'Quattrocento', serif;
    font-weight: 400;
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
