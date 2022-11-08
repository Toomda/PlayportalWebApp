import { NavLink } from "react-router-dom";
import "../footer.css";

export function Footer() {
  return (
    <footer>
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(58, 191, 100,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(58, 191, 100,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(58, 191, 87,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#35c051" />
          </g>
        </svg>
      </div>
      <div className="content flex justify-between items-center tracking-wide text-white text-2xl">
        <NavLink to={"/Contact"}>
          <p className="ml-40 transition hover:text-white duration-200 hover:-translate-y-2 hover:scale-110">
            Kontakt
          </p>
        </NavLink>
        <p text-color="white">©2022 Playportal Network</p>
        <p className="mr-40"></p>
      </div>
    </footer>
  );
}
