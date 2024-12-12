import { Footer } from "../components";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col min-h-screen justify-start [&>div]:grow">
      {children}
      <Footer />
    </section>
  );
}