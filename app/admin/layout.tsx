import NavBar from "./componets/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
            <div>

       <NavBar/>

        {children}
            </div>
        </body>
    </html>
  );
}
