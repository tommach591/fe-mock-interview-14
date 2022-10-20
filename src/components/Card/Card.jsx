import "./Card.css";
import { useFetch } from "../../utils/useFetch";
import { useState } from "react";

function Card({ item }) {
  const [expand, setExpand] = useState(false);

  const price = useFetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${item.id}&vs_currencies=usd&precision=2`
  );
  const info = useFetch(`https://api.coingecko.com/api/v3/coins/${item.id}`);

  return (
    <div
      className="Card"
      onClick={() => {
        setExpand(!expand);
      }}
    >
      <div className="CardContent">
        <div className="Image">
          <img src={item.small} alt=":D" />
        </div>
        <div className="CardInfo">
          <div>{`${item.coin_id} - ${item.name}`}</div>
          <div>{`${item.symbol} - ${item.market_cap_rank}`}</div>
          <div>
            {price ? `$${Object.values(price)[0].usd.toFixed(2)}` : "$0.00"}
          </div>
        </div>
      </div>
      <div>
        {expand ? (
          info ? (
            <div className="CoinInfo">{info.description.en}</div>
          ) : (
            "Loading..."
          )
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default Card;
