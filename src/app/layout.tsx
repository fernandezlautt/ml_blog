import Navbar from "@/components/navbar";
import "./globals.css";
export const metadata = {
  title: "Machine learning blog",
  description: "ml blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen ">
          <Navbar />
          <div className="blogLayout w-full h-full xl:ml-80 xl:mr-16 mx-5">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
