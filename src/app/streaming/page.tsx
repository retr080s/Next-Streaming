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
        <div className="">
          <div className="m-0  w-64  backdrop-blur-sm bg-sky-800/30   text-sky-600 gap-4 z-39   border-sky-600">
            <ul role="list" className=" p-6 divide-y divide-slate-200 ">
              <li className="flex py-4 first:pt-0 last:pb-0">
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-purple-700">
                    Retro080s
                  </p>
                  <p className="text-sm text-slate-400 truncate">🔥🔥🔥</p>
                </div>
              </li>
            </ul>
            <ul role="list" className=" p-6 divide-y divide-slate-200 ">
              <li className="flex py-4 first:pt-0 last:pb-0">
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-pink-400">Retro080s</p>
                  <p className="text-sm text-slate-400 truncate">💯</p>
                </div>
              </li>
            </ul>
            <ul role="list" className=" p-6 divide-y divide-slate-200 ">
              <li className="flex py-4 first:pt-0 last:pb-0">
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-yellow-400">
                    Retro080s
                  </p>
                  <p className="text-sm text-slate-400 truncate">LUL</p>
                </div>
              </li>
            </ul>
            <ul role="list" className=" p-6 divide-y divide-slate-200 ">
              <li className="flex py-4 first:pt-0 last:pb-0">
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-lime-400">Retro080s</p>
                  <p className="text-sm text-slate-400 truncate">
                    Aint no way boy
                  </p>
                </div>
              </li>
            </ul>
            <ul role="list" className=" p-6 divide-y divide-slate-200 ">
              <li className="flex py-4 first:pt-0 last:pb-0">
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-green-400">
                    Retro080s
                  </p>
                  <p className="text-sm text-slate-400 truncate">💀💀💀</p>
                </div>
              </li>
            </ul>
            <ul role="list" className=" p-6 divide-y divide-slate-200 ">
              <li className="flex py-4 first:pt-0 last:pb-0">
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-red-500">Retro080s</p>
                  <p className="text-sm text-slate-400 truncate">💀</p>
                </div>
              </li>
            </ul>
            <ul role="list" className=" p-6 divide-y divide-slate-200 ">
              <li className="flex py-4 first:pt-0 last:pb-0">
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-sky-400">Retro080s</p>
                  <p className="text-sm text-slate-400 truncate">
                    💀💀💀💀💀💀💀💀
                  </p>
                </div>
              </li>
            </ul>
            <ul role="list" className=" p-6 divide-y divide-slate-200 ">
              <li className="flex py-4 first:pt-0 last:pb-0">
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-slate-200">
                    Retro080s
                  </p>
                  <p className="text-sm text-slate-400 truncate">💀</p>
                </div>
              </li>
            </ul>
          </div>
          <textarea className="w-64 h-20"></textarea>
        </div>
      </div>
    </div>
  );
}
