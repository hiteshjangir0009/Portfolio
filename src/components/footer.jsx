import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: '#1A1A19',
          color: '#fff',
          p: 3
        }}>
        <Box
          sx={{
            margin: 3,
          }}>
          <Typography
            variant='h4'
            sx={{
              "@media (max-width:600px)": {
                fontSize: '1.5rem'
              }
            }}>
            Connect at
          </Typography>
          <Box
            sx={{
              flexDirection: 'column',
              "& svg": {
                scale: .7,
                fontSize: '60px',
                cursor: 'pointer',
                marginTop: .1
              },
              "& svg:hover": {
                color: "blue",
                transform: "translateX(3px)",
                transition: "all 400ms",
              },
              "@media (max-width:600px)": {
                "& svg": {
                  scale: .5,
                  mr: 0
                }
              }
            }}>
            <InstagramIcon />
            <XIcon />
            <LinkedInIcon />
          </Box>
        </Box>


        {/* reserverd rights */}
        <Typography
          variant='h5'
          sx={{
            textAlign: 'center',
            "@media (max-width:600px)": {
              fontSize: '1rem'
            }
          }}>
          All Rights are reserved @| Hitesh jangir
        </Typography>
      </Box>
    </div>
  )
}

export default Footer
