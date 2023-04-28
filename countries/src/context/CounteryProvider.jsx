import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const RegionContext = createContext();

export default function CounteryProvider({ children }) {
    const [selectedRegion, setSelectedRegion] = useState(null);

    return (
        <RegionContext.Provider value={{ selectedRegion, setSelectedRegion }}>
            {children}
        </RegionContext.Provider>
    );
}

CounteryProvider.propTypes = {
    children: PropTypes.node.isRequired,
};