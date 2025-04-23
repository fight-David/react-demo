import React, { useState } from "react";

function AutoComplete({ options }) {
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  // 过滤选项
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="simple-autocomplete">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setShowOptions(true);
        }}
        onFocus={() => setShowOptions(true)}
        placeholder="输入搜索..."
      />
      {showOptions && inputValue && filteredOptions.length > 0 && (
        <ul className="options-list">
          {filteredOptions.map((option) => (
            <li
              key={option}
              onClick={() => {
                setInputValue(option);
                setShowOptions(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutoComplete;
