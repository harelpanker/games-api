import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Games API',
  description: '',
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html dir='ltr' lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
