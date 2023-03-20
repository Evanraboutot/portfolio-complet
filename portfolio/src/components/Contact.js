import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='mt-56 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* texte */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.5 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Entrer en contact
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 font-semibold'>
                parlons <br /> ensemble!
              </h2>
            </div>
          </motion.div>
          {/* form/transitions */}
          <motion.form
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border-2 rounded-3xl flex flex-col gap-y-5 pb-18 p-6 items-start'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='votre nom'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Votre e-mail'
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='votre message'
            ></textarea>
            <button className='btn btn-lg'>envoyer un message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
