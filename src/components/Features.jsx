import Computer from "../assets/images/image-computer.png";

export default function Features() {
  return (
    <section id="features">
      <div className="section-container my-20">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={Computer}
              alt=""
              className="right-[50%] top-0 md:absolute"
            />
          </div>

          {/* Items Container */}
          <div className="mt-16 mb-24 flex flex-col space-y-12 text-xl md:mb-60 md:w-1/2 md:pl-16 md:text-left">
            {/* Item 1 */}
            <div>
              <h5>Quick Search</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <h5>iCloud Sync</h5>
              <p className="max-w-md text-grayishBlue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <h5>Completely History</h5>
              <p className="max-w-md text-grayishBlue">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
