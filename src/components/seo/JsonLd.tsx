import React from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const MusicGroupJsonLd = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Perley",
    url: "https://thisisperley.com",
    sameAs: [
      "https://spotify.com/perley",
      "https://instagram.com/thisisperley",
      "https://youtube.com/@thisisperley",
    ],
    genre: ["Indie", "Shoegaze", "Punk", "Prog Rock"],
    foundingDate: "2017",
    location: {
      "@type": "Place",
      name: "Toronto, ON"
    },
    member: [
      {
        "@type": "Person",
        name: "David Perley",
        roleName: "Lead Vocals, Guitar"
      },
      {
        "@type": "Person",
        name: "Ryan MacDonald",
        roleName: "Synth, Guitar"
      },
      {
        "@type": "Person",
        name: "Patrick Farrell",
        roleName: "Bass Guitar"
      },
      {
        "@type": "Person",
        name: "Tim Miller",
        roleName: "Drums"
      }
    ]
  };

  return <JsonLd data={data} />;
};

export const WebsiteJsonLd = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Perley",
    url: "https://thisisperley.com",
    description: "Toronto based Perley fuses indie, shoegaze, punk & prog rock with soulful melodies and hard-hitting percussion.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://thisisperley.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={data} />;
};

export const WebPageJsonLd = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      name: "Perley",
      url: "https://thisisperley.com",
    },
  };

  return <JsonLd data={data} />;
};

export const MusicAlbumJsonLd = ({
  name,
  image,
  releaseDate,
  numTracks,
}: {
  name: string;
  image: string;
  releaseDate: string;
  numTracks: number;
}) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: name,
    image: image,
    byArtist: {
      "@type": "MusicGroup",
      name: "Perley",
      url: "https://thisisperley.com",
    },
    numTracks: numTracks,
    datePublished: releaseDate,
  };

  return <JsonLd data={data} />;
}; 