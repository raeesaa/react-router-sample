import React from "react";

export default function ListItem(props) {
    const item = props.item;

    return (
        <li className={ props.isItemSelected? 'item-selected cards-list-item' : 'item-not-selected cards-list-item'} onClick={() => props.clickHandler()}>
            <p>Employee Name: {item ? item.name : ''}</p>
            <p>Employee Designation: {item ? item.designation : ''}</p>
        </li>
    )
}
