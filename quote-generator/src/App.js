import React from 'react'
import "./App.css"
import axios from "axios"

class App extends React.Component {

    state = {
        quote : ""
    }

    componentDidMount() {
        this.fetchQuote()
    }

    fetchQuote = () => {
        axios.get(`${process.env.REACT_APP_QUOTE_API}/${Math.floor(Math.random() * 224) + 1}`)
            .then((response) => {
                const { advice } = response.data.slip
                // console.log(advice)
                // console.log(response.data.slip.advice)
                this.setState({ quote : advice })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render () {
        const { quote } = this.state
        return (
            <div className='app'>
                <div className='dynamic'>
                    <div className='card'>
                        <h1 className='heading'>{quote}</h1>
                        <button onClick={this.fetchQuote} className='button'>
                            <span>Generate Quote</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App