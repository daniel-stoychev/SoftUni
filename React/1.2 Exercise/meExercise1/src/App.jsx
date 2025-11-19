import CategoriesCollection from "./components/CategoriesCollection.jsx";
import CreateNft from "./components/CreateNft.jsx";
import CurrentlyMarket from "./components/CurrentlyMarket.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import MainBanner from "./components/MainBanner.jsx";

function App() {
  return (
    <main>
      {/* ***** Preloader Start ***** */}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot" />
          <div className="dots">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <Header />

      <MainBanner />

      <CategoriesCollection />

      <CreateNft />

      <CurrentlyMarket />

      <Footer />
    </main>
  );
}

export default App;
