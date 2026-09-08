import Blacklist from "../assets/images/icon-blacklist.svg";
import Text from "../assets/images/icon-text.svg";
import Preview from "../assets/images/icon-preview.svg";

export default function Supercharge() {
  return (
    <section id="supercharge">
      <div className="section-container my-20">
        <h3>Supercharge your workflow</h3>

        <p className="section-content mb-16 text-xl">
          We've got the tools to boost your productivity.
        </p>

        {/* Items Container */}
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-12 md:space-y-0">
          {/* Item 1 */}
          <div className="flex flex-col items-center space-y-5">
            <img src={Blacklist} alt="" className="mb-6" />

            <h5>Create Blacklists</h5>

            <p className="max-w-md text-grayishBlue">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center space-y-5">
            <img src={Text} alt="" className="mb-6" />

            <h5>Plain Text Snippets</h5>

            <p className="max-w-md text-grayishBlue">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center space-y-5">
            <img src={Preview} alt="" className="mb-6" />

            <h5>Sneak Preview</h5>

            <p className="max-w-md text-grayishBlue">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
