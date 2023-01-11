import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './styles.css'
import Select from './Select/Select';
const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleOpenMenu = () => {
    setIsClicked(!isClicked);
    console.log(isClicked)
  }
  return (
    <Box>
      <Stack className='navbar_top' direction='row' alignItems='center' spacing={2} justifyContent='space-around' sx={{
        display: {
          xs: 'none',
          sm: 'none',
          md: 'flex',
          lg: 'flex'
        }
      }}>
        <Stack direction='row' alignItems='center' spacing={2}>
          <img src={require('../../assets/Mnit_logo.png')} className='logo_image' />
          <Box>
            <Typography fontWeight='600' variant='h5'>
              CONTINUING AND DIGITAL EDUCATION CENTRE
            </Typography>
            <Typography>
              MALVIYA NATIONAL INSTITUTE OF TECHNOLOGY JAIPUR
            </Typography>
          </Box>
        </Stack>
        <Stack className='navbar_contact' direction='row' spacing={2} alignItems='center'>
          <Box className='contact_details'>
            <Typography color='gray'>
              Call us at : 9549219622
            </Typography>
            <Typography color='gray'>
              Email us : cdec@mnit.ac.in
            </Typography>
          </Box>
          <Box className='navbar_divider'></Box>
          <Box className='navbar_socialLinks'>
            <Link to='#' className='socialLink'>
              <InstagramIcon />
            </Link>
            <Link to='#' className='socialLink'>
              <LinkedInIcon />
            </Link>
            <Link to='#' className='socialLink'>
              <YouTubeIcon />
            </Link>
          </Box>
        </Stack>
      </Stack>
      <Stack className='navbar_main'>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          width='100%'
          sx={{
            display: {
              md: 'none',
              lg: 'none'
            },
            background: 'linear-gradient(90deg, #5624D0 0%, #DBCCFF 100%)'
          }}>
          <Stack alignItems='center' spacing={1}>
            <img src={require('../../assets/Mnit_logo.png')} className='logo_image' />
            <Box>
              <Typography fontWeight='600' variant='p' color='#fff'>
                CDEC
              </Typography>
            </Box>
          </Stack>
          <Button onClick={handleOpenMenu} sx={{
            color: '#fff'
          }}>
            {isClicked ? <CloseIcon /> : <MenuIcon />}
          </Button>
        </Stack>
        {isClicked ? (
          <Stack className="mobile_menu" justifyContent='center' spacing={2} bgcolor='#fff' >
            <Link to='/' className='navbar_item'>Home</Link>
            <Link to='/about' className='navbar_item'>About</Link>
            <Link to='/blog' className='navbar_item'>Blogs</Link>
            <Link className='navbar_item'>
              <Select name='Quicklinks' />
            </Link>

            <Button variant='contained' sx={{
              bgcolor: '#30006d'
            }}>Login</Button>
          </Stack>
        ) : null}
        <Stack
          className='navbar_desktop'
          direction='row'
          alignItems='center'
          justifyContent='center'
          spacing={6}
          sx={{
            display: {
              lg: 'flex',
              sm: 'none',
              xs: 'none',
              md: 'none'
            }
          }}>
          <Link to='/' className='navbar_item' >
            <Typography variant='h6' fontWeight='600' color='#fff' className='navbar_item'>
              Home
            </Typography>
          </Link>
          <Link to='/about' className='navbar_item' >
            <Typography variant='h6' fontWeight='600' color='#fff' className='navbar_item'>
              About
            </Typography>
          </Link>
          <Link to='/course' className='navbar_item'>
            <Typography variant='h6' fontWeight='600' color='#fff' className='navbar_item'>
              Course
            </Typography>
          </Link>
          <Link to='/blog' className='navbar_item'>
            <Typography variant='h6' fontWeight='600' color='#fff' className='navbar_item'>
              Blogs
            </Typography>
          </Link>
          <Link className='navbar_item'>
            <Select name='Quicklinks' />
          </Link>
          <Link className='navbar_item'>
            <Typography variant='h6' fontWeight='600' color='#fff' className='navbar_item'>
              Downloads
            </Typography>
          </Link>
          <Button variant='contained' sx={{
            bgcolor: '#30006d'
          }}>Login</Button>
        </Stack>

      </Stack>
    </Box >
  )
}

export default Navbar