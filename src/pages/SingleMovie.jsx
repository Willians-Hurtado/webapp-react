import { useState, useEffect, use } from 'react'
import { useParams } from 'react-router-dom';
import MovieReviews from '../components/MovieReviews';



export default function SingleMovie() {

    const { id } = useParams();

    const [movie, setMovie] = useState({});

    useEffect(() => {

        fetch('http://localhost:3000/api/v1/movies/' + id)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
            })
            .catch(err => {
                console.error('Error', err);
            })



    }, [])



    return (
        <>
            <div className="p-5 mb-4 bg-light text-dark">
                <div className="container-fluid py-1">
                    <div className=" d-flex justify-content-center justify-content-between">

                        <img src={`http://localhost:3000/images/${movie.image}`} className="card-img-top" alt={movie.title} style={{ width: '300px' }} />

                        <div className="card-text gap-3 d-flex flex-column align-items-center ps-5" style={{ fontSize: '18px' }}>
                            <h2 className="card-title">{movie.title}</h2>
                            <p>{movie.director}</p>
                            <p className="card-text">{movie.abstract}</p>
                        </div>

                    </div>
                </div>
            </div>

            {
                movie.reviews && movie.reviews.length > 0 ? (

                    <div className="container-fluid py-1">
                        <h2 className="text-center">Reviews</h2>
                        <div className="d-flex flex-column align-items-center">
                            {movie.reviews.map((review) => (
                                <MovieReviews key={review.id} UserReview={review} />
                            ))}
                        </div>
                    </div>

                ) : (
                    <p>No reviews available for this movie.</p>
                )

            }

        </>

    )
}