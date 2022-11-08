type AdvantageListProps = {
  headline: string;
  advantages: string[];
};

export function AdvantageList({ headline, advantages }: AdvantageListProps) {
  return (
    <div
      className="card w-[29rem] shadow-2xl rounded-2xl"
      style={{
        background:
          "linear-gradient(160deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 90%)",
      }}
    >
      <ul className="divide-y-2 divide-gray-100">
        <li
          className="p-6 text-center pt-4 text-5xl bg-slate-900 rounded-t-lg font-bold"
          style={{
            color: "#77BF29",
            minWidth: "210px",
          }}
        >
          {headline}
        </li>
        {advantages.map((advantage) => {
          return (
            <li
              className="p-5 text-center text-white text-3xl backdrop-blur-md"
              key={advantage}
            >
              {advantage}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
