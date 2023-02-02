import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies : getMovies()
    } 

    handleDelete = (movie) => {
        // console.log(movie)
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({ movies })
    }

    render() { 

        const { length : count } = this.state.movies

        if (count === 0) {
            return <p>There are no movies in the Database</p>
        }


        return (
            <React.Fragment>
            <p>Showing {count} mvoies in the Database</p>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.movies.map((movie) => {
                            return (
                            <tr key={movie._id}>
                                <td key={movie.title}>{ movie.title }</td>
                                <td key={movie.genre.name}>{ movie.genre.name }</td>
                                <td key={movie.numberInStock}>{ movie.numberInStock }</td>
                                <td key={movie.dailyRentalRate}>{ movie.dailyRentalRate }</td>
                                <td><button onClick={ () => this.handleDelete(movie) } className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>
                            
                        
                            
                        )}
                        ) }
                        
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Movies;