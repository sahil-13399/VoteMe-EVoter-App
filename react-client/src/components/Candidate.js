import React from 'react'
import Card from 'react-bootstrap/Card'
 import {Button} from 'react-bootstrap'


function Candidate({name,desc,img}) {
    return (
        <div style = {{color : "black",margin : "20px"}}>
            {console.log("Hello Candidate")}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button variant="primary">Vote for Me</Button> 
                </Card.Body>
            </Card>
        </div>
    )
}

export default Candidate
