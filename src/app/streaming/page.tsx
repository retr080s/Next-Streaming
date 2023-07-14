"use client";

import NavbarTop from "../components/NavbarTop";

import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
} from "@vidstack/react";

export default function page() {
  return (
    <div>
      <NavbarTop />
      <div className="flex justify-center mt-14">
        <MediaPlayer
          style={{ width: 1400, height: 788 }}
          title="🔴LIVE"
          src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
          poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=980"
          thumbnails="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
          aspectRatio={16 / 9}
          crossorigin=""
        >
          <MediaOutlet>
            <MediaPoster alt="Girl walks into sprite gnomes around her friend on a campfire in danger!" />
          </MediaOutlet>
          <MediaCommunitySkin />
        </MediaPlayer>
      </div>
    </div>
  );
}
