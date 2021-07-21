import React from 'react'
import './Task.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function Task(props) {
    return (
        <Card className="Task">
            <Card.Header bg="blue">
                {props.name}
            </Card.Header>
            <Card.Body>
                {props.description}
            </Card.Body>
        </Card>
    )
}
