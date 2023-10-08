import { useLoaderData } from "react-router-dom";
import Services from "../../components/Services";
import Banner from "./Banner";

const Home = () => {
    const allServices = useLoaderData()
    console.log(allServices);
    return (
        <>
            <Banner />
            <Services />
        </>
    );
};

export default Home;