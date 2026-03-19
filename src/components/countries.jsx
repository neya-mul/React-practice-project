import { use } from "react";
import Country from "./country";

export default function Countries({ allCountries }) {
  const useCountriesData = use(allCountries)
  const useCountries = useCountriesData.countries
  // console.log(useCountries);

  return (
    <div className="text-center space-y-4">
      <h1 className="text-5xl font-bold">All countries:</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {
          useCountries.map(country => <Country country={country} ></Country>)
        }
      </div>
    </div>
  );
}

