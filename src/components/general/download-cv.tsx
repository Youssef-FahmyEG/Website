'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1edWG94wCRFbcw7Dk7wZpbUyn2O5Nq4Zx/view?usp=sharing';
    link.download = 'Youssef_Hosny_CV.pdf'; // Name of the file when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
