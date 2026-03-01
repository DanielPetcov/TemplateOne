import { flower_5, flower_6 } from "../images";

export default function Section5() {
  return (
    <div className="container mx-auto px-4 mt-40">
      <div className="space-y-14">
        <img src={flower_5.src} className="w-40 mx-auto" />
        <h2 className="text-center text-6xl max-w-2/3 mx-auto">
          Abia așteptăm să sărbătorim alături de tine!
        </h2>
        <img src={flower_6.src} className="w-40 mx-auto" />
      </div>
    </div>
  );
}
