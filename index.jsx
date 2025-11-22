const { useState } = React;

export function Board() {

  const [xOr1, setXOr1] = useState("");
  const [xOr2, setXOr2] = useState("");
  const [xOr3, setXOr3] = useState("");
  const [xOr4, setXOr4] = useState("");
  const [xOr5, setXOr5] = useState("");
  const [xOr6, setXOr6] = useState("");
  const [xOr7, setXOr7] = useState("");
  const [xOr8, setXOr8] = useState("");
  const [xOr9, setXOr9] = useState("");
  const [turns, setTurns] = useState(true); //true = X, false = 0

  let endGame = false;
  let subTitle = "";

  function ChangeTurns1() {

    if (turns) {
      setTurns(false);
    } else {
      setTurns(true);
    }

    console.log(turns);

    if (turns) {
      setXOr1("X");
    } else {
      setXOr1("O");
    }
  }

  function ChangeTurns2() {

    if (turns) {
      setTurns(false);
    } else {
      setTurns(true);
    }

    console.log(turns);

    if (turns) {
      setXOr2("X");
    } else {
      setXOr2("O");
    }
  }

  function ChangeTurns3() {

    if (turns) {
      setTurns(false);
    } else {
      setTurns(true);
    }

    console.log(turns);

    if (turns) {
      setXOr3("X");
    } else {
      setXOr3("O");
    }
  }

  function ChangeTurns4() {

    if (turns) {
      setTurns(false);
    } else {
      setTurns(true);
    }

    console.log(turns);

    if (turns) {
      setXOr4("X");
    } else {
      setXOr4("O");
    }
  }

  function ChangeTurns5() {

    if (turns) {
      setTurns(false);
    } else {
      setTurns(true);
    }

    console.log(turns);

    if (turns) {
      setXOr5("X");
    } else {
      setXOr5("O");
    }
  }

  function ChangeTurns6() {

    if (turns) {
      setTurns(false);
    } else {
      setTurns(true);
    }

    console.log(turns);

    if (turns) {
      setXOr6("X");
    } else {
      setXOr6("O");
    }
  }

  function ChangeTurns7() {

    if (turns) {
      setTurns(false);
    } else {
      setTurns(true);
    }

    console.log(turns);

    if (turns) {
      setXOr7("X");
    } else {
      setXOr7("O");
    }
  }

  function ChangeTurns8() {

    if (turns) {
      setTurns(false);
      setXOr8("X");
    } else {
      setTurns(true);
      setXOr8("O");
    }

    console.log(turns);

  }

  function ChangeTurns9() {

    if (turns) {
      setTurns(false);
    } else {
      setTurns(true);
    }

    console.log(turns);

    if (turns) {
      setXOr9("X");
    } else {
      setXOr9("O");
    }
  }

  if (xOr1 == "X" && xOr2 == "X" && xOr3 == "X") {
    endGame = true;
    subTitle = "Winner: X";
  } else if (xOr1 == "X" && xOr5 == "X" && xOr9 == "X") {
    endGame = true;
    subTitle = "Winner: X";
  } else if (xOr1 == "X" && xOr4 == "X" && xOr7 == "X") {
    endGame = true;
    subTitle = "Winner: X";
  } else if (xOr2 == "X" && xOr5 == "X" && xOr8 == "X") {
    endGame = true;
    subTitle = "Winner: X";
  } else if (xOr3 == "X" && xOr6 == "X" && xOr9 == "X") {
    endGame = true;
    subTitle = "Winner: X";
  } else if (xOr4 == "X" && xOr5 == "X" && xOr6 == "X") {
    endGame = true;
    subTitle = "Winner: X";
  } else if (xOr7 == "X" && xOr8 == "X" && xOr9 == "X") {
    endGame = true;
    subTitle = "Winner: X";
  } else if (xOr1 == "O" && xOr2 == "O" && xOr3 == "O") {
    endGame = true;
    subTitle = "Winner: O";
  } else if (xOr1 == "O" && xOr5 == "O" && xOr9 == "O") {
    endGame = true;
    subTitle = "Winner: O";
  } else if (xOr1 == "O" && xOr4 == "O" && xOr7 == "O") {
    endGame = true;
    subTitle = "Winner: O";
  } else if (xOr2 == "O" && xOr5 == "O" && xOr8 == "O") {
    endGame = true;
    subTitle = "Winner: O";
  } else if (xOr3 == "O" && xOr6 == "O" && xOr9 == "O") {
    endGame = true;
    subTitle = "Winner: O";
  } else if (xOr4 == "O" && xOr5 == "O" && xOr6 == "O") {
    endGame = true;
    subTitle = "Winner: O";
  } else if (xOr7 == "O" && xOr8 == "O" && xOr9 == "O") {
    endGame = true;
    subTitle = "Winner: O";
  }

  if (xOr1 != "" && xOr2 != "" && xOr3 != "" && xOr4 != "" && xOr5 != "" && xOr6 != "" && xOr7 != "" && xOr8 != "" && xOr9 != "") {
  endGame = true;
  subTitle = "Draw";
  }

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

      <fieldset className="container" disabled={endGame ? true : false}>

        <button className="square" name="button.square" id="button.square" onClick={ChangeTurns1} disabled={xOr1 == ""? false : true } >{xOr1}</button>
        <button className="square" name="button.square" id="button.square" onClick={ChangeTurns2} disabled={xOr2 == "" ? false : true } >{xOr2}</button>
        <button className="square" name="button.square" id="button.square" onClick={ChangeTurns3} disabled={xOr3 == "" ? false : true } >{xOr3}</button>
        <button className="square" name="button.square" id="button.square" onClick={ChangeTurns4} disabled={xOr4 == "" ? false : true } >{xOr4}</button>
        <button className="square" name="button.square" id="button.square" onClick={ChangeTurns5} disabled={xOr5 == "" ? false : true } >{xOr5}</button>
        <button className="square" name="button.square" id="button.square" onClick={ChangeTurns6} disabled={xOr6 == "" ? false : true } >{xOr6}</button>
        <button className="square" name="button.square" id="button.square" onClick={ChangeTurns7} disabled={xOr7 == "" ? false : true } >{xOr7}</button>
        <button className="square" name="button.square" id="button.square" onClick={ChangeTurns8} disabled={xOr8 == "" ? false : true } >{xOr8}</button>
        <button className="square" name="button.square" id="button.square" onClick={ChangeTurns9} disabled={xOr9 == "" ? false : true } >{xOr9}</button>

      </fieldset>

      {/* <button.square></button.square> */}

      <button id="reset" onClick={Reset}>Reset game</button>
    </div>
  );

}