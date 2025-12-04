import React from 'react';
import ContactForm from './ContactForm';

const ContactHero = () => {
  return (
    <section className="flex w-full flex-col border-b border-gray-200 lg:flex-row lg:items-stretch">
      <div
        className="relative flex flex-1 items-end justify-center bg-cover bg-center lg:min-h-[817px]"
        style={{
          backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/c98e42a614fe450541b4b7b72013e8d72d2ee82c?width=1442')",
          minHeight: '400px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
      </div>

      <div className="flex flex-1 bg-white">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactHero;
