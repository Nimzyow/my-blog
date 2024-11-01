import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose lg:prose-xl">
          {/* Profile section */}
          <div className="mb-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 relative rounded-full overflow-hidden">
              {/* Add your image here */}
              <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                {/* Placeholder - replace with your image */}
                <span className="text-gray-500">Photo</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Hello! 👋</h2>
              <p className="text-lg">
                I'm [Your Name], a [Your Role] based in [Your Location].
              </p>
            </div>
          </div>

          {/* Background section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Background</h2>
            <p>Share your background, experience, and what drives you...</p>
          </section>

          {/* Skills section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "React", "Next.js", "Node.js"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </section>

          {/* Contact section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p>
              Feel free to reach out to me on{" "}
              <a
                href="https://twitter.com/yourusername"
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/yourusername"
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
