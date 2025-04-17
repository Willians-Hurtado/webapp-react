import { useState, useEffect } from 'react';

export default function ReviewForm({ movieId }) {
    const api_url = 'http://localhost:3000/api/v1/movies/' + movieId + '/review';

    const initialFormData = {
        name: 'anonymous',
        vote: 1,
        text: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});

    function isFormValid(data) {
        const errors = {};

        if (!data.name) errors.name = 'name is required';
        if (data.name.length < 3) errors.name = 'name must be at least 3 characters long';
        if (data.name.length > 50) errors.name = 'name must be less than 50 characters long';

        if (data.vote < 1 || data.vote > 5) errors.vote = 'vote must be between 1 and 5';

        if (!data.text) errors.text = 'text is required';
        if (data.text.length < 10) errors.text = 'text must be at least 10 characters long';
        if (data.text.length > 500) errors.text = 'text must be less than 500 characters long';

        setFormErrors(errors);

        console.log(errors, 'errors from isFormValid');
        console.log(Object.keys(errors));



        return Object.keys(errors).length === 0;
    }

    function handleFormSubmit(e) {
        e.preventDefault();



        if (!isFormValid(formData)) {
            console.log('form is not valid');
            return;
        }

        console.log('form is valid', formData);


        fetch(api_url, {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json',
                'Accepted': 'application/json',

            },
            body: JSON.stringify(formData)
        }).then((response) => response.json())
            .then((data) => {
                console.log('Form submitted succsessfully', data);
            }).catch((error) => {
                console.error('Error submitting form', error);
            })



    }

    return (
        <>
            {Object.keys(formErrors).length > 0 && (
                <div className="alert alert-danger" role="alert">
                    {Object.keys(formErrors).map((key) => (
                        <li key={key}>{formErrors[key]}</li>
                    ))}
                </div>
            )}

            <form className="container mb-5" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="user-name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="user-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">vote</label>
                    <input
                        type="number"
                        className="form-control"
                        id="vote"
                        min="1"
                        max="5"
                        value={formData.vote}
                        onChange={(e) => setFormData({ ...formData, vote: parseInt(e.target.value) })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Text</label>
                    <textarea
                        className="form-control"
                        id="text"
                        rows="3"
                        value={formData.text}
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}
