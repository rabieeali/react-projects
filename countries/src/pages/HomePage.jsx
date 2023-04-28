import { useContext } from "react";
import Card from "../components/card/Card"
import useAxios from "../hooks/useAxios"
import { v4 as uuidv4 } from 'uuid';
import { RegionContext } from '../context/CounteryProvider'
import Spinner from "../components/spinner/Spinner";

const HomePage = () => {
    const { selectedRegion } = useContext(RegionContext);
    const { allCntrs, loading } = useAxios(null, selectedRegion)

    if (loading) {
        return (<Spinner absoluteCenter />)
    }

    return (
        <main className="grid grid-cols-4 gap-4 container px-10 mx-auto my-5">
            {allCntrs?.map(cntry => (<Card hasLink key={uuidv4()} cntry={cntry} />))}
        </main>
    )
}

export default HomePage