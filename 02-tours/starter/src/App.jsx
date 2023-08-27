import { useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  // useState API tours
  const [tours, setTours] = useState([]);

  // toggle loading
  const [isLoading, setIsLoading] = useState(false);

  // fetching data
  useState(() => {
    // set isLoading true
    setIsLoading(true);

    // buat function untuk menampilkan data
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        console.log(resp);

        // buat kondisi jika !resp.ok
        if (!resp.ok) {
          return <h1>Error</h1>;
        }

        const data = await resp.json();
        console.log(data);

        setTours(data);
      } catch (error) {
        console.log(error);
      }
      // set isLoading false
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // handle remove
  const handleRemove = (id) => {
    const newTour = tours.filter((tour) => {
      return tour.id !== id;
    });
    console.log(newTour);
    setTours(newTour);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <Tours tours={tours} handleRemove={handleRemove} />
    </main>
  );
};
export default App;
