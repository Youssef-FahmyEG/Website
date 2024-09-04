import Image from 'next/image';
import { MapPin } from 'lucide-react';

import Headshot from '/public/images/5953920271624814760(1).png';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col justify-center gap-12 md:flex-row">

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
             Hello! ,I am Youssef 
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
             
I am a data analyst who graduated with a bachelor's degree in Accounting, I firmly believe that data can be used to solve humanization issues and that making the right decisions will make the world better.

            </Typography>
            <p className='font-bold text-center'>
            Professional Experience :
            </p>
            <p className='text-center my-2'>
            Currently : Interning as Data Analyst with NeuronetiX
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>cairo, Egypt</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
