import Google from "../assets/images/logo-google.png";
import IBM from "../assets/images/logo-ibm.png";
import Microsoft from "../assets/images/logo-microsoft.png";
import HP from "../assets/images/logo-hp.png";
import VectorGraphics from "../assets/images/logo-vector-graphics.png";

export default function References() {
  return (
    <section id="references">
      <div className="mx-auto my-44 flex max-w-6xl flex-col items-center justify-between space-y-16 px-10 md:flex-row md:space-y-0">
        <img src={Google} alt="" />
        <img src={IBM} alt="" />
        <img src={Microsoft} alt="" />
        <img src={HP} alt="" />
        <img src={VectorGraphics} alt="" />
      </div>
    </section>
  );
}
