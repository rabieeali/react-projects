import { useState, useEffect, useContext } from 'react';
import useAxios from '../../hooks/useAxios';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { RegionContext } from '../../context/CounteryProvider';

import { useLocation } from 'react-router-dom';
import Spinner from '../spinner/Spinner';

const Navbar = () => {
    const { selectedRegion, setSelectedRegion } = useContext(RegionContext);

    const { pathname } = useLocation()


    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [region] = useState(selectedRegion);


    const { loading, cntry, err } = useAxios(debouncedSearchTerm)


    useEffect(() => {
        const timerId = setTimeout(() => {
            if (searchTerm.length > 2) {
                setDebouncedSearchTerm(searchTerm);
            }
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);


    return (
        <nav className="bg-slate-800 w-full mx-auto flex justify-between items-center h-[60px] px-10">
            <Link to='/' className="text-blue-200 font-extrabold text-2xl">CountriesApp</Link>
            <div className="relative">
                <input
                    className="focus:ring ring-1 outline-0 rounded w-[400px] p-1 text-gray-500"
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder='Search...'
                />
                {searchTerm.length > 2 && <div className="bg-gray-100 p-2 rounded absolute top-[110%] w-full">

                    {loading ? (
                        <Spinner small />
                    ) : err ? (
                        <p>Not Found!</p>
                    ) : (
                        <>
                            {cntry?.map(item => (
                                <Link key={uuidv4()} to={`/country/${item.name.common}`} target="_blank">
                                    <div>{item.name.common}</div>
                                </Link>
                            ))}
                        </>
                    )}
                </div>}
            </div>
            <>
            </>
            {
                pathname === '/' ? <div>
                    <select
                        value={region}
                        onChange={e => setSelectedRegion(e.target.value)}
                        className='focus:ring ring-1 outline-0 rounded py-1 px-3 text-gray-500'
                    >
                        <option value="">All</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="africa">Africa</option>
                        <option value="oceania">Oceania</option>
                        <option value="america">America</option>
                        <option value="antarctic">Antarctic</option>
                    </select>
                </div> : <div></div>
            }
        </nav >
    );
};

export default Navbar;
