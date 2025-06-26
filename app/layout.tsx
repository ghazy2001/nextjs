import "@/app/ui/global.css";
import { inter, lousitana } from "@/app/ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${(inter.className, lousitana.className)} antialiased`}>
        {children}
      </body>
    </html>
  );
}
