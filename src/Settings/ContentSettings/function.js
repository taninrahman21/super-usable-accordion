import { AiFillDownSquare, AiFillUpSquare, AiOutlineMinus, BiCaretDownSquare, BiCaretUpSquare, BiChevronDownCircle, BiChevronUpCircle, BiPlus, BsChevronDown, BsChevronUp } from "../../utils/icons";

export const getIcon = (name) => {
  switch (name) {
    case "BiPlus":
      return <BiPlus />
    case "BsChevronDown":
      return <BsChevronDown />
    case "BiChevronDownCircle":
      return <BiChevronDownCircle />
    case "BiCaretDownSquare":
      return <BiCaretDownSquare />
    case "AiFillDownSquare":
      return <AiFillDownSquare />
  }
}
export const getActiveIcon = (name) => {
  switch (name) {
    case "AiOutlineMinus":
      return <AiOutlineMinus  />;
    case "BsChevronUp":
      return <BsChevronUp  />;
    case "BiChevronUpCircle":
      return <BiChevronUpCircle  />;
    case "BiCaretUpSquare":
      return <BiCaretUpSquare  />;
    case "AiFillUpSquare":
      return <AiFillUpSquare  />;
    // default:
    //   return null; // Handle the case when name doesn't match any icon
  }
}