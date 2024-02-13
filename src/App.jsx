import TreeCard from "./Components/TreeCard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <div id="tree-container">
        <TreeCard
          treeName="Baobab"
          location="Africa"
          url="https://cdn.shopify.com/s/files/1/0447/0453/articles/Aduna_baobab_tree_8b843446-b19c-49fd-b84c-2b5d5b4c561a.jpg"
        />
        <TreeCard
          treeName="Willow"
          location="European Continent"
          url="https://images.immediate.co.uk/production/volatile/sites/10/2021/11/2048x1365-Weeping-Willow-SEO-GettyImages-615975908-9156f4f.jpg"
        />
      </div>
      <Footer />
    </>
  );
}
