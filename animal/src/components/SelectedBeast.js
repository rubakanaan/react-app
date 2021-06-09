import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


export class SelectedBeast extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>

                <Modal show={this.props.show} >

                    
                    <Modal.Header >
                        <Modal.Title>{this.props.selectedProp.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img variant='top' src={this.props.selectedProp.img} alt='' style={{ width: "100%" }} />
                        <p>{this.props.selectedProp.description}</p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleShow}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default SelectedBeast;