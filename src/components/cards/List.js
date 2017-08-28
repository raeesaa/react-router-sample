import React from "react";
import ListItem from "./ListItem";

export default class List extends React.Component {

    handleClick(index) {
        this.props.clickHandler(index);
    }

    render() {
        const elements = this.props.items.map((item, index) => {
            return (<ListItem key={item.id} isItemSelected={index === this.props.selectedIndex} item={item} clickHandler={() => this.handleClick(index)}/>);
        });
    
        return (
            <ul className="cards-list">{elements}</ul>
        );
    }
}
