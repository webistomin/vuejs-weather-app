<template>
  <h1 class="error" v-if="getErrorMessage">{{getErrorMessage}}</h1>
  <section class="forecast" v-else-if="getForecasts.length !== 0">
    <div class="forecast__current">
      <p class="forecast__location">
        <span class="forecast__city">{{getForecasts.city_name}},</span>
        <span class="forecast__country">{{getForecasts.country_code}}</span>
        <button class="forecast__favorite heart click-heart"
                @click="saveFavorite(getForecasts.city_name, getForecasts.country_code)"
                :class="{'animated-heart': getAnimationState}"
                aria-label="Add to favorite">
          Add to favorite
        </button>
      </p>
    </div>
    <ul class="forecast__list">
      <li class="forecast__item"
          v-for="(forecast, index) of getForecasts.data"
          :key="index">
        <span class="forecast__day">{{forecast.datetime | getDate}}</span>
        <div class="weather" v-html="getWeatherIcon(forecast.weather.code)"></div>
        <p class="forecast__group forecast__group--mb">
          <span class="forecast__number">{{forecast.weather.description}}</span>
        </p>
        <p class="forecast__group">
          <span class="forecast__number">Avg.temp: {{Math.ceil(forecast.temp)}}</span>
          <span class="forecast__scale">&#176;C</span>
        </p>
        <p class="forecast__group">
          <span class="forecast__number">Pressure: {{Math.ceil(forecast.pres)}}</span>
          <span class="forecast__scale">mb</span>
        </p>
        <p class="forecast__group">
          <span class="forecast__number">Wind speed: {{Math.ceil(forecast.wind_spd)}}</span>
          <span class="forecast__scale">m/s</span>
        </p>
        <p class="forecast__group">
          <span class="forecast__number">Wind direction: {{Math.ceil(forecast.wind_dir) | toTextualDescription}}</span>
        </p>
        <p class="forecast__group">
          <span class="forecast__number">Humidity: {{Math.ceil(forecast.rh)}}</span>
          <span class="forecast__scale">%</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'Forecast',
    computed: {
      getForecasts() {
        return this.$store.getters.getForecasts;
      },
      getErrorMessage() {
        return this.$store.getters.getErrorMessage;
      },
      getAnimationState() {
        return this.$store.getters.getAnimationState;
      },
    },
    methods: {
      getWeatherIcon(code) {
        const rainWithLightningCodes = [200, 201, 202, 230, 231, 232, 233];
        const rainCodes = [300, 301, 302, 500, 501, 502, 511, 520, 521, 522, 900];
        const snowCodes = [600, 601, 602, 610, 621, 611, 612, 623];
        const fogCodes = [700, 711, 721, 731, 741, 751];
        const clearSkyCodes = [800];
        const cloudsWithSunCodes = [801, 802, 803];
        const cloudsCodes = [804];

        switch (true) {
          default:
            return `
              <div class="icon icon--cloud anim--expand">Clouds</div>
            `;
          case rainWithLightningCodes.indexOf(code) !== -1:
            return `
            <div class="icon icon--cloud icon--cloud-dark anim--flash">Storm cloud</div>
            <div class="icon icon--rain icon--rain-1 anim--fall-1">Rain</div>
            <div class="icon icon--rain icon--rain-2 anim--fall-2">Rain</div>
            <div class="icon icon--rain icon--rain-3 anim--fall-3">Rain</div>
            `;
          case rainCodes.indexOf(code) !== -1:
            return `
            <div class="icon icon--cloud icon--cloud-dark">Rain cloud</div>
            <div class="icon icon--rain icon--rain-1 anim--fall-1">Rain</div>
            <div class="icon icon--rain icon--rain-2 anim--fall-2">Rain</div>
            <div class="icon icon--rain icon--rain-3 anim--fall-3">Rain</div>
            `;
          case snowCodes.indexOf(code) !== -1:
            return `
             <div class="icon icon--cloud">Clouds</div>
             <span class="icon icon--snow icon--snow-1 anim--float-down-1">Snow</span>
             <span class="icon icon--snow icon--snow-2 anim--float-down-2">Snow</span>
             <span class="icon icon--snow icon--snow-3 anim--float-down-3">Snow</span>
            `;
          case fogCodes.indexOf(code) !== -1:
            return `
              <span class="icon icon--fog icon--fog-1 anim--float-1">Fog</span>
              <span class="icon icon--fog icon--fog-2 anim--float-2">Fog</span>
              <span class="icon icon--fog icon--fog-3 anim--float-1">Fog</span>
              <span class="icon icon--fog icon--fog-4 anim--float-2">Fog</span>
            `;
          case clearSkyCodes.indexOf(code) !== -1:
            return `
            <span class="icon icon--sun">Sun</span>
            <span class="icon icon--sun-flare anim--pulse">Sun flare</span>
            `;
          case cloudsWithSunCodes.indexOf(code) !== -1:
            return `
            <span class="icon icon--sun icon--sun-small">Sun</span>
            <span class="icon icon--sun-flare icon--sun-flare-small anim--pulse">Sun flare</span>
            <div class="icon icon--cloud icon--cloud-sun anim--bobble">Cloudy with sun</div>
            `;
          case cloudsCodes.indexOf(code) !== -1:
            return `
              <div class="icon icon--cloud anim--expand">Clouds</div>
            `;
        }
      },
      saveFavorite(city, code) {
        const favoriteList = this.$store.getters.getFavoriteCities;
        // eslint-disable-next-line max-len
        const index = favoriteList.findIndex(arr => arr.city.toLowerCase() === city.toLowerCase() && arr.code === code);
        if (index !== -1) {
          this.$store.commit('updateAnimationState', false);
          this.$store.commit('deleteFromFavoriteList', index);
        } else {
          this.$store.commit('updateAnimationState', true);
          this.$store.commit('addToFavoriteList', {
            city: this.$store.getters.getSearchQuery,
            code: this.$store.getters.getSelectedCountry,
          });
        }
      },
    },
    mounted() {
      this.$store.commit('updateAnimationState', false);
      const city = this.$store.getters.getForecasts.city_name;
      const code = this.$store.getters.getForecasts.country_code;
      const favoriteList = this.$store.getters.getFavoriteCities;
      if (favoriteList.length !== 0 && city && code) {
        for (let i = 0; i < favoriteList.length; i += 1) {
          // eslint-disable-next-line max-len
          if (favoriteList[i].city.toLowerCase() === city.toLowerCase() && favoriteList[i].code === code) {
            this.$store.commit('updateAnimationState', true);
          }
        }
      }
    },
    filters: {
      getDate(datetime) {
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        return new Date(datetime).toLocaleDateString('en-US', options);
      },
      toTextualDescription(degrees) {
        if (degrees > 337.5) return 'Northerly';
        if (degrees > 292.5) return 'North Westerly';
        if (degrees > 247.5) return 'Westerly';
        if (degrees > 202.5) return 'South Westerly';
        if (degrees > 157.5) return 'Southerly';
        if (degrees > 122.5) return 'South Easterly';
        if (degrees > 67.5) return 'Easterly';
        if (degrees > 22.5) {
          return 'North Easterly';
        }
        return 'Northerly';
      },
    },
  };
