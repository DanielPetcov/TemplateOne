import { couple_1, couple_2, couple_3, couple_4 } from "./images";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Form from "./sections/Form";

export default function Home() {
  const data = {
    section1: {
      couplePhoto1Url: couple_1.src,
      herName: "Dana",
      hisName: "Matt",
      date: "07.06.2026",
      location: "Willowblane Villas",
    },
    section2: {
      paragraph1: `Niciunul dintre ei nu credea în întâlnirile online. Ea a făcut-o dintr-o provocare; el era doar curios. Printr-o intervenție digitală sau divină, drumurile lor s-au intersectat și au dat swipe right la momentul potrivit.`,
      paragraph2: `Când pandemia a făcut imposibilă întâlnirea față în față, întâlnirile online au ajutat dragostea să înflorească. Au devenit rapid prieteni apropiați și parteneri iubitori, în ciuda distanței. Când s-au întâlnit în sfârșit după 6 luni, Matt avea deja inelul la el. Dana a spus da! Restul este istorie, iar tu vei face parte din ea.`,
    },
    section3: {
      couplePhoto1Url: couple_2.src,
      couplePhoto2Url: couple_3.src,
      couplePhoto3Url: couple_4.src,
    },
    section4: {
      dressCodeParagraph: `Vino îmbrăcat(ă) în cea mai frumoasă ținută rustic chic și asigură-te că te simți confortabil! Recepția va avea loc într-o grădină, așa că te rugăm să porți încălțăminte potrivită.`,
    },
  };

  return (
    <div className="py-20 max-w-lg 4xl:max-w-none mx-auto font-serif">
      <Section1 {...data.section1} />
      <Section2 {...data.section2} />
      <Section3 {...data.section3} />
      <Section4 {...data.section4} />
      <Section5 />
      <Form />
    </div>
  );
}
