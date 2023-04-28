import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Props {
  image: string;
  name: string;
  continent: string[];
}

const CountryCard = ({ image, continent, name }: Props) => {
  return (
    <Link to={`counrty/${name}`}>
      <Card height='100%' maxW='sm'>
        <CardBody>
          <Image
            shadow='md'
            width='100%'
            height='70%'
            src={image}
            alt={name}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>
            <Text>Continent : {continent[0]}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CountryCard;
