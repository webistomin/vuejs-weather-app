<template>
    <section class="search">
      <div class="search__inner">
        <input type="text" class="search__input" autofocus>
        <button class="search__btn" type="button">Add city</button>
      </div>
      <ul class="search__list">
        <li class="search__item">
          <span class="search__name">Moscow</span>
          <button class="search__button"></button>
        </li>
      </ul>
    </section>
</template>

<script>
  export default {

  };
</script>

<style lang="less">
  .search {
    padding: 20px;
    padding-bottom: 0;
    background-color: cornflowerblue;

    &__inner {
      display: flex;
      justify-content: space-between;
    }

    &__input {
      padding-left: 10px;
      font-family: 'Oswald', sans-serif;
      font-weight: 400;
      font-size: 16px;
    }

    &__btn {
      width: 100px;
      padding: 10px;
      color: #000000;
      font-family: 'Oswald', sans-serif;
      font-weight: 400;
      font-size: 16px;
      text-transform: uppercase;
      background-color: #ffffff;
      cursor: pointer;
    }

    &__button {
      width: 20px;
      height: 20px;
      position: relative;
      cursor: pointer;

      &::before,
      &::after {
        width: inherit;
        height: 2px;
        content: "";
        position: absolute;
        left: 0;
        background-color: red;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }

    &__name {
      padding: 0 30px;
      cursor: pointer;

      &:hover {
        color: blueviolet;
      }
    }

    &__list {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      color: #ffffff;
      text-align: center;
      font-family: 'Oswald', sans-serif;
      font-weight: 400;
      font-size: 16px;
      text-transform: uppercase;

      &:last-child {
        padding-bottom: 0;
      }
    }


  }
</style>
