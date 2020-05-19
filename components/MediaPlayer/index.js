import { useState, useEffect } from "react";
import styled from "styled-components";
import Lottie from "./Lottie";
import AudioPlayer from "./AudioPlayer";

const MediaPlayer = styled.div`
  width: 100%;
  height: 400px;
  border: ${({ theme }) => (theme.debug.borders ? "1px solid red" : "")};
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  background: white;
  position: fixed;
  left: 0;
  top: ${({ theme }) => theme.topNavHeight};
`;

export default ({ selectedCell, cellName, allCells }) => {
  if (!selectedCell) {
    return <MediaPlayer />;
  }

  const { data } = selectedCell;
  const { animation_autoplay, loop_media, media_animation, media_audio } = data;

  const audioUrl = media_audio.url;

  const [animationLoaded, setAnimationLoaded] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const canPlay = (audioLoaded || !audioUrl) && animationLoaded;

  // console.log(selectedCell);
  const audioUrls = allCells.map((cell) => ({
    id: cell.id,
    audioUrl: cell.data.media_audio.url,
  }));

  console.log(audioUrls);

  useEffect(() => {
    console.log(
      `Animation loaded? : ${animationLoaded} for ${media_animation.name}`
    );
    console.log(`Audio loaded? : ${audioLoaded} for ${audioUrl}`);
    console.log(`Both loaded? : ${canPlay} for ${media_animation.name}`);
  });

  return (
    <MediaPlayer>
      <Lottie
        setAnimationLoaded={setAnimationLoaded}
        loop={loop_media}
        autoplay={animation_autoplay}
        path={media_animation.url}
        canPlay={canPlay}
      />
      <AudioPlayer
        audioUrl={audioUrl}
        setAudioLoaded={setAudioLoaded}
        canPlay={canPlay}
        audioUrls={audioUrls}
      />
    </MediaPlayer>
  );
};
