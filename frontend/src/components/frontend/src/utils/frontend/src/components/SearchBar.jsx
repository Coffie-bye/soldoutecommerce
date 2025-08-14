const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 2) {
      fetch(`/api/products/search?query=${query}`)
        .then((res) => res.json())
        .then((data) => setResults(data));
    }
  }, [query]);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      {results.length > 0 && (
        <div className="search-results">
          {results.map((product) => (
            <Link key={product._id} to={`/product/${product._id}`}>
              {product.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
