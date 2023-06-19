import { AddRounded, CalendarMonthOutlined, EditOutlined, ExpandMoreOutlined, FilterAltOutlined, InsertLinkRounded, PeopleAltOutlined, ViewAgendaRounded } from '@mui/icons-material'
import { Avatar, AvatarGroup, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Lists from './Lists'

function Main() {
    return (
        <Stack >
            <Stack direction='row' paddingTop={2} paddingLeft={2} justifyContent={'space-between'} >
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    spacing={1}
                >
                    <Typography fontSize={'34px'} fontWeight={'600'} >Mobile App</Typography>
                    <EditOutlined sx={{ backgroundColor: '#dcd6fa', color: '#5030e5', padding: '3px', borderRadius: '5px' }} fontSize={'18px'} />
                    <InsertLinkRounded sx={{ backgroundColor: '#dcd6fa', color: '#5030e5', padding: '3px', borderRadius: '5px' }} fontSize={'18px'} />
                </Stack>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    spacing={1}
                    paddingRight='20px'
                >
                    <AddRounded sx={{ backgroundColor: '#dcd6fa', color: '#5030e5', padding: '3px', borderRadius: '5px', width: '10px', height: '10px' }} fontSize={'10px'} />
                    <Typography fontSize={'15px'} sx={{ color: '#5030e5' }} >Invite</Typography>
                    <AvatarGroup max={5} total={6}
                        sx={{
                            '& .MuiAvatar-root': { width: 30, height: 30, fontSize: 15, backgroundColor: '#f4d7da', color: '#d25b68' },

                        }}
                    >
                        <Avatar alt="" src="https://xsgames.co/randomusers/avatar.php?g=male" />
                        <Avatar alt="" src="https://xsgames.co/randomusers/avatar.php?g=female" />
                        <Avatar alt="" src="https://xsgames.co/randomusers/avatar.php?g=male" />
                        <Avatar alt="" src="https://xsgames.co/randomusers/avatar.php?g=female" />
                    </AvatarGroup>
                </Stack>
            </Stack>
            <Stack direction='row' paddingTop={2} paddingLeft={2} justifyContent={'space-between'} >
                <Stack direction='row' spacing={2}>
                    <Button
                        variant='outlined'
                        sx={{ color: '#787486', borderColor: '#787486', fontSize: '12px' }}
                        startIcon={<FilterAltOutlined sx={{ color: '#787486', borderColor: '#787486', width: '20px', fontSize: '10px' }} />}
                        endIcon={<ExpandMoreOutlined sx={{ color: '#787486', borderColor: '#787486', width: '20px', fontSize: '10px' }} />}

                    >Filter</Button>
                    <Button
                        variant='outlined'
                        sx={{ color: '#787486', borderColor: '#787486', fontSize: '12px' }}
                        startIcon={<CalendarMonthOutlined sx={{ color: '#787486', borderColor: '#787486', width: '20px', fontSize: '10px' }} />}
                        endIcon={<ExpandMoreOutlined sx={{ color: '#787486', borderColor: '#787486', width: '20px', fontSize: '10px' }} />}
                    >Today</Button>
                </Stack>
                <Stack direction='row' spacing={2} alignContent={'center'} paddingRight='20px' >
                    <Button
                        variant='outlined'
                        sx={{ color: '#787486', borderColor: '#787486', fontSize: '12px' }}
                        startIcon={<PeopleAltOutlined sx={{ color: '#787486', borderColor: '#787486', width: '20px', fontSize: '10px' }} />}
                    >Share</Button>
                    <Stack
                        borderRight='1.5px solid #d5d5d5'
                        style={{ marginTop: '3px', marginBottom: '3px', borderColor: '#787486' }}
                    ></Stack>
                    <ViewAgendaRounded style={{ cursor: 'pointer' }} sx={{ color: 'white', backgroundColor: '#5030e5', padding: '5px', borderRadius: '5px' }} />
                    <Stack spacing={0.5} style={{ cursor: 'pointer' }} >
                        <Stack direction='row' spacing={0.5} marginTop='8px'>
                            <i className="fa fa-circle-o" style={{ color: '#787486', fontSize: "8px" }}></i>
                            <i className="fa fa-circle-o" style={{ color: '#787486', fontSize: "8px" }}></i>
                        </Stack>
                        <Stack direction='row' spacing={0.5} >
                            <i className="fa fa-circle-o" style={{ color: '#787486', fontSize: "8px" }}></i>
                            <i className="fa fa-circle-o" style={{ color: '#787486', fontSize: "8px" }}></i>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Lists />
        </Stack>
    )
}

export default Main