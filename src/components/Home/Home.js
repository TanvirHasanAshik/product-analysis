import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import phoneImg from '../../images/phone.jpg';
import SingleReview from '../SingleReview.js/SingleReview';
const Home = () => {

    const [reviews, setReviews] = useReview();
    const sliceReviews = reviews.slice(0, 3);
    const navigate = useNavigate();
    const handleReview = () => {
        navigate('/reviews');
    }
    return (
        <div className="container ">
            <div className="row mt-5 d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-12 ">
                    <h2 className="fw-bold">ANALYSIS OF YOUR BEST PHONE</h2>
                    <h3 className="fw-bold text-secondary">TO CHOICES YOUR BEST FRIENDS</h3>
                    <p className='pt-3 text-muted'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quasi perspiciatis sapiente illo illum unde nulla, culpa, provident ex repudiandae quisquam similique atque reiciendis qui beatae sint et, neque iste.
                        Mollitia iusto ipsa veritatis similique voluptatum quam nemo necessitatibus, accusamus ipsum nam molestiae maxime laborum suscipit quaerat deserunt aperiam corrupti, illo omnis et voluptatibus. Iusto ducimus similique possimus fugit aspernatur.</p>
                    <button className="btn btn-info mt-5 p-4 text-white">LIVE DEMO</button>
                </div>
                <div className="col-md-6 col-12">
                    <img className="rounded w-100" src={phoneImg} alt="" />
                </div>
            </div>

            {/* customer review section */}
            <div className="row mt-5 pt-5 mb-5 d-flex justify-content-center">
                <h2 className="text-center">Customer Review</h2>
                {
                    sliceReviews.map(review => <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>)
                }
                <div className="col-md-3 mt-3">
                    <button onClick={handleReview} className=" btn btn-primary">Show all reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;