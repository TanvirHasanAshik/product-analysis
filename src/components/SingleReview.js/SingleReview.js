import React from 'react';

const SingleReview = ({ review }) => {
    const { name, comment, img } = review;


    return (
        <div className="card m-2" style={{ maxWidth: '350px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{comment}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;