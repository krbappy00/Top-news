import Articles from "./Articles/Articles";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import HotNews from "./Hotnews/HotNews";
import Music from "./Music/Music";
import NewsLetter from "./NewsLetter/NewsLetter";
import Review from "./Review/Review";
import SpotLight from "./SpotLight/SpotLight";

function App() {

  return (
    <>
      <div>
        <Header/>
        <Banner/>
        <Articles/>
        <Music/>
        <HotNews/>
        <SpotLight/>
        <Review/>
        <NewsLetter/>
        <Footer/>
      </div>
    </>
  );
}

export default App
