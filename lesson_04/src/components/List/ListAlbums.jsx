import React, {useEffect, useState} from "react";
import {
    Button,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    TextField,
    Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

import createService from "../../services/serviceFactory.js";

import {API_ALBUMS, NEW_ALBUMS, EDITED_ALBUMS} from "../../constants/constants.js";
import useSortedList from "../../hooks/useSortedList.jsx";
import useHighlightedList from "../../hooks/useHighlightedList.jsx";
import useSessionStorage from "../../hooks/useSessionStorage.jsx";

export default function ListAlbums() {

    const [albums, setAlbums] = useState([]);
    const [newAlbumTitle, setNewAlbumTitle] = useState("");
    const [editAlbumTitle, setEditAlbumTitle] = useState("");
    const [editAlbumId, setEditAlbumId] = useState(null);
    const [errorTextField, setErrorTextField] = useState(false);

    const service = createService(API_ALBUMS);

    const [highlightedAlbums, updateHighlightedList] = useHighlightedList(albums);
    const sortedList = useSortedList(highlightedAlbums);

    const [newAlbums, setNewAlbums] = useSessionStorage(NEW_ALBUMS, []);
    const [editedAlbums, setEditedAlbums] = useSessionStorage(EDITED_ALBUMS, []);

    const fetchItems = async () => {
        try {
            const response = await service.get();
            setAlbums(response.slice(0, 10));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchItems().then(r => console.log(`Fetch items result:`, r));
    }, []);


    const handleAddItem = async () => {
        setErrorTextField(false);

        if (newAlbumTitle.trim() === "") {
            console.log(`Title shouldn't be empty`);
            setErrorTextField(true);
            return;
        }

        try {
            const maxId = albums.reduce((max, item) => (item.id > max ? item.id : max), 0);
            const addedAlbum = {userId: 2, id: maxId + 1, title: newAlbumTitle};

            await service.post(addedAlbum);

            setAlbums((prevState) => [...prevState, addedAlbum]);
            setNewAlbums((prevState) => [...prevState, addedAlbum]);

            setNewAlbumTitle("");
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    const handleEditItem = async () => {
        if (editAlbumTitle.trim() === "") return;

        const isItemUnchanged = albums.some((item) => editAlbumId === item.id && editAlbumTitle === item.title);

        if (isItemUnchanged) {
            resetEditItem();
            return;
        }

        try {
            const updatedItem = await service.patch(editAlbumId, {title: editAlbumTitle});
            setEditedAlbums((prevState) => [...prevState, updatedItem]);
            setAlbums((prevItems) =>
                prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
            );
            resetEditItem();
        } catch (error) {
            console.error("Error editing item:", error);
        }
    };

    const resetEditItem = () => {
        setEditAlbumId(null);
        setEditAlbumTitle("");
    };

    const handleDeleteItem = async (id) => {
        try {
            await service.delete(id);
            const updatedItems = albums.filter((item) => item.id !== id);
            setAlbums(updatedItems);
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    const handleShowChanges = () => {
        updateHighlightedList(newAlbums, editedAlbums);
    };

    const editItem = (id, title) => {
        setEditAlbumId(id);
        setEditAlbumTitle(title);
    };

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Albums
            </Typography>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Add Album Title"
                        variant="outlined"
                        value={newAlbumTitle}
                        onChange={(e) => setNewAlbumTitle(e.target.value)}
                        error={errorTextField}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleAddItem}>
                        Add
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleShowChanges}>
                        Show Changes
                    </Button>
                </Grid>
            </Grid>
            <List>
                {sortedList.map((item) => (
                    <ListItem key={item.id}
                              style={{
                                  color: item.color
                              }}>
                        {item.id === editAlbumId ? (
                            <>
                                <TextField
                                    fullWidth
                                    value={editAlbumTitle}
                                    onChange={(e) => setEditAlbumTitle(e.target.value)}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleEditItem}
                                >
                                    Save
                                </Button>
                            </>
                        ) : (
                            <>
                                <ListItemIcon>
                                    <AudiotrackIcon/>
                                </ListItemIcon>
                                <ListItemText primary={item.title}/>
                                <ListItemSecondaryAction style={{marginRight: '510px'}}>
                                    <IconButton
                                        aria-label="edit"
                                        onClick={() => editItem(item.id, item.title)}
                                    >
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton
                                        aria-label="delete"
                                        onClick={() => handleDeleteItem(item.id)}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </>
                        )}
                    </ListItem>
                ))}
            </List>
        </>
    );
}