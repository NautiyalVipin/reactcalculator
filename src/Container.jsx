

// ------------------------ Container Functional Component --------------------------

const Container = (props) => {
  const { input, setInput } = props;
  // Array Buttons Text
  const inputArray = ["C","+/-","BS","/",7, 8,9,"*",4,5,6,"-",1,2,3,"+",0,".","=",];

// Mapping over inputArray list and adding respective event listeners according to the values
  return inputArray.map((e) => {
    switch (e) {
    //   Calculating value using "eval" function and displaying on the screen
    case "=":
        return (
          // eslint-disable-next-line 
          <div onClick={() => (input ? setInput(eval(input).toString()) : "")}>
            <p>{e}</p>
          </div>
        );
    //  Toggling the number to negative/positive
      case "+/-":
        return (
          <div
            onClick={() => {
              let inputNumber = -1 * parseInt(input);
              // eslint-disable-next-line 
              inputNumber ? setInput(eval(inputNumber).toString()) : "";
            }}
          >
            <p>{e}</p>
          </div>
        );
    // Clearing the calculator screen 
      case "C":
        return (
          <div onClick={() => setInput("")}>
            <p>{e}</p>
          </div>
        );
    // Mulitply 
      case "*":
        return (
          <div onClick={() => setInput((value) => value + e)}>
            <p>&times;</p>
          </div>
        );
    // Divide 
      case "/":
        return (
          <div onClick={() => setInput((value) => value + e)}>
            <p>&divide;</p>
          </div>
        );
    // removing last number/character from input  
      case "BS":
        return (
          <div
            onClick={() =>
              setInput((value) => value.substr(0, value.length - 1))
            }
          >
            <i class="fa-solid fa-delete-left"></i>
          </div>
        );
    // For all the numbers in input array 
      default:
        return (
          <div onClick={() => setInput((value) => value + e)}>
            <p>{e}</p>
          </div>
        );
    }
  });
};

export default Container;
