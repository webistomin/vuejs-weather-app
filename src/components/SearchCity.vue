<template>
  <section class="search">
    <div class="search__favorites" v-if="getFavoriteCities.length !== 0">
      <h2 class="search__title">Favorite countries</h2>
      <ul class="search__list">
        <li class="search__item" v-for="country of getFavoriteCities">
          <p class="search__desc" @click="searchCityFromFavorite(country.city, country.code)">
            <span class="search__name">{{country.city}},</span>
            <span class="search__code">{{country.code}}</span>
          </p>
          <button class="search__button" title="Delete city" @click="removeFromFavoriteList(country.city, country.code)"></button>
        </li>
      </ul>
    </div>
    <div class="search__country">
      <div class="search__wrapper">
        <h1 class="search__title" v-if="!selectedCountry">Please, choose country before search</h1>
        <select class="search__select" v-model="selectedCountry">
          <option value="RU">Russia</option>
          <option value="US">USA</option>
          <optgroup label="Other countries">
            <option value="DZ">Algeria</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AG">Antigua &amp; Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaijan</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahrain</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BY">Belarus</option>
            <option value="BE">Belgium</option>
            <option value="BZ">Belize</option>
            <option value="BJ">Benin</option>
            <option value="BM">Bermuda</option>
            <option value="BT">Bhutan</option>
            <option value="BO">Bolivia</option>
            <option value="BA">Bosnia Herzegovina</option>
            <option value="BW">Botswana</option>
            <option value="BR">Brazil</option>
            <option value="BN">Brunei</option>
            <option value="BG">Bulgaria</option>
            <option value="BF">Burkina Faso</option>
            <option value="BI">Burundi</option>
            <option value="KH">Cambodia</option>
            <option value="CM">Cameroon</option>
            <option value="CA">Canada</option>
            <option value="CV">Cape Verde Islands</option>
            <option value="KY">Cayman Islands</option>
            <option value="CF">Central African Republic</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CO">Colombia</option>
            <option value="KM">Comoros</option>
            <option value="CG">Congo</option>
            <option value="CK">Cook Islands</option>
            <option value="CR">Costa Rica</option>
            <option value="HR">Croatia</option>
            <option value="CU">Cuba</option>
            <option value="CY">Cyprus North</option>
            <option value="CY">Cyprus South</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="DJ">Djibouti</option>
            <option value="DM">Dominica</option>
            <option value="DO">Dominican Republic</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egypt</option>
            <option value="SV">El Salvador</option>
            <option value="GQ">Equatorial Guinea</option>
            <option value="ER">Eritrea</option>
            <option value="EE">Estonia</option>
            <option value="ET">Ethiopia</option>
            <option value="FK">Falkland Islands</option>
            <option value="FO">Faroe Islands</option>
            <option value="FJ">Fiji</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="GF">French Guiana</option>
            <option value="PF">French Polynesia</option>
            <option value="GA">Gabon</option>
            <option value="GM">Gambia</option>
            <option value="GE">Georgia</option>
            <option value="DE">Germany</option>
            <option value="GH">Ghana</option>
            <option value="GI">Gibraltar</option>
            <option value="GR">Greece</option>
            <option value="GL">Greenland</option>
            <option value="GD">Grenada</option>
            <option value="GP">Guadeloupe</option>
            <option value="GU">Guam</option>
            <option value="GT">Guatemala</option>
            <option value="GN">Guinea</option>
            <option value="GW">Guinea - Bissau</option>
            <option value="GY">Guyana</option>
            <option value="HT">Haiti</option>
            <option value="HN">Honduras</option>
            <option value="HK">Hong Kong</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="IN">India</option>
            <option value="ID">Indonesia</option>
            <option value="IR">Iran</option>
            <option value="IQ">Iraq</option>
            <option value="IE">Ireland</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japan</option>
            <option value="JO">Jordan</option>
            <option value="KZ">Kazakhstan</option>
            <option value="KE">Kenya</option>
            <option value="KI">Kiribati</option>
            <option value="KP">Korea North</option>
            <option value="KR">Korea South</option>
            <option value="KW">Kuwait</option>
            <option value="KG">Kyrgyzstan</option>
            <option value="LA">Laos</option>
            <option value="LV">Latvia</option>
            <option value="LB">Lebanon</option>
            <option value="LS">Lesotho</option>
            <option value="LR">Liberia</option>
            <option value="LY">Libya</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MO">Macao</option>
            <option value="MK">Macedonia</option>
            <option value="MG">Madagascar</option>
            <option value="MW">Malawi</option>
            <option value="MY">Malaysia</option>
            <option value="MV">Maldives</option>
            <option value="ML">Mali</option>
            <option value="MT">Malta</option>
            <option value="MH">Marshall Islands</option>
            <option value="MQ">Martinique</option>
            <option value="MR">Mauritania</option>
            <option value="YT">Mayotte</option>
            <option value="MX">Mexico</option>
            <option value="FM">Micronesia</option>
            <option value="MD">Moldova</option>
            <option value="MC">Monaco</option>
            <option value="MN">Mongolia</option>
            <option value="MS">Montserrat</option>
            <option value="MA">Morocco</option>
            <option value="MZ">Mozambique</option>
            <option value="MN">Myanmar</option>
            <option value="NA">Namibia</option>
            <option value="NR">Nauru</option>
            <option value="NP">Nepal</option>
            <option value="NL">Netherlands</option>
            <option value="NC">New Caledonia</option>
            <option value="NZ">New Zealand</option>
            <option value="NI">Nicaragua</option>
            <option value="NE">Niger</option>
            <option value="NG">Nigeria</option>
            <option value="NU">Niue</option>
            <option value="NF">Norfolk Islands</option>
            <option value="NP">Northern Marianas</option>
            <option value="NO">Norway</option>
            <option value="OM">Oman</option>
            <option value="PW">Palau</option>
            <option value="PA">Panama</option>
            <option value="PG">Papua New Guinea</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Peru</option>
            <option value="PH">Philippines</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="PR">Puerto Rico</option>
            <option value="QA">Qatar</option>
            <option value="RE">Reunion</option>
            <option value="RO">Romania</option>
            <option value="RW">Rwanda</option>
            <option value="SM">San Marino</option>
            <option value="ST">Sao Tome &amp; Principe</option>
            <option value="SA">Saudi Arabia</option>
            <option value="SN">Senegal</option>
            <option value="CS">Serbia</option>
            <option value="SC">Seychelles</option>
            <option value="SL">Sierra Leone</option>
            <option value="SG">Singapore</option>
            <option value="SK">Slovak Republic</option>
            <option value="SI">Slovenia</option>
            <option value="SB">Solomon Islands</option>
            <option value="SO">Somalia</option>
            <option value="ZA">South Africa</option>
            <option value="ES">Spain</option>
            <option value="LK">Sri Lanka</option>
            <option value="SH">St. Helena</option>
            <option value="KN">St. Kitts</option>
            <option value="SC">St. Lucia</option>
            <option value="SD">Sudan</option>
            <option value="SR">Suriname</option>
            <option value="SZ">Swaziland</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="SI">Syria</option>
            <option value="TW">Taiwan</option>
            <option value="TJ">Tajikstan</option>
            <option value="TH">Thailand</option>
            <option value="TG">Togo</option>
            <option value="TO">Tonga</option>
            <option value="TT">Trinidad &amp; Tobago</option>
            <option value="TN">Tunisia</option>
            <option value="TR">Turkey</option>
            <option value="TM">Turkmenistan</option>
            <option value="TM">Turkmenistan</option>
            <option value="TC">Turks &amp; Caicos Islands</option>
            <option value="TV">Tuvalu</option>
            <option value="UG">Uganda</option>
            <option value="GB">UK</option>
            <option value="UA">Ukraine</option>
            <option value="AE">United Arab Emirates</option>
            <option value="UY">Uruguay</option>
            <option value="UZ">Uzbekistan</option>
            <option value="VU">Vanuatu</option>
            <option value="VA">Vatican City</option>
            <option value="VE">Venezuela</option>
            <option value="VN">Vietnam</option>
            <option value="VG">Virgin Islands - British</option>
            <option value="VI">Virgin Islands - US</option>
            <option value="WF">Wallis &amp; Futuna</option>
            <option value="YE">Yemen (North)</option>
            <option value="YE">Yemen (South)</option>
            <option value="ZM">Zambia</option>
            <option value="ZW">Zimbabwe</option>
          </optgroup>
        </select>
      </div>
    </div>
    <div class="search__inner" v-if="selectedCountry">
      <input type="text"
             class="search__input"
             autofocus
             v-model="searchQuery"
             @input="debouncedGetAnswer"
             placeholder="Please, enter city name">
    </div>

  </section>
