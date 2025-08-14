const WishlistButton = ({ productId }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const toggleWishlist = () => {
    fetch("/api/wishlist/toggle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    })
      .then((res) => res.json())
      .then((data) => setIsInWishlist(data.isInWishlist));
  };

  return (
    <button onClick={toggleWishlist}>
      {isInWishlist ? "❤️ Remove from Wishlist" : "♡ Add to Wishlist"}
    </button>
  );
};
