import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import list from './lists.json'
import ToDo from './ToDo';
import OnProgress from './OnProgress';
import Done from './Done';

function Lists() {
    const [toDo, setToDo] = useState(list.toDo);
    const [onProgress, setOnProgress] = useState(list.onProgress);
    const [done, setDone] = useState(list.Done)
    useEffect(() => {
        setToDo(list.toDo)
        setOnProgress(list.onProgress)
        setDone(list.Done)
    }, [])
    const allowDrop = (ev) => {
        ev.preventDefault();
    }
    const drag = (ev, id, list) => {
        ev.dataTransfer.setData("id", id);
        ev.dataTransfer.setData("list", list);
    }
    const onDrop1 = (ev) => {
        ev.preventDefault();
        let id = ev.dataTransfer.getData("id");
        let list = ev.dataTransfer.getData("list");
        if (list.toLowerCase() === 'onprogress') {
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
        if (list.toLowerCase() === 'done') {
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
    const onDrop2 = (ev) => {
        ev.preventDefault();
        let id = ev.dataTransfer.getData("id");
        let list = ev.dataTransfer.getData("list");
        if (list.toLowerCase() === 'todo') {
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
        if (list.toLowerCase() === 'done') {
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
    const onDrop3 = (ev) => {
        ev.preventDefault();
        let id = ev.dataTransfer.getData("id");
        let list = ev.dataTransfer.getData("list");
        if (list.toLowerCase() === 'todo') {
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
        if (list.toLowerCase() === 'onprogress') {
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

    return (
        <Stack
            direction={'row'}
            spacing={2}
            paddingTop={4}
            paddingLeft={2}
            marginBottom={2}
            maxHeight={`600px`}
        >
            <ToDo toDo={toDo} allowDrop={allowDrop} drag={drag} onDrop={onDrop1} />
            <OnProgress onProgress={onProgress} allowDrop={allowDrop} drag={drag} onDrop={onDrop2} />
            <Done done={done} allowDrop={allowDrop} drag={drag} onDrop={onDrop3} />

        </Stack>
    )
}

export default Lists