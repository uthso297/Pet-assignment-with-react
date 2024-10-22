import PropTypes from "prop-types";

const Pet = ({ p }) => {
    const { image, pet_name, breed, date_of_birth, gender, price } = p;
    return (
        <div className="p-4 border-2 rounded-lg">
            <div>
                <img src={image} alt="" />
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
            <div>
                <button></button>
                <button>Adopt</button>
                <button>Details</button>
            </div>


        </div>
    );
};

Pet.propTypes = {
    p: PropTypes.object.isRequired
}

export default Pet;