import Aside from "./componets/Aside";
import NavBar from "./componets/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">

        <NavBar />
        <div className="flex">
          <Aside />
          {children}
        </div>

      </body>
    </html>
  );
}
