import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Section from "./components/Section";
import Main from "./components/Main";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--deliveroo--gtvcqmjhzbt4.code.run/"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <Header />
      <Section data={data} />
      <Main data={data} setData={setData}/>
    </>
  );
}

export default App;
