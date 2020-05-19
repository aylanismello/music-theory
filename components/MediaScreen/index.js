import Lottie from "react-lottie";

const defaultOptions = (jsonUrl) => ({
  loop: true,
  autoplay: true,
  // animationData: jsonUrl,
  path: jsonUrl,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});
