import { ExternalLink, Eye } from 'lucide-react';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SLAMCS from "../../assets/slcehome.png";
import SLAMCS1 from "../../assets/slcmschome2.png";
import SLAMCS2 from "../../assets/sclcmshome3.png";
import SLAMCS3 from "../../assets/slmcshome1.png";
import SLAMCS4 from "../../assets/slcmshome4.png";
import SLAMCS5 from "../../assets/slcmsroutine1.png";
import SLAMCS6 from "../../assets/slcmsroutine2.png";
import SLAMCS7 from "../../assets/slcmsroutine5.png";
import SLAMCS8 from "../../assets/slmcsroutine.png";


const SLAMCSDetails = () => {
  return (
    <div className=" lg:mt-6  lg:p-10 p-5   bg-white rounded-md shadow-md text-black">
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
  className={'lg:h-[380px] lg:w-full  h-full w-[300px]'}
>

     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={SLAMCS}
             alt="Full-screen Image"

         />
     </SwiperSlide>


     <SwiperSlide>
    {/* Full-screen Image */}
    <img
      src={SLAMCS1}
      alt="Full-screen Image" 
    
    />
  </SwiperSlide>

     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={SLAMCS2}
             alt="Full-screen Image"

         />
     </SwiperSlide>

     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={SLAMCS3}
             alt="Full-screen Image"

         />
     </SwiperSlide>

     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={SLAMCS4}
             alt="Full-screen Image"

         />
     </SwiperSlide>


     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={SLAMCS5}
             alt="Full-screen Image"

         />
     </SwiperSlide>


     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={SLAMCS6}
             alt="Full-screen Image"

         />
     </SwiperSlide>


     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={SLAMCS7}
             alt="Full-screen Image"

         />
     </SwiperSlide>


     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={SLAMCS8}
             alt="Full-screen Image"

         />
     </SwiperSlide>







 </Swiper>
 </div>


      
      <div className=" bg-transparent  border-gray-700 rounded-lg  ">

        <p className="mb-4">
            A Student Life and Career Management System ,In this system, students can create their professional resumes, while both teachers and students can manage and update daily class schedules  .
        </p>
        <p className="font-semibold mb-4">Specification:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Developed an innovative e-commerce platform using React.js, Redux, Express js,MongoDB and Mongoose.</li>
          <li>
              Our platform is mainly for students and teachers and its full version is not yet available for creating resumes and routines.
          </li>
          <li>Here any user can easily create a resume by selecting the last resume type and then following some of our guidelines to easily create a resume with that information and download it.</li>
          <li>Here the user can easily follow some guidelines and create a class routine according to the given information and download it.</li>

        </ul>
        <div className="flex space-x-4">
          <a
            href="https://github.com/ashikurbd71/SLACMS-RIIT"
            className="bg-[#EC4899] text-white flex items-center px-2 lg:px-4 py-2 rounded "
          >
             <ExternalLink className="mr-2 h-5 w-5" />
             Client Repo
          </a>
          <a
            href="https://github.com/ashikurbd71/SLACMS-RIIT-API"
            className="bg-[#EC4899] text-white flex items-center px-2 lg:px-4 py-2 rounded"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
         Server Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default SLAMCSDetails;
