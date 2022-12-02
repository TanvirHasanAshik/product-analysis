import React from 'react';
import useReview from '../../hooks/useReview';
import SingleReview from '../SingleReview.js/SingleReview';

const Reviews = () => {
    const [review, setReview] = useReview();
    return (
        <div className="c">
            <div className="row d-flex justify-content-center">
                {
                    review.map((review => <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>))
                }
            </div>
        </div>
    );
};

export default Reviews;