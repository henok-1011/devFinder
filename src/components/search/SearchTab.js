import "./styles.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../App";

export default function SearchTab() {
  const { data, result, userName, setUserName } = useContext(ThemeContext);
  const [name, setName] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setUserName(name);
    clear()
  }
  function clear(){
    setName("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="container search">
        <div className="input">
          <span className="material-symbols-outlined">search</span>{name.length!==0?
          <span onClick={clear} className="close material-symbols-outlined">close</span>
          :""}
          <input 
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Search Github UserName..."
          />
        </div>
        <h4 style={{ color: "red", margin: "10px" }}>
          {data === "No data" ? "No result" : ""}
        </h4>
        <button type="submit">Search</button>
      </div>{" "}
    </form>
  );
}
