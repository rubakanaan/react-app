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

                <Modal show={this.props.show} onHide={this.props.handleClose} >

                    {console.log('select---------------')}
                    <Modal.Header >
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img variant='top' src={this.props.img} alt='' style={{ width: "100%" }} />
                        <p>{this.props.desc}</p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default SelectedBeast;