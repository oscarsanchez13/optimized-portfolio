// Local design preview only — returns 404 in production builds.
import { notFound } from "next/navigation";
import Certifications from "../../components/Certifications";
import type { Certification } from "@/data/profile";

const sample: Certification[] = [
  { title: "Master of Business Administration", issuer: "Sample University", year: "20XX", category: "leadership", kind: "degree", earned: true },
  { title: "Project Management Professional (PMP)", issuer: "PMI", year: "20XX", category: "leadership", earned: true },
  { title: "Lean Six Sigma Green Belt", issuer: "Sample Issuer", year: "20XX", category: "operations", earned: true },
  { title: "ServSafe Manager", issuer: "National Restaurant Association", year: "20XX", category: "operations", earned: true },
  { title: "Google Ads Search Certification", issuer: "Google", year: "20XX", category: "growth", earned: true },
  { title: "HubSpot Inbound Marketing", issuer: "HubSpot Academy", year: "20XX", category: "growth", earned: true },
  { title: "Full-Stack Software Engineering", issuer: "Thinkful", year: "2021", category: "technology", earned: true },
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "20XX", category: "technology", earned: true },
];

export const metadata = { robots: { index: false } };

export default function Page() {
  if (process.env.NODE_ENV === "production") notFound();
  return <Certifications items={sample} />;
}
