"use client";

import { Button } from "@/components/ui/Button";

export const MusicSection = () => {
  const albums = [
    {
      title: "Hold Still",
      year: "2025",
      cover: "/images/perley-single-hold-still.jpg",
      link: "#"
    },
    // {
    //   title: "Midnight Echoes",
    //   year: "2021",
    //   cover: "/album2.jpg",
    //   link: "#"
    // },
    // {
    //   title: "Raging Fire",
    //   year: "2018",
    //   cover: "/album3.jpg",
    //   link: "#"
    // }
  ];

  return (
    <section id="music" className="py-24 bg-[#232323] text-white">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">LATEST RELEASES</h2> */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div key={album.title} className="bg-gray-900 rounded-lg overflow-hidden group hover:bg-gray-800 transition-colors duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={album.cover}
                  alt={album.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-end justify-center pb-6">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <a href={album.link} className="text-white px-4 py-2">Listen Now</a>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{album.title}</h3>
                <p className="text-gray-400">{album.year}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          {/* <Button size="lg" className="bg-red-600 hover:bg-red-700">
            <a href="#" className="text-white px-6 py-3 text-lg">VIEW ALL MUSIC</a>
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export const TourSection = () => {
  const tourDates = [
    {
      date: "JUN 15",
      city: "New York, NY",
      venue: "Madison Square Garden",
      link: "#"
    },
    {
      date: "JUN 22",
      city: "Los Angeles, CA",
      venue: "The Forum",
      link: "#"
    },
    {
      date: "JUL 05",
      city: "Chicago, IL",
      venue: "United Center",
      link: "#"
    },
    {
      date: "JUL 18",
      city: "Toronto, ON",
      venue: "Scotiabank Arena",
      link: "#"
    },
    {
      date: "AUG 03",
      city: "London, UK",
      venue: "O2 Arena",
      link: "#"
    }
  ];

  return (
    <section id="tour" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">TOUR DATES</h2>
        
        <div className="max-w-4xl mx-auto">
          {tourDates.map((tour, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center justify-between border-b border-gray-300 py-6 group"
            >
              <div className="flex flex-col md:flex-row items-center md:items-baseline">
                <span className="text-2xl font-bold text-red-600 mb-2 md:mb-0 md:mr-10">{tour.date}</span>
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900">{tour.city}</h3>
                  <p className="text-gray-600">{tour.venue}</p>
                </div>
              </div>
              <Button 
                className="border-2 border-red-600 bg-transparent text-red-600 hover:bg-red-600 hover:text-white transition-colors"
              >
                <a href={tour.link} className="px-6 py-2">GET TICKETS</a>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-4">Don&apos;t see your city?</p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            <a href="#" className="text-white px-6 py-3 text-lg">VIEW ALL DATES</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export const AboutSection = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* <h2 className="text-4xl md:text-5xl font-bold mb-8">THE BAND</h2> */}
            <p className="text-xl text-gray-300 mb-6">
            Perley is a rock band hailing from Toronto, with roots in Barrie, Nova Scotia, Alberta and California. Starting in 2017, the band grew out of jam sessions to explore singer-songwriter David Perley's original compositions. 
            </p>
            <p className="text-xl text-gray-300 mb-8">
            This group of music lovers/buffs includes Ryan MacDonald on guitar and synthesizer, Tim Miller on drums, Pat Farrell on bass, and Dave on vocals and guitar. 
            </p>
            <p className="text-xl text-gray-300 mb-8">
            Perley pairs soulful melodies and lyrics with sophisticated and hard rocking percussion, conjuring the atmospheres and tones of indie, shoegaze, punk and progressive rock. Perley has performed at locations in Toronto and Stella, Ontario.
            </p>

            {/* <Button className="bg-red-600 hover:bg-red-700">
              <a href="#" className="text-white px-6 py-3">READ FULL BIO</a>
            </Button> */}
          </div>
          <div className="relative h-[375px] w-[75%] rounded-lg overflow-hidden mx-auto">
            <img 
              src="/images/perley-band.jpg" 
              alt="Perley Band" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MerchSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">OFFICIAL MERCH</h2>
        <p className="text-xl text-gray-700 text-center mb-16 max-w-2xl mx-auto">
          Show your support with our latest merchandise. From t-shirts to limited edition vinyl.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="group">
              <div className="aspect-square bg-gray-200 mb-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-700 font-medium">Merch Item {index + 1}</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    SHOP NOW
                  </Button>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Merch Item {index + 1}</h3>
              <p className="text-red-600 font-medium">$29.99</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            <a href="#" className="text-white px-6 py-3 text-lg">VISIT MERCH STORE</a>
          </Button>
        </div>
      </div>
    </section>
  );
}; 