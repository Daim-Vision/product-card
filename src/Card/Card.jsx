import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [buy, setBuy] = useState(false);
  const [details, setDetails] = useState(false);

  const detailHandler = () => {
    setDetails(!details);
  };

  let detailInfo = null;

  if (details) {
    detailInfo = (
      <div className="lorem">
        <button
          style={{
            display: "block",
            border: "none",
            color: "red",
            background: "white",
            margin: "0% 0% 0% 98%",
            fontSize: "15px",
            cursor: "pointer",
          }}
          onClick={detailHandler}
        >
          x
        </button>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit neque
        sapiente cupiditate ullam repellendus blanditiis mollitia nisi iste?
        Neque, necessitatibus at nihil quia ab placeat soluta numquam dicta est
        beatae?
      </div>
    );
  }

  const clickHandler = () => {
    setBuy(!buy);
  };

  let content = null;
  let buyButton = "Добавить в корзину";

  if (buy) {
    content = (
      <span onClick={clickHandler} className="delete">
        Удалить из корзины
      </span>
    );
  }

  return (
    <div className="card">
      <div className="img_container">
        <img src="nike.png" alt="" />
      </div>
      <div className="text_container">
        <div className="info">
          <span className="product_name">Nike Sneakers</span>
          <span className="price">$120</span>
        </div>
        <div className="button_div">
          <button className="details" onClick={detailHandler}>
            Детали
          </button>
          {detailInfo}
        </div>
      </div>
      <div className="derpiction">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
        cupiditate, pariatur, nisi dolorem ipsa quisquam cum repellat quas atque
        soluta nam. Molestias porro odio sint laboriosam temporibus aliquam
        neque exercitationem.
      </div>
      <button
        onClick={clickHandler}
        className={`buy ${buy && "inBascet"}`}
        disabled={buy}
      >
        {buy ? "Уже в корзине" : "Добавить в корзину"}
      </button>
      {content}
    </div>
  );
};

export default Card;
