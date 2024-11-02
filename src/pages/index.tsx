import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "@/components/Layout";

interface Post {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    description: string;
  };
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">WASSUUUUUUUUUPPP</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border rounded-lg p-6 hover:shadow-lg transition"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2">
                  {post.frontMatter.title}
                </h2>
                <p className="text-gray-600 mb-2">{post.frontMatter.date}</p>
                <p>{post.frontMatter.description}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("content/posts"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const markdownWithMeta = fs.readFileSync(
        path.join("content/posts", filename),
        "utf-8"
      );
      const { data: frontMatter } = matter(markdownWithMeta);
      return {
        slug,
        frontMatter,
      };
    })
    .sort((a, b) => {
      // Sort by date in descending order (newest first)
      return (
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime()
      );
    });

  return {
    props: {
      posts,
    },
  };
}
