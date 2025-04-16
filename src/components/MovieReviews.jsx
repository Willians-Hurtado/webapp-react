

export default function MovieReviews({ UserReview }) {

    const { name, vote, text, created_at } = UserReview;

    function starRating(vote) {

        const star = []
        const empty = []

        for (let i = 0; i < vote; i++) {
            star.push(<i key={i} className="bi bi-star-fill"></i>)
        }

        for (let i = 0; i < 5 - vote; i++) {
            empty.push(<i key={i + vote} className="bi bi-star"></i>)
        }

        return [...star, ...empty]
    }


    return (
        <div className="card mb-3 shadow-sm mb-4 border-0 " style={{ width: '70%' }}>
            <div className="card-body bg-light rounded-3">
                <div className="d-flex align-items-center gap-5 mb-2">

                    <h4 className="card-title">{name}</h4>
                    <span className="card-subtitle mb-2 text-warning">{starRating(vote)}</span>

                </div>


                <p className="card-text">{text}</p>
                <p className="card-text text-muted d-flex justify-content-end">{created_at}</p>
            </div>
        </div>
    )


}
