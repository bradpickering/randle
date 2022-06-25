import "./App.css";
import Header from "./components/header";
import Row from "./components/row";
import Keyboard from "./components/keyboard";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";

function App() {
  // 'word' of the day
  const word = ["M", "D", "A", "W", "T"];

  const [finished, setFinished] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [completedMsg, setCompletedMsg] = useState("");

  const [row1Letters, setRow1Letters] = useState(["", "", "", "", ""]);
  const [row1Submitted, setRow1Submitted] = useState(false);

  const [row2Letters, setRow2Letters] = useState(["", "", "", "", ""]);
  const [row2Submitted, setRow2Submitted] = useState(false);

  const [row3Letters, setRow3Letters] = useState(["", "", "", "", ""]);
  const [row3Submitted, setRow3Submitted] = useState(false);

  const [row4Letters, setRow4Letters] = useState(["", "", "", "", ""]);
  const [row4Submitted, setRow4Submitted] = useState(false);

  const [row5Letters, setRow5Letters] = useState(["", "", "", "", ""]);
  const [row5Submitted, setRow5Submitted] = useState(false);

  const [row6Letters, setRow6Letters] = useState(["", "", "", "", ""]);
  const [row6Submitted, setRow6Submitted] = useState(false);

  const keys = [
    { key: "Q", color: "" },
    { key: "W", color: "" },
    { key: "E", color: "" },
    { key: "R", color: "" },
    { key: "T", color: "" },
    { key: "Y", color: "" },
    { key: "U", color: "" },
    { key: "I", color: "" },
    { key: "O", color: "" },
    { key: "P", color: "" },
    { key: "A", color: "" },
    { key: "S", color: "" },
    { key: "D", color: "" },
    { key: "F", color: "" },
    { key: "G", color: "" },
    { key: "H", color: "" },
    { key: "J", color: "" },
    { key: "K", color: "" },
    { key: "L", color: "" },
    { key: "Z", color: "" },
    { key: "X", color: "" },
    { key: "C", color: "" },
    { key: "V", color: "" },
    { key: "B", color: "" },
    { key: "N", color: "" },
    { key: "M", color: "" },
  ];

  const rows = [
    {
      rowSubmitted: row1Submitted,
      rowSubmittedHook: setRow1Submitted,
      rowArray: row1Letters,
      rowHook: setRow1Letters,
    },
    {
      rowSubmitted: row2Submitted,
      rowSubmittedHook: setRow2Submitted,
      rowArray: row2Letters,
      rowHook: setRow2Letters,
    },
    {
      rowSubmitted: row3Submitted,
      rowSubmittedHook: setRow3Submitted,
      rowArray: row3Letters,
      rowHook: setRow3Letters,
    },
    {
      rowSubmitted: row4Submitted,
      rowSubmittedHook: setRow4Submitted,
      rowArray: row4Letters,
      rowHook: setRow4Letters,
    },
    {
      rowSubmitted: row5Submitted,
      rowSubmittedHook: setRow5Submitted,
      rowArray: row5Letters,
      rowHook: setRow5Letters,
    },
    {
      rowSubmitted: row6Submitted,
      rowSubmittedHook: setRow6Submitted,
      rowArray: row6Letters,
      rowHook: setRow6Letters,
    },
  ];

  const checkGuess = (letter, index) => {
    // guessed.push(letter)
    if (word[index] === letter) {
      // guessedCorrectly.push(letter)
      return "green";
    } else if (word.includes(letter)) {
      return "yellow";
    } else {
      return "gray";
    }
  };

  const updateKeyboard = (letter, color) => {
    const index = keys.findIndex((key) => key.key === letter);
    if (keys[index].color !== "green") keys[index].color = color;
    console.log(keys[index].color);
  };

  const getInput = (char) => {
    console.log("here");
    if (finished) return;

    for (let i = 0; i < rows.length; i++) {
      if (!rows[i].rowSubmitted) {
        // remove a character
        if (char === "BACK") {
          // if its already empty just return
          if (rows[i].rowArray[0] === "") {
            return;
          }
          const index = rows[i].rowArray
            .reverse()
            .findIndex((char) => char !== "");
          const newLetters = [...rows[i].rowArray.reverse()];
          newLetters[4 - index] = "";
          rows[i].rowHook(newLetters);
          return;
        }

        // if a guess was submitted and all the characters have been filled
        // submit this guess
        if (char === "ENTER" && rows[i].rowArray[4] !== "") {
          rows[i].rowSubmittedHook(true);

          if (rows[i].rowArray.join("") === word.join("")) {
            setFinished(true);
            setCompletedMsg("Woohoo, Good Job!!");
            setCompleted(true);
            setTimeout(() => {
              setCompleted(false);
            }, 4000);
          }
        }

        if (
          char === "ENTER" &&
          rows[5].rowArray[4] !== "" &&
          rows[5].rowArray.join("") !== word.join("")
        ) {
          setFinished(true);
          setCompletedMsg("Nice try! The Randle was " + word.join(""));
          setCompleted(true);
        }

        // enter was clicked before the word was full input
        // just return
        else if (char === "ENTER") {
          return;
        } else {
          // index of first free available space for a letter
          const index = rows[i].rowArray.findIndex((char) => char === "");
          const newLetters = [...rows[i].rowArray];
          newLetters[index] = char;
          rows[i].rowHook(newLetters);
        }
        return;
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="flex justify-center mt-14">
        <div className="board flex flex-col space-y-1">
          <Row
            id="row1"
            letters={row1Letters}
            submitted={row1Submitted}
            word={word}
            checkGuess={checkGuess}
            updateKeyboard={updateKeyboard}
          />
          <Row
            id="row2"
            letters={row2Letters}
            submitted={row2Submitted}
            word={word}
            checkGuess={checkGuess}
            updateKeyboard={updateKeyboard}
          />
          <Row
            id="row3"
            letters={row3Letters}
            submitted={row3Submitted}
            word={word}
            checkGuess={checkGuess}
            updateKeyboard={updateKeyboard}
          />
          <Row
            id="row4"
            letters={row4Letters}
            submitted={row4Submitted}
            word={word}
            checkGuess={checkGuess}
            updateKeyboard={updateKeyboard}
          />
          <Row
            id="row5"
            letters={row5Letters}
            submitted={row5Submitted}
            word={word}
            checkGuess={checkGuess}
            updateKeyboard={updateKeyboard}
          />
          <Row
            id="row6"
            letters={row6Letters}
            submitted={row6Submitted}
            word={word}
            checkGuess={checkGuess}
            updateKeyboard={updateKeyboard}
          />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Keyboard getInput={getInput} keys={keys} />
      </div>
      <Snackbar
        sx={{
          height: "60%",
          fontFamily: "Helvetica Neue Bold",
          "& .MuiSnackbarContent-message": {
            textAlign: "center",
            fontFamily: "Helvetica Neue Bold",
            fontSize: 32,
          },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={completed}
        message={completedMsg}
      />
    </div>
  );
}

export default App;
