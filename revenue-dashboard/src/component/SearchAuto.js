import React, { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import ReactDOM from "react-dom";
import { getOperators } from "../services/auth.service";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";

const SearchAuto = ({ setSelectedVal }) => {
  const [selected, setSelected] = useState([]);
  const [options, setOperators] = useState([]);

  // console.log(selected[0]?.OPERATOR_ID);

  useEffect(() => {
    setSelectedVal(selected);
    // localStorage.setItem('operator',selected[0]?.OPERATOR_ID);
  }, [selected]);

  useEffect(() => {
    getOperators()
      .then((data) => {
        setOperators(data.data.data);
      })
      .catch((err) => {
        setOperators([]);
      });
  }, []);

  return (
    <Typeahead
      clearButton
      id="basic-example"
      onChange={setSelected}
      labelKey="OPERATOR"
      options={options}
      placeholder="Choose a operator..."
      selected={selected}
    />
  );
};

export default SearchAuto;
