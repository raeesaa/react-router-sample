import React from "react";
import List from "./List";

export default class Cards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [{ id: 1, name: "Liam Bailey", designation: "Software Developer" },
            { id: 2, name: "David Beddard", designation: "Senior Software Developer" },
            { id: 3, name: "Andrew Bell", designation: "DevOps Manager" },
            { id: 4, name: "Steven Bennett", designation: "Solution Architect" },
            { id: 5, name: "Michelle Brelsford", designation: "Business Analyst" }],
            indexSelected: null
        }
    }

    clickHandler(index) {
        this.setState({
            indexSelected: index
        });
    }

    render() {
        return <List
            items={this.state.employees}
            selectedIndex={this.state.indexSelected}
            clickHandler={(index) => this.clickHandler(index)}
        />;
    }
}