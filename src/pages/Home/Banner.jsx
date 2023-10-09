import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineNewspaper,
} from "react-icons/hi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className="bg-[url('/dev-conference.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="h-[calc(100vh-68px)] w-full flex justify-center items-center bg-black/60 text-white">
        <div className="pl-10 text-center">
          <h2 data-aos="fade-up" data-aos-delay="50"
    data-aos-duration="1000" className="text-4xl md:text-7xl font-bold">The Developer Conference</h2>
          <div className="flex flex-wrap justify-center gap-5 my-8">
            <div className="flex items-center gap-2">
              <HiOutlineCalendar className="text-xl text-amber-400" /> <p>November 20, 2023</p>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-xl text-amber-400" /> <p>Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineNewspaper className="text-xl text-amber-400" /> <p>Dhaka Meeting Center</p>
            </div>
          </div>
          <button className="btn btn-warning">Register Online</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
