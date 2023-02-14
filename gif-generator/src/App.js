import React from 'react'
import "./App.css"
import axios from "axios"

class App extends React.Component {

    state = {
        image : "",
        title : ""
    }

    componentDidMount() {
        this.fetchQuote()
    }

    fetchQuote = () => {
        axios.get(`${process.env.REACT_APP_GIF_API}`)
            .then((response) => {
                // const { advice } = response.data.slip
                // console.log(advice)
                // console.log(response.data.slip.advice)
                // this.setState({ quote : advice })
                const image = response.data.data.images.original.url
                const title = response.data.data.title
                // console.log(temp)
                this.setState({ image, title })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render () {
        const { image } = this.state
        const { title } = this.state
        return (
            <div className='app'>
                <div className='dynamic'>
                    <div className='card'>
                        <h1>{title}</h1>
                        <img className='img' src={image} alt='Generating Please Wait!!!' />
                        <button onClick={this.fetchQuote} className='button'>
                            <span>Generate Gif</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App