/**Puedes usar este archivo para agregar reglas CSS a todas las rutas de tu aplicación, como reglas de restablecimiento de CSS,
 *  estilos para todo el sitio para elementos HTML como enlaces y más. */
/**Agregue estilos globales a su aplicación navegando
 * hasta el archivo /app/layout.tsxe importándolo :global.css */
import "@/app/ui/global.css";

/**Por último, añade la fuente al <body>elemento en /app/layout.tsx: (fonts.ts)*/
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
