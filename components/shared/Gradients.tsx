export default function Gradients() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="fixed dark:opacity-70 -top-[10%] -right-[85%] sm:-top-[60%] sm:-right-[75%] md:-top-[90%] md:-right-[75%] lg:-top-[80%] lg:-right-[75%] xl:-top-[70%] xl:-right-[65%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12 pointer-events-none"
      >
        <img
          src="/gradients/docs-right.png"
          className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
          alt="docs right background"
          data-loaded="true"
        />
      </div>
      <div
        aria-hidden="true"
        className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0 pointer-events-none"
      >
        <img
          src="/gradients/docs-left.png"
          className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
          alt="docs left background"
          data-loaded="true"
        />
      </div>
    </div>
  );
}
