import { useLoaderData } from "react-router-dom";
import Services from "./Services";
import Banner from "./Banner";
import Sponsors from "./Sponsors";

const Home = () => {
    const allServices = useLoaderData()
    return (
        <>
            <Banner />
            <Services allServices={allServices} />
            <Sponsors />
        </>
    );
};

export default Home;