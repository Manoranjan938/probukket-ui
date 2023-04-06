import React, {
  useRef,
  useState,
  type ReactElement,
  type ChangeEvent,
} from "react";
import { GrFormClose } from "react-icons/gr";
import { HiOutlineSearch } from "react-icons/hi";

import "./style.css";

const suggest = [{ name: "Sagar" }, { name: "Lopa" }, { name: "Bikash" }];

const Search = (): ReactElement => {
  const [isOpen, setIsOpen] = useState("");
  const [search, setSearch] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    if (!isOpen) {
      inputRef.current?.focus();
    }
    setIsOpen(!isOpen ? "open" : "");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target?.value);
  };

  const filteredData = suggest.filter((sug) =>
    sug.name.toLowerCase().includes(search?.toLowerCase()),
  );

  return (
    <div className="wrapper">
      <div className={`search ${isOpen}`}>
        <input
          type="text"
          ref={inputRef}
          onChange={handleChange}
          placeholder="Search anything"
        />
        <button onClick={handleClick}>
          {isOpen ? <GrFormClose /> : <HiOutlineSearch />}
        </button>
      </div>
      <div className={`items ${isOpen}`}>
        {filteredData?.map((fil, index) =>
          index < 3 ? <button key={fil.name}>{fil.name}</button> : null,
        )}
      </div>
    </div>
  );
};

export default Search;
