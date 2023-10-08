import { BiDollar } from 'react-icons/bi'
const Services = () => {
  return (
    <section>
      <div className="container mx-auto py-20">
        <h2 className="text-2xl text-center font-semibold mb-10">
          Our <span className="font-bold text-amber-400">Services</span>
        </h2>
        <div className="grid grid-cols-3">
          
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="/conference.jpg"
                alt="services"
              />
            </figure>
            <div className="card-body gap-3 items-center">
              <h2 className="card-title">Content Development</h2>
              <p className='text-center text-gray-400'>Captivate your audience with compelling content created by our experts. Our Content Development service includes crafting a captivating event agenda.........</p>
              <p className='flex items-center justify-center font-semibold'>Price: <BiDollar className='text-lg' /> 2000</p>
              <div className="card-actions justify-center">
                <button className="btn btn-warning">Show Details</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
