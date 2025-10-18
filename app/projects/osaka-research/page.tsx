import SiteNav from "@/components/site-nav";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OsakaResearchProject() {
  return (
    <>
      <SiteNav />
      <main className="pb-24">
        <section className="pt-24 pb-8">
          <h1 className="text-4xl font-semibold tracking-tight mb-6">
            Osaka Research: Soft Mechanisms & Prototyping
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>Research</Badge>
            <Badge>Soft Mechanisms</Badge>
            <Badge>Prototyping</Badge>
          </div>
        </section>
        <section className="mt-8 mb-12">
          <h2 className="text-xl font-semibold mb-3">Project Description</h2>
          <p className="text-lg text-zinc-600">
            Applied inverse kinematics to experiment with running augmentation that increases the ratio between energy consumed vs. work done on the environment. 
            <br /><br />
            <span className="block mt-2 text-base text-zinc-500">Notes: instrumented drop tests, material hysteresis analysis, and prototyping cycles with rapid iteration.</span>
          </p>
        </section>
        {/* Documentation */}
        <section className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Documentation</h2>
          <div className="space-y-3">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Project Report</h3>
              </CardHeader>
              <CardContent>
                <a 
                  href="/pdfs/osaka-research-report.pdf" 
                  className="inline-flex items-center px-4 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800"
                >
                  View Report
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}