import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center h-80 ">
      <h1 className="text-5xl">Welcome Home</h1>
      <Link className="ml-4" href="/blog">Blog</Link>
      <Link className="ml-4" href="/products">Products</Link>
      <Link className="ml-4" href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link className="ml-4" href="/articles/breaking-news/123?lang=fr">Read in French</Link>

    </div>
  );
}
