export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-cyan-400">
          404
        </h1>

        <h2 className="text-3xl mt-4">
          Page Not Found
        </h2>

        <p className="text-slate-400 mt-4">
          The page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="mt-8 inline-block px-8 py-4 bg-cyan-500 rounded-xl"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}