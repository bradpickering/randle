function Key(props) {
  let key = (
    <div
      className="flex w-[8vw] h-[14vw] md:w-[56px] xs:h-[77px] bg-[#818384] rounded-lg items-center justify-center cursor-pointer select-none"
      onClick={() => props.getInput(props.char)}
    >
      <div className="inner-key text-white text-xl">{props.char}</div>
    </div>
  );
  if (props.color === "green") {
    key = (
      <div
        className="flex w-[8vw] h-[14vw] md:w-[56px] xs:h-[77px] bg-[#538d4e] rounded-lg items-center justify-center cursor-pointer select-none"
        onClick={() => props.getInput(props.char)}
      >
        <div className="inner-key text-white text-xl">{props.char}</div>
      </div>
    );
  } else if (props.color === "yellow") {
    key = (
      <div
        className="flex w-[8vw] h-[14vw] md:w-[56px] xs:h-[77px] bg-[#b59f3b] rounded-lg items-center justify-center cursor-pointer select-none"
        onClick={() => props.getInput(props.char)}
      >
        <div className="inner-key text-white text-xl">{props.char}</div>
      </div>
    );
  } else if (props.color === "gray") {
    key = (
      <div
        className="flex w-[8vw] h-[14vw] md:w-[56px] xs:h-[77px] bg-[#3a3a3b] rounded-lg items-center justify-center cursor-pointer select-none"
        onClick={() => props.getInput(props.char)}
      >
        <div className="inner-key text-white text-xl">{props.char}</div>
      </div>
    );
  }

  return <div>{key}</div>;
}

export default Key;
