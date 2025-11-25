import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center">
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <h1>Home page</h1>
    </div>
  );
}
