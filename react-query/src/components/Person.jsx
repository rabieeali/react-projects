
export default function Person({name, hairColor, eyeColor}) {
  return (
    <div className='col-9 offset-2 card p-1'>
        <p>name: {name}</p>
        <p>hair color: {hairColor}</p>
        <p>eye color: {eyeColor}</p>
    </div>
  )
}
