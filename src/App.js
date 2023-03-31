import { useEffect, useState } from 'react';
import './App.css';
import Items from './Items';
import { addItem, deleteItem, editItem, getAllItems } from './ItemsFetch';

function App() {
  const [item, setItem] = useState([]);
  const [title, setTitle] = useState('');
  const [edit, setEdit] = useState(false);
  const [itemId, setItemId] = useState('');

  useEffect(() => {
    getAllItems(setItem)
  }, [])

  const updateItem = (_id, title) => {
    setEdit(true);
    setTitle(title);
    setItemId(_id)
  } 

  return (
    <div className='container'>
      <h1>Shopping List</h1>
      <div className='input_container'>
        <input 
          type='text'
          value={title} 
          placeholder='What do you want to buy?'
          onChange={(e) => setTitle(e.target.value)}
        />
        <button 
          onClick={
            edit ? () => editItem(itemId, title, setTitle, setItem, setEdit) 
                : () => addItem(title, setTitle, setItem)
          }
        >
          {edit ? 'Edit' : 'Add'}
        </button>
      </div>
      <div >
        {item.map((element) => 
          <Items 
            key={element._id} 
            text={element.title}
            updateItem={() => updateItem(element._id, element.title)}
            deleteItem={() => deleteItem(element._id, setItem)}/>)}
      </div>
    </div>
  );
}

export default App;
