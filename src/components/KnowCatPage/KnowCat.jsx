import { images } from "../../Images";
import "./KnowCat.css";
import KnowCatContainer from "./KnowCatContainer";

export default function KnowCat() {
  return (
    <div className="knowCat">
      <h1>GET TO KNOW SIMON&apos;S CAT</h1>
      <div className="knowCatContainer">
        <KnowCatContainer
          header="Inspiration"
          para="The cats behind the legends!"
          image1={images.knowCat1a}
          image2={images.knowCat1b}
          clsname=""
        />
        <KnowCatContainer
          header="Quiz"
          para="Which Simon's cat are you?"
          clsname="up"
          image1={images.knowCat2a}
          image2={images.knowCat2b}
        />
        <KnowCatContainer
          header="History"
          para="How it all came to be..."
          clsname=""
          image1={images.knowCat3a}
          image2={images.knowCat3b}
        />
        <KnowCatContainer
          header="Simons's Dairy"
          para="A sneak peak into Simon's creative life and cats."
          clsname="up"
          image1={images.knowCat4a}
          image2={images.knowCat4b}
        />
      </div>
    </div>
  );
}
