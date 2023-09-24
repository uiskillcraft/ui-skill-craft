import { Button } from "@nextui-org/button";
import { Github } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center flex-col justify-start sm:justify-center px-4 gap-6 mt-24 sm:mt-0">
      <div className="flex flex-col items-center justify-center relative">
        <h1 className="text-5xl md:text-7xl lg:text-7xl 2xl:text-8xl text-center font-mona font-bold">
          Learn, collaborate, build.
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-7xl 2xl:text-8xl font-900 text-center z-10 font-mona font-bold">
          All in one place.
        </h1>
      </div>
      <p className="max-w-lg text-center font-hublot font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, laboriosam.
        Accusamus odit mollitia doloribus possimus nisi amet cupiditate aut
        aliquid earum! Officiis debitis tempora culpa autem velit sed quia
        inventore!
      </p>
      <Button
        size="lg"
        variant="bordered"
        color="secondary"
        disableRipple
        startContent={<Github />}
      >
        Login with Github
      </Button>
    </div>
  );
}
