function Tile(props) {
  let tile = (
    <div className="flex justify-center items-center w-[14vw] h-[14vw] sm:w-[8vh] sm:h-[8vh] border-2 border-[#3a3a3c]">
      <div className="tile-inner text-2xl text-white">{props.letter}</div>
    </div>
  );
  if (props.color === "green") {
    tile = (
      <div className="flex justify-center items-center w-[14vw] h-[14vw] sm:w-[8vh] sm:h-[8vh] border-2 border-black bg-[#538d4e]">
        <div className="tile-inner text-2xl text-white">{props.letter}</div>
      </div>
    );
  } else if (props.color === "yellow") {
    tile = (
      <div className="flex justify-center items-center w-[14vw] h-[14vw] sm:w-[8vh] sm:h-[8vh] border-2 border-black bg-[#b59f3b]">
        <div className="tile-inner text-2xl text-white">{props.letter}</div>
      </div>
    );
  } else if (props.color === "gray") {
    tile = (
      <div className="flex justify-center items-center w-[14vw] h-[14vw] sm:w-[8vh] sm:h-[8vh] border-2 border-black bg-[#403c3c]">
        <div className="tile-inner text-2xl text-white">{props.letter}</div>
      </div>
    );
  }

  return <div>{tile}</div>;
}

export default Tile;
