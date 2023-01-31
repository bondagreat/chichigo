import Logo from '../images/logo.png'

export default function Header() {
  return (
    <>
      <header className="container min-w-728 sticky top-0 bg-my-blue z-50">
        <div className="flex items-center justify-between h-16 px-4 h-20">
          <ul className="flex items-center w-auto bottom-8">
            <li className="px-2">
              <a href="#">
                <img src={Logo} alt="Logo" className="h-66 w-68" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-2 text-my-white rounded-lg hover:bg-my-orange"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-2 text-my-white rounded-lg hover:bg-my-orange"
              >
                PRODUCT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-2 text-my-white rounded-lg hover:bg-my-orange"
              >
                PAYMENT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-2 text-my-white rounded-lg hover:bg-my-orange"
              >
                CONTACT US
              </a>
            </li>
          </ul>
          <ul className="flex items-center w-32 mr-4">
            <li>
              <a
                href="#"
                className="p-2 text-my-white rounded-lg hover:bg-my-orange"
              >
                LOGIN
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-2 text-my-white rounded-lg hover:bg-my-orange"
              >
                REGISTER
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
