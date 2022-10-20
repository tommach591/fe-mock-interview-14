import "./App.css";
import { useFetch } from "../../utils/useFetch";
import Card from "../Card";

function App() {
  const data = useFetch("https://api.coingecko.com/api/v3/search/trending");

  let getTrendingCoins = () => {
    const cards = [];
    for (let i = 0; i < data[0].coins.length; i++) {
      cards.push(<Card key={i} item={data[0].coins[i].item} />);
    }

    return cards;
  };

  return (
    <div className="App">
      {data[0] ? getTrendingCoins() : <div>Loading</div>}
    </div>
  );
}

export default App;
