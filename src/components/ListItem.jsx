import React from 'react';

const ListItem = (props) =>{
  

    return(
        <li className='todo-Item'>

            <span>
                <input type="checkbox"/>
                <span>{props.text}</span>
            </span>

            <span>...</span>

        </li>
    );


};

export default ListItem;