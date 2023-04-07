
import { useSelector } from "react-redux";
import { selectFinalRoles } from "../features/NamesSlice";



const Director = () => {

  const final = useSelector(selectFinalRoles)

  console.log(final)

  return (
    <ol>{final.map((f, i) => (<li key={i}>{f.name} : {f.role}</li>))}</ol>
  )
}

export default Director