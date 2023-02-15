import React, { Component } from 'react'
import Top from './Navbar'
import axios from "axios"
import "../App.css"


export default class Curiosity extends Component {

    state = {
        image : "",
        camera_name : "",
        earth_date : ""
    }


    componentDidMount() {
        this.fetchImage()
    }

    fetchImage = () => {
        axios.get(`${process.env.REACT_APP_CURIOSITY}`)
            .then(response => {
                // console.log(response.data.photos)
                const image_data = response.data.photos
                const image_selection = image_data[Math.floor(Math.random() * 800) + 1]
                // console.log(image)
                const image = image_selection["img_src"]
                // console.log(image)
                const camera_name = image_selection.camera.full_name
                // console.log(camera_name)
                const earth_date = image_selection.earth_date
                // console.log(earth_date)
                this.setState({ image, camera_name, earth_date })
            })
            .catch(error => console.log(error))
    }


    render() {

        return (
            <>
            <Top />
            <div className='app'>
                <div className='dynamic'>
                    <div className='cardd'>
                        <h1 className='heading'>Camera Name : {this.state.camera_name}</h1>
                        <p>Earth Date : {this.state.earth_date}</p>
                        <img className='img' src={this.state.image} alt='Generating Please Wait!!!' />
                        <button onClick={this.fetchImage} className='button'>
                            <span>Generate Photo</span>
                        </button>
                    </div>
                </div>
            </div>
        
        </>
        )
    }
}