</template>

<script>
  import _ from 'lodash';

  export default {
    data() {
      return {};
    },
    created() {
      this.debouncedGetAnswer = _.debounce(this.getForecastsFromAPI, 500);
    },
    methods: {
      getForecastsFromAPI() {
        this.$store.dispatch('getForecastsFromAPI');
      },
      searchCityFromFavorite(city, code) {
        this.$store.commit('saveSearchQuery', city);
        this.$store.commit('saveSelectedCountry', code);
        this.$store.dispatch('getForecastsFromAPI');
      },
      removeFromFavoriteList(city, code) {
        const favoriteList = this.$store.getters.getFavoriteCities;
        for (let i = 0; i < favoriteList.length; i += 1) {
          if (favoriteList[i].city === city && favoriteList[i].code === code) {
            this.$store.commit('deleteFromFavoriteList', i);
          }
        }
      },
    },
    computed: {
      selectedCountry: {
        get() {
          return this.$store.getters.getSelectedCountry;
        },
        set(value) {
          this.$store.commit('saveSelectedCountry', value);
        },
      },
      searchQuery: {
        get() {
          return this.$store.getters.getSearchQuery;
        },
        set(value) {
          this.$store.commit('saveSearchQuery', value);
        },
      },
      getFavoriteCities() {
        return this.$store.getters.getFavoriteCities;
      },
    },
    watch: {
      selectedCountry() {
        if (this.searchQuery) {
          this.$store.dispatch('getForecastsFromAPI');
        }
      },
    },
  };
