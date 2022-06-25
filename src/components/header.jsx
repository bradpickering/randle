import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsIcon from '@mui/icons-material/Settings';
// import Menu from '@mui/icons-material/Menu';

function Header () {
    return ( 
        <div className='header flex justify-between shadow-[0px_1px] shadow-[#3a3a3c] text-white items-center'>
            <div className='left-side'>
                <div className='flex'>
                    <MenuIcon fontSize='large' className='ml-6 cursor-pointer'/>
                    <HelpOutlineIcon fontSize='large' className='ml-4 cursor-pointer'/>
                </div>
            </div>
            <div className='title text-[30px] xs:text-[47px] '>
            {/* text-[47px] */}
                Randle
            </div>
            <div className='right-side'>
                <div className='flex'>
                    <LeaderboardIcon fontSize='large' className='mr-4 cursor-pointer'/>
                    <SettingsIcon fontSize='large' className='mr-6 cursor-pointer'/>
                </div>
            </div>
         

        </div>
     );
}

export default Header ;