import Card from "./Card";

export default function CertificationCard({ certification }) {
  return (
    <Card>

      <h3 className="text-xl font-bold">
        {certification.title}
      </h3>

      <p className="text-cyan-400 mt-3">
        {certification.issuer}
      </p>

      <p className="text-slate-400 mt-2">
        {certification.year}
      </p>

    </Card>
  );
}