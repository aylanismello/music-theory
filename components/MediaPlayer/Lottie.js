import lottie from "lottie-web";
import styled from "styled-components";
import { useEffect } from "react";

const LottieContainer = styled.div`
  width: 400px;
  height: 400px;
  background: white;
  border: ${({ theme }) => (theme.debug.borders ? "1px solid green" : "")};
`;

export default ({ loop, autoplay, path, setAnimationLoaded, canPlay }) => {

  useEffect(() => {
    setAnimationLoaded(false);
    lottie.destroy();
    const lottieEl = document.getElementById("lottie");

    const animation = lottie.loadAnimation({
      container: lottieEl,
      renderer: "svg",
      loop,
      autoplay: false,
      path
    });

    animation.addEventListener("data_ready", () => {
      // console.log(`animationfor ${path} loaded`);
      setAnimationLoaded(true);
      animation.play();
    });

  }, [path]);

   useEffect(() => {
     if (canPlay) {
       console.log("play ANIMATION NOW!");
     }
   }, [canPlay]);


  return <LottieContainer id="lottie" />;
};
