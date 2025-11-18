import BigFeatures from "./components/BigFeatures.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Preload from "./components/Preload.jsx";
import WelcomeArea from "./components/WelcomeArea.jsx";
import WorkProcessSection from "./components/WorkProcessSection.jsx";
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

      <BigFeatures
        title="Let’s discuss about you project"
        text="Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper."
        image="assets/images/left-image.png"
      />

      <BigFeatures
        title="We can help you to grow your business"
        text="Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit."
        image="assets/images/right-image.png"
        reverse
      />

      <WorkProcessSection />

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
