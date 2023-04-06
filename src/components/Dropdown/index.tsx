import React, {
  useRef,
  type ReactElement,
  type ReactNode,
  type RefObject,
  useState,
} from "react";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

import "./style.css";
import { BsAndroid2 } from "react-icons/bs";

interface IconProps {
  children: ReactNode;
  className?: string;
  iconRef?: RefObject<HTMLSpanElement>;
}

const Icon = ({
  children,
  className = "",
  iconRef,
}: IconProps): ReactElement => {
  return (
    <span ref={iconRef} className={`${className} dropdown-icon`}>
      {children}
    </span>
  );
};

const Dropdown = (): ReactElement => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const chevRef = useRef<HTMLSpanElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuTop, setMenuTop] = useState<string>();
  const [menuRight, setMenuRight] = useState<string>();

  const handleClick = (): void => {
    const btnRect = btnRef?.current?.getBoundingClientRect();
    const chevRect = chevRef?.current?.getBoundingClientRect();

    if (btnRect && chevRect && isOpen) {
      const menuRight = btnRect?.right - chevRect?.right;
      const menuTop = chevRect?.top - btnRect?.top;
      setMenuRight(`${menuRight}px`);
      setMenuTop(`${menuTop}px`);
    } else {
      setMenuRight("0");
      setMenuTop("80px");
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button ref={btnRef} onClick={handleClick}>
        <Icon>
          <AiFillCodeSandboxCircle />
        </Icon>
        <span className="menu_title">Preferences</span>
        <Icon iconRef={chevRef} className="chevron">
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowDown />}
        </Icon>
      </button>
      <div
        className={`menu ${isOpen ? "open" : ""}`}
        style={{ right: menuRight, top: menuTop }}
      >
        <button>
          <Icon>
            <BsAndroid2 />
          </Icon>
          <span>Project 2</span>
        </button>
        <button>
          <Icon>
            <BsAndroid2 />
          </Icon>
          <span>Project 2</span>
        </button>
        <button>
          <Icon>
            <BsAndroid2 />
          </Icon>
          <span>Project 2</span>
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
