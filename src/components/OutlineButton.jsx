/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export const OutlineButton = ({
  routeTo,
  styles,
  text,
  linkStyle,
  buttonAction,
}) => {
  if (buttonAction) {
    return (
      <div className={linkStyle}>
        <button
          className={`border-button ${styles}`}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {text}
        </button>
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Account settings
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Support
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              License
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link to={routeTo} className={linkStyle}>
      <button className={`border-button ${styles}`}>{text}</button>
    </Link>
  );
};

// export const OutlineButton = ({
//   routeTo,
//   styles,
//   text,
//   linkStyle,
//   buttonAction,
// }) => {
//   if (buttonAction) {
//     return (
//       <div onClick={buttonAction} className={linkStyle}>
//         <button className={`border-button ${styles}`}>{text}</button>
//       </div>
//     );
//   }

//   return (
//     <Link to={routeTo} className={linkStyle}>
//       <button className={`border-button ${styles}`}>{text}</button>
//     </Link>
//   );
// };
