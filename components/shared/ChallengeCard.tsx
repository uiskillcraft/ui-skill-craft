import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";

export default function ChallengeCard({ challenge }: { challenge: Challenge }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{challenge.title}</CardTitle>
        <CardDescription>{challenge.short_description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Badge variant={"outline"}>{challenge.rate}</Badge>
      </CardFooter>
    </Card>
  );
}
