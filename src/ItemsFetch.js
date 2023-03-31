import axios from 'axios';

const url = 'https://shopping-list-hfap.onrender.com';

const getAllItems = (setItem) => {
    axios.get(url)
        .then( ({data}) => {
            console.log(data);
            setItem(data);
        })
}

const addItem = (title, setTitle, setItem) => {
    axios.post((url + '/saveItem'), {title})
        .then( (data) => {
            console.log(data);
            setTitle('');
            getAllItems(setItem)
        })
}

const editItem = (itemId, title, setTitle, setItem, setEdit) => {
    axios.post((url + '/editItem'), {_id:itemId, title})
        .then( (data) => {
            console.log(data);
            setTitle('');
            setEdit(false);
            getAllItems(setItem)
        })
}

const deleteItem = (_id, setItem) => {
    axios.post((url + '/deleteItem'), {_id})
        .then ((data) => {
            console.log(data);
            getAllItems(setItem)
        })
}

export {getAllItems, addItem, editItem, deleteItem};