import { ExternalLink, Eye } from 'lucide-react';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ruby1 from "../../assets/ruby2.png";
import ruby2 from "../../assets/ruby3.png";
import ruby3 from "../../assets/ruby5.png";
import ruby4 from "../../assets/ruby6.png";
import ruby5 from "../../assets/ruby7.png";
import ruby6 from "../../assets/ruby22.png";
import ruby7 from "../../assets/ruby33.png";
import ruby8 from "../../assets/ruby44.png";
import ruby9 from "../../assets/ruvuy.png";


const RubyDetails = () => {
  return (
    <div className=" lg:mt-6  lg:p-10 p-5  bg-white rounded-md shadow-md text-black">
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
      src={ruby1}
      alt="Full-screen Image" 
    
    />
  </SwiperSlide>
     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={ruby2}
             alt="Full-screen Image"

         />
     </SwiperSlide>
     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={ruby3}
             alt="Full-screen Image"

         />
     </SwiperSlide>
     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={ruby4}
             alt="Full-screen Image"

         />
     </SwiperSlide>
     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={ruby5}
             alt="Full-screen Image"

         />
     </SwiperSlide>


     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={ruby6}
             alt="Full-screen Image"

         />
     </SwiperSlide>
     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={ruby7}
             alt="Full-screen Image"

         />
     </SwiperSlide>
     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={ruby8}
             alt="Full-screen Image"

         />
     </SwiperSlide>
     <SwiperSlide>
         {/* Full-screen Image */}
         <img
             src={ruby9}
             alt="Full-screen Image"

         />
     </SwiperSlide>


</Swiper>
 </div>


      
      <div className=" bg-transparent  border-gray-700 rounded-lg  ">

        <p className="mb-4">
            This is a medical camp management website. This website has roles of all three. Here participants can join different camps. Can register for upcoming Camps.Organizers can add new Camps from their dashboard. And he can manage them.Professionals can make wishes in the upcoming times.
        </p>
        <p className="font-semibold mb-4">Specification:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Developed an innovative MIS System  using React.js,  express.js, and MongoDB.</li>
          <li>
              You have to select your role while registering on the website. And according to the role. Access to the dashboard will be provided.There is a separate profile section for each. Where user can update his profile according to his role
          </li>
          <li>Participants will be able to watch the Camps in progress at the available camp. And the camp cards as per his wish by clicking on the joining button. You can register. How to register it? will be displayed on the Participant Dashboard. There a participant can manages his Camps. There is an option to Pay the camp. You click on the option. Participant can pay camp fee. If the payment is not made, its initial status will be shown as unpaid. After making the payment it will be paid. And payment history section of his dashboard will be displayed. But his confirm status will be pending and an organizer will confirm from pending</li>
          <li>Here the organizer can add his games. And can manage it. Organizer can update and delete.The Organizer can manage the registered camps of the Participant. Participant Camps will have status Pending when they register. Those Camps will be confirmed by the organizer. And after confirmation you can delete the Camps .if you want There is a separate dashboard for the organizer. Each organizer can only see the camps they have added..</li>
          <li>The organizer dashboard has a section named upcoming camp. Here the organizer can add upcoming Camps. And can manage them. Upcoming camps will be shown in the up coming section of the home. And Upcoming section cards will have details button by clicking on which participant can register for upcoming camps. And likewise professionals or doctors may show interest in up coming camps. And an organizer will post the upcoming games in the available camp based on participant and professional registration</li>
          <li>.Professionals' dashboard will have two sections. . his profile and his interests Camps. There its status will be Pending if Organizer accepts it then it will be confirmed from Pending.</li>
        </ul>
        <div className="flex space-x-4">
          <a
            href="https://github.com/ashikurbd71/Ruby-Medical-Camp-Client"
            className="bg-[#EC4899] text-white flex items-center px-2 lg:px-4 py-2 rounded "
          >
             <ExternalLink className="mr-2 h-5 w-5" />
             Client Repo
          </a>
          <a
            href="https://github.com/ashikurbd71/Ruby-Medical-Camp-Server"
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

export default RubyDetails;
