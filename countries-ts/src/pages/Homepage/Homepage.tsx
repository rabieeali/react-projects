import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCountries,
  fetchCountries,
} from '@/app/features/countrySlice';
import { AppDispatch } from '@/app/store';
import { Layout } from '@/shared/index';
import CountryCard from '@/common/CountryCard';

const Homepage = () => {
  const { countries, error, loading } = useSelector(selectCountries);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>error: {error}</p>;

  return (
    <>
      <Layout>
        <Row className='g-3'>
          {countries.map((item) => (
            <Col md='3' key={item.name.common}>
              <CountryCard
                flags={item.flags}
                name={item.name}
                population={item.population}
                continents={item.continents}
                maps={item?.maps?.googleMaps}
              />
            </Col>
          ))}
        </Row>
      </Layout>
    </>
  );
};

export default Homepage;
