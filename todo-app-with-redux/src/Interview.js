import { useState, useEffect } from "react";
import { getUser } from "./services/getUser";

const Interview = () => {
  const [user, setUser] = useState([]);
  const [pageNumber, setPageNumer] = useState(1);


  const fetchData = async () => {
    try {
      const data = await getUser();
      const result = await data.data.results;
      setUser(result);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const seeMore = () => {
    setPageNumer((prevState) => prevState + 1);
  };

  useEffect(() => {
    fetchData();
  }, [pageNumber]);

  return (
    <div>
      <button onClick={seeMore}>See More!</button>
      <hr />
      {user &&
        user.map((u) => (
          <>
            <pre>{JSON.stringify(u)}</pre>
            <img src={u.picture.thumbnail} alt="avatar" />
            <h5>{`${u.name.title} ${u.name.first} ${u.name.last}`}</h5>
            <p>cellphone : {u.cell}</p>
            <p>gender : {u.gender}</p>
          </>
        ))}
    </div>
  );
};
export default Interview;
