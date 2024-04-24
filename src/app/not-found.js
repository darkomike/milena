import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "A place to get all your items",
};

export default function PageNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="not-found">404 Not Found</h1>
      <p className="text-center text-2xl mb-8 mt-10">
        Your visited page not found. You may go home page.
      </p>
      <div className="not-found-btn">
        <Link href="/">Back to homepage</Link>{" "}
      </div>
    </main>
  );
}
