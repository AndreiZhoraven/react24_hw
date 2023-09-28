import React, {useState} from 'react';
import "./style.sass";

export default function List() {
    const [list, setList] = useState([
        {
            id: 1,
            title: 'Task 1',
        },
        {
            id: 2,
            title: 'Task 2',
        },
        {
            id: 3,
            title: 'Task 3',
        },
        {
            id: 4,
            title: 'Task 4',
        },
    ]);

    const [BlockMiddleList, setBlockMiddleList] = useState([]);
    const [BlockRightList, setBlockRightList] = useState([]);

    const handleMoveToMiddle = () => {
        if (list.length > 0) {
            const updatedList = [...list];
            const itemToTransfer = updatedList.shift();
            setList(updatedList);
            setBlockMiddleList([...[itemToTransfer], ...BlockMiddleList]);
        }
    };

    const handleMoveToLeft = () => {
        if (BlockMiddleList.length > 0) {
            const updatedTransferredList = [...BlockMiddleList];
            const itemToTransfer = updatedTransferredList.shift();
            setBlockMiddleList(updatedTransferredList);
            setList([...[itemToTransfer], ...list]);
        }
    };

    const handleMoveToRight = () => {
        if (BlockMiddleList.length > 0) {
            const updatedTransferredList = [...BlockMiddleList];
            const itemToTransfer = updatedTransferredList.shift();
            setBlockMiddleList(updatedTransferredList);
            setBlockRightList([...[itemToTransfer], ...BlockRightList]);
        }
    };

    const handleRemoveLastTransferred = () => {
        if (BlockRightList.length > 0) {
            const updatedTransferredList = [...BlockRightList];
            updatedTransferredList.pop();
            setBlockRightList(updatedTransferredList);
        }
    };

    return (
        <div>
            <div className="block--left">
                <ul>
                    {list.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
                <button className="button" onClick={handleMoveToMiddle}>Transfer first to right</button>
            </div>
            <div className="block--left">
                <ul>
                    {BlockMiddleList.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
                <div className="button">
                    <button onClick={handleMoveToLeft}>Transfer first to left</button>
                    <button onClick={handleMoveToRight}>Transfer first to right</button>
                </div>
            </div>
            <div className="block--left">
                <ul>
                    {BlockRightList.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
                <button className="button" onClick={handleRemoveLastTransferred}>Remove last item</button>
            </div>
        </div>
    );
};