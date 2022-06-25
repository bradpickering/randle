import Tile from "./tile";
function Row(props) {
  let color = null;
  //  let tiles = [];
  let correctGuesses = [];

  const tiles = props.letters.map((letter, index) => {
    if (props.submitted) {
      // check if guess was in correct spot
      const guess = props.checkGuess(letter, index);

      if (guess === "green" && !correctGuesses.includes(letter)) {
        // green box
        color = "green";
        correctGuesses.push(letter);
      } else if (guess === "yellow" && correctGuesses.includes(letter)) {
        // word includes this letter but it has already been guessed
        // -> gray box
        color = "gray";
        console.log(letter, "gray");
      } else if (guess === "yellow" && !correctGuesses.includes(letter)) {
        // right letter in the wrong spot
        // -> yellow box
        color = "yellow";
        correctGuesses.push(letter);
      } else {
        // not in the word
        // -> gray box
        color = "gray";
      }
      console.log("submitted", props.submitted, props.id);
      props.updateKeyboard(letter, color);
    }

    return (
      <Tile
        key={index}
        letter={letter}
        submitted={props.submitted}
        word={props.word}
        index={index}
        color={color}
      />
    );
  });

  return <div className="flex space-x-1">{tiles}</div>;
}

export default Row;
