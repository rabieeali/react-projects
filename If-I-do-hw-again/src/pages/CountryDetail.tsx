import { useParams } from 'react-router-dom';
import useSwr from 'swr';
import CountryCard from '../components/CountryCard';
import { Box, SimpleGrid, Skeleton } from '@chakra-ui/react';

const CountryDetail = () => {
  const { name } = useParams();
  const { data, isLoading, error } = useSwr(`/name/${name}`);

  const country = data?.at(0);

  if (isLoading) {
    return (
      <>
        <SimpleGrid w={'container.xl'} columns={[1, 2, 3, 4]} spacing='1rem'>
          {[...Array(1)].map((_, index) => (
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
      </>
    );
  }

  if(error){
    return (<p>error happend</p>)
  }
  return (
    <>
      <CountryCard
        name={country?.name?.common}
        image={country.flags[0]}
        continent={country.continents}
      />
    </>
  );
};

export default CountryDetail;
