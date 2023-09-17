import { headers } from "next/headers";
import ChallengeCard from "./ChallengeCard";

export default async function Challenges() {
  const headersList = headers();
  const host = headersList.get("host");

  const response = await fetch(`http://${host}/api/challenge`, {
    cache: "no-cache",
  });
  const challenges = await response.json();
  return (
    <div className="grid grid-cols-2 gap-4">
      {challenges.map((challenge: Challenge) => (
        <ChallengeCard challenge={challenge} key={challenge.id} />
      ))}
    </div>
  );
}
