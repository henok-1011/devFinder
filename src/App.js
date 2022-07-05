import "./styles.css";
import Header from "./components/Header/Header";
import SearchTab from "./components/search/SearchTab";
import Result from "./components/Result/Result";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ThemeContext = createContext(null);
export default function App() {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState("");
  const [result, setResult] = useState({});
  const [userName, setUserName] = useState("octocat");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((res) => setResult(res.data), setData(""))
      .catch((err) => {
        setData("No data"), console.log(err);
      });
  }, [userName]);
  console.log(result);

  return (
    <ThemeContext.Provider
      value={{ data, theme, toggleTheme, result, setUserName }}
    >
      <div className="App" id={theme}>
        <div className="container">
          <Header />
          <SearchTab />
          <Result />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
