import { AddBoxOutlined, AssignmentOutlined, ChatOutlined, HomeOutlined, KeyboardDoubleArrowLeftRounded, Lightbulb, MoreHorizRounded, PeopleOutlineRounded, SettingsOutlined } from '@mui/icons-material'
import { Card, CardContent, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function Sidebar() {

    const projects = [
        { name: "Mobile App", color: '#5030e5' },
        { name: "Website Redesign", color: '#ffa500' },
        { name: "Design System", color: '#e4ccfd' },
        { name: "Wireframes", color: '#76a5ea' },
    ]
    const [activeProject, setActiveProject] = useState(0);
    return (
        <Stack minWidth='254px' width='254px' borderRight='2px solid #d5d5d5' minHeight='100vh' justifyContent='space-between' >
            <Stack>
                <Stack>
                    <Stack
                        direction='row'
                        paddingBottom={2}
                        paddingTop={2}
                        alignContent='center'
                        alignItems='center'
                        paddingLeft={3}
                        spacing={1}
                        height={40}
                        borderBottom='2px solid #d5d5d5'
                    >
                        <img src='./logo_Mercor.png' width={27} alt='logo' />
                        <Typography fontWeight='600' width={140} textAlign='left' >Project M.</Typography>
                        <KeyboardDoubleArrowLeftRounded />
                    </Stack>
                    <Stack
                        paddingTop={2}
                        paddingLeft={3}
                        spacing={2}
                    >
                        <Stack direction='row' alignContent='center' alignItems='center' >
                            <HomeOutlined sx={{ color: '#787486', cursor: 'pointer', width: '33px', fontSize: '33px' }} />
                            <Typography marginLeft={2} fontSize={20} sx={{ color: '#787486', cursor: 'pointer' }} width={140} textAlign='left'  >Home</Typography>
                        </Stack>
                        <Stack direction='row' alignContent='center' alignItems='center' >
                            <ChatOutlined sx={{ color: '#787486', cursor: 'pointer', width: '30px', fontSize: '28px' }} />
                            <Typography marginLeft={2} fontSize={20} sx={{ color: '#787486', cursor: 'pointer' }} width={140} textAlign='left'  >Message</Typography>
                        </Stack>
                        <Stack direction='row' alignContent='center' alignItems='center' >
                            <AssignmentOutlined sx={{ color: '#787486', cursor: 'pointer', width: '30px', fontSize: '28px' }} />
                            <Typography marginLeft={2} fontSize={20} sx={{ color: '#787486', cursor: 'pointer' }} width={140} textAlign='left'  >Tasks</Typography>
                        </Stack>
                        <Stack direction='row' alignContent='center' alignItems='center' >
                            <PeopleOutlineRounded sx={{ color: '#787486', cursor: 'pointer', width: '30px', fontSize: '28px' }} />
                            <Typography marginLeft={2} fontSize={20} sx={{ color: '#787486', cursor: 'pointer' }} width={140} textAlign='left'  >Members</Typography>
                        </Stack>
                        <Stack direction='row' alignContent='center' alignItems='center' >
                            <SettingsOutlined sx={{ color: '#787486', cursor: 'pointer', width: '30px', fontSize: '28px' }} />
                            <Typography marginLeft={2} fontSize={20} sx={{ color: '#787486', cursor: 'pointer' }} width={140} textAlign='left'  >Settings</Typography>
                        </Stack>
                        <Stack borderBottom='2px solid #d5d5d5' style={{ marginRight: '10px', marginLeft: '-10px' }} >
                        </Stack>
                        <Stack direction='row' justifyContent='space-between' >
                            <Typography fontSize={17} fontWeight='bold' sx={{ color: '#787486' }}>MY PROJECTS</Typography>
                            <AddBoxOutlined sx={{ color: '#787486', cursor: 'pointer', width: '30px', fontSize: '23px', marginRight: '10px' }} />
                        </Stack>
                        <Stack
                            spacing={0.5}
                        >
                            {
                                projects.map((project, index) => {
                                    return (
                                        <Stack
                                            direction='row'
                                            alignItems='center'
                                            spacing={2}
                                            bgcolor={activeProject === index && '#f1eefd'}
                                            padding={1}
                                            sx={{ translate: '-10px', cursor: 'pointer' }}
                                            borderRadius='8px'
                                            justifyContent={'space-between'}
                                            key={index}
                                        >
                                            <Stack
                                                direction='row'
                                                alignItems='center'
                                                spacing={2}
                                                component='div'
                                                onClick={() => setActiveProject(index)}
                                            >
                                                <span style={{
                                                    height: '10px',
                                                    width: '10px',
                                                    backgroundColor: activeProject === index ? '#7ac555' : project.color,
                                                    borderRadius: '50%',
                                                    display: 'inlineBlock'
                                                }} ></span>
                                                <Typography
                                                    fontWeight={'bold'}
                                                    maxWidth='150px'
                                                    overflow={'hidden'}
                                                    textOverflow={'ellipsis'}
                                                    whiteSpace={'nowrap'}
                                                    color={activeProject === index ? 'black' : '#787486'}
                                                >{project.name}</Typography>
                                            </Stack>
                                            {activeProject === index ? <MoreHorizRounded /> : null}
                                        </Stack>)
                                })
                            }
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                marginBottom={2}
                marginTop='-30px'
            >
                <Stack
                    style={{
                        height: '70px',
                        width: '70px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '50%',
                        marginLeft: '50%',
                        translate: '-50% 50%',
                    }}
                    alignItems='center'
                    justifyContent='center'
                    component={'span'}
                >
                    <Stack
                        style={{
                            height: '35px',
                            width: '35px',
                            background: 'radial-gradient(#f7ecc3,#f5f4f1)',
                            borderRadius: '50%',
                        }}
                        alignItems='center'
                        justifyContent='center'
                        component={'span'}
                    >
                        <Lightbulb
                            sx={{
                                color: '#fbcb18',
                                width: '35px',
                                fontSize: '35px',
                                borderRadius: '50%',
                                boxShadow: '0px 0px 30px #f7edc5',
                            }}
                        />
                    </Stack>
                </Stack>
                <Card
                    sx={{
                        background: '#f5f5f5',
                        width: '80%',
                        marginLeft: '10%',
                    }}
                >
                    <CardContent
                        sx={{ marginTop: '15px' }}
                    >
                        <Typography gutterBottom fontWeight='bold' >Thoughts Time</Typography>
                        <Typography fontSize={13} sx={{ color: '#787486' }} gutterBottom >We don’t have any notice for you, till then you can share your thoughts with your peers.</Typography>
                        <TextField size='small' sx={{ textAlign: 'center' }} placeholder='Write a message' />
                    </CardContent>
                </Card>
            </Stack>
        </Stack>
    )
}

export default Sidebar