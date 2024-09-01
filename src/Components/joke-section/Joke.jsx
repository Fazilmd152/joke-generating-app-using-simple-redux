import { useSelector } from "react-redux";
import styles from "../../styles";

function Joke(props) {
  const joke = useSelector(function (state) {
    return state.joke.joke;
  });
  const { setShowAL, showAL } = props;

  if (joke.includes("Error 404")) {
    setShowAL(true);
  } else {
    setShowAL(false);
  }
 
  return (
    <>
      <h1 className={showAL ? styles.jokeS2 : styles.jokeS1}>{joke+"😊😂"}</h1>
    </>
  );
}

export default Joke;
