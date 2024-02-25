import { useState } from "react";
import TapButton from "./TapButton";
import Section from "./Section";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";

export default function Examples() {
  let [selectedTopic, setSelectedTopic] = useState("");

  // () => handleSelect('string'), 익명의 함수가 먼저 실행되어야 그 다음 handleSelect가 실행 되므로 파라미터를 각각 넘길수 있음
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Exames">      
        <Tabs
          buttons={
            <>
              <TapButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleSelect("components")}
              >
                Components
              </TapButton>
              <TapButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </TapButton>
              <TapButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TapButton>
              <TapButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TapButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
    </Section>
  );
}
