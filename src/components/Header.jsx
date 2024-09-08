import { AppBar, Box, IconButton, Toolbar, Typography, Drawer } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [Vissible, setVissible] = useState(false)

  const handle_Drawer = () => {
    console.log('Clicked')
    setVissible(!Vissible)
  }

  return (
    <>
      {/* desktop view */}
      <Box
        sx={{
          position: 'relative',
          display: { xs: 'none', sm: 'block' },
          bgcolor: '#0e0e0e9c'
        }}>
        <AppBar
          component={"nav"}
          sx={{
            bgcolor: '#0e0e0e73',
          }}>

          <Toolbar>

            <ul className='Navbar_style'>
              <li>
                <NavLink activeClassName="active" to={'/'} >Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={'/projects'}>Projects</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to={'/contact'}>Contact</NavLink>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
        {/* <Toolbar /> */}
      </Box>



      {/* mobile view */}
      <Box
        sx={{
          display: { xs: 'block', sm: 'none' },
          bgcolor: '#000'
        }}>
        <AppBar
          component={"nav"}
          sx={{
            bgcolor: '#000',
            // display:'flex'
          }}>

          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: 'none' },
              }}
              onClick={() => handle_Drawer()}
            >
              <MenuIcon />
            </IconButton>
            <Typography component={"nav"}>
              Hitesh Jangir
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>



      {/* Drawer */}
      <Box>
        <Drawer
          variant="temporary"
          open={Vissible}
          onClose={handle_Drawer}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "260px",
            },
          }}>
          <ul className='Navbar_style_Drawer'>
            <li>
              <NavLink activeClassName="active" to={'/'} >Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to={'/projects'}>Projects</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </Drawer>
      </Box>
    </>
  )
}

export default Header
