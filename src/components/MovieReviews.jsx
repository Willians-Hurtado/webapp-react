

export default function MovieReviews({ UserReview }) {

    const { name, vote, text, created_at } = UserReview;
    return (
        <div className="card mb-3" style={{ width: '70%' }}>
            <div className="card-body ">
                <div className="d-flex justify-content-between mb-2">
                    <h4 className="card-title ">{name}</h4>
                    <span>{vote}</span>
                </div>

                <p className="card-text">{text}</p>
                <p>{created_at}</p>
            </div>
        </div>
    )


}