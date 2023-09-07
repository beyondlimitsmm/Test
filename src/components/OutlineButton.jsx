/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export const OutlineButton = ({ routeTo, styles, text, linkStyle }) => {
  return (
    <Link to={routeTo} className={linkStyle}>
      <button className={`border-button ${styles}`}>{text}</button>
    </Link>
  );
};
