import React, {Component} from 'react'

class Form extends Component {
    constructor () {
        super()

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = event => {
        event.preventDefault()
        const data = new FormData(event.target)

        fetch('https://c190ea71.ngrok.io/sms-sending', {
            method: 'POST',
            body: data
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} noValidate>
                <label htmlFor="message">Enter message</label>
                <input id="message" name="message" type="text" required/>

                <label htmlFor="phoneNumber">Enter message</label>
                <input id="phoneNumber" name="phoneNumber" type="number" required/>

                <button>Send Message</button>
            </form>
        )
    }


}

export default Form