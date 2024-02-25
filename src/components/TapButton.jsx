// props로 아무것도 안넘겨도 항상 내장 children 값을 가지고 있음.
// children은 개발자가 코딩해서 넘긴 값이 아님. 컴포넌트 사이의 텍스트 등을 넘기는 것임!
// props -> {chileren} 구조분해 해서 쓸 수도 있음.

export default function TapButton({ children, isSelected, ...props }) {
  console.log("TAP BUTTON START");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