</script>

<style lang="less">
  .search {
    padding: 20px;
    padding-bottom: 0;
    text-align: center;

    &__desc {
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }

    &__title {
      margin: 0;
      margin-bottom: 20px;
      font-family: 'Oswald', sans-serif;
      font-weight: 400;
      font-size: 24px;
      color: #ffffff;
      text-transform: uppercase;
    }

    &__inner {
      text-align: center;
    }

    &__input {
      border: thin solid blue;
      box-sizing: border-box;
      width: 269px;
      padding-left: 16px;
      padding-right: 16px;
      font-family: 'Oswald', sans-serif;
      font-weight: 400;
      font-size: 16px;
      border-radius: 4px;
      min-height: 42px;
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
      border-radius: 4px;
    }

    &__button {
      width: 20px;
      height: 20px;
      position: relative;
      cursor: pointer;
      margin-left: 20px;

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

    &__list {
      display: flex;
      flex-direction: column;
      padding-bottom: 20px;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
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

    &__select {
      width: 269px;
      /* styling */
      background-color: white;
      border: thin solid blue;
      border-radius: 4px;
      display: inline-block;
      font-family: 'Oswald', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5em;
      padding: 0.5em 3.5em 0.5em 1em;

      /* reset */

      margin: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;

      background-image: linear-gradient(45deg, transparent 50%, blue 50%),
      linear-gradient(135deg, blue 50%, transparent 50%),
      linear-gradient(to right, skyblue, skyblue);
      background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      100% 0;
      background-size: 5px 5px,
      5px 5px,
      2.5em 2.5em;
      background-repeat: no-repeat;

      &:focus {
        background-image: linear-gradient(45deg, white 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, white 50%),
        linear-gradient(to right, gray, gray);
        background-position: calc(100% - 15px) 1em,
        calc(100% - 20px) 1em,
        100% 0;
        background-size: 5px 5px,
        5px 5px,
        2.5em 2.5em;
        background-repeat: no-repeat;
        border-color: grey;
        outline: 0;
      }
    }

    &__country {
      padding-bottom: 20px;
    }

    @media (min-width: 992px) {
      position: relative;

      &__favorites {
        position: absolute;
        height: 200px;
        overflow: auto;
        padding-right: 20px;

        &::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          background-color: #f5f5f5;
          border-radius: 10px;
        }

        &::-webkit-scrollbar {
          width: 10px;
          background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-image: -webkit-gradient(linear,
          left bottom,
          left top,
          color-stop(0.44, rgb(122, 153, 217)),
          color-stop(0.72, rgb(73, 125, 189)),
          color-stop(0.86, rgb(28, 58, 148)));
        }

      }
    }
  }
</style>
