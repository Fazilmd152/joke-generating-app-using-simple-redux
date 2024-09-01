import { useState } from "react";
import Button from "./button";
import styles from "../styles";


function Input() {
  const [category, setCategory] = useState("");
  const [buttonName, setButtonName] = useState(true);
  const [Valid,setValid]=useState(false)

  function handleInput(e) {
    setButtonName(false);
    setCategory(e.target.value);
    console.log(typeof category);
  }

  return (
    <div className={styles.inputDiv}>
      <input
        value={category}
        onChange={handleInput}
        type="text"
        placeholder="Enter a category ..."
        className={styles.input}
      />

{Valid?<p className={styles.valid}>Please enter a category . . .</p>:""}

      <Button
        category={category.toLowerCase()}
        setCategory={setCategory}
        buttonName={buttonName}
        setButtonName={setButtonName}
        setValid={setValid}
      />
    </div>
  );
}

export default Input;
