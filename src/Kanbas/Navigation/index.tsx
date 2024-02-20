import "./index.css";
import React, { useState } from "react";
import KanbasNavigationSmall from "./Small";
import KanbasNavigationLarge from "./Large";
import { HiChevronDown, HiMiniBars3 } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { useLocation } from "react-router";

function KanbasNavigation({
  children,
  title = undefined,
  subtitle = undefined,
  accessory = undefined,
}: {
  children: React.ReactNode;
  title?: string | undefined;
  subtitle?: string | undefined;
  accessory?: ((hide: () => void) => React.ReactNode) | undefined;
}) {
  const [showKanbasNav, setShowKanbasNav] = useState(false);
  const [showAccessory, setShowAccessory] = useState(false);
  const { pathname } = useLocation();
  const defaultTitle = pathname.split("/").pop();

  return showKanbasNav ? (
    <KanbasNavigationSmall hide={() => setShowKanbasNav(false)}>
      <div></div>
    </KanbasNavigationSmall>
  ) : (
    <div>
      <div className="d-md-none wd-nav-bar d-flex justify-content-between align-items-center">
        <HiMiniBars3 onClick={() => setShowKanbasNav((show) => !show)} />

        <div className="text-center">
          {title || defaultTitle}
          <br />
          {subtitle}
        </div>
        {showAccessory ? (
          <FaTimes onClick={() => setShowAccessory((show) => !show)} />
        ) : (
          <HiChevronDown
            className={`${accessory ? "" : "invisible"}`}
            onClick={() => setShowAccessory((show) => !show)}
          />
        )}
      </div>
      <div className="d-md-none shadow">
        {showAccessory && accessory && accessory(() => setShowAccessory(false))}
      </div>
      <div className="d-flex align-items-stretch">
        <div className="d-none d-md-block">
          <KanbasNavigationLarge />
        </div>
        <div className="wd-kanbas-nav-spacer d-none d-md-block"></div>
        <div className="flex-grow-1" style={{ height: "100vh" }}>
          {!showKanbasNav && children}
        </div>
      </div>
    </div>
  );
}

export default KanbasNavigation;
