function Key(props) {
    return ( 
        <div className='flex w-[8vw] h-[14vw] md:w-[56px] xs:h-[77px] bg-[#818384] rounded-lg items-center justify-center cursor-pointer select-none' onClick={() => props.getInput(props.char)}>
            <div className='inner-key text-white text-xl'>
                {props.char}
            </div>
        </div>
     );
}

export default Key;