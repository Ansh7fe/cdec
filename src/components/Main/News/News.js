import React from 'react'
import { Grid, Stack, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom';
import "./styles.css"
const News = () => {
	return (
		<Stack padding={3}>
			<Typography textAlign='center' variant='h3' color='#5624d0'>NEWS FEED</Typography>

			<Grid container className='newsFeed_container'>
				<Grid item xs={12} md={12} lg={6} className="about_container">
					<Stack spacing={5}>
						<Typography lineHeight={2.5}>
							The online teaching in the times of COVID pandemic had its challenges and it has highlighted the need for good quality digital online courses and technical content to be made available to our students at MNIT Jaipur in case of any such possible future eventuality.
							It is proposed to establish ‘Continuing and Digital Education Centre (CDEC)’.
							<br></br>
							The proposed Continuing and Digital Education Centre (CDEC) at MNIT will facilitate organizing programmes/events such as Self-financed Short Term Courses, AICTE-QIP Courses, TEQIP sponsored Courses, GIAN Courses, NPTEL Courses, SWAYAM Courses, Industry Specific courses,Credit-based courses, Courses for Government schemes like GATI Shakti, Skill India.
						</Typography>
						<Link to='/about' className='knowMore_btn'>
							Know More
						</Link>
					</Stack>
				</Grid>
				<Grid item xs={12} md={12} lg={6} className="news_container">
					<Box sx={{
						backgroundColor: '#fbedd1',
						paddingLeft: '1em'
					}}>
						<Typography variant='h4' >NEWS AND ANNOUNCEMENT</Typography>

					</Box>
				</Grid>
			</Grid>
		</Stack>
	)
}

export default News