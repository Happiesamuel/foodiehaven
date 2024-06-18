import styled from "styled-components";
import { Button } from "./Button";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit, getValues } = useForm();

  const [searchParams, setSearchParams] = useSearchParams();
  function onSubmit() {
    const query = getValues().search;
    console.log(query);
    if (!query) return;
    searchParams.set("search", query);
    setSearchParams(searchParams);
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        autoComplete={false}
        autoCorrect={false}
        placeholder="Search for food recipies..."
        {...register("search")}
      />

      <Button type="secondary" size="medium">
        Search
      </Button>
    </StyledForm>
  );
}

export default HeaderSearch;
