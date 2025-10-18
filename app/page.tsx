import SiteNav from "@/components/site-nav";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "Osaka Research",
    summary:
      "Experimental research collaboration based in Osaka — soft mechanisms and prototyping.",
    image: "/images/osaka-image.jpg",
    tags: ["Design", "FEA", "Prototyping"],
    href: "/projects/osaka-research",
  },
  {
    name: "Junior Capstone Autonomous Baseball Retriever",
    summary:
      "Capstone project: vision-based centroiding and surface-aware PID to retrieve baseballs autonomously.",
    image: "/images/rover.png",
    tags: ["Controls", "Computer Vision", "MATLAB"],
    href: "/projects/autonomous-rover",
  },
  {
    name: "FPV Drone",
    summary:
      "First-person-view drone project focused on fast flight and FPV systems integration.",
    image: "/images/drone.jpg",
    tags: ["Aerial Robotics", "Controls", "Design"],
    href: "/projects/fire-detecting-drone",
  },
];

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        {/* ========== HERO ========== */}
        <section className="min-h-screen flex items-center pb-24 pt-24 section-animate">
          <div className="w-full">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              Creating robust systems from first principles.
            </h1>
            <p className="mt-6 text-lg text-zinc-600 max-w-2xl">
              Emphasis on <span className="font-medium">Design</span>,{" "}
              <span className="font-medium">SolidWorks</span>,{" "}
              <span className="font-medium">MATLAB</span>, and{" "}
              <span className="font-medium">FEA</span>. Controls, robotics,
              vehicle dynamics — turning models into motion.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>Design</Badge>
              <Badge>SolidWorks</Badge>
              <Badge>MATLAB</Badge>
              <Badge>FEA</Badge>
              <Badge>Controls</Badge>
              <Badge>Prototyping</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <a href="/cv.pdf" className="underline underline-offset-4">
                Download CV
              </a>
            </div>
          </div>
        </section>

        {/* ========== ABOUT (text left, image right) ========== */}
        <section id="about" className="min-h-screen flex items-center section-animate">
          <div className="grid md:grid-cols-2 gap-10 w-full">
            {/* Text */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About</h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                I’m Will Bricca, a UCSB mechanical engineer specializing in rapid prototyping, 
                controls, and autonomous systems. At Dragon Q Energy, I move fast from concept 
                to deployment. I have experience designing, building, and testing FPV drones and 
                autonomous rovers that operate reliably in the field. My background includes research at Osaka 
                 University in soft system design, and I’m currently developing a 
                 fire-mapping drone for my senior capstone—an autonomous VTOL platform built for 
                 real-world wildfire surveillance.
              </p>
              <p className="mt-4 text-zinc-600">
                Tooling: SolidWorks for design, MATLAB for analysis, and core design principles 
                for rapid prototyping. Comfortable with hands-on fabrication—building with power 
                tools, wiring, and testing hardware with mills, soldering irons, and multimeters.
              </p>
              <div className="mt-6">
                <a
                  className="underline underline-offset-4"
                  href="mailto:briccawill@gmail.com"
                >
                  briccawill@gmail.com
                </a>
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <Image
                src="/images/will-portrait.jpg"
                alt="Will Bricca — mechanical engineer"
                width={1600}
                height={2000}
                priority
                className="rounded-2xl object-cover w-full h-full max-h-[70vh]"
              />
            </div>
          </div>
        </section>

        {/* ========== PROJECTS ========== */}
        <section id="projects" className="min-h-screen flex items-center section-animate">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Projects</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <Card key={p.name} className="overflow-hidden hover:shadow-sm transition-shadow">
                  <CardHeader className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      {p.href ? (
                        <a href={p.href} className="underline hover:no-underline">
                          {p.name}
                        </a>
                      ) : (
                        p.name
                      )}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {(p.tags ?? []).map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-zinc-600">{p.summary}</p>
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={1200}
                        height={800}
                        className="rounded-xl aspect-[3/2] object-cover"
                      />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CONTACT ========== */}
        <section id="contact" className="py-20 section-animate">
          <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 text-zinc-600">
            Email:{" "}
            <a className="underline" href="mailto:briccawill@gmail.com">
              briccawill@gmail.com
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
