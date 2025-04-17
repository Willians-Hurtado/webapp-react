import { Link } from 'react-router-dom';
import { useState, useEffect, use } from 'react';


export default function HomePage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/movies')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setMovies(data);
            });
    }, []);

    return (
        <>
            <div>
                <section>
                    <div className="container">

                        <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-5 mt-5">

                            {
                                movies.map(movie => (
                                    <div className='card' key={movie.id}>
                                        <Link to={`/movies/${movie.id}`} className="card-link">
                                            <img src={`http://localhost:3000/images/${movie.image}`} className="card-img-top" alt="" />
                                        </Link>

                                        <div className="card-body">
                                            <h2>{movie.title}</h2>
                                            <p className='card-text'>{movie.director}</p>

                                        </div>

                                    </div>
                                ))

                            }

                        </div>

                    </div>
                </section>







            </div>




        </>

    );
}