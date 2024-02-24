import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
const Navbar = () => {
  return (
    <div>
        <div className="navbar">
        <div className="nav-left"><img src="" alt="logo"/></div>
        <div className="nav-center">
            <div>
                <div className="nav-center-circle">
                  <DarkModeSharpIcon/>
                </div>
            </div>
        </div>
        <div className="nav-right">
             <div className='dropdown'><MenuIcon/></div>
            <h3 className="bottom-border-red" onclick="addBorder(this)">Home</h3>
            <h3 className="bottom-border-red" onclick="addBorder(this)">About</h3>
            <h3 className="bottom-border-red" onclick="addBorder(this)">Skills</h3>
            <h3 className="bottom-border-red" onclick="addBorder(this)">Project</h3>
            <h3 className="bottom-border-red" onclick="addBorder(this)">Contact</h3>
        </div>
    </div>

    </div>
  )
}

export default Navbar