import React from 'react'
import './Task.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBeignEdited: false
        }
    }

    changeMode() {
        this.setState(prevState => ({
            isBeignEdited: !prevState.isBeignEdited
        }))
    }

    render() {

        let { isBeignEdited } = this.state;

        if (!isBeignEdited) {
            return <Card className="Task">
                <Card.Header bg="blue">
                    {this.props.name}
                </Card.Header>
                <Card.Body>
                    {this.props.description}

                </Card.Body>
                <Button onAction={this.changeMode()}>Edit</Button>

            </Card>
        }
        else {
            return <Card className="Task">
                < Card.Header bg="blue" >
                    <input class="form-control form-control-sm" type="text" placeholder="Titulo" />
                </Card.Header >
                <Card.Body>
                    <input class="form-control form-control-sm" type="text" placeholder="Descripccion" />
                </Card.Body>
                {/* <Button onAction={this.changeMode()}>Edit</Button> */}
            </Card >
        }
    }
}

export default Task