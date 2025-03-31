"use client";

import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import { BackgroundLines } from "@/components/backgroud-lines";

export default function page() {
  const tracks = [
    {
      url: "/music/diah.mp3",
      title: "Darmawan - Diah Hendrayani",
      tags: ["house"],
    },
    {
      url: "/music/kekasihku.mp3",
      title: "Darmawan - Kekasihku",
      tags: ["house"],
    },
  ];
  return (
    <main className="min-h-screen bg-white text-white flex items-end justify-center">
      <section className="container max-w-3xl rounded-se-3xl p-4 z-10 absolute transform scale-50">
        <Player
          trackList={tracks}
          includeTags={false}
          includeSearch={false}
          showPlaylist={false}
          sortTracks={false}
          autoPlay={false}
          loop={false}
        />
      </section>
    </main>
  );
}
