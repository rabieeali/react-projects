import { shuffle } from "lodash";
import { selectPeople, selectRoles, setFinalRoles } from '../features/NamesSlice'
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";

import { useNavigate } from 'react-router-dom'

const HaveRoles = () => {

  const players = useSelector(selectPeople)
  const roles = useSelector(selectRoles)

  const dispatch = useDispatch()

  const [people, setPeople] = useState(players)
  const [gameRoles, setGameRoles] = useState(roles)
  const [show, setShow] = useState(false)

  const navigate = useNavigate()


  const handleStartGame = () => {
    const shuffledRoles = shuffle(gameRoles);

    const updatedPeople = people.map((person, index) => ({
      name: person.name,
      role: shuffledRoles[index].role,
    }));

    setPeople(updatedPeople);
    dispatch(setFinalRoles(updatedPeople))

    setShow(pre => !pre)
  };

  console.log(people)


  const playerRef = useRef()

  const seeRoleHandler = (role) => {
    const filteredPlayers = people.filter(p => p.role !== role)
    setPeople(filteredPlayers)

    alert(role)
  }
  if (people.length == 0) {
    return (
      <button onClick={() => navigate('/director')}>برو به صفحه گرداننده</button>
    )
  }

  return (
    <div>

      {show ? (<div>
        {people.map((p, i) => (<button ref={playerRef} key={i} onClick={() => seeRoleHandler(p.role)}>{p.name}</button>)
        )}
      </div>) : (<button onClick={handleStartGame}>نقش ها رو بده</button>)}
    </div>
  )
}

export default HaveRoles