// productActions.js
export const fetchProducts = () => {
  return (dispatch) => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "FETCH_PRODUCTS",
          payload: data
        });
      });
  };
};

export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product
  };
};
