import React from 'react';

const ContactMap = () => {
  return (
    <section className="w-full relative"> 
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.88814550111!2d6.145712276912192!3d49.562133650924764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954864dafeaba7%3A0xbd8702de0dcb7bd1!2s4%20Op%20de%20Leemen%2C%205846%20Fentange%20Hesperange%2C%20Luxembourg!5e0!3m2!1svi!2s!4v1765783714367!5m2!1svi!2s"
        width="100%"
        height="316"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> 
      <h3 className='absolute top-[30%] left-0 right-0 text-center block z-10 text-5xl font-semibold text-[#787878]'>Luxembourg</h3>
    </section>
  );
};

export default ContactMap;
