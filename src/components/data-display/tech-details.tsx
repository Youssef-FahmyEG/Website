'use client';

import { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

const TechDetails2 = ({ logo, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="flex flex-col items-center justify-end gap-2">
      <Link noCustomization href={""} externalLink>
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          className="transition-transform duration-300 md:hover:scale-110"
          style={{width:"80px"}}
        />
      </Link>
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default TechDetails2;
