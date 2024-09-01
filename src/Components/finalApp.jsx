import styles from "../styles";
import AboutApp from "./aboutApp";
import Input from "./input";
import JokeSection from "./joke-section/JokeSection";
import Navbar from "./Navbar/nav";


function Finalapp() {
  
  return (
    <div className={styles.finalApp}>
      <Navbar/>
      <AboutApp/>
      <Input/>
      <JokeSection/>
    </div>
  );
}

export default Finalapp;
