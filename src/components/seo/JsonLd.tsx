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
    name: "Rock Legends",
    url: "https://rocklegends.com",
    sameAs: [
      "https://spotify.com/rocklegends",
      "https://instagram.com/rocklegends",
      "https://youtube.com/rocklegends",
      "https://tiktok.com/rocklegends",
    ],
    genre: ["Rock", "Hard Rock", "Alternative Rock"],
    foundingDate: "2010",
    location: {
      "@type": "Place",
      name: "Los Angeles, CA"
    },
    member: [
      {
        "@type": "Person",
        name: "Alex Smith",
        roleName: "Lead Vocals, Guitar"
      },
      {
        "@type": "Person",
        name: "Jamie Rodriguez",
        roleName: "Lead Guitar"
      },
      {
        "@type": "Person",
        name: "Taylor Lee",
        roleName: "Bass Guitar"
      },
      {
        "@type": "Person",
        name: "Jordan Brown",
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
    name: "Rock Legends",
    url: "https://rocklegends.com",
    description: "Official website of Rock Legends - Experience the sound of legends.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://rocklegends.com/search?q={search_term_string}",
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
      name: "Rock Legends",
      url: "https://rocklegends.com",
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
      name: "Rock Legends",
      url: "https://rocklegends.com",
    },
    numTracks: numTracks,
    datePublished: releaseDate,
  };

  return <JsonLd data={data} />;
}; 