/* eslint-disable */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCountries, fetchCountry } from '@/app/features/countrySlice';
import { AppDispatch } from '@/app/store';
import Layout from '@/shared/Layout';
import CountryCard from '@/common/CountryCard';

const SingleCountryPage = () => {
  const { name: country_name } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const { country, error, loading } = useSelector(selectCountries);

  useEffect(() => {
    if (country_name) {
      dispatch(fetchCountry(country_name));
    }
  }, [dispatch, country_name]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>error: {error}</p>;

  return (
    <Layout>
      <CountryCard
        flags={country?.flags}
        name={country?.name}
        population={country?.population}
        continents={country?.continents}
        maps={country?.maps?.googleMaps}
        hasGoogleMap
      />
    </Layout>
  );
};

export default SingleCountryPage;
