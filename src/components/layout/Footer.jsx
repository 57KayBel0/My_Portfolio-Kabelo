import profile from "../../data/profile";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">

      <div className="container mx-auto px-6 text-center">

        <h2 className="text-xl font-bold text-cyan-400">

          {profile.name}

        </h2>

        <p className="mt-3 text-slate-400">

          {profile.tagline}

        </p>

        <p className="mt-6 text-slate-500">

          © {new Date().getFullYear()} {profile.name}. All Rights Reserved.

        </p>

      </div>

    </footer>
  );
}