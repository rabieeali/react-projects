import  Card  from '../components/card/Card'
import Spinner from '../components/spinner/Spinner'
import useAxios from '../hooks/useAxios'
import { useParams } from 'react-router-dom'

const CountryPage = () => {
    const { name } = useParams()
    const { loading, cntry } = useAxios(name)

    if (loading) {
        return (<Spinner absoluteCenter />)
    }
    if (!cntry) {
        return <p>Country not found</p>
    }
    return (
        <main className='flex justify-center mt-5'>
            <Card cntry={cntry[0]} />
        </main>
    )
}

export default CountryPage