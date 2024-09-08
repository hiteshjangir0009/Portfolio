import React from 'react'
import '../styles/Home.css'
import Layout from '../components/layouts/Layout'
import Background from '../assets/images/background.jpg'
import Profile from '../assets/images/profile.jpg'
import { Avatar, Box, Grid2, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Layout>
            <div className="main"
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: 'cover',
                    backgroundposition: 'center',
                    backgroundrepeat: 'no-repeat'

                }}>
                <div className="container">

                    <Box
                        sx={{
                            display: 'flex',
                            p: '2rem',
                            bgcolor: '#34343440',
                            // bgcolor: 'red',
                            borderRadius: '2rem',

                        }}>
                        <Avatar
                            src={Profile}
                            sx={{
                                height: '13rem',
                                width: '13rem',
                                "@media (max-width:600px)": {
                                    height: '6rem',
                                    width: '6rem'

                                }
                            }}
                        />
                        <Box component={'div'}
                            sx={{
                                marginLeft: '3rem',
                                "@media (max-width:600px)": {
                                    marginLeft: '1rem'

                                }
                            }}>

                            <Typography
                                variant='h3'
                                sx={{
                                    fontWeight: '500',
                                    color: '#fff',
                                    "@media (max-width:600px)": {
                                        fontSize: '1rem'

                                    }
                                }}>
                                Hitesh Jangir
                            </Typography>

                            <Typography
                                variant='h6'
                                sx={{
                                    // fontWeight:'500',
                                    color: '#fff',
                                    "@media (max-width:600px)": {
                                        fontSize: '.5rem'

                                    }
                                }}>
                                Laxmangarh, sikar(332311)
                            </Typography>

                            <Link
                                type='tel:7665890598'
                                className='Linktext'
                            >
                                <Typography

                                    variant='h6'
                                    sx={{
                                        // fontWeight:'500',
                                        color: '#fff',
                                        marginTop: 5,
                                        "@media (max-width:600px)": {
                                            fontSize: '.5rem',
                                            marginTop: 3
                                        }
                                    }}>
                                    7665890598
                                </Typography>
                            </Link>

                            <Link
                                className='Linktext'
                                type='mailto:hiteshjangir542@gmail.com'
                            >
                                <Typography

                                    variant='h6'
                                    sx={{
                                        // fontWeight:'500',
                                        color: '#fff',
                                        "@media (max-width:600px)": {
                                            fontSize: '.5rem'

                                        }
                                    }}>
                                    Hiteshjangir542@gmail.com
                                </Typography>
                            </Link>

                        </Box>

                    </Box>
                </div>

                {/* project heading */}
                <div className="heading">
                    <Typography
                        variant='h4'
                        sx={{
                            color: '#fff'
                        }}>
                        Projects
                    </Typography>
                </div>
                <div className='Project_container'>

                    <Grid2
                        container rowSpacing={2}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        {[1, 1].map((item) => (
                            <Box
                                sx={{
                                    bgcolor: 'red',
                                    p: 10,
                                    flexGrow: 1,
                                    margin: 1
                                }}>

                                <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                                    <Typography sx={{ color: '#fff' }}>
                                        Bewell
                                    </Typography>
                                </Grid2>
                            </Box>
                        ))}

                    </Grid2>
                </div>

            </div>
        </Layout >
    )
}

export default Home