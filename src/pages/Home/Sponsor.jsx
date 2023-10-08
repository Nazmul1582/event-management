import PropTypes from 'prop-types';

const Sponsor = ({ image }) => {
  return (
    <div className="p-10 bg-white rounded-lg">
      <img className="contrast-0" src={image} alt="sonsonr image" />
    </div>
  );
};

Sponsor.propTypes = {
    image: PropTypes.node
}

export default Sponsor;
