
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo2 from '../Images/access2.png'

import { HiViewGrid } from "react-icons/hi";
import { MdOutlineViewList } from "react-icons/md";
import { FaTasks } from "react-icons/fa";


function Sidebar() {

const [selected, setSelected] = useState(1);

const selectedMode  = {
  backgroundColor: "rgb(255, 255, 255, 0.08)",
  borderRight: "4px solid green",
};

  return (
    <div className="Sidebar">
      <div className="switch">
        <img src={logo2} />
        <FaChevronDown />

      </div>
      <br /> <br /> <br /> <br />
      <div className="side"
      onClick={() => setSelected(1)}
      style={selected === 1? selectedMode : null}
      >
        <HiViewGrid/>
      </div>
      <div className="side"
       onClick={() => setSelected(2)}
       style={selected === 2? selectedMode : null}
       >
      <MdOutlineViewList/>
      </div>
<hr />

      <div className="side">
        <FaTasks/>
      </div>
    </div>
  );
}

export default Sidebar;
