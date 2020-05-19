import Lottie from "react-lottie";


export default ({ selectedCell, cellName }) => {
  if (!selectedCell) {
    return null;
  }

  // console.log(selectedCell);

  const { data } = selectedCell;
  const { animation_autoplay, loop_media, media_animation } = data;



  const options = {
    loop: loop_media,
    autoplay: animation_autoplay,
    path: media_animation.url,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  console.log(options);
  console.log(media_animation.name);
  console.log(cellName);
  return (
    // <div></div>
    <Lottie
      options={options}
      height={400}
      width={400}
      // eventListeners={[
      //   {
      //     eventName: "data_ready",
      //     callback: () => console.log("the data is ready"),
      //   },
      // ]}
    />
  );
};
