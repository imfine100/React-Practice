import reactImg from '../../assets/react-core-concepts.png';
import "../Header/Header.css";

// 컴포넌트별로 css를 구분하면 어떤 컴포넌트에 어떤 css가 적용 됐는지 파악하기 쉬워진다.
// 그러나 나눈다고 해서 이 컴포넌트에만 특별히 적용되는건 아니므로 유의한다.
// 예) App.jsx에 새로운 <header>Hello World</header> 를 추가하면 동일한 css 적용된 타이틀 생성됨

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are going to build!
        </p>
      </header>
    );
  }