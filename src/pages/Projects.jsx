import React from 'react'
import Layout from '../components/layouts/Layout'
import Background from '../assets/images/background.jpg'
import { Box, Grid2, Typography } from '@mui/material'
import '../styles/Project.css'

const Projects = () => {
  return (
    <Layout>
      <div className="container"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover'
        }}
      >
        <div className="body">
          <Box
            sx={{
              display: 'flex',
              // justifyContent:'center',
              // bgcolor: 'yellow'
            }}>
            <Grid2
              container rowSpacing={4}
              columnSpacing={{ xs: 1, sm: 5, md: 3 }}

              sx={{
                // marginTop: 3,
                display: 'flex',
                justifyContent: 'space-between',
                "@media (max-width:600px)": {
                  justifyContent: 'center'
                },
                "@media (max-width:1131px)": {
                  justifyContent: 'center'
                }
              }}>
              {[1,12,1,1,1,1].map((item) => (
                <Box
                  sx={{
                    p: 10,
                    bgcolor: 'blue'
                  }}>
                  <Grid2>
                    <Typography sx={{ color: '#fff' }}>
                      project
                    </Typography>
                  </Grid2>
                </Box>
              ))}
            </Grid2>

          </Box>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
