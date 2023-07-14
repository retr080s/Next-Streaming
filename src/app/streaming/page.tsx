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
          src="https://cdn.pixabay.com/vimeo/580974597/spacecraft-82659.mp4?rendition=source&expiry=1689356937&hash=6913186ed4c2892e53af5b2e68512324af19eee6"
          poster="https://cdn.pixabay.com/vimeo/580974597/spacecraft-82659.mp4?rendition=source&expiry=1689356937&hash=6913186ed4c2892e53af5b2e68512324af19eee6"
          // thumbnails="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
          aspectRatio={16 / 9}
          crossorigin=""
        >
          <MediaOutlet>
            <MediaPoster alt="spacecraft stars universe cosmos" />
          </MediaOutlet>
          <MediaCommunitySkin />
        </MediaPlayer>
      </div>
    </div>
  );
}
