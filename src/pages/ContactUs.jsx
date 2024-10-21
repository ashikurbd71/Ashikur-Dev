import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_i9s4nv9', 
        'template_8p6lnol',
         form.current, 
        'rUJz-u1TI7bGqOQLL',
      )
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: "Message Sent",
          text: "Thank you! We have received your message and will await your feedback.",
          icon: "success"
        });
        form.current.reset(); 
    }, (error) => {
        console.log(error.text);
    });
  };




  return (
    <div className="flex justify-center items-center  lg:mt-6">
    <div className="bg-white lg:p-10 p-5 rounded-md shadow-md  w-full">
    <h2 className="lg:text-xl text-lg text-[#EC4899] font-bold border-b-2 border-black mb-8">CONTACT US</h2>
      
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        {/* Name input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input 
            type="text" 
            name="user_name" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name" 
            required
          />
        </div>

        {/* Email input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input 
            type="email" 
            name="user_email" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email" 
            required
          />
        </div>

        {/* Message input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea 
            name="message" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message here" 
            rows="4"
            required
          />
        </div>

        {/* Submit button */}
        <div>
          <input 
            type="submit" 
            value="Send" 
            className="w-full font-semibold bg-[#EC4899] text-white py-2 px-4 rounded-md  cursor-pointer"
          />
        </div>
      </form>
    </div>
  </div>
  );
};
