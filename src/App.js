import "./styles.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productsAction";

export default function App() {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.productReducer.products.products
  );
  const [productData, setProductData] = useState();

  useEffect(() => {
    dispatch(fetchProducts());
    setProductData(products);
  }, [dispatch, products]);
  return (
    <div className="App">
      <AddProduct />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productData?.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <img
                    alt=""
                    src={product.thumbnail}
                    style={{ height: "40px", width: "60px" }}
                  />
                </td>
                <td><button>delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: ""
  });

  const chnangeFormData = (e) => {
    // e.preventDefalut();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={chnangeFormData}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        onChange={chnangeFormData}
      />
      <input
        type="number"
        placeholder="price"
        name="price"
        onChange={chnangeFormData}
      />
      <button onSubmit>Add</button>
      <hr />
    </form>
  );
};
