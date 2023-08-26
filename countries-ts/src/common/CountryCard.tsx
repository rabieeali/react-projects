import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FlagIcon, PersonIcon } from './Icons';

const CountryCard = ({
  flags,
  name,
  population,
  continents,
  maps,
  hasGoogleMap = false,
}: Country & { hasGoogleMap: boolean }) => {
  return (
    <>
      <Card className='h-100 bg-light p-2'>
        <Card.Img
          style={{ height: '10rem' }}
          className='shadow rounded border'
          variant='top'
          src={flags.png}
          alt={flags.alt}
        />
        <Card.Body className=' d-flex flex-column'>
          <Card.Title className='fw-bold'>{name.common}</Card.Title>
          <Card.Text className='d-flex align-items-center gap-1'>
            <PersonIcon /> {population}
          </Card.Text>
          <Card.Text className='d-flex align-items-center gap-1'>
            <FlagIcon />
            {continents.map((item) => item)}
          </Card.Text>
          <Link
            to={`${
              hasGoogleMap ? maps?.googleMaps : `/country/${name?.common}`
            }`}
            className='mt-auto'>
            <Button variant='primary' className='text-white'>
              Learn More
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CountryCard;
