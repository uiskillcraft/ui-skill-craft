import Challenges from "@/components/shared/Challenges";
import Menu from "@/components/shared/Menu";

export default function Home() {
  return (
    <main>
      <Menu />
      <div className="container mt-4">
        <Challenges />
      </div>
    </main>
  );
}
