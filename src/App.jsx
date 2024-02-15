import TreeCard from "./Components/TreeCard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Favourites from "./Components/Favourites";
import { interestingTrees } from "./Components/Example";
import TimerClean from "./Components/TimerClean";
import CustomHookTimer from "./Components/CustomHookTimer";
import "./App.css";
import HiddenMonkey from "./Components/HiddenMonkey";

export default function App() {
  return (
    <>
      <Header />
      <div id="tree-container">
        {interestingTrees.map((item) => {
          return (
            <TreeCard
              key={item.id}
              treeName={item.treeName}
              location={item.location}
              url={item.url}
            />
          );
        })}
      </div>
      <TimerClean />
      <Favourites />
      <Footer />
      <CustomHookTimer />
      <HiddenMonkey />
    </>
  );
}
