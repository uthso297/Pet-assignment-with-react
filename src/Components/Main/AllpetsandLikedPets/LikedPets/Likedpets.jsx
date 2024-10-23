import Likedpet from "./Likedpet";
import PropTypes from "prop-types";


const Likedpets = ({liked}) => {
    return (
        <div className="grid grid-cols-4 border-2 rounded-lg">
    
            {
                liked.map(like => <Likedpet key={like.pet_name} like={like}></Likedpet>)
            }
            
        </div>
    );
};

Likedpets.propTypes = {
    liked: PropTypes.array
}

export default Likedpets;