import Breadcrumb from "@/components/breadcrumb";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Breadcrumb />
      <div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
        />
      </div>
      {children}
      <div></div>
    </div>
  );
}
