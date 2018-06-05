import React, {Component} from "react";
import Trainings from "./components/Trainings";
import "./App.css";
import axios from "axios";

class App extends Component {

    constructor() {
        super();
        this.state = {
            trainings: []
        };

        axios.get('https://insight.zuehlke.com/api/v1/trainings',
            {
                withCredentials: true
            }
        ).then( res => {
            var trainings = res.data.Items;
            this.setState({trainings: trainings});
        })
    }

    render() {
        return (
            <Trainings trainings={this.state.trainings}/>
        );
    }
}

export default App;
