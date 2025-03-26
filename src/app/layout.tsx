import "@/styles/globals.css"; // Asegúrate de que la ruta es correcta


export const metadata = {
    title: "Mi Aplicación",
    description: "Innovación y calidad en plásticos, metales y acrílicos.",
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="es">
        <body className="antialiased">
          {children}
        </body>
      </html>
    );
  }