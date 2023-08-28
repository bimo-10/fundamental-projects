import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import Button from "./Button";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  // useState untuk data dan index data
  const [datas, setDatas] = useState([]);
  const [index, setIndex] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  // useEffect buat fetching data
  useEffect(() => {
    // async function buat fetching data
    async function fetchData() {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setDatas(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // buat kondisi loading
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // console.log(datas);

  return (
    <div>
      <Button datas={datas} setIndex={setIndex} />
      <JobInfo datas={datas} index={index} />
    </div>
  );
};
export default App;
