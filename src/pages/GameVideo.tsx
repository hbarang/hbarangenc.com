import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import games from "./api/gameInfo";

export default function GameVideo({ index }: { index: number }) {
  return (
    <>
      <div className="video">
        {<ReactPlayer url={games[index]!.videoLink} />}
      </div>
    </>
  );
}
