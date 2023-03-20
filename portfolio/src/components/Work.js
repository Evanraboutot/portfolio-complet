import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import Img3 from '../assets/portfolio-img4.png';

import img1 from '../assets/portfolio-img1.png';

import img2 from '../assets/portfolio-img2.png';

import img5 from '../assets/portfolio-img3.png';

import img6 from '../assets/img-6.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            {/* texte */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Mon dernier <br />
                Projet.
              </h2>
              <p className='max-w-sm mb-16'>
              Unified Champions est le club d’esport de l’université de Franche-Comté. Il propose aux étudiants de l’université de pouvoir se former et s’entraîner ainsi que d’avoir une pratique compétitive pour ceux qui le souhaitent.
              </p>
            </div>
            
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'
          >
           
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mb-12'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* image */}
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={Img3}
                alt=''
              />
            </div>
          </motion.div>
        </div>
        <div>
              <h2 className='h2 text-accent my-12'>
                Mon travail <br />
                durant Ce Projet.
              </h2>
              <p className=' mb-16'>
              Durant ce projet j'ai du tout d'abord changer l'allure globale du logo car il étais difficile à retenir. C'est pourquoi j'ai décidés de le simplifier passant d'un logo type mascotte à un logo flat design. Ensuite le commanditaire changer d'harmonie colorée, et donc passé à la couleur violette. C'est pourquoi pour accorder au thème de l'ESport nous avons choisis des couleurs impactantes coupler à un fond assez sombre pour refaire ressortir les informations principales sur le site web. Enfin j'ai du créer les overlays de la chaine Twitch pour Unified Champions. 
              </p>
            </div>
            <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-col lg:flex-row gap-x-10'
          >
            <div class="project">
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
         <img
                className='transition-all duration-500'
                src={img2}
                alt=''
              />
              </div>
        </div>
        <div class="project">


<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mb-12'>
 <img
        className='transition-all duration-500'
        src={img1}
        alt=''
      />
      </div>
      
</div>
<div class="project">
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
         <img
                className='transition-all duration-500'
                src={img5}
                alt=''
              />
              </div>
        </div>

        <div class="project">
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
         <img
                className='transition-all duration-500'
                src={img6}
                alt=''
              />
              </div>
        </div>

        </motion.div>

        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl mb-12'>

      </div>
        
        
      </div>
    </section>
      
  );
};

export default Work;
