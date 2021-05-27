import React from "react";
import { Form, FormControl } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <Form className="search-bar">
      <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
      <SearchIcon role="button"/>
    </Form>
  );
};

export default SearchBar;
