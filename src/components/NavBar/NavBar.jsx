
import logo from '../../assets/logo.png'
import { AiFillDollarCircle } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";


const NavBar = () => {
    return (
        <div className="px-3 lg:px-16 bg-slate-50 backdrop-opacity-10  py-6 flex justify-between items-center">
           <div className="">
              <img src={logo} alt="" className="" />
           </div>
           <div className="flex justify-evenly items-center gap-12">
            <ul className="hidden text-gray-600 md:flex justify-center items-center gap-10">
                <li className='hover:text-black font-medium'>Home</li>
                <li className='hover:text-black font-medium'>Fixture</li>
                <li className='hover:text-black font-medium'>Teams</li>
                <li className='hover:text-black font-medium'>Schedules</li>
            </ul>
            <div className="flex md:hidden">
              <p className="text-xl"><FaBarsStaggered /></p>
            </div>
            <div className="flex border-2 p-3 rounded-xl justify-center items-center gap-2 font-semibold">
                <span>0</span>
                <span>Coin</span>
                <span className='text-amber-500 text-xl'><AiFillDollarCircle /></span>
            </div>
           </div>
        </div>
    );
};

export default NavBar;