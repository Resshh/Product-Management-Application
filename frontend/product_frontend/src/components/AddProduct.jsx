import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    image: "",
    price: "",
    rating: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (product.title.length < 3) {
      alert("Product name must be at least 3 characters");
      return;
    }

    if (product.image === "") {
      alert("Image URL is required");
      return;
    }

    if (product.price <= 0) {
      alert("Price should be greater than 0");
      return;
    }

    if (product.rating < 0 || product.rating > 5) {
      alert("Rating must be between 0 and 5");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/products",
        product
      );

      console.log(response.data);

      alert("Product Added Successfully");

      setProduct({
        title: "",
        image: "",
        price: "",
        rating: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          name="title"
          value={product.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={product.image}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
          min="1"
          required
        />

        <input
          type="number"
          placeholder="Rating"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          min="0"
          max="5"
          step="0.1"
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;