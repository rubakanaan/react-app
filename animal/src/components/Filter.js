import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'




export class Filter extends Component {
    constructor(props) {
        super(props)
        // this.state = {
            
        // }

    }


    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="select">
                        <select
                            onChange={(e) => this.props.slc(e)}
                           
                        >
                            <option>Select Number Of Horns</option>
                            <option value="99">All </option>
                            <option value="1">One horn</option>
                            <option value="2">Two horns</option>
                            <option value="3">Three horns </option>
                            <option value="100">More</option>
                        </select>
                    </Form.Group>
                </Form>

        
            </div>

        )
    }
}

export default Filter
