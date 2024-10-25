
import footerLogo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className="relative bg-footerBg">
           <div className=" p-4 pt-48  lg:p-28" >
             {/* Div-top */}
             <div className="bg-footerBg2 absolute z-10 top-1/2 left-1/2 transform -translate-y-[200%] md:-translate-y-[220%] lg:-translate-y-[140%] -translate-x-1/2 w-11/12 md:w-10/12  p-4 md:p-6 border-2 border-white rounded-2xl">
               <div className="bg-white rounded-xl ">
                 <div className="news-Letter-bg p-6 lg:p-20 rounded-xl flex flex-col justify-center items-center">
                   <h1 className="text-3xl text-center font-bold mb-6 ">Subscribe to our Newsletter</h1>
                   <p className="text-xl text-center font-medium mb-6">Get the latest updates and news right in your inbox!</p>
                   <div className="flex gap-6">
                     <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                     <button className="p-3 font-bold rounded-xl px-4 bg-gradient-to-r from-pink-400 to-yellow-500">Subscribe</button>
                   </div>
                 </div>
               </div>
             </div>
             
           </div>
           {/* div-Bottom */}
           <div className="px-3 lg:px-16 ">
              <div className="flex justify-center items-center ">
                <img src={footerLogo} alt="" className="mb-6" />
              </div>
              <div className="p-4 md:p-16 grid gap-8  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="">
                  <h3 className="text-white mb-3 text-xl font-semibold">About Us</h3>
                  <p className="text-gray-400 w-full md:w-3/6">We are a passionate team dedicated to providing the
                     best services to our customers.</p>
                </div>
                <div className="">
                  <h3 className="text-white text-xl font-semibold mb-3">Quick Links</h3>
                  <ul className="text-gray-400 list-disc ml-6 flex flex-col gap-3">
                    <li className="">Home</li>
                    <li className="">Services</li>
                    <li className="">About</li>
                    <li className="">Contact</li>
                  </ul>
                </div>
                <div className="flex justify-end">
                 <div className="">
                   <h3 className="text-white text-xl font-semibold mb-3">Subscribe</h3>
                   <p className="text-gray-400 mb-3 w-full md:w-3/6">
                     Subscribe to our newsletter for the latest updates.
                   </p>
                   <div className="flex">
                     <input type="text" placeholder="Enter your email" className=" input-bordered px-4 rounded-tl-xl rounded-bl-xl w-full max-w-xs" />
                     <button className="p-3 font-bold rounded-tr-xl rounded-br-xl px-4 bg-gradient-to-r from-pink-400 to-yellow-500">Subscribe</button>
                   </div>
                 </div>

                </div>
              </div>
            </div>
        </div>

    );
};

export default Footer;