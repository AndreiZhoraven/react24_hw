import React, {PureComponent} from "react";

import ListItem from "./../ListItem/ListItem";

export default class List extends PureComponent {
    componentDidMount() {
        this.interval = setInterval(() => {
            const updatedAnimals = this.state.animals.map((animal) => ({
                ...animal,
                color: animal.color || "",
            }));
            const randomIndex = Math.floor(Math.random() * this.state.animals.length);
            updatedAnimals[randomIndex].color = "green";

            const greenCount = updatedAnimals.filter(
                (item) => item.color == "green"
            ).length;

            let tableStyleBorder = this.calculateBorderStyle(greenCount) + "px solid black";

            this.setState({animals: updatedAnimals, styleBorder: tableStyleBorder});
        }, 2000);
    }

    calculateBorderStyle(greenCount) {
        if (greenCount === this.state.animals.length) return "20";
        else if (greenCount >= this.state.animals.length / 2) return "10";
        else return "1";
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    state = {
        animals: this.props.list,
        styleBorder: "1px solid black"
    };

    render() {
        let tableStyle = {
            border: this.state.styleBorder,
            textAlign: "left",
        };

        return (
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={tableStyle}>Item</th>
                    <th style={tableStyle}>Icon</th>
                </tr>
                </thead>
                <tbody>
                {this.state.animals.map((item, index) => (
                    <ListItem key={index} item={item} borderStyle={tableStyle}/>
                ))}
                </tbody>
            </table>
        );
    }
}
