import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/products";
import "./index.css";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.items);

  const onAdd = (event) => {
    const { id } = event.target.dataset;

    dispatch(actions.addProduct({ id }));
  };

  const onRemove = (event) => {
    const { id } = event.target.dataset;
    const product = products.find((product) => product.id === id);

    if (product.count >= 1) {
      dispatch(actions.removeProduct({ id }));
    }
  };

  return (
    <div className="products">
      <h1>Продукты</h1>
      {products.map((product) => (
        <div className="product" key={product.name}>
          <div className="product__name">
            {product.name} - ${product.price}
          </div>
          <div className="product__buttons-wrapper">
            <button data-id={product.id} onClick={onRemove}>
              -
            </button>
            <div>
              <span>{product.count || ""}</span>
            </div>
            <button data-id={product.id} onClick={onAdd}>
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
