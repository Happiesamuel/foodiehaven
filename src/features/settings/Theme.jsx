import styled from "styled-components";
import { useDarkmode } from "../../context/DarkmodeContext";
import HeadSettings from "./HeadSettings";

function Theme() {
  const StyledTheme = styled.div`
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
  const { setIsDarkmode, isDarkmode } = useDarkmode();
  // const inputs = ["Light mode", "Dark mode"];
  // function getId(val) {
  //   setId(val);
  // }

  return (
    <StyledTheme>
      <HeadSettings>Theme</HeadSettings>
      <form>
        <div>
          <input
            checked={!isDarkmode}
            type="radio"
            name="mode"
            onChange={() => setIsDarkmode(false)}
          />
          <label>Light mode</label>
        </div>
        <div>
          <input
            checked={isDarkmode}
            // value={id}
            type="radio"
            name="mode"
            onChange={() => setIsDarkmode(true)}
          />
          <label>Dark mode</label>
        </div>
      </form>
    </StyledTheme>
  );
}

export default Theme;
