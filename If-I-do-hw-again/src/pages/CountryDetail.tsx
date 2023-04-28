import { useParams } from 'react-router-dom';
import useCountry from '../hooks/useCountry';
import CountryCard from '../components/CountryCard';

const CountryDetail = () => {
  const { name } = useParams();
  const ctry = useCountry(name!);
  console.log(ctry);
  return (
    <>
      <CountryCard
        name={ctry.country.name.common}
        image={ctry.country.flags[0]}
        continent={ctry.country.continents}
      />
      {/* <h1></h1> */}
    </>
  );
};

export default CountryDetail;
