import "./styles.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function Result() {
  const { result, setUserName } = useContext(ThemeContext);
  return (
    <div className="container result">
      <img src={result.avatar_url} alt="profile pic" />
      <div className="head">
        <div className="name">
          <h1>{result.name === null ? "null" : result.name}</h1>
          <h3 style={{ color: "#0079ff", fontWeight: "400" }}>
            @{result.login}
          </h3>
        </div>
        <h3>Joined {result.created_at?.split("T")[0]}</h3>
        <h4>{result.bio == null ? "This paga has no bio" : result.bio}</h4>
        <div className="stats">
          <h3>
            Repos
            <br />
            {result.public_repos}
          </h3>
          <h3>
            Followers
            <br />
            {result.followers}
          </h3>
          <h3>
            Following
            <br />
            {result.following}
          </h3>
        </div>
        <div className="socials">
          <h3>
            <span class="material-symbols-outlined">pin_drop</span>
            {result.location === null
              ? " Not available"
              : " " + result.location}
          </h3>
          <h3>
            <span class="material-symbols-outlined">link</span>
            {result.blog === "" ? " Not available" : " " + result.blog}
          </h3>
        </div>
        <div className="socials"></div>
        <div className="socials">
          <h3>
            <span class="material-symbols-outlined">flutter_dash</span>
            {result.twitter_username === null
              ? " Not available"
              : " " + result.twitter_username}
          </h3>
          <h3>
            <span class="material-symbols-outlined">apartment</span>
            {result.company === null ? " Not available" : " " + result.company}
          </h3>
        </div>
        <div className="socials"></div>
      </div>
    </div>
  );
}
