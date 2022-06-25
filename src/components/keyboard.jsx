import Key from "./key";
import SpecialKey from "./specialKey";

function Keyboard(props) {
  console.log(props.keys.slice(19, 26));
  return (
    <div className="keyboard flex flex-col space-y-2">
      <div className="top-row flex space-x-2 justify-center">
        {props.keys.slice(0, 10).map((key) => (
          <Key
            key={key.key}
            char={key.key}
            getInput={props.getInput}
            color={key.color}
          />
        ))}
        {/* <Key char="Q" getInput={props.getInput} />
        <Key char="W" getInput={props.getInput} />
        <Key char="E" getInput={props.getInput} />
        <Key char="R" getInput={props.getInput} />
        <Key char="T" getInput={props.getInput} />
        <Key char="Y" getInput={props.getInput} />
        <Key char="U" getInput={props.getInput} />
        <Key char="I" getInput={props.getInput} />
        <Key char="O" getInput={props.getInput} />
        <Key char="P" getInput={props.getInput} /> */}
      </div>
      <div className="middle-row flex space-x-2 justify-center">
        {props.keys.slice(10, 19).map((key) => (
          <Key
            key={key.key}
            char={key.key}
            getInput={props.getInput}
            color={key.color}
          />
        ))}
        {/* <Key char="A" getInput={props.getInput} />
        <Key char="S" getInput={props.getInput} />
        <Key char="D" getInput={props.getInput} />
        <Key char="F" getInput={props.getInput} />
        <Key char="G" getInput={props.getInput} />
        <Key char="H" getInput={props.getInput} />
        <Key char="J" getInput={props.getInput} />
        <Key char="K" getInput={props.getInput} />
        <Key char="L" getInput={props.getInput} /> */}
      </div>
      <div className="middle-row flex space-x-2 justify-center">
        <SpecialKey char="ENTER" getInput={props.getInput} />
        {props.keys.slice(19, 26).map((key) => (
          <Key
            key={key.key}
            char={key.key}
            getInput={props.getInput}
            color={key.color}
          />
        ))}
        {/* <Key char="Z" getInput={props.getInput} />
        <Key char="X" getInput={props.getInput} />
        <Key char="C" getInput={props.getInput} />
        <Key char="V" getInput={props.getInput} />
        <Key char="B" getInput={props.getInput} />
        <Key char="N" getInput={props.getInput} />
        <Key char="M" getInput={props.getInput} /> */}
        <SpecialKey char="BACK" getInput={props.getInput} />
      </div>
    </div>
  );
}

export default Keyboard;
