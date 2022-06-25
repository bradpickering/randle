import BackspaceIcon from '@mui/icons-material/Backspace';

function SpecialKey(props) {
    let innerKey = props.char
    if (props.char === 'BACK') {
        innerKey = <BackspaceIcon fontSize='large'/>
    }
    return ( 
        <div className='flex w-[12vw] h-[16vw] sm:w-[90px] xs:h-[77px] bg-[#818384] rounded-lg justify-center items-center cursor-pointer select-none' onClick={() => props.getInput(props.char)}>
            <div className='inner-key text-white text-md md:text-xl'>
                {innerKey}
            </div>
        </div>
     );
}

export default SpecialKey;