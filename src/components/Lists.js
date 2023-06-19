import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import list from './lists.json'
import ToDo from './ToDo';
import OnProgress from './OnProgress';
import Done from './Done';
import { DragDropContext } from 'react-beautiful-dnd';

function Lists() {
    const [toDo, setToDo] = useState(list.toDo);
    const [onProgress, setOnProgress] = useState(list.onProgress);
    const [done, setDone] = useState(list.Done)
    useEffect(() => {
        setToDo(list.toDo)
        setOnProgress(list.onProgress)
        setDone(list.Done)
    }, [])

    const toDoDrop = (source, id) => {
        if (source.toLowerCase() === 'onprogress') {
            let items = onProgress
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    let item = items[i]
                    items.splice(i, 1)
                    setOnProgress(items)
                    setToDo(prev => [item, ...prev])
                }
            }
        }
        if (source.toLowerCase() === 'done') {
            let items = done
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    let item = items[i]
                    items.splice(i, 1)
                    setDone(items)
                    setToDo(prev => [item, ...prev])
                }
            }
        }
    }

    const onProgessDrop = (source, id) => {
        if (source.toLowerCase() === 'todo') {
            let items = toDo
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    let item = items[i]
                    items.splice(i, 1)
                    setToDo(items)
                    setOnProgress(prev => [item, ...prev])
                }
            }
        }
        if (source.toLowerCase() === 'done') {
            let items = done
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    let item = items[i]
                    items.splice(i, 1)
                    setDone(items)
                    setOnProgress(prev => [item, ...prev])
                }
            }
        }
    }

    const doneDrop = (source, id) => {
        if (source.toLowerCase() === 'todo') {
            let items = toDo
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    let item = items[i]
                    items.splice(i, 1)
                    setToDo(items)
                    setDone(prev => [item, ...prev])
                }
            }
        }
        if (source.toLowerCase() === 'onprogress') {
            let items = onProgress
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    let item = items[i]
                    items.splice(i, 1)
                    setOnProgress(items)
                    setDone(prev => [item, ...prev])
                }
            }
        }
    }

    const dragEnd = (result) => {        
        if (result.destination) {
            if (result.destination.droppableId !== result.source.droppableId) {
                if (result.destination.droppableId.toLowerCase() === 'todo') {
                    toDoDrop(result.source.droppableId, result.draggableId)
                }
                if (result.destination.droppableId.toLowerCase() === 'onprogress') {                    
                    onProgessDrop(result.source.droppableId, result.draggableId)
                }
                if (result.destination.droppableId.toLowerCase() === 'done') {
                    doneDrop(result.source.droppableId, result.draggableId)
                }
            }
        }
    }

    return (

        <Stack
            direction={'row'}
            spacing={2}
            paddingTop={4}
            paddingLeft={2}
            marginBottom={2}
            maxHeight={`600px`}
        >
            <DragDropContext
                onDragEnd={dragEnd}
            >
                <ToDo toDo={toDo} />
                <OnProgress onProgress={onProgress} />
                <Done done={done} />
            </DragDropContext>
        </Stack>

    )
}

export default Lists