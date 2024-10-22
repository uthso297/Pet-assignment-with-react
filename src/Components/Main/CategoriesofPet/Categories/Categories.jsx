import Category from "../Category/Category";
import PropTypes from 'prop-types';
const Categories = ({categories}) => {
    return (
        <div className="max-w-7xl mx-auto space-y-5 my-3 md:p-4 p-2">
            <h1 className="text-center font-bold">Categories: {categories.length}</h1>
            <div className="grid grid-cols-4 gap-5">
            {
                categories.map(c => <Category key={c.id} c={c}></Category>)
            }
            </div>
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired
}

export default Categories;


