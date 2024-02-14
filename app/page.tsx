import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Homepage</h1>
      <Link href="/websites">Websites</Link>
    </main>
  );
}
