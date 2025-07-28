export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  link?: {
    label: string;
    url: string;
  };
  isActive: boolean;
}

export const upcomingEvent: Event = {
  title: "Perley Live on Amherst Island Radio",
  date: "Saturday, August 2nd",
  time: "3 PM - 5 PM",
  location: "AI Radio, Bath, Ontario",
  description: "Tune in for a high-energy set featuring our best-loved songs, plus the debut of our new single, Hold Still. The show broadcasts from AI Radio's global headquarters in Bath, Ontario, with behind-the-scenes chats between sets.",
  link: {
    label: "Listen Live on cjai.ca",
    url: "https://www.cjai.ca/"
  },
  isActive: true
};