<template>
  <section class="forecast">
    <select name="countryCode" id="">
      <option data-countryCode="GB" value="44" Selected>UK (+44)</option>
      <option data-countryCode="US" value="1">USA (+1)</option>
      <optgroup label="Other countries">
        <option data-countryCode="DZ" value="213">Algeria (+213)</option>
        <option data-countryCode="AD" value="376">Andorra (+376)</option>
        <option data-countryCode="AO" value="244">Angola (+244)</option>
        <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
        <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
        <option data-countryCode="AR" value="54">Argentina (+54)</option>
        <option data-countryCode="AM" value="374">Armenia (+374)</option>
        <option data-countryCode="AW" value="297">Aruba (+297)</option>
        <option data-countryCode="AU" value="61">Australia (+61)</option>
        <option data-countryCode="AT" value="43">Austria (+43)</option>
        <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
        <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
        <option data-countryCode="BH" value="973">Bahrain (+973)</option>
        <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
        <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
        <option data-countryCode="BY" value="375">Belarus (+375)</option>
        <option data-countryCode="BE" value="32">Belgium (+32)</option>
        <option data-countryCode="BZ" value="501">Belize (+501)</option>
        <option data-countryCode="BJ" value="229">Benin (+229)</option>
        <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
        <option data-countryCode="BT" value="975">Bhutan (+975)</option>
        <option data-countryCode="BO" value="591">Bolivia (+591)</option>
        <option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
        <option data-countryCode="BW" value="267">Botswana (+267)</option>
        <option data-countryCode="BR" value="55">Brazil (+55)</option>
        <option data-countryCode="BN" value="673">Brunei (+673)</option>
        <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
        <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
        <option data-countryCode="BI" value="257">Burundi (+257)</option>
        <option data-countryCode="KH" value="855">Cambodia (+855)</option>
        <option data-countryCode="CM" value="237">Cameroon (+237)</option>
        <option data-countryCode="CA" value="1">Canada (+1)</option>
        <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
        <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
        <option data-countryCode="CF" value="236">Central African Republic (+236)</option>
        <option data-countryCode="CL" value="56">Chile (+56)</option>
        <option data-countryCode="CN" value="86">China (+86)</option>
        <option data-countryCode="CO" value="57">Colombia (+57)</option>
        <option data-countryCode="KM" value="269">Comoros (+269)</option>
        <option data-countryCode="CG" value="242">Congo (+242)</option>
        <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
        <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
        <option data-countryCode="HR" value="385">Croatia (+385)</option>
        <option data-countryCode="CU" value="53">Cuba (+53)</option>
        <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
        <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
        <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
        <option data-countryCode="DK" value="45">Denmark (+45)</option>
        <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
        <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
        <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
        <option data-countryCode="EC" value="593">Ecuador (+593)</option>
        <option data-countryCode="EG" value="20">Egypt (+20)</option>
        <option data-countryCode="SV" value="503">El Salvador (+503)</option>
        <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
        <option data-countryCode="ER" value="291">Eritrea (+291)</option>
        <option data-countryCode="EE" value="372">Estonia (+372)</option>
        <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
        <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
        <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
        <option data-countryCode="FJ" value="679">Fiji (+679)</option>
        <option data-countryCode="FI" value="358">Finland (+358)</option>
        <option data-countryCode="FR" value="33">France (+33)</option>
        <option data-countryCode="GF" value="594">French Guiana (+594)</option>
        <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
        <option data-countryCode="GA" value="241">Gabon (+241)</option>
        <option data-countryCode="GM" value="220">Gambia (+220)</option>
        <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
        <option data-countryCode="DE" value="49">Germany (+49)</option>
        <option data-countryCode="GH" value="233">Ghana (+233)</option>
        <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
        <option data-countryCode="GR" value="30">Greece (+30)</option>
        <option data-countryCode="GL" value="299">Greenland (+299)</option>
        <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
        <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
        <option data-countryCode="GU" value="671">Guam (+671)</option>
        <option data-countryCode="GT" value="502">Guatemala (+502)</option>
        <option data-countryCode="GN" value="224">Guinea (+224)</option>
        <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
        <option data-countryCode="GY" value="592">Guyana (+592)</option>
        <option data-countryCode="HT" value="509">Haiti (+509)</option>
        <option data-countryCode="HN" value="504">Honduras (+504)</option>
        <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
        <option data-countryCode="HU" value="36">Hungary (+36)</option>
        <option data-countryCode="IS" value="354">Iceland (+354)</option>
        <option data-countryCode="IN" value="91">India (+91)</option>
        <option data-countryCode="ID" value="62">Indonesia (+62)</option>
        <option data-countryCode="IR" value="98">Iran (+98)</option>
        <option data-countryCode="IQ" value="964">Iraq (+964)</option>
        <option data-countryCode="IE" value="353">Ireland (+353)</option>
        <option data-countryCode="IL" value="972">Israel (+972)</option>
        <option data-countryCode="IT" value="39">Italy (+39)</option>
        <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
        <option data-countryCode="JP" value="81">Japan (+81)</option>
        <option data-countryCode="JO" value="962">Jordan (+962)</option>
        <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
        <option data-countryCode="KE" value="254">Kenya (+254)</option>
        <option data-countryCode="KI" value="686">Kiribati (+686)</option>
        <option data-countryCode="KP" value="850">Korea North (+850)</option>
        <option data-countryCode="KR" value="82">Korea South (+82)</option>
        <option data-countryCode="KW" value="965">Kuwait (+965)</option>
        <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
        <option data-countryCode="LA" value="856">Laos (+856)</option>
        <option data-countryCode="LV" value="371">Latvia (+371)</option>
        <option data-countryCode="LB" value="961">Lebanon (+961)</option>
        <option data-countryCode="LS" value="266">Lesotho (+266)</option>
        <option data-countryCode="LR" value="231">Liberia (+231)</option>
        <option data-countryCode="LY" value="218">Libya (+218)</option>
        <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
        <option data-countryCode="LT" value="370">Lithuania (+370)</option>
        <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
        <option data-countryCode="MO" value="853">Macao (+853)</option>
        <option data-countryCode="MK" value="389">Macedonia (+389)</option>
        <option data-countryCode="MG" value="261">Madagascar (+261)</option>
        <option data-countryCode="MW" value="265">Malawi (+265)</option>
        <option data-countryCode="MY" value="60">Malaysia (+60)</option>
        <option data-countryCode="MV" value="960">Maldives (+960)</option>
        <option data-countryCode="ML" value="223">Mali (+223)</option>
        <option data-countryCode="MT" value="356">Malta (+356)</option>
        <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
        <option data-countryCode="MQ" value="596">Martinique (+596)</option>
        <option data-countryCode="MR" value="222">Mauritania (+222)</option>
        <option data-countryCode="YT" value="269">Mayotte (+269)</option>
        <option data-countryCode="MX" value="52">Mexico (+52)</option>
        <option data-countryCode="FM" value="691">Micronesia (+691)</option>
        <option data-countryCode="MD" value="373">Moldova (+373)</option>
        <option data-countryCode="MC" value="377">Monaco (+377)</option>
        <option data-countryCode="MN" value="976">Mongolia (+976)</option>
        <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
        <option data-countryCode="MA" value="212">Morocco (+212)</option>
        <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
        <option data-countryCode="MN" value="95">Myanmar (+95)</option>
        <option data-countryCode="NA" value="264">Namibia (+264)</option>
        <option data-countryCode="NR" value="674">Nauru (+674)</option>
        <option data-countryCode="NP" value="977">Nepal (+977)</option>
        <option data-countryCode="NL" value="31">Netherlands (+31)</option>
        <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
        <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
        <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
        <option data-countryCode="NE" value="227">Niger (+227)</option>
        <option data-countryCode="NG" value="234">Nigeria (+234)</option>
        <option data-countryCode="NU" value="683">Niue (+683)</option>
        <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
        <option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
        <option data-countryCode="NO" value="47">Norway (+47)</option>
        <option data-countryCode="OM" value="968">Oman (+968)</option>
        <option data-countryCode="PW" value="680">Palau (+680)</option>
        <option data-countryCode="PA" value="507">Panama (+507)</option>
        <option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
        <option data-countryCode="PY" value="595">Paraguay (+595)</option>
        <option data-countryCode="PE" value="51">Peru (+51)</option>
        <option data-countryCode="PH" value="63">Philippines (+63)</option>
        <option data-countryCode="PL" value="48">Poland (+48)</option>
        <option data-countryCode="PT" value="351">Portugal (+351)</option>
        <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
        <option data-countryCode="QA" value="974">Qatar (+974)</option>
        <option data-countryCode="RE" value="262">Reunion (+262)</option>
        <option data-countryCode="RO" value="40">Romania (+40)</option>
        <option data-countryCode="RU" value="7">Russia (+7)</option>
        <option data-countryCode="RW" value="250">Rwanda (+250)</option>
        <option data-countryCode="SM" value="378">San Marino (+378)</option>
        <option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
        <option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
        <option data-countryCode="SN" value="221">Senegal (+221)</option>
        <option data-countryCode="CS" value="381">Serbia (+381)</option>
        <option data-countryCode="SC" value="248">Seychelles (+248)</option>
        <option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
        <option data-countryCode="SG" value="65">Singapore (+65)</option>
        <option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
        <option data-countryCode="SI" value="386">Slovenia (+386)</option>
        <option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
        <option data-countryCode="SO" value="252">Somalia (+252)</option>
        <option data-countryCode="ZA" value="27">South Africa (+27)</option>
        <option data-countryCode="ES" value="34">Spain (+34)</option>
        <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
        <option data-countryCode="SH" value="290">St. Helena (+290)</option>
        <option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
        <option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
        <option data-countryCode="SD" value="249">Sudan (+249)</option>
        <option data-countryCode="SR" value="597">Suriname (+597)</option>
        <option data-countryCode="SZ" value="268">Swaziland (+268)</option>
        <option data-countryCode="SE" value="46">Sweden (+46)</option>
        <option data-countryCode="CH" value="41">Switzerland (+41)</option>
        <option data-countryCode="SI" value="963">Syria (+963)</option>
        <option data-countryCode="TW" value="886">Taiwan (+886)</option>
        <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
        <option data-countryCode="TH" value="66">Thailand (+66)</option>
        <option data-countryCode="TG" value="228">Togo (+228)</option>
        <option data-countryCode="TO" value="676">Tonga (+676)</option>
        <option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
        <option data-countryCode="TN" value="216">Tunisia (+216)</option>
        <option data-countryCode="TR" value="90">Turkey (+90)</option>
        <option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
        <option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
        <option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
        <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
        <option data-countryCode="UG" value="256">Uganda (+256)</option>
        <!-- <option data-countryCode="GB" value="44">UK (+44)</option> -->
        <option data-countryCode="UA" value="380">Ukraine (+380)</option>
        <option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
        <option data-countryCode="UY" value="598">Uruguay (+598)</option>
        <!-- <option data-countryCode="US" value="1">USA (+1)</option> -->
        <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
        <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
        <option data-countryCode="VA" value="379">Vatican City (+379)</option>
        <option data-countryCode="VE" value="58">Venezuela (+58)</option>
        <option data-countryCode="VN" value="84">Vietnam (+84)</option>
        <option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
        <option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
        <option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
        <option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
        <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
        <option data-countryCode="ZM" value="260">Zambia (+260)</option>
        <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
      </optgroup>
    </select>
    <p>{{getForecasts}}</p>
    <div class="forecast__current">
      <p class="forecast__location">
        <span class="forecast__city">Karabanovo,</span>
        <span class="forecast__country">RU</span>
      </p>
    </div>
    <ul class="forecast__list">
      <li class="forecast__item">
        <span class="forecast__day">Monday</span>
        <div class="weather">
          <span class="icon icon--sun">Sun</span>
          <span class="icon icon--sun-flare anim--pulse">Sun flare</span>
        </div>
        <p class="forecast__temperature">
          <span class="forecast__number">12</span>
          <span class="forecast__scale">&#176;C</span>
        </p>
      </li>
      <li class="forecast__item">
        <span class="forecast__day">Tuesday</span>
        <div class="weather">
          <div class="icon icon--cloud icon--cloud-dark">Rain cloud</div>
          <div class="icon icon--rain icon--rain-1 anim--fall-1">Rain</div>
          <div class="icon icon--rain icon--rain-2 anim--fall-2">Rain</div>
          <div class="icon icon--rain icon--rain-3 anim--fall-3">Rain</div>
        </div>
        <p class="forecast__temperature">
          <span class="forecast__number">12</span>
          <span class="forecast__scale">&#176;C</span>
        </p>
      </li>
      <li class="forecast__item">
        <span class="forecast__day">Wednesday</span>
        <div class="weather">
          <div class="icon icon--cloud anim--expand">Clouds</div>
        </div>
        <p class="forecast__temperature">
          <span class="forecast__number">12</span>
          <span class="forecast__scale">&#176;C</span>
        </p>
      </li>
      <li class="forecast__item">
        <span class="forecast__day">Thursday</span>
        <div class="weather">
          <span class="icon icon--sun icon--sun-small">Sun</span>
          <span class="icon icon--sun-flare icon--sun-flare-small anim--pulse">Sun flare</span>
          <div class="icon icon--cloud icon--cloud-sun anim--bobble">Cloudy with sun</div>
        </div>
        <p class="forecast__temperature">
          <span class="forecast__number">12</span>
          <span class="forecast__scale">&#176;C</span>
        </p>
      </li>
      <li class="forecast__item">
        <span class="forecast__day">Friday</span>
        <div class="weather">
          <div class="icon icon--cloud icon--cloud-dark anim--flash">Storm cloud</div>
          <div class="icon icon--rain icon--rain-1 anim--fall-1">Rain</div>
          <div class="icon icon--rain icon--rain-2 anim--fall-2">Rain</div>
          <div class="icon icon--rain icon--rain-3 anim--fall-3">Rain</div>
        </div>
        <p class="forecast__temperature">
          <span class="forecast__number">12</span>
          <span class="forecast__scale">&#176;C</span>
        </p>
      </li>
      <li class="forecast__item">
        <span class="forecast__day">Saturday</span>
        <div class="weather">
          <div class="icon icon--cloud">Clouds</div>
          <span class="icon icon--snow icon--snow-1 anim--float-down-1">Snow</span>
          <span class="icon icon--snow icon--snow-2 anim--float-down-2">Snow</span>
          <span class="icon icon--snow icon--snow-3 anim--float-down-3">Snow</span>
        </div>
        <p class="forecast__temperature">
          <span class="forecast__number">12</span>
          <span class="forecast__scale">&#176;C</span>
        </p>
      </li>
      <li class="forecast__item">
        <span class="forecast__day">Sunday</span>
        <div class="weather">
          <span class="icon icon--fog icon--fog-1 anim--float-1">Fog</span>
          <span class="icon icon--fog icon--fog-2 anim--float-2">Fog</span>
          <span class="icon icon--fog icon--fog-3 anim--float-1">Fog</span>
          <span class="icon icon--fog icon--fog-4 anim--float-2">Fog</span>
        </div>
        <p class="forecast__temperature">
          <span class="forecast__number">12</span>
          <span class="forecast__scale">&#176;C</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'Forecast',
    mounted() {
      this.$store.dispatch('getForecastsFromAPI');
    },
    computed: {
      getForecasts() {
        return this.$store.getters.getForecasts;
      },
    },
  };
</script>

<style lang="less">
  .forecast {
    background-color: cornflowerblue;

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
      width: 50%;
      box-sizing: border-box;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;

      &:first-child {
        background: rgba(0, 0, 0, 0.1);
      }

      &:nth-child(2) {
        background: rgba(0, 0, 0, 0.2);
      }

      &:nth-child(3) {
        background: rgba(0, 0, 0, 0.3);
      }

      &:nth-child(4) {
        background: rgba(0, 0, 0, 0.4);
      }

      &:nth-child(5) {
        background: rgba(0, 0, 0, 0.5);
      }

      &:nth-child(6) {
        background: rgba(0, 0, 0, 0.6);
      }

      &:last-child {
        width: 100%;
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
    border-color: #444;
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
    background: #fff;
    border-radius: 50%;
    z-index: 1;
  }
  .icon--snow-2 {
    top: 65px;
    left: 45%;
    width: 3px;
    height: 3px;
    background: #fff;
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
    background: #fff;
    border-radius: 50%;
    z-index: 1;
  }
  .icon--fog {
    width: 50px;
    height: 3px;
    background-color: #fff;
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
    -webkit-animation: fade--2 3000ms  infinite;
    animation: fade--2 3000ms  infinite;
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
