import { useSelector, useDispatch } from 'react-redux'
import { addPerson, selectPeople } from '../features/NamesSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import PlayerList from '../components/PlayerList'
import { useNavigate } from 'react-router-dom'

const EnterNames = () => {
  const [player, setPlayer] = useState('')

  const people = useSelector(selectPeople)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const makePersonObject = (name) => ({ id: nanoid(), name })

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addPerson(makePersonObject(player)))
    setPlayer('')
  }


  return (
    <section>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <form onSubmit={submitHandler}>
          <input
            value={player}
            onChange={e => setPlayer(e.target.value)}
            placeholder="نام پلیر را وارد کنید"
          />
          <button type='submit'>تایید</button>
        </form>

        {people.length >= 3 && (<button onClick={() => navigate('/select-roles')}>انتخاب نقش</button>)}
      </div>
      {people && people.map((p) => (<PlayerList key={p.id} id={p.id} player={p.name} />))}

    </section>
  )
}

export default EnterNames