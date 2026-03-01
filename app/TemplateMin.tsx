import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Form from './sections/Form';

import { couple_1, couple_2, couple_3, couple_4 } from './images';

export default function TemplateMin() {
  const data = {
    section1: {
      couplePhoto1Url: couple_1.src,
      herName: 'Arina',
      hisName: 'Daniel',
      date: Date.now(),
      location: 'i dont know',
    },
    section2: {
      paragraph1: `Neither of them believed in online dating. She did it on a dare; he
          was just curious. Through digital or divine intervention, their lines
          crossed and they swiped right at the right time.`,
      paragraph2: `When the pandemic made it impossible to meet up, online dating helped
          romance bloom. They became fast friends and loving partners despite
          the distance. When they finally met in person 6 months later, Matt
          already had the ring with him. Dani said yes! The rest is history, and
          you get to be a part of it.`,
    },
    section3: {
      couplePhoto1Url: couple_2.src,
      couplePhoto2Url: couple_3.src,
      couplePhoto3Url: couple_4.src,
    },
    section4: {
      dressCodeParagraph: `Come in your best rustic chic attire, and make sure you're
            comfortable! The reception will be held in a garden, so please wear
            the appropriate footwear.`,
    },
  };

  return (
    <div className="pt-20 max-w-lg 4xl:max-w-none mx-auto font-serif">
      <Section1 {...data.section1} />
      <Section2 {...data.section2} />
      <Section3 {...data.section3} />
      <Section4 {...data.section4} />
      <Section5 />
      <Form />
    </div>
  );
}
