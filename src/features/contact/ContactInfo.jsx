import styled from "styled-components";
import { Button } from "../../ui/Button";
import { useDarkmode } from "../../context/DarkmodeContext";
import { device } from "../../mediaSizes";

function ContactInfo() {
  const StyledContactInfo = styled.div`
    text-align: left;
    width: 100%;
    @media (${device.tablet}) {
      width: max-content;
    }
  `;
  const Percent = styled.div`
    background-color: var(--color-foodie-logo);
    border-radius: 300px;
    width: max-content;
    padding: 25px 25px 25px 28px;
    transition: 0.5s;

    cursor: pointer;
    &:hover {
      scale: 1.1;
    }
    text-align: center;
    & h1,
    p {
      color: #fff;
    }
    & h1 {
      font-weight: bold;
      font-size: 25px;
    }
    & p {
      font-weight: 400;
      line-height: 1;
      font-size: 15px;
    }
  `;
  const Bottom = styled.div`
    margin: 60px 0 30px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
    @media (${device.tablet}) {
      flex-direction: column;
      align-items: flex-start;
    }
    & h1 {
      color: var(--color-deep-text);
      font-weight: 600;
      font-size: 28px;
      letter-spacing: 2px;
      @media (${device.tablet}) {
        font-size: 35px;
      }
    }
  `;
  const Per = styled.div`
    display: flex;
    justify-content: center;
    @media (${device.tablet}) {
      display: block;
    }
  `;
  const { isDarkmode } = useDarkmode();
  return (
    <StyledContactInfo>
      <Per>
        <Percent>
          <h1>100%</h1>
          <p>
            Business <br /> Lunch
          </p>
        </Percent>
      </Per>
      <Bottom>
        <h1>Our Contact</h1>
        <div>
          <Button type={isDarkmode ? "primary" : "secondary"} size="medium">
            READ MORE
          </Button>
        </div>
      </Bottom>
    </StyledContactInfo>
  );
}

export default ContactInfo;
