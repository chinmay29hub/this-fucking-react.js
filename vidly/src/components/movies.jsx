import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies : getMovies()
    } 
    render() { 
        return (
            <React.Fragment>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.movies.map((movie, index) => {
                            return (
                            <tr key={index}>
                                <td key={movie.title}>{ movie.title }</td>
                                <td key={movie.genre.name}>{ movie.genre.name }</td>
                                <td key={movie.numberInStock}>{ movie.numberInStock }</td>
                                <td key={movie.dailyRentalRate}>{ movie.dailyRentalRate }</td>
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