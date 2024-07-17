import { useState } from "react";
import styled, { css } from "styled-components";
import Info from "../features/settings/Info";
import Appearance from "../features/settings/Appearance";

function Settings() {
  const StyledSettings = styled.div`
    padding: 20px 20px;
  `;
  const Head = styled.h3`
    color: var(--color-deep-text);
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 10px;
  `;
  const TabContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 0;
    border-bottom: 1px solid var(--color-line);
    position: relative;
  `;
  const TabButton = styled.div`
    ${({ active }) =>
      active
        ? css`
            color: var(--color-foodie-logo);

            &::before {
              content: "";
              position: absolute;
              /* border-bottom: 2px solid var(--color-foodie-logo); */
              top: 100%;
              width: 50px;
              height: 1px;
              margin: 0px;
              background: var(--color-foodie-border);
              border-radius: 100%;
            }
          `
        : css`
            color: var(--color-ash-text);
          `}
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    width: 100%;
  `;
  const Content = styled.div`
    padding: 35px 0;
  `;
  const [tabId, setTabId] = useState(1);
  const tabs = [
    {
      name: "Personal info",
      id: 1,
    },
    {
      name: "Device",
      id: 2,
    },
  ];
  function getId(id) {
    setTabId(id);
  }
  return (
    <StyledSettings>
      <Head>Settings</Head>
      <TabContainer>
        {tabs.map((tab) => (
          <div key={tab.id}>
            <TabButton
              active={tabId === tab.id}
              onClick={() => getId(tab.id)}
              key={tab.id}
            >
              {tab.name}
            </TabButton>
          </div>
        ))}
      </TabContainer>

      <Content>
        {tabId === 1 && <Info />}
        {tabId === 2 && <Appearance />}
      </Content>
    </StyledSettings>
  );
}

export default Settings;
