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
              <div>
                <NavBar/>
               <div>
                <Aside/>
                 {children}
               </div>
            </div>
        </body>
    </html>
  );
}
