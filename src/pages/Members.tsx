import { useState, useMemo } from "react";
import { ProfileCard } from "../components/Profilecard";
import members from "../data/profileList.json";

export function Members() {
  const [filterValue, setFilterValue] = useState("");
  const filteredMembers = useMemo(
    () =>
      members.filter((m) =>
        m.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
      ),
    [filterValue]
  );

  function onInputChanged(e: any) {
    const searchValue = e.target.value;
    setFilterValue(searchValue);
  }

  return (
    <>
      <div className="searchbarAndFilter flex justify-center items-center">
        <input
          type={"text"}
          placeholder="Suchen..."
          className="rounded-2xl h-16 w-[30rem] max-w- mt-20 shadow-lg shadow-slate-700 opacity-95 p-3 text-2xl font-semibold outline-none"
          onChange={onInputChanged}
        ></input>
      </div>
      <div className="flex flex-wrap justify-center mt-5 p-20 gap-4">
        {filteredMembers.map((member) => {
          return (
            <ProfileCard
              name={member.name}
              category={member.category}
              image={member.image}
              key={member.name}
            ></ProfileCard>
          );
        })}
      </div>
    </>
  );
}
