const COUNTRY_NAMES = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Dutch Guilders",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudian Dollar",
  BND: "Bruneian Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  BTN: "Bhutanese Ngultrum",
  BWP: "Botswanan Pula",
  BZD: "Belizean Dollar",
  CAD: "Canadian Dollar",
  CDF: "Congolese Franc",
  CHF: "Swiss Franc",
  CLF: "Chilean Unit of Account UF",
  CLP: "Chilean Peso",
  CNH: "Chinese Yuan Offshore",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CZK: "Czech Republic Koruna",
  DJF: "Djiboutian Franc",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr",
  //   EUR: "Euro",
  FJD: "Fijian Dollar",
  FKP: "Falkland Islands Pound",
  GBP: "British Pound Sterling",
  GEL: "Georgian Lari",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanaese Dollar",
  HKD: "Hong Kong Dollar",
  HNL: "Honduran Lempira",
  HRK: "Croatian Kuna",
  HTG: "Haitian Gourde",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  INR: "Indian Rupee",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: "Icelandic Krona",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KGS: "Kyrgystani Som",
  KHR: "Cambodian Riel",
  KMF: "Comorian Franc",
  KPW: "North Korean Won",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  KYD: "Caymanian Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Laotian Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee",
  LRD: "Liberian Dollar",
  LSL: "Basotho Maloti",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Myanma Kyat",
  MNT: "Mongolian Tugrik",
  MOP: "Macanese Pataca",
  MRU: "Mauritanian Ouguiya",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  NOK: "Norwegian Krone",
  NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Nuevo Sol",
  PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Zloty",
  PYG: "Paraguayan Guarani",
  QAR: "Qatari Rial",
  RON: "Romanian Leu",
  RSD: "Serbian Dinar",
  RUB: "Russian Ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi Arabian Riyal",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  SHP: "Saint Helena Pound",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  SYP: "Syrian Pound",
  SZL: "Swazi Emalangeni",
  THB: "Thai Baht",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar",
  TOP: "Tongan Pa'anga",
  TRY: "Turkish Lira",
  TTD: "Trinidad and Tobago Dollar",
  TWD: "Taiwan New Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  USD: "United States Dollar",
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistan Som",
  VND: "Vietnamese Dong",
  VUV: "Ni-Vanuatu Vatu",
  WST: "Samoan Tala",
  //   XAF: "CFA Franc BEAC",
  //   XCD: "East Caribbean Dollar",
  //   XDR: "Special Drawing Rights",
  //   XOF: "CFA Franc BCEAO",
  //   XPF: "CFP Franc",
  YER: "Yemeni Rial",
  ZAR: "South African Rand",
  ZMW: "Zambian Kwacha",
};

let countryNames = Object.entries(COUNTRY_NAMES);
//  big array include mini arrays ,but the keys is string "key"
// ex :
// [
//   ["am", "amarat"], --> index 0 include [index 0 , index 1] "nested array"
//   ["eg", "egypt"], -->index 1  ........................................
// ];
let firstSelect = document.querySelector(".firstSelect");
let flagAndCountyFirst = document.querySelector(".flagAndCountyFirst");
let secSelect = document.querySelector(".secSelect");
let flagAndCountySec = document.querySelector(".flagAndCountySec");

countryNames.forEach((country) => {
  let keyTheCountry = country[0];
  let valueTheCountry = country[1];

  let firstOption = `<option value="${keyTheCountry}" class="text-light fw-medium">${keyTheCountry} || ${valueTheCountry}</option>`;
  //   console.log(firstOption);
  firstSelect.innerHTML += firstOption;

  let secOption = `<option value="${keyTheCountry}" class="text-light fw-medium">${keyTheCountry} || ${valueTheCountry}</option>`;
  secSelect.innerHTML += secOption;
});

let flagFirst = document.querySelector(".flagFirst");
let flagSec = document.querySelector(".flagSec");

firstSelect.addEventListener("click", () => {
  let firstSelectImg = firstSelect.value.slice(0, 2);
  flagFirst.src = `https://flagsapi.com/${firstSelectImg}/shiny/32.png`;
});

secSelect.addEventListener("click", () => {
  let secSelectImg = secSelect.value.slice(0, 2);
  flagSec.src = `https://flagsapi.com/${secSelectImg}/shiny/32.png`;
});

let btnTransformFlag = document.querySelector(".transformFlag");
btnTransformFlag.addEventListener("click", () => {
  let swap = firstSelect.value;
  firstSelect.value = secSelect.value;
  secSelect.value = swap;
  let swapImg = flagFirst.src;
  flagFirst.src = flagSec.src;
  flagSec.src = swapImg;
});

// https://v6.exchangerate-api.com/v6/0d7ab351acf602c2ac0b150a/latest/USD
// USD --> the country to convert from

let btnConvert = document.querySelector(".btnConvert");
let input = document.querySelector(".inpt");
let nameCountryFrom = document.querySelector(".keyCountryFrom");
let nameCountryTo = document.querySelector(".keyCountryTo");
let moneyAmount = document.querySelector(".CountryFromMoney");
let moneyConvert = document.querySelector(".countryToMoney");

btnConvert.addEventListener("click", () => {
  let valueFirstCountry = firstSelect.value;
  let valueSecCountry = secSelect.value;
  nameCountryFrom.innerHTML = valueFirstCountry;
  nameCountryTo.innerHTML = valueSecCountry;
  fetch(
    `https://v6.exchangerate-api.com/v6/0d7ab351acf602c2ac0b150a/latest/${valueFirstCountry}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let money = data.conversion_rates[valueSecCountry].toFixed(2);
      if (input.value.length === 0 || isNaN(input.value)) {
        moneyConvert.innerHTML = money;
      } else {
        moneyAmount.innerHTML = input.value;
        moneyConvert.innerHTML = money * input.value;
      }
    });
});
