import { BiLoaderAlt } from "react-icons/bi";

function SpinnerMini({ size = "text-lg" }) {
  return (
    <BiLoaderAlt className={`${size} animate-rotate`} />
  )
}

export default SpinnerMini;
