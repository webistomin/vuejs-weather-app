<template>
    <section class="search">
      <div class="search__country">
        <h1 class="search__title">Please, choose country before</h1>
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
            <option value="DK">Denmark (+45)</option>
            <option value="DJ">Djibouti (+253)</option>
            <option value="DM">Dominica (+1809)</option>
            <option value="DO">Dominican Republic (+1809)</option>
            <option value="EC">Ecuador (+593)</option>
            <option value="EG">Egypt (+20)</option>
            <option value="SV">El Salvador (+503)</option>
            <option value="GQ">Equatorial Guinea (+240)</option>
            <option value="ER">Eritrea (+291)</option>
            <option value="EE">Estonia (+372)</option>
            <option value="ET">Ethiopia (+251)</option>
            <option value="FK">Falkland Islands (+500)</option>
            <option value="FO">Faroe Islands (+298)</option>
            <option value="FJ">Fiji (+679)</option>
            <option value="FI">Finland (+358)</option>
            <option value="FR">France (+33)</option>
            <option value="GF">French Guiana (+594)</option>
            <option value="PF">French Polynesia (+689)</option>
            <option value="GA">Gabon (+241)</option>
            <option value="GM">Gambia (+220)</option>
            <option value="GE">Georgia (+7880)</option>
            <option value="DE">Germany (+49)</option>
            <option value="GH">Ghana (+233)</option>
            <option value="GI">Gibraltar (+350)</option>
            <option value="GR">Greece (+30)</option>
            <option value="GL">Greenland (+299)</option>
            <option value="GD">Grenada (+1473)</option>
            <option value="GP">Guadeloupe (+590)</option>
            <option value="GU">Guam (+671)</option>
            <option value="GT">Guatemala (+502)</option>
            <option value="GN">Guinea (+224)</option>
            <option value="GW">Guinea - Bissau (+245)</option>
            <option value="GY">Guyana (+592)</option>
            <option value="HT">Haiti (+509)</option>
            <option value="HN">Honduras (+504)</option>
            <option value="HK">Hong Kong (+852)</option>
            <option value="HU">Hungary (+36)</option>
            <option value="IS">Iceland (+354)</option>
            <option value="IN">India (+91)</option>
            <option value="ID">Indonesia (+62)</option>
            <option value="IR">Iran (+98)</option>
            <option value="IQ">Iraq (+964)</option>
            <option value="IE">Ireland (+353)</option>
            <option value="IL">Israel (+972)</option>
            <option value="IT">Italy (+39)</option>
            <option value="JM">Jamaica (+1876)</option>
            <option value="JP">Japan (+81)</option>
            <option value="JO">Jordan (+962)</option>
            <option value="KZ">Kazakhstan (+7)</option>
            <option value="KE">Kenya (+254)</option>
            <option value="KI">Kiribati (+686)</option>
            <option value="KP">Korea North (+850)</option>
            <option value="KR">Korea South (+82)</option>
            <option value="KW">Kuwait (+965)</option>
            <option value="KG">Kyrgyzstan (+996)</option>
            <option value="LA">Laos (+856)</option>
            <option value="LV">Latvia (+371)</option>
            <option value="LB">Lebanon (+961)</option>
            <option value="LS">Lesotho (+266)</option>
            <option value="LR">Liberia (+231)</option>
            <option value="LY">Libya (+218)</option>
            <option value="LI">Liechtenstein (+417)</option>
            <option value="LT">Lithuania (+370)</option>
            <option value="LU">Luxembourg (+352)</option>
            <option value="MO">Macao (+853)</option>
            <option value="MK">Macedonia (+389)</option>
            <option value="MG">Madagascar (+261)</option>
            <option value="MW">Malawi (+265)</option>
            <option value="MY">Malaysia (+60)</option>
            <option value="MV">Maldives (+960)</option>
            <option value="ML">Mali (+223)</option>
            <option value="MT">Malta (+356)</option>
            <option value="MH">Marshall Islands (+692)</option>
            <option value="MQ">Martinique (+596)</option>
            <option value="MR">Mauritania (+222)</option>
            <option value="YT">Mayotte (+269)</option>
            <option value="MX">Mexico (+52)</option>
            <option value="FM">Micronesia (+691)</option>
            <option value="MD">Moldova (+373)</option>
            <option value="MC">Monaco (+377)</option>
            <option value="MN">Mongolia (+976)</option>
            <option value="MS">Montserrat (+1664)</option>
            <option value="MA">Morocco (+212)</option>
            <option value="MZ">Mozambique (+258)</option>
            <option value="MN">Myanmar (+95)</option>
            <option value="NA">Namibia (+264)</option>
            <option value="NR">Nauru (+674)</option>
            <option value="NP">Nepal (+977)</option>
            <option value="NL">Netherlands (+31)</option>
            <option value="NC">New Caledonia (+687)</option>
            <option value="NZ">New Zealand (+64)</option>
            <option value="NI">Nicaragua (+505)</option>
            <option value="NE">Niger (+227)</option>
            <option value="NG">Nigeria (+234)</option>
            <option value="NU">Niue (+683)</option>
            <option value="NF">Norfolk Islands (+672)</option>
            <option value="NP">Northern Marianas (+670)</option>
            <option value="NO">Norway (+47)</option>
            <option value="OM">Oman (+968)</option>
            <option value="PW">Palau (+680)</option>
            <option value="PA">Panama (+507)</option>
            <option value="PG">Papua New Guinea (+675)</option>
            <option value="PY">Paraguay (+595)</option>
            <option value="PE">Peru (+51)</option>
            <option value="PH">Philippines (+63)</option>
            <option value="PL">Poland (+48)</option>
            <option value="PT">Portugal (+351)</option>
            <option value="PR">Puerto Rico (+1787)</option>
            <option value="QA">Qatar (+974)</option>
            <option value="RE">Reunion (+262)</option>
            <option value="RO">Romania (+40)</option>
            <!--<option value="RU">Russia (+7)</option>-->
            <option value="RW">Rwanda (+250)</option>
            <option value="SM">San Marino (+378)</option>
            <option value="ST">Sao Tome &amp; Principe (+239)</option>
            <option value="SA">Saudi Arabia (+966)</option>
            <option value="SN">Senegal (+221)</option>
            <option value="CS">Serbia (+381)</option>
            <option value="SC">Seychelles (+248)</option>
            <option value="SL">Sierra Leone (+232)</option>
            <option value="SG">Singapore (+65)</option>
            <option value="SK">Slovak Republic (+421)</option>
            <option value="SI">Slovenia (+386)</option>
            <option value="SB">Solomon Islands (+677)</option>
            <option value="SO">Somalia (+252)</option>
            <option value="ZA">South Africa (+27)</option>
            <option value="ES">Spain (+34)</option>
            <option value="LK">Sri Lanka (+94)</option>
            <option value="SH">St. Helena (+290)</option>
            <option value="KN">St. Kitts (+1869)</option>
            <option value="SC">St. Lucia (+1758)</option>
            <option value="SD">Sudan (+249)</option>
            <option value="SR">Suriname (+597)</option>
            <option value="SZ">Swaziland (+268)</option>
            <option value="SE">Sweden (+46)</option>
            <option value="CH">Switzerland (+41)</option>
            <option value="SI">Syria (+963)</option>
            <option value="TW">Taiwan (+886)</option>
            <option value="TJ">Tajikstan (+7)</option>
            <option value="TH">Thailand (+66)</option>
            <option value="TG">Togo (+228)</option>
            <option value="TO">Tonga (+676)</option>
            <option value="TT">Trinidad &amp; Tobago (+1868)</option>
            <option value="TN">Tunisia (+216)</option>
            <option value="TR">Turkey (+90)</option>
            <option value="TM">Turkmenistan (+7)</option>
            <option value="TM">Turkmenistan (+993)</option>
            <option value="TC">Turks &amp; Caicos Islands (+1649)</option>
            <option value="TV">Tuvalu (+688)</option>
            <option value="UG">Uganda (+256)</option>
            <option value="GB">UK (+44)</option>
            <option value="UA">Ukraine (+380)</option>
            <option value="AE">United Arab Emirates (+971)</option>
            <option value="UY">Uruguay (+598)</option>
            <option value="UZ">Uzbekistan (+7)</option>
            <option value="VU">Vanuatu (+678)</option>
            <option value="VA">Vatican City (+379)</option>
            <option value="VE">Venezuela (+58)</option>
            <option value="VN">Vietnam (+84)</option>
            <option value="VG">Virgin Islands - British (+1284)</option>
            <option value="VI">Virgin Islands - US (+1340)</option>
            <option value="WF">Wallis &amp; Futuna (+681)</option>
            <option value="YE">Yemen (North)(+969)</option>
            <option value="YE">Yemen (South)(+967)</option>
            <option value="ZM">Zambia (+260)</option>
            <option value="ZW">Zimbabwe (+263)</option>
          </optgroup>
        </select>
      </div>
      <div class="search__inner">
        <input type="text"
               class="search__input"
               autofocus
               v-model="searchQuery"
                placeholder="Please, enter city name">
        <!--<button class="search__btn" type="button">Add city</button>-->
      </div>
      <!--<ul class="search__list">-->
        <!--<li class="search__item">-->
          <!--<span class="search__name">Moscow</span>-->
          <!--<button class="search__button"></button>-->
        <!--</li>-->
      <!--</ul>-->
    </section>
