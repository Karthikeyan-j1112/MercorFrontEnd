import { CalendarMonthOutlined, ExpandMoreOutlined, LiveHelpOutlined, NotificationsOutlined, SearchRounded } from '@mui/icons-material'
import { Avatar, InputAdornment, Stack, TextField, Typography } from '@mui/material'

import React from 'react'

function Header() {
  return (
    <div>
      <Stack
        paddingBottom={2}
        paddingTop={2}
        direction='row'
        alignContent='center'
        alignItems='center'
        justifyContent='space-between'
        borderBottom='2px solid #d5d5d5'
        minWidth='1186px'
        width='calc(100vw - 260px)'
      >
        <TextField
          size='small'
          sx={{ width: '300px', marginLeft: '20px' }}
          InputProps={{
            startAdornment: <InputAdornment position='start'> <SearchRounded /></InputAdornment>
          }}
          placeholder='search for anything'
        />
        <Stack direction='row' spacing='70px'>
          <Stack direction='row' spacing='10px' >
            <CalendarMonthOutlined sx={{ color: '#787486', cursor: 'pointer' }} />
            <LiveHelpOutlined sx={{ color: '#787486', cursor: 'pointer' }} />
            <NotificationsOutlined sx={{ color: '#787486', cursor: 'pointer' }} />
          </Stack>
          <Stack direction='row' marginTop='-5px' spacing='15px' paddingRight='20px' >
            <Stack textAlign='right' marginTop='-5px'  >
              <Typography color='black' fontSize='12px' fontWeight='600'>Anima Agrawal</Typography>
              <Typography color='grey' fontSize='11px' >U.P, India</Typography>
            </Stack>
            <Stack textAlign='right' direction='row' spacing='5px' >
              <Avatar sx={{ height: '30px', width: '30px', marginTop: '-5px' }} src='https://xsgames.co/randomusers/avatar.php?g=female' />
              <ExpandMoreOutlined sx={{ color: '#787486', cursor: 'pointer' }} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  )
}

export default Header