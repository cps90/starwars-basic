import React, { Component } from './React'
import Person from './Person'

class List extends Component {
    constructor() {
        super()
        this.State = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        fetch("https://swapi.co/api/people/")
            .then(res => res.json())
            .then((response) => {
                this.setState({
                    data: response.data,
                    isLoaded:true
                })
            }, (error) => {
                this.setState({
                    isLoaded:true,
                    error
                })
            })
    }

    render() {
        if (this.state.error) {
            console.log(this.State.error.message)
            return (
                <div>
                    <h1>Error</h1>
                </div>
            );
        } else if (!this.state.isLoaded) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        } else {
            return (
                <div>
                    this.state.data.map((person,i) => {
                        <Person 
                            name = {person.name}
                            birth_year = {person.birth_year}
                            gender = {person.gender}
                            hair_color = {person.hair_color}
                            eye_color = {person.eye_color}
                            key = {person.name + i}
                        />
                    })
                </div>
            )
        }
    }
}

export default List