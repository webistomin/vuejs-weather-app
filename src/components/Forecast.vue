<template>
  <section class="forecast">
    <div class="forecast__current">
      <p class="forecast__location">
        <span class="forecast__city">Karabanovo,</span>
        <span class="forecast__country">RU</span>
      </p>
    </div>
    <ul class="forecast__list">
      <li class="forecast__item"
          v-for="(forecast, index) of getForecasts.data">
        <span class="forecast__day">{{forecast.datetime | getDate}}</span>
        <div class="weather" v-html="getWeatherIcon(forecast.weather.code)"></div>
        <p class="forecast__temperature">
          <span class="forecast__number">{{Math.ceil(forecast.temp)}}</span>
          <span class="forecast__scale">&#176;C</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'Forecast',
    data() {
      return {
        opened: false,
      };
    },
    mounted() {
      this.$store.dispatch('getForecastsFromAPI');
    },
    computed: {
      getForecasts() {
        return this.$store.getters.getForecasts;
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
    },
    filters: {
      getDate(datetime) {
        return new Date(datetime).toDateString();
      },
    },
  };
</script>

<style lang="less">
  .forecast {

    &__current {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #ffffff;
      padding: 20px;
    }

    &__location {
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

    &__temperature {
      font-family: 'Quattrocento', serif;
      font-weight: 400;
      font-size: 16px;
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
        background: rgba(0, 0, 0, 0.1);
      }

      &:nth-child(7n+2) {
        background: rgba(0, 0, 0, 0.2);
      }

      &:nth-child(7n+3) {
        background: rgba(0, 0, 0, 0.3);
      }

      &:nth-child(7n+4) {
        background: rgba(0, 0, 0, 0.4);
      }

      &:nth-child(7n+5) {
        background: rgba(0, 0, 0, 0.5);
      }

      &:nth-child(7n+6) {
        background: rgba(0, 0, 0, 0.6);
      }

      &:nth-child(7n+7) {
        background: rgba(0, 0, 0, 0.7);
      }
    }
  }

  .weather {
    position: relative;
    flex: 1;
    padding: 40px;
    padding-bottom: 80px;
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
