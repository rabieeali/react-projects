import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    names: [],
    roles: [],
    finalRoles: []
}

const NamesSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        addPerson: (state, action) => ({ ...state, names: [...state.names, action.payload] }),

        deletePerson: (state, action) => {
            const filteredPlayers = state.names.filter(p => (p.id !== action.payload))
            console.log('ina', filteredPlayers)
            return { ...state, names: filteredPlayers }
        },

        addRole: (state, action) => ({ ...state, roles: action.payload }),
        setFinalRoles: (state, action) => ({ ...state, finalRoles: action.payload })
    }
});

export const selectPeople = state => state.people.names
export const selectRoles = state => state.people.roles
export const selectFinalRoles = state => state.people.finalRoles

export const { addPerson, deletePerson, addRole, setFinalRoles } = NamesSlice.actions

export default NamesSlice.reducer