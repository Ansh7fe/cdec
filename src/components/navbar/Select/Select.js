import { Button, Card, List, ListItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Select = ({ name }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  }
  return (
    <Stack >
      <Button onClick={handleClick} sx={{ textTransform: 'initial', color: '#fff' }} >
        <Typography color='white' variant='h6' fontWeight='600'>
          {name}
        </Typography>
        <ArrowDropDownIcon />
      </Button>
      <Card>
        {isClicked && (
          <List sx={{ position: 'absolute', boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.25)', margin: "0.5em", zIndex: 99, bgcolor: '#fff' }}>
            <ListItem>
              NPTEL
            </ListItem>
            <ListItem>
              GIAN
            </ListItem>
            <ListItem>
              Podcast
            </ListItem>
            <ListItem>
              SWAYAM
            </ListItem>
            <ListItem>
              ATAL
            </ListItem>
            <ListItem>
              TEQIP
            </ListItem>
          </List>
        )}
      </Card>
    </Stack>
  )
}

export default Select