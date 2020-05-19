import { useEffect } from "react";
import { Howl } from "howler";

export default ({ setAudioLoaded, audioUrl, canPlay, allAudioUrls }) => {
  
  
  useEffect(() => {

    
    setAudioLoaded(false);
    const sound = new Howl({
      src: [audioUrl],
      onload: () => {
        console.log("loaded audio");

        setAudioLoaded(true);
        sound.play();
      },
    });


    
  }, [audioUrl]);

  useEffect(() => {
    if (canPlay) {
      console.log("play AUDIO NOW!");
    }
  }, [canPlay]);

  return <></>;
};
