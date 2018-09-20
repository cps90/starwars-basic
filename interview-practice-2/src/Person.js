import React, {Component} from 'react'

class Person extends Component {
    constructor() {
        super()
        this.State = {
            isToggled: false
        }
    }
    
    dropdown = () => {
        this.setState(prevState => {
            return {
                isToggled: !prevState.isToggled
            }
        })
    }

    render() {
        return (
            <div>
                <h2 onClick={dropdown}>{this.props.name}</h2>
                {this.state.isToggled
                ?   <ul>
                         <li>{this.props.birth_year}</li>
                        <li>{this.props.gender}</li>
                        <li>{this.props.hair_color}</li>
                        <li>{this.props.eye_color}</li>
                    </ul>
                : null
                }
            </div>
        );
    }
}

export default Person