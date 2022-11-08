import "../index.css";
import { FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";

type ProfileCardProps = {
  name: string;
  image: string;
  category: string;
};

export function ProfileCard({ name, image, category }: ProfileCardProps) {
  return (
    <div className="bg-gray-800 flex min-w-[300px]">
      <div
        className="min-w-[300px] max-w-[300px] p-8 rounded-xl text-gray-400 overflow-hidden group
                    hover:shadow-2xl hover:shadow-green-600/50 motion-safe:transition-all motion-safe:duration-700"
      >
        <figure
          className="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4 outline-green-600
                       before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-green-600 before:-z-[1]
                       group-hover:before:scale-[2.5] motion-safe:before:transition-all 
                       motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-green-600"
        >
          <img
            className="rounded-full block max-w-full bg-green-600 object-cover z-10 relative"
            src={image}
          ></img>
        </figure>
        <header className="flex flex-col items-center motion-safe:translate-y-4 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
          <h3
            className="font-semibold text-2xl text-center text-green-600 mt-3  group-hover:text-gray-800 relative"
            style={{ fontFamily: "Orbitron" }}
          >
            {name}
          </h3>
          <p className="text-center group-hover:text-gray-800 relative text-sm">
            {category}
          </p>
        </header>

        <ul
          className="flex justify-center space-x-4 mt-16 text-green-600
                   relative"
        >
          <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
            <a href="https://www.instagram.com/toomda/?hl=de" target="_blank">
              <FaInstagram title="Instagram" size={30}></FaInstagram>
            </a>
          </li>
          <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
            <a href="https://www.youtube.com/Toomda" target="_blank">
              <FaYoutube title="Youtube" size={30}></FaYoutube>
            </a>
          </li>
          <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
            <a href="https://www.twitch.tv/toomda" target="_blank">
              <FaTwitch title="Twitch" size={30}></FaTwitch>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
