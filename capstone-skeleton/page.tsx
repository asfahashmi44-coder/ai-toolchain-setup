export default function HomePage() {
    return (
      <main className="min-h-screen p-8 max-w-2xl mx-auto space-y-4 text-slate-100">
        <h1 className="text-2xl font-bold">AI Toolchain Setup</h1>
        <p className="text-slate-400">Application successfully deployed on Vercel!</p>
        <div className="pt-4 flex gap-4">
          <a href="/health" className="underline text-emerald-400">View Health Route (/health)</a>
          <a href="/dashboard" className="underline text-blue-400">View Dashboard (/dashboard)</a>
        </div>
      </main>
    );
  }
  