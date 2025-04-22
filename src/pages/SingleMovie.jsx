import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MovieReviews from '../components/MovieReviews';
import ReviewForm from '../components/ReviewForm';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext.jsx';


export default function SingleMovie() {

    const { id } = useParams();
    const { setIsLoading } = useContext(GlobalContext);

    const [movie, setMovie] = useState({});

    useEffect(() => {

        fetch('http://localhost:3000/api/v1/movies/' + id)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
            })
            .catch(err => {
                console.error('Error', err);
            }).finally(() => {
                setIsLoading(false);
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


            <div className="container">
                <h2 className="text-center">Add a Review</h2>


                <ReviewForm movieId={movie.id} />


                <hr />

                <h2 className="text-center">Reviews</h2>
                {
                    movie.reviews && movie.reviews.length > 0 ? (

                        <div className="container-fluid py-3">

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
            </div>



        </>

    )
}