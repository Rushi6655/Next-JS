import Link from "next/link";
import about from "./about/page";

export default function Home() {
  return (
    <>
    <h1>hello world</h1>
    <Link href="/about">about</Link>
    </>
  )
}
