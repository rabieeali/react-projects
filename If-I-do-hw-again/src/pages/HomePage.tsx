import {
  Alert,
  AlertIcon,
  AlertTitle,
  SimpleGrid,
  Skeleton,
  Box,
} from '@chakra-ui/react';
import CountryCard from '../components/CountryCard';
import { v4 as uuidv4 } from 'uuid';
import { Container } from '@chakra-ui/react';
import useSwr from 'swr';
import { Country } from '../types';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { data: countries, isLoading, error } = useSwr('/all');

  let content;

  const skeletonLoading = (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing='1rem'>
      {[...Array(12)].map((_, index) => (
        <Box
          borderRadius='lg'
          padding='6'
          boxShadow='lg'
          bg='white'
          key={index}>
          <Skeleton height='175px' width='100%' />
          <Box
            display='flex'
            flexDirection='column'
            width='100%'
            gap='1rem'
            margin='1rem 0'>
            <Skeleton height='20px' width='100%' />
            <Skeleton height='20px' width='100%' />
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );

  if (isLoading) {
    content = skeletonLoading;
  } else if (error) {
    content = (
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Oops! Something Went Wrong</AlertTitle>
      </Alert>
    );
  } else {
    content = (
      <SimpleGrid columns={[1, 2, 3, 4]} spacing='1rem'>
        {countries?.map((item: Country) => (
          <Link to={`counrty/${item.name.common}`}>
            <CountryCard
              key={uuidv4()}
              name={item.name.common}
              image={item.flags[1]}
              continent={item.continents}
            />
          </Link>
        ))}
      </SimpleGrid>
    );
  }

  return <Container maxW={'container.xl'}>{content}</Container>;
};

export default HomePage;
