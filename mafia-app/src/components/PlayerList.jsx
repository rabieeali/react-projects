import { useSelector, useDispatch } from 'react-redux'
import { selectPeople, deletePerson } from '../features/NamesSlice'


const PlayerList = ({ id, player }) => {

    const players = useSelector(selectPeople)
    const dispatch = useDispatch()

    const deletePlayerHandler = (id) => {
        dispatch(deletePerson(id))
    }
    console.log(players)


    return (
        <article style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <p>{player}</p>
            <button onClick={() => deletePlayerHandler(id)}>X</button>
        </article>

    )
}

export default PlayerList