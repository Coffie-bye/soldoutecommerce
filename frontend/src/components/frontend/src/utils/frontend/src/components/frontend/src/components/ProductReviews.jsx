const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const submitReview = () => {
    fetch(`/api/products/${productId}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating, comment }),
    }).then(() => {
      // Refresh reviews
    });
  };

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((review) => (
        <div key={review._id}>
          <p>
            {review.rating} stars: {review.comment}
          </p>
        </div>
      ))}
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={submitReview}>Submit Review</button>
    </div>
  );
};
