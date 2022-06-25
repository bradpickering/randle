import Key from "./key";
import SpecialKey from "./specialKey";

function Keyboard(props) {
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
        <SpecialKey char="BACK" getInput={props.getInput} />
      </div>
    </div>
  );
}

export default Keyboard;
