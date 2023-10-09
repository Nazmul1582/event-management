import { BiDollar } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Services = ({allServices}) => {
  return (
    <section>
      <div className="container mx-auto py-20">
        <h2 className="text-4xl text-center font-semibold mb-10">
          Our <span className="font-bold text-amber-400">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            allServices.map(service => (
          <div key={service.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img className='h-60'
                src={service.image}
                alt={`image of ${service.name} service`}
              />
            </figure>
            <div className="card-body gap-3 items-center">
              <h2 className="card-title">{service.name}</h2>
              <p className='text-center text-gray-400'>{service.description.slice(0, 150)}.......</p>
              <p className='flex items-center justify-center font-semibold'>Price: <BiDollar className='text-lg' /> {service.price}</p>
              <div className="card-actions justify-center">
                <Link to={`/services/${service.id}`}>
                <button className="btn btn-warning">Show Details</button>
                </Link>
              </div>
            </div>
          </div>

            ))
          }

        </div>
      </div>
    </section>
  );
};

Services.propTypes = {
  allServices: PropTypes.array
}

export default Services;
