import Aside from "./componets/Aside";
import NavBar from "./componets/NavBar";
import { ThemeProvider } from "@/app/admin/Theme"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <NavBar />
          <div className="flex">
            <Aside />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
