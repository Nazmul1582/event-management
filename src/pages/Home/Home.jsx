import { useLoaderData } from "react-router-dom";
import Services from "./Services";
import Banner from "./Banner";
import Sponsors from "./Sponsors";
import Blogs from "./Blogs";

const Home = () => {
    const allServices = useLoaderData()
    return (
        <>
            <Banner />
            <Services allServices={allServices} />
            <Sponsors />
            <Blogs />
        </>
    );
};

export default Home;