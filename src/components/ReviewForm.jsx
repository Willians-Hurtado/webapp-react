export default function ReviewForm() {


    return (

        <form action="POST" className="container mb-5">
            <div className="mb-3">
                <label htmlFor="user-name" className="form-label">Username</label>
                <input type="text" className="form-control" id="user-name" />
            </div>
            <div className="mb-3">
                <label htmlFor="rating" className="form-label">Rating</label>
                <input type="number" className="form-control" id="rating" min="1" max="5" />
            </div>
            <div className="mb-3">
                <label htmlFor="summary" className="form-label">Summary</label>
                <input type="text" className="form-control" id="summary" />
            </div>
            <div className="mb-3">
                <label htmlFor="review" className="form-label">Review</label>
                <textarea className="form-control" id="review" rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>


        </form>
    )
}