</template>

<script>
  export default {
    data() {
      return {};
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
    },
    watch: {
      selectedCountry() {
        this.$store.dispatch('getForecastsFromAPI');
      },
      searchQuery() {
        this.$store.dispatch('getForecastsFromAPI');
      },
    },
  };
</script>

<style lang="less">
  .search {
    padding: 20px;
    padding-bottom: 0;
    background-color: cornflowerblue;

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
      display: flex;
      justify-content: space-between;
      max-width: 312px;
    }

    &__input {
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

    &__select {
      max-width: 100%;
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

      background-image:
        linear-gradient(45deg, transparent 50%, blue 50%),
        linear-gradient(135deg, blue 50%, transparent 50%),
        linear-gradient(to right, skyblue, skyblue);
      background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        100% 0;
      background-size:
        5px 5px,
        5px 5px,
        2.5em 2.5em;
      background-repeat: no-repeat;

      &:focus {
        background-image:
          linear-gradient(45deg, white 50%, transparent 50%),
          linear-gradient(135deg, transparent 50%, white 50%),
          linear-gradient(to right, gray, gray);
        background-position:
          calc(100% - 15px) 1em,
          calc(100% - 20px) 1em,
          100% 0;
        background-size:
          5px 5px,
          5px 5px,
          2.5em 2.5em;
        background-repeat: no-repeat;
        border-color: grey;
        outline: 0;
      }
    }

    &__country {
      margin-bottom: 20px;
    }



  }
</style>
