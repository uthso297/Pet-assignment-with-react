import { useEffect, useState } from "react";
import Pet from "../Pet/Pet";
import Likedpets from "../../LikedPets/Likedpets";
import PropTypes from "prop-types";


const Pets = () => {

    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [liked,setLiked] = useState([]);

    const handleLikedPet = pet =>{
        const newLiked = [...liked, pet]
        setLiked(newLiked);
        // console.log(newLiked);
    }
   

    useEffect(() => {
        const fetchPets = async () => {

            await new Promise(resolve => setTimeout(resolve, 2000));

            const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
            const data = await res.json();
            setPets(data.pets);
            setLoading(false);

        };

        fetchPets();
    }, []);

    return (
        <div className="space-y-5 my-3 md:p-4 p-2">
            {loading ? (
                <div className="flex justify-center">
                    <div className="animate-spin rounded-full border-4 border-t-transparent border-blue-600 w-16 h-16"></div>
                </div>

            ) : (
                <>
                    <h1 className="text-center font-bold">Total pets: {pets.length}</h1>
                    <div className="flex gap-3">
                        <div className="grid grid-cols-4 w-2/3 gap-3">
                            {pets.map(p => <Pet key={p.petId} p={p} handleLikedPet={handleLikedPet}></Pet>)}
                        </div>

                        {/* <div className="w-1/3 flex-col border-2 rounded-lg bg-red-400"> */}

                        <div className="w-1/3">
                        <Likedpets liked={liked}></Likedpets>
                        </div>
                            

                        {/* </div> */}
                    </div>
                </>
            )}
        </div>
    );

};

Pets.propTypes = {
    handleLikedPet: PropTypes.func
}

export default Pets;