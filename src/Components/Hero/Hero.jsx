import { FaHeart } from "react-icons/fa";
import heroImage from '../../assets/images/pet.webp'
const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-5 my-3">

            <div className="flex justify-center  gap-1">
                <p className="font-bold opacity-50">Bringing Families Together</p>
                <span className="text-2xl"><FaHeart /></span>
            </div>
            <div className="space-y-3">
                <h1 className="text-5xl text-center">Your Path to Adopotion <br /> Starts Here</h1>
                <p className="text-center">Your journey to finding the perfect furry friend begins with us. Explore our resources and adopt a pet today!</p>
                <div className="text-center">
                    <button className="btn bg-[#127982] font-bold rounded-lg px-3 py-2">View More</button>
                </div>
            </div>
            <div>
                <img className="mx-auto" src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default Hero;