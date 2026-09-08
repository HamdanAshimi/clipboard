import Logo from "../assets/images/logo.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Instagram from "../assets/images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Image */}
          <img src={Logo} alt="" className="scale-50" />

          {/* Container for Menus & Social */}
          <div className="mb-10 flex flex-1 flex-col items-center justify-between space-y-6 text-grayishBlue md:mb-0 md:flex-row md:space-y-0">
            {/* Menus */}
            <div className="flex flex-col space-y-4 md:ml-24 md:flex-row md:space-x-24 md:space-y-0">
              {/* Menu 1 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    FAQs
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Menu 2 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Press Kit
                  </a>
                </div>
              </div>

              {/* Menu 3 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex w-32 justify-between py-1">
              <a href="#">
                <img src={Facebook} alt="" className="ficon duration-200" />
              </a>

              <a href="#">
                <img src={Twitter} alt="" className="ficon duration-200" />
              </a>

              <a href="#">
                <img src={Instagram} alt="" className="ficon duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
