import logo from '../../assets/images/logo.webp'
import { IoIosContact } from "react-icons/io";
const Header = () => {
    return (
        <div className='flex items-center justify-between max-w-7xl mx-auto md:p-4 p-2'>
            <div className='flex md:gap-2 gap-1'>
                <img src={logo} alt="" />
                <h2 className='md:text-3xl text-xl font-bold'>Peddy</h2>
            </div>

            <div >
            <ul className='flex gap-7 md:mr-[110px] mr-0'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='md:text-3xl text-lg'>
            <IoIosContact />
            </div>
        </div>
    );
};

export default Header;