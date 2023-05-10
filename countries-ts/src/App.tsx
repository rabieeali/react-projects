import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ThemeSelect, { themeMap } from '@/shared/ThemeSelect';
import { selectCurrentTheme } from '@/app/features/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCountries, fetchCountries } from '@/app/features/countrySlice';
import { AppDispatch } from '@/app/store';
import { Container } from 'react-bootstrap';


const App = () => {
  const theme = useSelector(selectCurrentTheme)
  const { countries, error, loading } = useSelector(selectAllCountries)
  const dispatch = useDispatch<AppDispatch>()


  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  if (loading) return (<p>Loading ...</p>)
  if (error) return (<p>error: {error}</p>)


  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>My React App</title>
        <link rel="stylesheet" href={themeMap[theme]} />
      </Helmet>
      <div className='w-25'>
        <ThemeSelect />
      </div>
      <Container>
        {countries.map(item => (<p key={item.name.common}>{item.name.common}</p>))}
      </Container>

    </>
  )
}

export default App