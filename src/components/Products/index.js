import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/products";
import "./index.css";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.onRemove = this.onRemove.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onRemove(event) {
    const { id } = event.target.dataset;
    const product = this.props.products.find((product) => product.id === id);

    if (product.count >= 1) {
      this.props.removeProduct({ id });
    }
  }

  onAdd(event) {
    const { id } = event.target.dataset;
    this.props.addProduct({ id });
  }

  render() {
    return (
      <div className="products">
        <h1>Продукты</h1>
        {this.props.products.map((product) => (
          <div className="product" key={product.name}>
            <div className="product__name">
              {product.name} - ${product.price}
            </div>
            <div className="product__buttons-wrapper">
              <button data-id={product.id} onClick={this.onRemove}>
                -
              </button>
              <div>
                <span>{product.count || ""}</span>
              </div>
              <button data-id={product.id} onClick={this.onAdd}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

// Первым параметром вызывается функция, которая должна вернуть объект состояния.
// Каждое свойство объекта состояния будет доступно через this.props.
// Поэтому в примере выше на 32 строке мы получаем доступ к продуктам с помощью this.props.products.
// -
// Вторым параметром передаются объект экшенов.
// Каждый из этих экшенов будет обернут в функцию dispatch.
// Поэтому в примере выше на 25 строке мы просто вызыва ем Action creator без оборачивания в dispatch.
export default connect((store) => {
  return {
    products: store.products.items,
  };
}, actions)(Products);
