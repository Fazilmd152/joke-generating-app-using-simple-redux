import { ClipLoader, BeatLoader, HashLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loading() {
  return (
    <>
     <ClipLoader
     color="white"
     size={30}
     />
    </>
  );
}



export default Loading;




//: CSSProperties


// <HashLoader
// color="green"
// loading={true}
// cssOverride={override}
// size={40}
// aria-label="Loading Spinner"
// data-testid="loader"
// />