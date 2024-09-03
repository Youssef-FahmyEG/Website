import Image from 'next/image';
import Link from 'next/link';

import { TestimonialDetails as TestimonialDetailsProps } from '@/lib/types';
import Card from '@/components/layout/card';

const TestimonialDetails = ({
  personAvatar,
}: TestimonialDetailsProps) => {
  return (
    <Card className="mx-auto flex flex-col h-fit items-center gap-6 p-2 md:w-2/3  lg:w-1/3">
      <Link href={""}>
      <Image src={personAvatar!} alt={` avatar`}></Image>
      </Link>
    </Card>
  );
};

export default TestimonialDetails;
