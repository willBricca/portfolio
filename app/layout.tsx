import type { Metadata } from "next";
import "./globals.css";
import "./section-animate.css";

export const metadata: Metadata = {
  title: "Will Bricca - Mechanical Engineer",
  description: "Projects, Experience, and Contact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-zinc-900 bg-white">
        {/* Full-width scroll container so scrollbar sits at the browser edge */}
        <div className="h-screen w-screen overflow-y-auto scroll-smooth">
          <div className="mx-auto max-w-6xl px-6">{children}</div>
        </div>
      </body>
    </html>
  );
}