</script>

<style lang="less">
  .error {
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
  }

  .forecast {

    &__current {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #ffffff;
      padding: 20px;
    }

    &__location {
      display: flex;
      align-items: center;
      font-family: 'Oswald', sans-serif;
      font-weight: 400;
      font-size: 26px;
      text-transform: uppercase;
      text-align: center;
    }

    &__day {
      font-family: 'Oswald', sans-serif;
      font-weight: 400;
      font-size: 20px;
      text-transform: uppercase;
      text-align: center;
    }

    &__group {
      font-family: 'Quattrocento', serif;
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 10px;
      text-align: center;

      &--mb {
        margin-bottom: 40px;
      }
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
    }

    &__item {
      width: 100%;
      box-sizing: border-box;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;

      &:nth-child(7n+1) {
        background: rgba(0, 0, 0, 0.0625);
      }

      &:nth-child(7n+2) {
        background: rgba(0, 0, 0, 0.125);
      }

      &:nth-child(7n+3) {
        background: rgba(0, 0, 0, 0.1875);
      }

      &:nth-child(7n+4) {
        background: rgba(0, 0, 0, 0.25);
      }

      &:nth-child(7n+5) {
        background: rgba(0, 0, 0, 0.3125);
      }

      &:nth-child(7n+6) {
        background: rgba(0, 0, 0, 0.375);
      }

      &:nth-child(7n+7) {
        background: rgba(0, 0, 0, 0.4375);
      }

      &:nth-child(7n+8) {
        background: rgba(0, 0, 0, 0.5);
      }

      &:nth-child(7n+9) {
        background: rgba(0, 0, 0, 0.5625);
      }

      &:nth-child(7n+10) {
        background: rgba(0, 0, 0, 0.625);
      }

      &:nth-child(7n+11) {
        background: rgba(0, 0, 0, 0.6875);
      }

      &:nth-child(7n+12) {
        background: rgba(0, 0, 0, 0.75);
      }

      &:nth-child(7n+13) {
        background: rgba(0, 0, 0, 0.8125);
      }

      &:nth-child(7n+14) {
        background: rgba(0, 0, 0, 0.875);
      }

      &:nth-child(7n+15) {
        background: rgba(0, 0, 0, 0.9375);
      }

      &:nth-child(7n+16) {
        background: rgba(0, 0, 0, 0.95);
      }
    }

    @media (min-width: 480px) {
      &__item {
        width: 50%;
      }
    }

    @media (min-width: 660px) {
      &__item {
        width: 33.33%;

        &:last-child {
          width: 100%;
        }
      }
    }

    @media (min-width: 992px) {
      &__item {
        width: 20%;
      }
    }
  }

  .heart {
    margin: 0 auto;
    background: url('https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png');
    width: 50px;
    height: 50px;
    background-size: 2900%;
    background-repeat: no-repeat;
    font-size: 0;
    cursor: pointer;
  }

  .heart:hover {
    background-position: right;
  }

  .animated-heart {
    animation-name: moveHeart;
    animation-duration: 0.8s;
    animation-iteration-count: 1;
    animation-timing-function: steps(28);
    animation-fill-mode: forwards;
  }

  @keyframes moveHeart {
    0% {
      background-position: left;
    }
    50% {
      background-position: right;
    }
    100% {
      background-position: right;
    }
  }

  .weather {
    position: relative;
    flex: 1;
    padding: 40px;
    margin: 2px;
    border-radius: 3px;
  }

  .icon {
    position: absolute;
    display: block;
    font-size: 0;
  }

  .icon--sun {
    top: 30px;
    left: 50%;
    width: 46px;
    height: 46px;
    background: radial-gradient(ellipse at center, white 0%, #fdc27a 100%);
    border-radius: 50%;
    z-index: 2;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .icon--sun-flare {
    top: 29px;
    left: 50%;
    width: 43px;
    height: 43px;
    border: 3px solid #fffcf9;
    border-radius: 50%;
    z-index: 1;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .icon--sun-flare-small {
    top: 28px;
    left: 62%;
    width: 27px;
    height: 27px;
  }

  .icon--sun-small {
    left: 62%;
    width: 29px;
    height: 29px;
    background: radial-gradient(ellipse at center, white 0%, #fdc27a 100%);
  }

  .icon--cloud {
    top: 30px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background: radial-gradient(ellipse at center, white 0%, #e5e5e5 100%);
    border-radius: 50% 50% 0 0;
    z-index: 2;
  }

  .icon--cloud:before, .icon--cloud:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 20px;
    height: 20px;
    background: inherit;
    border-top: 1px solid #839bc7;
  }

  .icon--cloud:before {
    right: 100%;
    width: 30px;
    height: 30px;
    margin-right: -15px;
    border-radius: 50%;
  }

  .icon--cloud:after {
    left: 100%;
    width: 23px;
    height: 23px;
    margin-left: -10px;
    border-radius: 50%;
  }

  .icon--cloud-dark {
    background: radial-gradient(ellipse at center, #606060 0%, #777777 100%);
  }

  .icon--cloud-dark:before, .icon--cloud-dark:after {
    border-color: #444444;
  }

  .icon--cloud-sun {
    border-top: 1px solid #839bc7;
  }

  .icon--rain {
    position: absolute;
    top: 63px;
    width: 2px;
    height: 7px;
    background-color: rgba(105, 186, 210, 0.8);
  }

  .icon--rain-1 {
    left: 50%;
  }

  .icon--rain-2 {
    left: 40%;
  }

  .icon--rain-3 {
    left: 60%;
  }

  .icon--snow-1 {
    top: 65px;
    left: 50%;
    width: 5px;
    height: 5px;
    background: #ffffff;
    border-radius: 50%;
    z-index: 1;
  }

  .icon--snow-2 {
    top: 65px;
    left: 45%;
    width: 3px;
    height: 3px;
    background: #ffffff;
    border-radius: 50%;
    z-index: 1;
  }

  .icon--snow-3 {
    top: 65px;
    left: 60%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background: #ffffff;
    border-radius: 50%;
    z-index: 1;
  }

  .icon--fog {
    width: 50px;
    height: 3px;
    background-color: #ffffff;
    border-radius: 50px;
  }

  .icon--fog-1 {
    top: 35px;
    left: 52%;
    width: 35px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .icon--fog-2 {
    top: 48px;
    left: 48%;
    height: 4px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .icon--fog-3 {
    top: 61px;
    left: 52%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .icon--fog-4 {
    top: 73px;
    left: 48%;
    width: 40px;
    height: 4px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .anim--expand:before, .anim--expand:after {
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
  }

  .anim--expand:before {
    -webkit-animation: expand--1 2s linear infinite;
    animation: expand--1 2s linear infinite;
  }

  .anim--expand:after {
    -webkit-animation: expand--2 2s linear infinite;
    animation: expand--2 2s linear infinite;
  }

  .anim--pulse {
    -webkit-animation: pulse 1s infinite;
    animation: pulse 1s infinite;
  }

  .anim--fall-1 {
    -webkit-animation: fall--1 500ms linear infinite;
    animation: fall--1 500ms linear infinite;
  }

  .anim--fall-2 {
    -webkit-animation: fall--2 300ms linear infinite;
    animation: fall--2 300ms linear infinite;
  }

  .anim--fall-3 {
    -webkit-animation: fall--3 400ms linear infinite;
    animation: fall--3 400ms linear infinite;
  }

  .anim--float-down-1 {
    -webkit-animation: float-down--1 1s linear infinite;
    animation: float-down--1 1s linear infinite;
  }

  .anim--float-down-2 {
    -webkit-animation: float-down--2 1300ms linear infinite;
    animation: float-down--2 1300ms linear infinite;
  }

  .anim--float-down-3 {
    -webkit-animation: float-down--3 900ms linear infinite;
    animation: float-down--3 900ms linear infinite;
  }

  .anim--flash {
    -webkit-animation: flash 3000ms linear infinite;
    animation: flash 3000ms linear infinite;
  }

  .anim--float-1 {
    -webkit-animation: fade--1 3000ms infinite;
    animation: fade--1 3000ms infinite;
  }

  .anim--float-2 {
    -webkit-animation: fade--2 3000ms infinite;
    animation: fade--2 3000ms infinite;
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: translateX(-50%) scale(1);
      transform: translateX(-50%) scale(1);
      opacity: 0.7;
    }
    100% {
      -webkit-transform: translateX(-50%) scale(1.3);
      transform: translateX(-50%) scale(1.3);
      opacity: 0;
    }
  }

  @keyframes pulse {
    0% {
      -webkit-transform: translateX(-50%) scale(1);
      transform: translateX(-50%) scale(1);
      opacity: 0.7;
    }
    100% {
      -webkit-transform: translateX(-50%) scale(1.3);
      transform: translateX(-50%) scale(1.3);
      opacity: 0;
    }
  }

  @-webkit-keyframes expand--1 {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes expand--1 {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @-webkit-keyframes expand--2 {
    0% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
    50% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }

  @keyframes expand--2 {
    0% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
    50% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }

  @-webkit-keyframes fall--1 {
    100% {
      -webkit-transform: translateY(47px);
      transform: translateY(47px);
      opacity: 0;
    }
  }

  @keyframes fall--1 {
    100% {
      -webkit-transform: translateY(47px);
      transform: translateY(47px);
      opacity: 0;
    }
  }

  @-webkit-keyframes fall--2 {
    100% {
      -webkit-transform: translateY(47px);
      transform: translateY(47px);
      opacity: 0;
    }
  }

  @keyframes fall--2 {
    100% {
      -webkit-transform: translateY(47px);
      transform: translateY(47px);
      opacity: 0;
    }
  }

  @-webkit-keyframes fall--3 {
    100% {
      -webkit-transform: translateY(47px);
      transform: translateY(47px);
      opacity: 0;
    }
  }

  @keyframes fall--3 {
    100% {
      -webkit-transform: translateY(47px);
      transform: translateY(47px);
      opacity: 0;
    }
  }

  @-webkit-keyframes float-down--1 {
    0% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
    33% {
      -webkit-transform: translate(-10px, 13px);
      transform: translate(-10px, 13px);
    }
    66% {
      -webkit-transform: translate(0px, 26px);
      transform: translate(0px, 26px);
    }
    100% {
      -webkit-transform: translate(-10px, 40px);
      transform: translate(-10px, 40px);
      opacity: 0;
    }
  }

  @keyframes float-down--1 {
    0% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
    33% {
      -webkit-transform: translate(-10px, 13px);
      transform: translate(-10px, 13px);
    }
    66% {
      -webkit-transform: translate(0px, 26px);
      transform: translate(0px, 26px);
    }
    100% {
      -webkit-transform: translate(-10px, 40px);
      transform: translate(-10px, 40px);
      opacity: 0;
    }
  }

  @-webkit-keyframes float-down--2 {
    0% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
    33% {
      -webkit-transform: translate(-5px, 13px);
      transform: translate(-5px, 13px);
    }
    66% {
      -webkit-transform: translate(0px, 26px);
      transform: translate(0px, 26px);
    }
    100% {
      -webkit-transform: translate(-10px, 40px);
      transform: translate(-10px, 40px);
      opacity: 0;
    }
  }

  @keyframes float-down--2 {
    0% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
    33% {
      -webkit-transform: translate(-5px, 13px);
      transform: translate(-5px, 13px);
    }
    66% {
      -webkit-transform: translate(0px, 26px);
      transform: translate(0px, 26px);
    }
    100% {
      -webkit-transform: translate(-10px, 40px);
      transform: translate(-10px, 40px);
      opacity: 0;
    }
  }

  @-webkit-keyframes float-down--3 {
    0% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
    33% {
      -webkit-transform: translate(-10px, 13px);
      transform: translate(-10px, 13px);
    }
    66% {
      -webkit-transform: translate(0px, 26px);
      transform: translate(0px, 26px);
    }
    100% {
      -webkit-transform: translate(-10px, 40px);
      transform: translate(-10px, 40px);
      opacity: 0;
    }
  }

  @keyframes float-down--3 {
    0% {
      -webkit-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
    33% {
      -webkit-transform: translate(-10px, 13px);
      transform: translate(-10px, 13px);
    }
    66% {
      -webkit-transform: translate(0px, 26px);
      transform: translate(0px, 26px);
    }
    100% {
      -webkit-transform: translate(-10px, 40px);
      transform: translate(-10px, 40px);
      opacity: 0;
    }
  }

  @-webkit-keyframes flash {
    60% {
      background: radial-gradient(ellipse at center, #606060 0%, #777777 100%);
      -webkit-transform: translateX(-50%) scale(1);
      transform: translateX(-50%) scale(1);
    }
    61% {
      background: radial-gradient(ellipse at center, white 0%, #e5e5e5 100%);
      -webkit-transform: translateX(-50%) scale(1.05);
      transform: translateX(-50%) scale(1.05);
    }
    63% {
      background: radial-gradient(ellipse at center, #606060 0%, #777777 100%);
      -webkit-transform: translateX(-50%) scale(1);
      transform: translateX(-50%) scale(1);
    }
    66% {
      background: radial-gradient(ellipse at center, #606060 0%, #777777 100%);
      -webkit-transform: translateX(-50%) scale(1);
      transform: translateX(-50%) scale(1);
    }
    67% {
      background: radial-gradient(ellipse at center, white 0%, #e5e5e5 100%);
      -webkit-transform: translateX(-50%) scale(1.05);
      transform: translateX(-50%) scale(1.05);
    }
    70% {
      background: radial-gradient(ellipse at center, #606060 0%, #777777 100%);
    }
    83% {
      background: radial-gradient(ellipse at center, #606060 0%, #777777 100%);
      -webkit-transform: translateX(-50%) scale(1);
      transform: translateX(-50%) scale(1);
    }
    84% {
      background: radial-gradient(ellipse at center, white 0%, #e5e5e5 100%);
      -webkit-transform: translateX(-50%) scale(1.05);
      transform: translateX(-50%) scale(1.05);
    }
    87% {
      background: radial-gradient(ellipse at center, #606060 0%, #777777 100%);
      -webkit-transform: translateX(-50%) scale(1);
      transform: translateX(-50%) scale(1);
    }
  }

  @keyframes flash {
    60% {
      background: radial-gradient(ellipse at center, #606060 0%, #777777 100%);
      -webkit-transform: translateX(-50%) scale(1);
      transform: translateX(-50%) scale(1);
    }
    61% {
      background: radial-gradient(ellipse at center, white 0%, #e5e5e5 100%);
      -webkit-transform: translateX(-50%) scale(1.05);
      transform: translateX(-50%) scale(1.05);
    }
    63% {
      background: radial-gradient(ellipse at center, #606060 0%, #777777 100%);
      -webkit-transform: translateX(-50%) scale(1);
      transform: translateX(-50%) scale(1);
    }
    66% {
      background: radial-gradient(ellipse at center, #606060 0%, #777777 100%);
      -webkit-transform: translateX(-50%) scale(1);
      transform: translateX(-50%) scale(1);
    }
    67% {
      background: radial-gradient(ellipse at center, white 0%, #e5e5e5 100%);
      -webkit-transform: translateX(-50%) scale(1.05);
      transform: translateX(-50%) scale(1.05);
    }
    70% {
      background: radial-gradient(ellipse at center, #606060 0%, #777777 100%);
    }
    83% {
      background: radial-gradient(ellipse at center, #606060 0%, #777777 100%);
      -webkit-transform: translateX(-50%) scale(1);
      transform: translateX(-50%) scale(1);
    }
    84% {
      background: radial-gradient(ellipse at center, white 0%, #e5e5e5 100%);
      -webkit-transform: translateX(-50%) scale(1.05);
      transform: translateX(-50%) scale(1.05);
    }
    87% {
      background: radial-gradient(ellipse at center, #606060 0%, #777777 100%);
      -webkit-transform: translateX(-50%) scale(1);
      transform: translateX(-50%) scale(1);
    }
  }

  @-webkit-keyframes fade--1 {
    0% {
      -webkit-transform: translateX(-25%);
      transform: translateX(-25%);
      opacity: 1;
    }
    50% {
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      opacity: 0.7;
    }
    100% {
      -webkit-transform: translateX(-25%);
      transform: translateX(-25%);
      opacity: 1;
    }
  }

  @keyframes fade--1 {
    0% {
      -webkit-transform: translateX(-25%);
      transform: translateX(-25%);
      opacity: 1;
    }
    50% {
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      opacity: 0.7;
    }
    100% {
      -webkit-transform: translateX(-25%);
      transform: translateX(-25%);
      opacity: 1;
    }
  }

  @-webkit-keyframes fade--2 {
    0% {
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      opacity: 0.7;
    }
    50% {
      -webkit-transform: translateX(-25%);
      transform: translateX(-25%);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      opacity: 0.7;
    }
  }

  @keyframes fade--2 {
    0% {
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      opacity: 0.7;
    }
    50% {
      -webkit-transform: translateX(-25%);
      transform: translateX(-25%);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      opacity: 0.7;
    }
  }
</style>
