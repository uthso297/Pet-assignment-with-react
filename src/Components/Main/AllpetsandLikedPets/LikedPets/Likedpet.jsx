import PropTypes from "prop-types";

const Likedpet = ({like}) => {
    const {image} = like;
    return (
        <div className="">
            <img className="h-[100px] w-[100px]" src={image} alt="" />
        </div>
    );
};
Likedpet.propTypes ={
    like: PropTypes
}
export default Likedpet;