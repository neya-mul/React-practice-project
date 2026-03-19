import { use } from "react";
import Country from "./country";

export default function Countries({ allCountries }) {
    const useCountriesData = use(allCountries)
    const useCountries = useCountriesData.countries
    // console.log(useCountries);

    return (
        <div>
            {/* <h1>Neyamul</h1> */}
          {
            useCountries.map(country=> <Country  country={country}></Country>)
          }
        </div>
    );
}

