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
          autoplay
          style={{ width: 1400, height: 788 }}
          title="🔴LIVE"
          src="https://vod-progressive.akamaized.net/exp=1689383360~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2435%2F19%2F487176852%2F2183603136.mp4~hmac=53d8fb981e7fd49b24516a64cc05cf7723475b7ec1d3f5ae28765132e657594f/vimeo-prod-skyfire-std-us/01/2435/19/487176852/2183603136.mp4?filename=file.mp4"
          poster="https://vod-progressive.akamaized.net/exp=1689383360~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2435%2F19%2F487176852%2F2183603136.mp4~hmac=53d8fb981e7fd49b24516a64cc05cf7723475b7ec1d3f5ae28765132e657594f/vimeo-prod-skyfire-std-us/01/2435/19/487176852/2183603136.mp4?filename=file.mp4"
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
