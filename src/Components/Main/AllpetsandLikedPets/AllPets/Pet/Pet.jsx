import PropTypes from "prop-types";

const Pet = ({ p , handleLikedPet}) => {
    const { image, pet_name, breed, date_of_birth, gender, price } = p;
    return (
        <div className="p-4 border-2 rounded-lg space-y-3">
            <div className="">
                <img className="w-full h-[140px]" src={image} alt="" />
            </div>
            <div>
                <p className="font-bold text-xl">{pet_name}</p>
            </div>
            <div>
                <span></span>
                <p>Breed: {breed? breed:'Not available'}</p>
            </div>
            <div>
                <span></span>
                <p>Birth: {date_of_birth? date_of_birth:'Not available'} </p>
            </div>
            <div>
                <span></span>
                <p>Gender: {gender? gender: 'Not available'} </p>
            </div>
            <div>
                <span></span>
                <p>Price: {price? `${price} $`:'Not available'}</p>
            </div>
            <hr />
            <div className="space-x-1">
                <button onClick={()=>handleLikedPet(p)} className="border-2 rounded-lg px-2 py-2">Like</button>
                <button className="border-2 rounded-lg px-2 py-2">Adopt</button>
                <button className="border-2 rounded-lg px-2 py-2">Details</button>
            </div>


        </div>
    );
};

Pet.propTypes = {
    p: PropTypes.object.isRequired,
    handleLikedPet: PropTypes.func.isRequired
}

export default Pet;