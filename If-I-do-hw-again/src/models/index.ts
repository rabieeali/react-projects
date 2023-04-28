interface Name {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      common: string;
      official: string;
    };
  };
}

interface Currencies {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Languages {
  [key: string]: string;
}

interface Translations {
  [key: string]: {
    official: string;
    common: string;
  };
}

interface Demonyms {
  [key: string]: {
    f: string;
    m: string;
  };
}

interface Car {
  signs: string[];
  side: string;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface ICountry {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: string[];
}

export interface CountriesError {
  message: string;
}
