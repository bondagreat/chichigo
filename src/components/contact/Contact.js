import Image from "../../images/foodhigh.png";
import Fb from "../../images/s-fb.png"

export default function Contact() {
  return (
    <>
      <div className="container flex min-w-728 px-12 py-16 space-x-16">
        <div>
          <img src={Image} alt="LeftImage" />
        </div>
        <div className="flex items-center">
          <div className="flex flex-col space-y-3">
            <div>
              <a href="#">
                <img className="inline-block h-12 mr-2" src={Fb} alt="Fb" />
                <span className="text-2xl">Chichigo</span>
              </a>
            </div>
            <div>
              <a href="#">
                <img className="inline-block h-12 mr-2" src={Fb} alt="Ig" />
                <span className="text-2xl">chichigo.official</span>
              </a>
            </div>
            <div>
              <a href="#">
                <img className="inline-block h-12 mr-2" src={Fb} alt="Line" />
                <span className="text-2xl">382kivah</span>
              </a>
            </div>
            <div>
              <a href="#">
                <img className="inline-block h-12 mr-2" src={Fb} alt="Shopee" />
                <span className="text-2xl">chichigo.official</span>
              </a>
            </div>
            <div>
              <a href="#">
                <img className="inline-block h-12 mr-2" src={Fb} alt="Phone" />
                <span className="text-2xl">+66-892050502</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
