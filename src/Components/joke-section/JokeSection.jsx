import { useSelector } from "react-redux";
import { useState } from "react";
import JokeCategories from "./JokeCategories";
import Joke from "./Joke"
import styles from "../../styles";

function JokeSection() {
  const [showAL, setShowAL] = useState(false);

  const loading = useSelector((state) => {
    return state.joke.loading;
  });

  return (
    <div className={styles.jokeSection}>
      {!loading ? <Joke setShowAL={setShowAL} showAL={showAL} /> :""}
      
      {showAL ? <JokeCategories /> : ""}
      
    </div>
  );
}

export default JokeSection;
//





// <div className={styles.jokeSection}>
// {{!loading ? <Joke setShowAL={setShowAL} showAL={showAL} /> : <Loading />} }
// { <Loading /> }
// {showAL ? <JokeCategories /> : ""}

// </div>