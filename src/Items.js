import { CiSquareRemove } from 'react-icons/ci';
import { FiEdit } from 'react-icons/fi';

const Items = ({text, updateItem, deleteItem}) => {
    return (
        <div className='list_container'>
            <li>
                {text} 
            </li>
            <FiEdit className='icon' onClick={updateItem}></FiEdit>
            <CiSquareRemove className='icon' onClick={deleteItem}></CiSquareRemove>
        </div>
    )
}

export default Items;