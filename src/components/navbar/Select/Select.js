import { Button, Card, List, ListItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../styles.css"
const Select = ({ name }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  }
  return (
    <Stack >
      <Button onClick={handleClick} sx={{
        textTransform: 'initial', color: '#fff', bgcolor: {
          xs: '#5624D0',
          sm: '#5624D0',
          lg: 'transparent',
          md: 'transparent'
        }
      }} >
        <Typography color='white' variant='h6' fontWeight='600'>
          {name}
        </Typography>
        <ArrowDropDownIcon />
      </Button>
      <Card>
        {isClicked && (
          <List sx={{ position: 'absolute', boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.25)', margin: "0.5em", zIndex: 99, bgcolor: '#fff' }}>
            <ListItem>
              <a href='https://nptel.ac.in' className='quickLinks_item'>NPTEL</a>
            </ListItem>
            <ListItem>
              <a href='https://gian.iitkgp.ac.in' className='quickLinks_item'>GIAN</a>
            </ListItem>
            <ListItem>
              <a href='https://cel.mnit.ac.in/' className='quickLinks_item'>Podcasts</a>
            </ListItem>
            <ListItem>
              <a href='http://swayam.gov.in/' className='quickLinks_item'>SWAYAM</a>
            </ListItem>
            <ListItem>
              <a href='https://www.aicte-india.org/atal' className='quickLinks_item'>ATAL</a>
            </ListItem>
            <ListItem>
              <a href='https://teqip.in' className='quickLinks_item'>TEQIP</a>
            </ListItem>
          </List>
        )}
      </Card>
    </Stack>
  )
}

export default Select