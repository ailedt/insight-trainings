import React, {Component} from 'react';

class Trainings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.trainings.map((training) => {
                return <div>{training.Name}</div>;
            }));
    }

}

export default Trainings;