import React, {Component} from 'react'

class SMS extends Component {
    constructor () {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit = event => {
        event.preventDefault()
        const data = new FormData(event.target)

        fetch('http://0.0.0.0:5000/sms-sending', { //Update  URL to live server
            method: 'POST',
            body: JSON.stringify({
                message: data.get('message'),
                phoneNumber: data.get('phoneNumber')
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="col s12 m6">
                    <div className="card black-text">
                        <div className="card-content">
                            <div className="card-title">
                                <span>SMS Portal</span>
                            </div>
                            <br/>
                            <form className="" onSubmit={this.handleSubmit} noValidate>
                                <div className="row">
                                <label htmlFor="message">Enter message</label>
                                <input className="input-field" id="message" name="message" type="text" required/>
                                </div>

                                <div className="row">
                                <label htmlFor="phoneNumber">Enter phone number</label>
                                <input className="input-field" id="phoneNumber" name="phoneNumber" type="text" required/>
                                </div>

                                <button className="btn waves-effect waves-light">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default SMS