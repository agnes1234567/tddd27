import React from "react";
import Select from "react-select";
import { Item, Item1 } from "./GridItems";

const options = [
  { value: "HT", label: "Hösttermin" },
  { value: "VT", label: "Vårtermin" },
];

function SemesterOptComponent({value, semester, handleChange}) {

  return (
        <Select
          options={options}
          value={value}
          onChange={handleChange}
          isSearchable={false}
          placeholder={options.map((option) => {
            if (option.value === semester) {
              return option.label;
            }
          })}
        />
  );
}

export default SemesterOptComponent;
