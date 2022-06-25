import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsIcon from '@mui/icons-material/Settings';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import LightModeIcon from '@mui/icons-material/LightMode';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import Example1 from './example1';
import Example2 from './example2';
import Example3 from './example3';
import {useState} from 'react'
import Close from '@mui/icons-material/Close';

const example1 = ['X', 'B', 'P', 'A', 'K']
const example2 = ['Q', 'G', 'U', 'T', 'Z']
const example3 = ['E', 'F', 'H', 'S', 'R']


function Header () {

    const [lightMode, setLightMode] = useState(false)
    const [openHelp, setOpenHelp] = useState(false)

    const toggleLightMode = () => {
        setLightMode(!lightMode)
        if (lightMode) {
            document.getElementsByTagName('body')[0].style.backgroundColor = '#f4f4f4'
        }
        else {
            document.getElementsByTagName('body')[0].style.backgroundColor = '#121213'
        }
    }

    const handleOpenHelp = () => setOpenHelp(true)
    const handleCloseHelp = () => setOpenHelp(false)

    return ( 
        <div className='header flex justify-between shadow-[0px_1px] shadow-[#3a3a3c] text-white items-center'>
            <div className='left-side'>
                <div className='flex'>
                    <MenuIcon fontSize='large' className='ml-6 cursor-pointer'/>
                    <HelpOutlineIcon fontSize='large' className='ml-4 cursor-pointer' onClick={handleOpenHelp}/>
                    <LightModeIcon fontSize='large' className='ml-4 cursor-pointer' onClick={toggleLightMode}/>
                </div>
            </div>
            <div className='title text-[30px] xs:text-[47px] '>
            {/* text-[47px] */}
                Randle
            </div>
            <div className='right-side'>
                <div className='flex'>
                    <TipsAndUpdatesIcon fontSize='large' className='mr-4 cursor-pointer' />
                    <LeaderboardIcon fontSize='large' className='mr-4 cursor-pointer'/>
                    <SettingsIcon fontSize='large' className='mr-6 cursor-pointer'/>
                </div>
            </div>
            <Modal 
                sx={{zIndex: 50}}
                open={openHelp}
                onClose={handleCloseHelp}
                >
                
                <div className='modal bg-[#121213] w-screen h-screen flex justify-center z-50'>
                    <div className='flex flex-col'>
                        <div className='flex justify-around items-center mb-4'>
                            <div></div>
                            <div className='text-center text-[24px]'>
                                How To Play
                            </div>
                            <CloseIcon fontSize='large' className=' cursor-pointer' onClick={handleCloseHelp}/>
                        </div>
                        <div className='text-[20px]'>
                            Guess the RANDLE in six tries. There are <strong>NO</strong> duplicate letters (duplicates make it nearly impossible).
                        </div>
                        <div className='text-[20px]'>
                            Each guess must be a valid five-letter string of letters. Hit the enter button to submit.
                        </div>
                        <div className='text-[20px] pb-6 shadow-[0px_1px] shadow-[#3a3a3c]'>
                            After each guess, the color of the tiles will change to show how close your guess was to the random string of letters.
                        </div>
                        <div className='text-[20px] pt-6'>
                            Examples
                        </div>
                        <div className='pt-6'>
                            <Example1/>
                            <div className='pt-2'>
                                The letter <strong>B</strong> is in the random string and in the correct spot.
                            </div>
                        </div>
                        <div className='pt-6'>
                            <Example2/>
                            <div className='pt-2'>
                                The letter <strong>J</strong> is in the random string but in the wrong spot.
                            </div>
                        </div>
                        <div className='py-6 shadow-[0px_1px] shadow-[#3a3a3c]'>
                            <Example3/>
                            <div className='pt-2'>
                                The letter <strong>E</strong> is not in the word in any spot.
                            </div>
                        </div>
                        <div className='text-[20px] pt-6'>
                            Currently, a new <strong>RANDLE</strong> will be available every page refresh.
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
     );
}

export default Header ;