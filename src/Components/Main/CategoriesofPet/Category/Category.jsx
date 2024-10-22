import PropTypes from 'prop-types';

const Category = ({c}) => {
    // console.log(category);
    const {category,category_icon} = c;
    
    return (
        <div className="flex items-center justify-center gap-3 rounded-lg border-2 py-2">
            {/* <h1 className="text-center bg-red-300">Category: {id} </h1> */}
            <img src={category_icon} alt="" />
            <p className='font-bold'>{category}</p>

        </div>
    );
};

Category.propTypes = {
    c: PropTypes.object.isRequired,
}

export default Category;