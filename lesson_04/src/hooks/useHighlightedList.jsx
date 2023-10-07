import {useEffect, useState} from "react";

const useHighlightedList =
    (albums) => {
        const [list, setList] = useState([]);

        useEffect(() => {
            setList(albums.map((item) => ({...item, "color": "black"})));
        }, [albums]);


        const updateHighlightedList = (newList, editedList) => {
            const updatedList = list.map((item) => ({
                ...item,
                color: newList.some((newItem) => newItem.id === item.id) ? 'green' :
                    editedList.some((editedItem) => editedItem.id === item.id) ? 'red' :
                        undefined,
            }));
            setList(updatedList);
        };

        return [list, updateHighlightedList]
    }

export default useHighlightedList;