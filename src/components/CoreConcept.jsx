
/**
 * props 는 js 매개변수와 달리 하나만 설정 가능.
 * props는 {key : value} 형태의 객체로 전달됨.
 */
/*function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}*/

// 매개변수에 {} (중괄호)를 써서 구조 분해를 할 수 있음
// props의 키값들을 쪼개서 어떤 것이 들어가는지 보여주고 사용하는 거라고 보면 됨.
export default function CoreConcept({title, description, image}){
    return(
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
  