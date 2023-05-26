import Buttons from "../components/Button";

const ButtonPage = () => {
    const handleClick = () => {
        console.log('Clicked!');
    }

  return (
    <div>
      <div>
        <Buttons warning onClick={handleClick}>Click me!</Buttons>
      </div>
        <div>
        <Buttons secondary rounded>Buy now!</Buttons>
      </div>
        <div>
        <Buttons success outline>See deal!</Buttons>
      </div>
        <div>
        <Buttons danger>Hide adds!</Buttons>
      </div>
        <div>
        <Buttons primary>Something!</Buttons>
      </div>
    </div>
  );
}

export default ButtonPage;
