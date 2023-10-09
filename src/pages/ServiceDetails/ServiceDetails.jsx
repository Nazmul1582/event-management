import { BiDollar } from "react-icons/bi";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const services = useLoaderData();
    let {id} = useParams();
    id = parseInt(id);
    const service = services.find(service => service.id === id);
    const {image, name, price, description} = service;

    return (
        <section>
            <div className="container mx-auto pt-10 pb-24">
                <div className="w-3/4 mx-auto">
                    <img className="" src={image} alt="" />
                    <h2 className="font-bold text-3xl md:text-5xl mb-6">{name}</h2>
                    <p className='flex items-center font-semibold text-xl mb-3'>Price:  {price} <BiDollar /></p>
                    <p className="text-gray-400">{description}</p>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;