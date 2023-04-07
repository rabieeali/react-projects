import { nanoid } from "@reduxjs/toolkit"
import { useState } from "react"

import { useSelector, useDispatch } from 'react-redux'
import { selectPeople } from '../features/NamesSlice'

import { useNavigate } from 'react-router-dom'
import { addRole } from "../features/NamesSlice"

const SelectRoles = () => {

  const people = useSelector(selectPeople)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const roles = [

    { id: nanoid(), role: 'شهروند ساده', side: '1', selected: false },
    { id: nanoid(), role: 'دکتر', side: '1', selected: false },
    { id: nanoid(), role: 'کاراگاه', side: '1', selected: false },
    { id: nanoid(), role: 'اسنایپر', side: '1', selected: false },
    { id: nanoid(), role: 'نگهبان', side: '1', selected: false },
    { id: nanoid(), role: 'تفنگدار', side: '1', selected: false },
    { id: nanoid(), role: 'مافیا ساده', side: '2', selected: false },
    { id: nanoid(), role: 'رییس مافیا', side: '2', selected: false },
    { id: nanoid(), role: 'خرابکار', side: '2', selected: false }

  ]

  const [items, setItems] = useState(roles)


  const handleCheckboxClick = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, selected: !item.selected };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  };

  const handleButtonClick = () => {
    const selectedItems = items.filter((item) => item.selected);

    if (people.length !== selectedItems.length) {
     return alert('تعداد پلیرا با نقشا برابر نیست')
    }
    dispatch(addRole(selectedItems))
    navigate('/have-roles')
  };


  return (
    <section>
      <article>
        <h1>نقش ها</h1>
        <div>
          {items.map(item => (
            <div key={item.id}>
              <label
                style={item.side == 1 ? { color: 'blue' } : { color: 'red' }}
                htmlFor={item.id}> {item.role}
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleCheckboxClick(item.id)}
                  id={item.id}
                />
              </label>
            </div>
          ))}
        </div>
      </article>
      <br />
      <button onClick={handleButtonClick}>درست 👍</button>
    </section >
  )
}

export default SelectRoles