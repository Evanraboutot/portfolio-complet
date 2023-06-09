import React from 'react';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* texte */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>À propos de moi.</h2>
            <h3 className='h3 mb-4'>
            Je suis un jeune étudiant, actuellement en 2ème année du BUT MMI. 
            </h3>
            <p className='mb-6'>
            Self-made person. Je mets les accents sur les interfaces, visuels et conception web. Né et faisant mes études France, j'aimerais aider les startups, les agences numériques et d’autres entreprises à apporter de la valeur dans leurs projets.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Années d'expérience <br />
          
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projet terminés <br />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
