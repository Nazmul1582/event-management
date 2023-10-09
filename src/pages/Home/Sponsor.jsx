import PropTypes from 'prop-types';
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Sponsor = ({ image }) => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos="fade-up" className="p-10 bg-white rounded-lg">
      <img className="contrast-0" src={image} alt="sonsonr image" />
    </div>
  );
};

Sponsor.propTypes = {
    image: PropTypes.node
}

export default Sponsor;
