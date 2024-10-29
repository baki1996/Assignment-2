import { CountryDetailProps } from "@../../../types/types";
import Link from "next/link";

const CountryDetail: React.FC<CountryDetailProps> = ({ name, population, capital }) => {
  return (
    <div className="text-center m-10 bg-lime-300 rounded-lg">
      <div className="text-white text-center text-xl p-4">
        <h1 className="m-4">Name: {name}</h1>
        <h1 className="m-4">Population: {population}</h1>
        <h1 className="m-4">Capital: {capital}</h1>
        <Link href="/country" className="m-2 p-3 bg-purple-400 rounded-md text-base ">
        Back to Country List
      </Link>
      </div>
    </div>
  );
};

export default CountryDetail;