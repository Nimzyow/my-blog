import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <nav className="bg-background border-b border-accent">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-accent text-xl font-bold hover:opacity-80"
            >
              My Blog
            </Link>
            <div className="space-x-6">
              <Link href="/" className="hover:text-accent">
                Blog
              </Link>
              <Link href="/about" className="hover:text-accent">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
