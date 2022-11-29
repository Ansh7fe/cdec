import React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './main.css';
import Button from '@mui/material/Button';
 function Main() {
  return (
    
    <div className='Container'>
    <div className='head-text'>
    <Card sx={{ maxWidth: 325 }}>
      <CardActionArea>
        <CardMedia
        
          component="img"
          height="280"
          image="https://tse4.mm.bing.net/th?id=OIP.J8uktCRVET2arbFcH_PivwHaE6&pid=Api&P=0"
          // alt="green iguana"
        />
        
      </CardActionArea>
      <div className='text-on-image1'>
      <h4> HTML/CSS course</h4>
      <Button variant="contained">Buy Now</Button>
       </div>
       <div className='text-on-image'>
      <h3> HTML/CSS COURSE</h3>
      
       </div>
    </Card>
    </div>
    </div>
    
  );
}
export default Main;