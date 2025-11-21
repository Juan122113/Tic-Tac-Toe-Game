const { useState } = React;

export function Board() {

  // const [xOr0, setXOr0] = useState("");
  const [xOr1, setXOr1] = useState("");
  const [xOr2, setXOr2] = useState("");
  const [xOr3, setXOr3] = useState("");
  const [xOr4, setXOr4] = useState("");
  const [xOr5, setXOr5] = useState("");
  const [xOr6, setXOr6] = useState("");
  const [xOr7, setXOr7] = useState("");
  const [xOr8, setXOr8] = useState("");
  const [xOr9, setXOr9] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [turns, setTurns] = useState(true); //true = X, false = 0

  // let turns; //true = X, false = 0

  function ChangeTurns1() {
    // if (turns) {
    //   turns = false;
    // } else {
    //   turns = true;
    // }
    if (turns) {
      setTurns(false);
    } else {
      setTurns(true);
    }

    console.log(turns);

    if (turns) {
      setXOr1("X");
    } else {
      setXOr1("0");
    }
  }

  // if (turns) {
  //   setXOr0("X");
  // } else {
  //   setXOr0("0");
  // }

  function Reset() {
    setXOr1("");
    setXOr2("");
    setXOr3("");
    setXOr4("");
    setXOr5("");
    setXOr6("");
    setXOr7("");
    setXOr8("");
    setXOr9("");
    setTurns(true);
  }

  return(
    <div>
      <h1>Tic-Tac-Toe</h1>

      <h2>{subTitle}</h2>

      <div className="container">
        <button className="square" name="button.square" id="button.square" onClick={ChangeTurns1} disabled={xOr1 == "" ? false : true } >{xOr1}</button>
        <button className="square" name="button.square" id="button.square">{xOr2}</button>
        <button className="square" name="button.square" id="button.square">{xOr3}</button>
        <button className="square" name="button.square" id="button.square">{xOr4}</button>
        <button className="square" name="button.square" id="button.square">{xOr5}</button>
        <button className="square" name="button.square" id="button.square">{xOr6}</button>
        <button className="square" name="button.square" id="button.square">{xOr7}</button>
        <button className="square" name="button.square" id="button.square">{xOr8}</button>
        <button className="square" name="button.square" id="button.square">{xOr9}</button>
      </div>

      {/* <button.square></button.square> */}

      <button id="reset" onClick={Reset}>Reset game</button>
    </div>
  );

}