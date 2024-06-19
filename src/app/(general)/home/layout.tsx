import { Footer } from "@/components/footer/Footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <title>The Alchemist - Home</title>
      <section>
        <div>{children}</div>
        <Footer />
      </section>
    </div>
  );
}
