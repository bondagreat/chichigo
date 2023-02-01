import { PhoneIcon, ShopeeIcon } from "../images";
import Logo from "../images/logo-ft.png";
import Fb from "../images/s-fb.png";
import Ig from "../images/s-ig.png";
import Line from "../images/s-ln.png";
import Phone from "../images/s-ph.png";
import Shopee from "../images/s-sp.png";

export default function Footer() {
  return (
    <>
      <footer className="container min-w-728 h-80 bg-my-blue">
        <div className="flex h-80">
          <div className="w-1/3 flex justify-center pt-6">
            <a href="#">
              <img src={Logo} alt="Logo" className="w-40" />
            </a>
          </div>

          <div className="flex w-2/3 justify-evenly">
            <div className="pt-6 px-24">
              <ul>
                <li>
                  <span className="text-xl text-my-white" href="#">
                    QUICK LINKS
                  </span>
                  <ul>
                    <br />
                    <li className="mb-2 text-my-white">
                      <a className="hover:text-my-orange" href="#">
                        HOME
                      </a>
                    </li>
                    <li className="mb-2 text-my-white">
                      <a className="hover:text-my-orange" href="#">
                        PRODUCTS
                      </a>
                    </li>
                    <li className="text-my-white">
                      <a className="hover:text-my-orange" href="#">
                        PAYMENT
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="pt-6 px-24">
              <ul>
                <li>
                  <div className="text-xl text-my-white">CONTACT US</div>
                  <ul>
                    <br />
                    <li className="mb-2 text-my-white">
                      <a className="hover:text-my-orange" href="#">
                        <img className="inline-block mr-2" src={Fb} />
                        <span>Chichigo</span>
                      </a>
                    </li>
                    <li className="mb-2 text-my-white">
                      <a className="hover:text-my-orange" href="#">
                        <img className="inline-block mr-2" src={Ig} />
                        <span>chichigo.official</span>
                      </a>
                    </li>
                    <li className="mb-2 text-my-white">
                      <a className="hover:text-my-orange" href="#">
                        <img className="inline-block mr-2" src={Line} />
                        <span>382kivah</span>
                      </a>
                    </li>
                    <li className="mb-2 text-my-white">
                      <a className="hover:text-my-orange" href="#">
                        {/* <img className="inline-block mr-2" src={Shopee} /> */}
                        <div className="w-[30px] inline-block">
                          <ShopeeIcon />
                        </div>
                        <span>chichigo.official</span>
                      </a>
                    </li>
                    <li className="text-my-white">
                      <div className="flex items-center space-x-2">
                        <div className="w-[30px] inline-block text-my-white">
                          <PhoneIcon />
                        </div>
                        <span>+66-892050502</span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
