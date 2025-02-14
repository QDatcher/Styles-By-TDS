import ClientLayout from '@/components/ClientLayout';
import { metadata } from './metadata'
import './globals.css'
export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* 
          Developer: Quentin Datcher
          Website: qdatcher.com
          Built: ${new Date().getFullYear()}
        */}
        <meta name="developer" content="Quentin Datcher | qdatcher.com" />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
