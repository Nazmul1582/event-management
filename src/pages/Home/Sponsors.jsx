import sponsor1 from "../../assets/sponsor1.png";
import sponsor2 from "../../assets/sponsor2.png";
import sponsor3 from "../../assets/sponsor3.png";
import sponsor4 from "../../assets/sponsor4.png";
import sponsor5 from "../../assets/sponsor5.png";
import sponsor6 from "../../assets/sponsor6.png";
import Sponsor from "./Sponsor";

const Sponsors = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-20">
        <h2 className="text-4xl text-center font-semibold mb-10">
          Our <span className="font-bold text-amber-400">Sponsors</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
          <Sponsor image={sponsor1} />
          <Sponsor image={sponsor2} />
          <Sponsor image={sponsor3} />
          <Sponsor image={sponsor4} />
          <Sponsor image={sponsor5} />
          <Sponsor image={sponsor6} />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
