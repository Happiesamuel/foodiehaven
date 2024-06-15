import styled from "styled-components";
import { Button } from "./Button";
import { useState } from "react";
import { useSearch } from "../context/SearchResultContext";

function HeaderSearch() {
  const StyledForm = styled.form`
    display: flex;
    gap: 5px;
  `;
  const Input = styled.input`
    outline: none;
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
    background-color: #dcfce7;
    color: #039235;
    transition: all 0.5s;
    width: 180px;
    &:focus {
      width: 200px;
    }
    &::placeholder {
      color: #039235;
    }
  `;
  const [query, setQuery] = useState("");
  const { setSearchData } = useSearch();

  function onSubmit(e) {
    e.preventDefault();
    if (!query) return;
    setSearchData(query);
  }
  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Search for food recipies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="secondary" size="medium">
        Search
      </Button>
    </StyledForm>
  );
}

export default HeaderSearch;
