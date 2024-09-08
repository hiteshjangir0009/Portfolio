import React from 'react'
import Layout from '../components/layouts/Layout'
import { Box, Grid2, Link, Typography } from '@mui/material'
import '../styles/About.css'

const About = () => {
  return (
    <Layout>
      <div className="main_container">
        <Box
          sx={{
            // bgcolor: 'red',
            color: '#fff'
          }}>
          <Typography
            variant='h3'
            sx={{
              // color: '#fff',
              fontWeight: '900'
            }}>
            About
          </Typography>
          <Typography
            variant='h6'
            sx={{
              // color: '#fff',
              fontWeight: '500'
            }}>
            Detail-oriented team player with Complex problem-solver with analytical and driven mindset.
            Dedicated to achieving demanding development objectives according to tight schedules while
            producing impeccable code and ability to handle multiple projects simultaneously with a high
            degree of accuracy.
          </Typography>

          <Typography
            variant='h3'
            sx={{
              // color: '#fff',
              fontWeight: '900',
              marginTop: 10
            }}>
            Skills
          </Typography>
          <Typography
            variant='h6'
            sx={{
              // color: '#fff',
              fontWeight: '500'
            }}>
            Responsive Web Design{<br />}
            Responsive design{<br />}
            Front-End Development{<br />}
            JavaScript{<br />}
            HTML{<br />}
            CSS{<br />}
            React native{<br />}
            React JS{<br />}
            Redux{<br />}
          </Typography>

          <Typography
            variant='h3'
            sx={{
              // color: '#fff',
              fontWeight: '900',
              marginTop: 10
            }}>
            Education
          </Typography>
          <Typography
            variant='h6'
            sx={{
              // color: '#fff',
              fontWeight: '500'
            }}>
            Information Technology Expected in October 2025<br />
            Government Engineering College of Ajmer, Ajmer, India<br />
            {<Link href={'https://www.ecajmer.ac.in/'} target={'_blank'} >www.ecajmer.ac.in</Link>}
          </Typography>

          <Typography
            variant='h3'
            sx={{
              // color: '#fff',
              fontWeight: '900',
              marginTop: 10
            }}>
            Certification
          </Typography>
          <Grid2
            container rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 5, md: 3 }}
            sx={{
              marginTop: 3,
              display: 'flex',
              justifyContent: 'space-between',
              "@media (max-width:600px)": {
                justifyContent: 'center'
              },
              "@media (max-width:1131px)": {
                justifyContent: 'center'
              }
            }}>

            {
              [1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
                <Box
                  sx={{
                    p: 10,
                    bgcolor: 'yellow'
                  }}>
                  <Grid2>
                    <Typography sx={{ color: '#fff' }}>
                      Bewell
                    </Typography>
                  </Grid2>
                </Box>
              ))
            }
          </Grid2>

        </Box>
      </div>
    </Layout>
  )
}

export default About
