import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
const InstaNavbar = () =>{
  return(
    <>
      <div className="top__navbar">
        <div className="navbar_left">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
        </div>

        <div className="navbar_center">
          <div className="inputContain">
            <SearchIcon style={{width: '15px', marginTop: '2%', color: '#A5A7AA', marginRight: '6px'}}/>
            <input type="text" className='inputSearch' placeholder='Search'/>
          </div>
        </div>
        <div className="navbar_right">
          <HomeIcon className='ikonlar'/>
          <FacebookOutlinedIcon className='ikonlar'/>
          <AddBoxOutlinedIcon className='ikonlar'/>
          <AddBoxOutlinedIcon className='ikonlar'/>
          <FavoriteBorderOutlinedIcon className='ikonlar'/>
        </div>
      </div>
    </>
  )
}

export default InstaNavbar