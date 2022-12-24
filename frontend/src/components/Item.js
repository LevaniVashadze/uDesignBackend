import React from "react";

const Item = (props) => {
    const { product } = props;
    return (
        <div className="product">
        <div className="product-image">
            <img src={product.image} alt={product.name} />
        </div>
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
        </div>
    );
}

export default Item;