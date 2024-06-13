import { useState } from "react";
import PropTypes from "prop-types";
import styles from "@styles/components/Dropdown.module.scss";

const Dropdown = ({ selectedValue, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (e) => {
    onSelect(e.target.value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button type="button" className={styles.select_box} onClick={handleClick}>
        <span>{selectedValue}</span>
        <img
          className={isOpen ? styles.opened : ""}
          src="/src/assets/down.svg"
          alt="메뉴 열기/닫기"
        />
      </button>
      {isOpen && (
        <ul className={styles.select_options}>
          {options.map((item, index) => (
            <li key={index}>
              <button type="button" onClick={handleSelect} value={item}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  selectedValue: PropTypes.string,
  options: PropTypes.array,
  onSelect: PropTypes.func,
};

export default Dropdown;
