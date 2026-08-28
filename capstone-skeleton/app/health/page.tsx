interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  export default async function HealthCheckPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      cache: 'no-store',
    });
    const data: Post = await res.json();
  
    return (
      <main className="min-h-screen p-8 max-w-2xl mx-auto space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
          <h1 className="text-xl font-bold">System Status: Healthy</h1>
        </div>
        <div className="p-4 rounded-lg border bg-slate-900 border-slate-800 text-slate-100 shadow-sm space-y-2">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Data Fetch Test
          </p>
          <h2 className="font-semibold">{data.title}</h2>
          <p className="text-sm text-slate-300">{data.body}</p>
        </div>
      </main>
    );
  }
  
