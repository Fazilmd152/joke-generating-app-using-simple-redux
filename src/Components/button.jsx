import { useDispatch } from "react-redux";
import { fetchJoke } from "../JokeSlice";
import styles from "../styles";
import { ClipLoader } from "react-spinners";
import Loading from "./joke-section/loading";
import { useSelector } from "react-redux"


function Button(props) {

  const { category, buttonName, setButtonName,setCategory ,setValid} = props;

  const dispatch = useDispatch();



  function click() {
    if(category.length>0){
    dispatch(fetchJoke(category));
    console.log(category);
    setCategory("")
    setValid(false)
  }
  if(category.length===0){
setValid(true)
  }
  }


  if (category === "") {
    setButtonName(true);
  }

  const loading = useSelector((state) => {
    return state.joke.loading;
  });



  const bName =
    category.length > 15 ? category.substring(0, 14) + " . . ." : category;

  


  return (
    <>
 
      <button
        onClick={click}
        className={!loading?styles.button:styles.button2}
      >
        {!loading?buttonName ? "Get Random" : "Get From " + bName:<Loading/>}
      </button>
    </>
  );
}

export default Button;

//











// const regex = /^(?=.[A-Za-z0-9]).$/ 
// const isValid = regex.test(category)