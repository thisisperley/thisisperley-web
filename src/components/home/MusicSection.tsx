import { albums } from "@/data/musicData";
import { TrackCard } from "./TrackCard";

export const MusicSection = () => {
  return (
    <section id="music" className="py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {albums.map((album) => (
            <TrackCard key={album.slug} album={album} />
          ))}
        </div>
      </div>
    </section>
  );
};
