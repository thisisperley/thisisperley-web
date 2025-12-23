export interface AlbumLinks {
  spotify?: string;
  bandcamp?: string;
  tidal?: string;
  youtubemusic?: string;
  amazon?: string;
  applemusic?: string;
  iheartradio?: string;
}

export interface Album {
  title: string;
  slug: string;
  year: string;
  cover: string;
  ogImage?: string;
  released: boolean;
  links: AlbumLinks;
}

export const albums: Album[] = [
  {
    title: "Hold Still",
    slug: "hold-still",
    year: "2025",
    cover: "/images/perley-single-hold-still.webp",
    ogImage: "/og-hold-still.jpg",
    released: true,
    links: {
      spotify: "https://open.spotify.com/album/4fN0rRP9z91rcdRxKpDod8?si=DHrrYowGT2ma_vvX-7yLgA",
      bandcamp: "https://perley.bandcamp.com/track/hold-still/",
      tidal: "https://tidal.com/browse/album/451098606",
      youtubemusic: "https://music.youtube.com/watch?v=O0K_QLSY23M",
      amazon: "https://music.amazon.com/albums/B0FKG81LGX",
      applemusic: "https://music.apple.com/us/album/hold-still-single/1830081650"
    }
  },
  {
    title: "Holidark",
    slug: "holidark",
    year: "2025",
    cover: "/images/perley-single-holidark.webp",
    ogImage: "/og-holidark.jpg",
    released: true,
    links: {
      spotify: "https://open.spotify.com/album/5xt8fvRoqJqJlXiC6P0ewU",
      bandcamp: "https://perley.bandcamp.com/track/holidark",
      tidal: "https://tidal.com/album/483462734/track/483462735",
      youtubemusic: "https://music.youtube.com/watch?v=bpxhpxhiFGw",
      amazon: "https://music.amazon.com/albums/B0G9B5FPCF",
      applemusic: "https://music.apple.com/us/album/holidark-single/1862983052"
    }
  },
  {
    title: "Unknown #2",
    slug: "unknown-2",
    year: "2025",
    cover: "/images/perley-single-placeholder-1.webp",
    released: false,
    links: {
      bandcamp: "https://perley.bandcamp.com/"
    }
  },
]; 