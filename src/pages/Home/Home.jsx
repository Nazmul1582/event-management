import { useLoaderData } from "react-router-dom";
import Services from "../../components/Services";
import Banner from "./Banner";

const Home = () => {
    const allServices = useLoaderData()
    return (
        <>
            <Banner />
            <Services allServices={allServices} />
        </>
    );
};

export default Home;