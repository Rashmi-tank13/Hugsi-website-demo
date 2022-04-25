import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import "../../src/styles.css"

const pages = ['Ranking', 'How it works', 'Insights','Groene Stad Challenge','Community'];


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0px 16px 0px 10px',
  marginTop: '-0.5rem'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
      border: '1px solid lightgray',
      borderRadius: '25px',
      height: '15px',
      marginRight:'75px',
      marginBottom:'1.3rem'
    },
  },
}));

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const header = require('../images/header-logo.png');
  const hugsi_logo = require('../images/hugsi-header-logo.png')
  const logo = require('../images/hugsi-logo.png');

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='topheader-main' sx={{backgroundColor:'rgb(233, 239, 187)'}}>
       <div className='topheader-main-div'>
       <i className="fas fa-leaf" style={{color: "rgb(153, 201, 60)"}}></i><Button sx={{color: 'rgb(41, 56, 69)',fontSize:'1.2rem',fontWeight:'bold',textTransform:'none'}}>Create account</Button>
       <Button sx={{color: 'rgb(41, 56, 69)',fontSize:'1.2rem',fontWeight:'bold',textTransform:'none'}}>Log in</Button>
       <i className="fas fa-external-link-alt" style={{color:'black'}}/>
       </div>
      </AppBar>


      <AppBar position="relative" className='header' sx={{backgroundColor : 'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
           
          >
          <img data-testid="header-img-tag" src={header} alt="HUGSI logo" height="auto" className='header-img'/>
          </Typography>

          <Box className='header-menu-icon' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },color:'#424242' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{color:'#424242',width:'27rem'}}>
                  <Typography textAlign="center">{page}</Typography>
                  
                </MenuItem>
              ))}
              <div className='header-footer'>
              <p className='header-p-menu'>Powered by</p>
              <a href="" target="_blank"> <img src={logo} alt="Husqvarna logo" className='header-logo-menu'/></a>
              </div>
             
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img data-testid="header-img-tag" src={header} alt="HUGSI logo" height="auto" className='header-img header-img-resp'/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },flexDirection:'row',marginLeft:'2rem' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2}}
                className='header-menu'
              >
                {page}
                
              </Button>
            ))}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon className='search-icon' style={{color:'black'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              style={{color:'black'}}
              className='search-input'
            />
          </Search>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <p className='header-p header-p-res'>Powered by</p>
              <a href="" target="_blank"> <img src={hugsi_logo} alt="Husqvarna logo" className='header-logo header-logo-resp'/></a>
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
    </>
  )
}

export default Header
