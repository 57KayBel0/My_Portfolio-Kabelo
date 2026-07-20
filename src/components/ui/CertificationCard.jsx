import Card from "./Card";
import Badge from "./Badge";

export default function CertificationCard({ certification }) {
  return (
    <Card>

      <div className="flex justify-between items-start gap-6">

        <div className="flex-1">

          <h3 className="text-2xl font-bold mb-3">
            {certification.title}
          </h3>

          <p className="text-cyan-400 text-lg mb-5">
            {certification.issuer}
          </p>

          <p className="text-slate-300 leading-7">
            {certification.description}
          </p>

        </div>

        <Badge>
          {certification.year}
        </Badge>

      </div>

    </Card>
  );
}