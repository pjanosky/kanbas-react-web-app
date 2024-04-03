import "./index.css";
import React, { useState } from "react";
import KanbasNavigationSmall from "./Small";
import KanbasNavigationLarge from "./Large";
import { HiChevronDown, HiMiniBars3 } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../store";
import { setShowSmallNav } from "./navigationReducer";

function KanbasNavigation({ children }: { children: React.ReactNode }) {
  const [showKanbasNav, setShowKanbasNav] = useState(false);
  const showSmallNav = useSelector(
    (state: KanbasState) => state.navigationReducer.showSmallNav
  );
  const showSmallNavButton = useSelector(
    (state: KanbasState) => state.navigationReducer.showSmallNavButton
  );
  const title = useSelector(
    (state: KanbasState) => state.navigationReducer.title
  );
  const subtitle = useSelector(
    (state: KanbasState) => state.navigationReducer.subtitle
  );
  const dispatch = useDispatch();

  return (
    <div>
      {showKanbasNav && (
        <div className="position-absolute w-100 h-100 z-1">
          <KanbasNavigationSmall hide={() => setShowKanbasNav(false)} />
        </div>
      )}
      <div className="d-md-none wd-nav-bar d-flex justify-content-between align-items-center">
        <HiMiniBars3 onClick={() => setShowKanbasNav((show) => !show)} />
        <div className="text-center">
          {title}
          <br />
          {subtitle}
        </div>
        <div
          onClick={() => dispatch(setShowSmallNav(!showSmallNav))}
          className={showSmallNavButton ? "" : "invisible"}
        >
          {showSmallNav ? <FaTimes /> : <HiChevronDown />}
        </div>
      </div>
      <div className="d-flex align-items-stretch">
        <div
          className="d-none d-md-block position-fixed h-100"
          style={{ overflow: "auto" }}
        >
          <KanbasNavigationLarge />
        </div>
        <div
          className="d-none d-md-block flex-shrink-0 flex-grow-0"
          style={{ width: "80px" }}
        ></div>
        <div className="flex-grow-1" style={{ height: "100%" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default KanbasNavigation;
