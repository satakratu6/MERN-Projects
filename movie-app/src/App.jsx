import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [b, changeB] = useState(15);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=74d1497e46aa656bd705735116ec0fa8";

    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data.results))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <button onClick={() => changeB((b) => b + 1)}>b is {b}</button>
      </div>
    </>
  );
}

export default App;
