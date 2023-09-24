import GithubButton from "../client/GithubButton";

export default async function Hero() {
  return (
    <div className="min-h-[60vh] sm:min-h-[80vh] flex items-center flex-col justify-start sm:justify-center px-4 gap-6 mt-24 sm:mt-0">
      <div className="flex flex-col items-center justify-center relative">
        <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-left sm:text-center font-mona font-black opacity-70">
          Learn, create, build.
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-900 text-left sm:text-center z-10 font-mona font-black opacity-70">
          All in one place.
        </h1>
      </div>
      <p className="max-w-2xl text-left sm:text-center font-hublot font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, laboriosam.
        Accusamus odit mollitia doloribus possimus nisi amet cupiditate aut
        aliquid earum! Officiis debitis tempora culpa autem velit sed quia
        inventore!
      </p>
      <GithubButton />
    </div>
  );
}
