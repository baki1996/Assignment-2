import { CountryDetailProps } from "@../../../types/types";
import CountryDetail from "@/app/components/CountryDetails";

const CountryName = ({ params }: { params: { country_name: string } }) => {
  const countryDetails: CountryDetailProps[] = [
    {
      name: "Pakistan",
      capital: "Islamabad",
      population: "241 million",
    },
    {
      name: "South Korea",
      capital: "Seoul",
      population: "51.7 million",
    },
    {
      name: "United Kingdom",
      capital: "London",
      population: "9 million",
    },
    {
      name: "Turkey",
      capital: "Ankara",
      population: "86.6 million",
    },
    {
      name: "France", 
      capital: "Paris",
      population: "2.2 million",
    },
  ];

  const country = countryDetails.find(
    (c) => c.name.toLowerCase() === params.country_name.replace(/_/g, " ").toLowerCase() 
  );

  if (!country) {
    return (
      <h1 className="text-white text-center text-2xl">Country Not Found!</h1>
    );
  }

  return (
    <div>
      <CountryDetail
        name={country.name}
        population={country.population}
        capital={country.capital}
      />
    </div>
  );
};

export default CountryName;