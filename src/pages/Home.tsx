import Video from "../assets/Playportal_Video.mp4";
import advantagesList from "../data/advantagesList.json";
import { AdvantageList } from "../components/AdvantageList";

export function Home() {
  function playVideoOnClick(e: any) {
    e.target.paused ? e.target.play() : e.target.pause();
  }

  return (
    <div>
      <div className="playerWrapper">
        <video
          src={Video}
          loop={true}
          controls={false}
          autoPlay
          muted
          className="opacity-30 w-full"
          onClick={playVideoOnClick}
        />
      </div>
      <div className="AdvantageSection flex-col text-center">
        <div className="AdvantagesText text-7xl mt-10 font-bold">
          <h1 style={{ color: "#77BF29", textShadow: "2px 2px 8px #000000" }}>
            Deine Vorteile
          </h1>
        </div>
        <div className="Advantages gap-12 mt-10 flex justify-center mb-10 flex-wrap">
          {advantagesList.map((list) => {
            return (
              <AdvantageList
                headline={list.headline}
                advantages={list.advantages}
                key={list.headline}
              ></AdvantageList>
            );
          })}
        </div>
      </div>
    </div>
  );
}
