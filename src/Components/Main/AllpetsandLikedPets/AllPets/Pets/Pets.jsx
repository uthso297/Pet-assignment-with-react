import { useEffect, useState } from "react";
import Pet from "../Pet/Pet";

const Pets = () => {

    const[pets,setPets] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            // console.log('fetching pets...');
            
            // await new Promise(resolve => setTimeout(resolve, 5000));

            const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
            const data = await res.json();
            setPets(data.pets);
            
        };

        fetchPets();
    }, []);
    


    return (
        <div className="max-w-7xl mx-auto space-y-5 my-3 md:p-4 p-2">
            <h1 className="text-center font-bold">Total pets: {pets.length}</h1>
            <div className="grid grid-cols-4 w-2/3 gap-3">
                {
                    pets.map(p => <Pet key={p.petId} p={p}></Pet>)
                }
            </div>
        </div>
    );
};

export default Pets;