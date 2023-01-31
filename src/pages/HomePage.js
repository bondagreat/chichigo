import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "../components/home/Carousel";
import Event from "../components/home/Event";
import History from "../components/home/History";
import Product from "../components/home/Product";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Carousel />
      <History />
      <Event />
      <Product />
      <Footer />
    </div>
  )
}