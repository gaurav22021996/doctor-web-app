import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from '../common/Image'

const WhatPeopleSay = () => {
  return (
    <Box className="flex justify-center items-center">

      <Box sx={{
        backgroundImage: "url('/image/google-bg.svg')",
        backgroundRepeat: "no-repeat",
        filter: "blur(8px)",
        webkitFilter: "blur(8px)",
        backgroundSize: "cover",
        width: "100%",
        height:"20rem",
        backgroundPosition: "center"
      }} className="py-16"></Box>

      <Box sx={{
        position: "absolute",
        top: "50 %",
        left: "50 %",
        transform: "translate(-50 %, -50 %)",
        zIndex: 2,
        width: "80%",
        padding: "20px",
        textAlign: "center"

      }}>

        <Grid container className="justify-around">

          <Grid item sm={11} md={11} lg={9} >

            <Box sx={{
              position: "absolute",

            }}>
              <Grid spacing={4} container className="justify-around" >

                <Grid item sm={11} md={11} lg={11} className=' flex justify-around'>

                  <Box className="flex gap-2 items-center">
                    <Box>
                      <Typography gutterBottom variant='h4' color="white">
                        What people say on
                      </Typography>
                    </Box>
                    <Box><Image src="/image/google-logo.svg" alt="Beyond delivery" /></Box>
                  </Box>

                </Grid >

                <Grid item sm={11} md={11} lg={11} className=' flex justify-around'>

                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quidem itaque a nesciunt, pariatur dolores laborum! Blanditiis cupiditate ipsam ea minima ratione! Voluptatum eos neque repellendus ducimus itaque. Eligendi aliquam quasi voluptatum voluptatem possimus, architecto at veritatis dignissimos earum nam facere repudiandae sequi ad, maiores iste aperiam, numquam porro quibusdam dolorum illum mollitia alias. Natus, iste fuga? Doloremque, tempora! Unde ratione ut libero deleniti, nisi voluptatum nostrum possimus cupiditate, voluptas nobis, quaerat molestias illo magnam blanditiis quo praesentium expedita corrupti quasi maiores quod incidunt delectus excepturi. Atque nulla, consequuntur hic laudantium deserunt eligendi reprehenderit corporis, ut placeat iste modi maiores.
                </Grid >

              </Grid >
            </Box>
          </Grid >
        </Grid >

      </Box >
    </Box >
  )
}

export default WhatPeopleSay

