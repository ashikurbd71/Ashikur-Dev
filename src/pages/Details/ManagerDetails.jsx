import { ExternalLink, Eye } from 'lucide-react';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import manager from "../../assets/managerlogin.png";

const ManagerDetails = () => {
  return (
    <div className="min-h-screen mt-6  p-10   bg-white rounded-md shadow-md text-black">
  <h2 className="text-xl text-[#EC4899] font-bold border-b-2 border-black mb-8">DETAILS</h2>
 <div className='mb my-16'>
 <Swiper
  // install Swiper modules
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={50}
  slidesPerView={1} // Show only one image at a time
  navigation
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
  style={{ height: '380px', width: 'full' }} // Ensure the Swiper takes the full screen
>
  <SwiperSlide>
    {/* Full-screen Image */}
    <img
      src={manager} 
      alt="Full-screen Image" 
    
    />
  </SwiperSlide>
  <SwiperSlide>
    {/* Full-screen Image */}
    <img
      src={manager} 
      alt="Full-screen Image" 
    
    />
  </SwiperSlide>

  <SwiperSlide>
    {/* Full-screen Image */}
    <img
      src={manager} 
      alt="Full-screen Image" 
    
    />
  </SwiperSlide>



</Swiper>

 </div>


      
      <div className=" bg-transparent  border-gray-700 rounded-lg  ">

        <p className="mb-4">
          A multi-vendor e-commerce system. It is a platform that allows the user to buy and sell products online.
        </p>
        <p className="font-semibold mb-4">Specification:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Developed an innovative e-commerce platform using Next.js, Redux, Nest.js, and MongoDB.</li>
          <li>
            Features a visually appealing interface showcasing top-rated, popular, featured, and new products across diverse categories like electronics, fashion, and more.
          </li>
          <li>Seamless navigation enables users to explore multiple product categories, add items to their cart, wishlist, and securely complete transactions via SSL.</li>
          <li>Comprehensive profile dashboard allows users to track orders, update profiles, manage addresses, and leave product reviews.</li>
          <li>Advanced filtering and search functionalities empower users to refine search results and easily find desired products.</li>
          <li>Prioritizes functionality, usability, and aesthetics, delivering a superior shopping experience to users.</li>
        </ul>
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-[#EC4899] text-white flex items-center px-4 py-2 rounded "
          >
             <ExternalLink className="mr-2 h-5 w-5" />
             Client Repo
          </a>
          <a
            href="#"
            className="bg-[#EC4899] text-white flex items-center px-4 py-2 rounded"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
         Server Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ManagerDetails;
