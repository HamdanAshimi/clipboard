import Logo from "../assets/images/logo.svg";

export default function Hero() {
  return (
    // Hero Section
    <section id="hero">
      <div className="section-container mb-40 pt-16">
        <img src={Logo} alt="" className="mx-auto my-16" />

        <h3>A history of everything you copy</h3>

        <p className="section-content mb-10 text-2xl">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        {/* Button Container */}
        <div className="button-container">
          <a
            href="#"
            className="rounded-full bg-strongCyan p-4 px-8 shadow-lg duration-200 hover:opacity-80"
          >
            Download for iOS
          </a>

          <a
            href="#"
            className="rounded-full bg-lightBlue p-4 px-8 shadow-lg duration-200 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
}
