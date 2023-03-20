import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';


const services = [
  {
    name: 'UX Design',
    description:
      'Compréhension approfondie de lexpérience utilisateur et sait comment concevoir des interfaces intuitives qui facilitent l interaction avec les utilisateurs.',
  },
  {name: 'UI Design',
     description:
      ' Connaissance solide des principes de conception visuelle qui me permet de créer des designs accrocheurs et esthétiquement plaisants, tout en restant fidèle aux besoins et aux attentes des utilisateurs.',
  },

  { name: 'Community manager',
    description:
      ' Connaissance approfondie des plateformes de réseaux sociaux, y compris les tendances actuelles, les meilleures pratiques et les algorithmes de chaque plateforme permettant de créer des visuels adaptés pour les réseaux sociaux',
  },
  
    
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* texte et image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mt-6'
          >
            <h2 className='h2 text-accent mb-6'>Ce que je fais.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Voici un récapitulatif de mes connaissances acquises.
            </h3>
            <button className='btn btn-sm'>voir mes travaux</button>
          </motion.div>
          {/* Compétence/services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* Liste */}
            <div>
              {services.map((service, index) => {
                
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[150px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[600px]'>
                      <h4 className='text-[18px] tracking-wider font-primary font-semibold '>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
