import AnimatedImage from "@/components/animated-image";

interface Section3Props {
  couplePhoto1Url: string;
  couplePhoto2Url: string;
  couplePhoto3Url: string;
}

export default function Section3({
  couplePhoto1Url,
  couplePhoto2Url,
  couplePhoto3Url,
}: Section3Props) {
  return (
    <div className="container mx-auto px-4 space-y-4 mt-10">
      <AnimatedImage url={couplePhoto1Url} className="max-w-full mx-auto" />
      <AnimatedImage url={couplePhoto2Url} className="max-w-full mx-auto" />
      <AnimatedImage url={couplePhoto3Url} className="max-w-full mx-auto" />
    </div>
  );
}
