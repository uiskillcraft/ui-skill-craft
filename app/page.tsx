import Hero from "@/components/shared/Hero";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";

const steps = [
  {
    title: "Pick a challenge",
    description:
      "Browse our curated collection of web designs. Select a challenge that matches your skill level and interests.",
  },
  {
    title: "Code it",
    description:
      "Dive into the challenge by downloading all the necessary starter files. Now it's building time!",
  },
  {
    title: "Collaborate with GitHub",
    description:
      "Take collaboration to the next level by integrating GitHub. Create pull requests, ask for code review, collaborate with others.",
  },
  {
    title: "Share Your Solution",
    description:
      "Showcase your completed solution for the community to see. Gain valuable insights by receiving feedback from fellow developers.",
  },
];

export default function Home() {
  return (
    <main style={{ minHeight: "300vh" }}>
      <Hero />
      <div className="container gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto px-4 md:px-0">
        {steps.map((step) => (
          <Card
            isBlurred
            className="bg-background/60 dark:bg-default-100/50"
            shadow="sm"
            key={step.title}
          >
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                className="rounded-sm"
                width={40}
              />
              <p className="text-md text-white font-bold font-hublot">
                {step.title}
              </p>
            </CardHeader>
            <CardBody className="pt-0">
              <p className="text-default-500 font-hublot">{step.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </main>
  );
}
