import styled from "styled-components";
import { useDarkmode } from "../../context/DarkmodeContext";
import { useLocalId } from "../hooks/useLocalId";

function Theme() {
  const StyledTheme = styled.div`
    & h1 {
      background-color: var(--color-sidebar);
      font-size: 25px;
      color: var(--color-ash-text);
      padding: 3px 20px;
      margin-bottom: 20px;
      border-radius: 10px;
    }
    & form {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-left: 30px;
      margin-bottom: 20px;

      & div {
        display: flex;
        align-items: center;
        gap: 8px;
        & input {
          accent-color: var(--color-foodie-logo);
        }
        & label {
          color: var(--color-ash-text);
          font-size: 15px;
        }
      }
    }
  `;
  const [value, setValue] = useLocalId(0, "id");
  const { setId } = useDarkmode();
  const inputs = ["System default", "Light mode", "Dark mode"];
  function getId(val) {
    setValue(val);
    setId(val);
  }

  return (
    <StyledTheme>
      <h1>Theme</h1>
      <form>
        {inputs.map((input, i) => (
          <div key={i}>
            <input
              checked={i === value}
              value={value}
              type="radio"
              name="mode"
              onChange={() => getId(i)}
            />
            <label>{input}</label>
          </div>
        ))}
      </form>
    </StyledTheme>
  );
}

export default Theme;
