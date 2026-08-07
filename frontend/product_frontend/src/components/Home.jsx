import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

  const [products, setProducts] = useState([]);
  const [source, setSource] = useState("mongo");

  useEffect(() => {

    if (source === "mongo") {
      fetchMongoProducts();
    } else {
      fetchFakeProducts();
    }

  }, [source]);

  const fetchMongoProducts = async () => {
    try {

      const response = await axios.get("http://localhost:3000/products");

      setProducts(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const fetchFakeProducts = async () => {
    try {

      const response = await axios.get("https://fakestoreapi.com/products");

      setProducts(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">

      <h2>Product Dashboard</h2>

      <div className="buttons">

        <button onClick={() => setSource("mongo")}>
          MongoDB Products
        </button>

        <button onClick={() => setSource("fake")}>
          Fake Store Products
        </button>

      </div>

      <div className="product-container">

        {products.map((product) => (

          <div className="card" key={product._id || product.id}>

            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

            <h4>₹ {product.price}</h4>

            <p>
              ⭐{" "}
              {product.rating.rate
                ? product.rating.rate
                : product.rating}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Home;