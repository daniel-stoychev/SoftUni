import BigFeaturesLeft from "./components/BigFeaturesLeft.jsx";
import BigFeaturesRight from "./components/BigFeaturesRight.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Preload from "./components/Preload.jsx";
import WelcomeArea from "./components/WelcomeArea.jsx";
import HomeParalax from "./components/HomeParalax.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing.jsx";
import Counter from "./components/Counter.jsx";
import Blog from "./components/Blog.jsx";
import ContactUs from "./components/ContactUs.jsx";

function App() {
  return (
    <main>
      <Preload />

      <Header />

      <WelcomeArea />

      <Features />

      <BigFeaturesLeft />

      <BigFeaturesRight />

      <HomeParalax />

      <Testimonials />

      <Pricing />

      <Counter />

      <Blog />

      <ContactUs />

      <Footer />
    </main>
  );
}

export default App;
