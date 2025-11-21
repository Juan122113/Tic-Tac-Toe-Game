const { useState } = React;

export function Board() {

  const [xOr0, setXOr0] = useState("");
  const [xOr01, setXOr01] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [turns, setTurns] = useState(true); //true = X, false = 0

  // let turns; //true = X, false = 0

  function ChangeTurns() {
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
      setXOr0("X");
    } else {
      setXOr0("0");
    }
  }

  // if (turns) {
  //   setXOr0("X");
  // } else {
  //   setXOr0("0");
  // }

  function Reset() {
    setXOr0("");
    setTurns(true);
  }

  return(
    <div>
      <h1>Tic-Tac-Toe</h1>

      <h2>{subTitle}</h2>

      <div className="container">
        <button className="square" name="button.square" id="button.square" onClick={ChangeTurns}>{xOr0}</button>
        <button className="square" name="button.square" id="button.square">{xOr01}</button>
        <button className="square" name="button.square" id="button.square">{xOr0}</button>
        <button className="square" name="button.square" id="button.square">{xOr0}</button>
        <button className="square" name="button.square" id="button.square">{xOr0}</button>
        <button className="square" name="button.square" id="button.square">{xOr0}</button>
        <button className="square" name="button.square" id="button.square">{xOr0}</button>
        <button className="square" name="button.square" id="button.square">{xOr0}</button>
        <button className="square" name="button.square" id="button.square">{xOr0}</button>
      </div>

      {/* <button.square></button.square> */}

      <button id="reset" onClick={Reset}>Reset game</button>
    </div>
  );

}