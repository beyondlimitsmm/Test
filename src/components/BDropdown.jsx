import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { getRoomNames, getSuiteNames } from "../api/roomsAndSuites";

const BDropdown = ({ selectedRoomName, onOptionChange, label, isSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [roomNames, setRoomNames] = useState([]);
  const [selectedOption, setSelectedOption] = useState(selectedRoomName);

  const { data: rooms } = useQuery({
    queryKey: ["getRoomNames"],
    queryFn: getRoomNames,
  });

  const { data: suites } = useQuery({
    queryKey: ["getSuiteNames"],
    queryFn: getSuiteNames,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onOptionChange(option);
    setIsOpen(false);
  };

  const _setRoomNames = useCallback(
    (data) => {
      if (data) {
        data.data.map((room) => {
          setRoomNames((prev) => {
            const name = room.attributes.title;
            const isExisted = prev?.find((dt) => dt === name);

            if (!isExisted) return [...prev, name];
            else return prev;
          });
        });
      }
    },
    [rooms, suites]
  );

  const _setSelectedOption = useCallback(
    () => setSelectedOption(selectedRoomName),
    [selectedRoomName]
  );

  useEffect(() => {
    _setRoomNames(rooms);
    _setRoomNames(suites);
  }, [_setRoomNames]);

  useEffect(() => {
    _setSelectedOption();
  }, [_setSelectedOption]);

  useEffect(() => {
    if (isSuccess) setSelectedOption(undefined);
  }, [isSuccess]);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-full p-3 border border-primary/50 border-opacity-10 outline-none bg-white"
      >
        <span className=" typo-body-2">
          {selectedOption ? (
            selectedOption
          ) : (
            <span className="text-opacity-60 text-primary">{label}</span>
          )}
        </span>
        <svg
          className=" h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown panel, conditionally rendered based on isOpen state */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {roomNames?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`block px-4 py-3 text-sm text-gray-700  w-full text-start ${
                  option === selectedOption
                    ? " bg-primary bg-opacity-20"
                    : " hover:bg-gray-100"
                }`}
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BDropdown;
