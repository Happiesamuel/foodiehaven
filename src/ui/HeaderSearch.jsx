import styled from "styled-components";
import { Button } from "./Button";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDarkmode } from "../context/DarkmodeContext";
import { device } from "../mediaSizes";

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
    background-color: var(--color-background-input);
    color: var(--color-svg-link);
    transition: all 0.5s;
    width: 120px;
    @media ${device.tablet} {
      width: 180px;
    }
    &:focus {
      width: 130px;
      @media ${device.tablet} {
        width: 200px;
      }
    }
    &::placeholder {
      color: var(--color-svg-link);
    }
  `;
  const { register, handleSubmit, getValues } = useForm();
  const { isDarkmode } = useDarkmode();

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

      <Button type={isDarkmode ? "secondary" : "secondary"} size="medium">
        Search
      </Button>
    </StyledForm>
  );
}

export default HeaderSearch;
