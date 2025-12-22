import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Return to Perley's homepage to explore our music.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <Link href="/" className="mb-8">
        <Image
          src="/images/perley-logo-hero.png"
          alt="Perley"
          width={200}
          height={100}
          className="h-16 w-auto opacity-70"
        />
      </Link>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-400 mb-8 text-center max-w-md">
        This page doesn&apos;t exist, but our music does.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
