import { Avatar, AvatarGroup, Stack, Typography } from '@mui/material'
import React from 'react'
import { CommentOutlined, FolderOutlined, MoreHorizRounded } from '@mui/icons-material';
import styles from '../CSS Modules/Lists.module.css'

function Done({ done, allowDrop, drag, onDrop }) {
    return (
        <Stack
            bgcolor={'#f5f5f5'}
            width='32%'
            borderRadius='10px'
            // maxHeight='calc(100vh - 190px)'
            overflow='auto'
            paddingBottom={2}
            paddingTop={0.5}
            className={styles.box}
            component={'div'}
            onDragOver={allowDrop}
            onDrop={onDrop}
        >
            <Stack
                marginTop='10px'
                marginBottom='10px'
                marginLeft='20px'
                marginRight='15px'
                direction='row'
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Stack direction={'row'} alignItems={'center'} spacing={1.5}>
                    <span style={{
                        height: '8px',
                        width: '8px',
                        backgroundColor: '#76a5ea',
                        borderRadius: '50%',
                        display: 'inlineBlock'
                    }} ></span>
                    <Typography fontWeight={'600'} fontSize={'16px'} >Done</Typography>
                    <span style={{
                        height: '20px',
                        width: '20px',
                        backgroundColor: '#e0e0e0',
                        borderRadius: '50%',
                        display: 'inlineBlock'
                    }} >
                        <Typography
                            fontSize={'11px'}
                            sx={{ marginTop: '50%', translate: '0px -50%' }}
                        >
                            {done.length > 99 ? '99+' : done.length}
                        </Typography>
                    </span>
                </Stack>
            </Stack>
            <Stack
                component={'span'}
                marginLeft='20px'
                marginRight='15px'
                borderBottom='3.5px solid #8bc48a'
            ></Stack>
            <Stack
                spacing={3}
                marginLeft='20px'
                marginRight='15px'

            >
                {
                    done.map((item, index) => {
                        return (
                            <Stack
                                key={item.id}
                                bgcolor='white'
                                marginTop='10px'
                                borderRadius='10px'
                                padding={'10px'}
                                paddingTop={'20px'}
                                paddingBottom={'20px'}
                                draggable={true}
                                sx={{ cursor: 'grab' }}
                                onDragStart={ev => drag(ev, item.id, 'done')}
                                id={item.id}
                            >
                                <Stack
                                    direction={'row'}
                                    justifyContent={'space-between'}
                                    marginLeft={'10px'}
                                    alignItems={'center'}
                                >
                                    <Typography
                                        fontSize='13px'
                                        bgcolor={'#dae6de'}
                                        padding={'5px'}
                                        paddingRight={'10px'}
                                        paddingLeft={'10px'}
                                        borderRadius={'5px'}
                                        color={'#68b266'}
                                        fontWeight={'bold'}
                                    >Completed</Typography>
                                    <MoreHorizRounded sx={{ cursor: 'pointer' }} />
                                </Stack>
                                <Typography fontWeight={'600'} textAlign={'left'} paddingLeft={'10px'} marginTop={'10px'} >{item.Name}</Typography>
                                {
                                    item.text
                                        ? <Typography color={'#787486'} textAlign={'left'} paddingLeft={'10px'} paddingRight={'10px'} marginTop={'10px'} fontSize={'16px'} >{item.text}</Typography>
                                        : null
                                }
                                {
                                    item.photos ?
                                        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} useFlexGap spacing={1} paddingLeft={'10px'} paddingRight={'10px'} marginTop={'10px'}  >
                                            {item.photos.map((photo, index) => {
                                                return (<img src={photo} alt={photo} key={index} height={'auto'} width={item.photos.length > 1 ? '48%' : '98%'} />)
                                            })}
                                        </Stack>
                                        : null
                                }
                                <Stack
                                    justifyContent={'space-between'}
                                    alignItems={'center'}
                                    marginTop={'10px'}
                                    paddingLeft={'10px'}
                                    paddingRight={'10px'}
                                    direction={'row'}
                                >
                                    <AvatarGroup max={3} total={item.Shared.length}
                                        sx={{
                                            '& .MuiAvatar-root': { width: 30, height: 30, fontSize: 15, color: 'black' },
                                        }}
                                    >
                                        {item.Shared.map((shared, index) => {
                                            return (<Avatar key={index} alt={shared} src={`https://xsgames.co/randomusers/avatar.php?g=${index % 2 === 0 ? 'male' : 'female'}`} />)
                                        })}
                                    </AvatarGroup>
                                    <Stack
                                        direction={'row'}
                                        justifyContent={'flex-end'}
                                        alignItems={'center'}
                                    >
                                        <CommentOutlined sx={{ width: '20px', color: '#787486', fontSize: '30px', cursor: 'pointer' }} />
                                        <Typography fontSize={'10px'} sx={{ color: '#787486', cursor: 'pointer' }} marginLeft={'3px'} marginRight={'10px'} >{item.comments} comments</Typography>
                                        <FolderOutlined sx={{ width: '20px', color: '#787486', fontSize: '30px', cursor: 'pointer' }} />
                                        <Typography fontSize={'10px'} sx={{ color: '#787486', cursor: 'pointer' }} marginLeft={'3px'} marginRight={'10px'} >{item.files} files</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        )
                    })
                }
            </Stack>
        </Stack>
    )
}

export default Done