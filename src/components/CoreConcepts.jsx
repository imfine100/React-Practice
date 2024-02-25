import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data.js"; // export 하는 이름이 CORE_CONCEPTS 이므로 중괄호로 감싸서 가져옴

export default function CoreConcepts (){
    return(
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key = {conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </section>
    );
}