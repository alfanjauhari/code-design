import 'tailwindcss/tailwind.css';
import Header from 'components/Header';
import { Fredoka_One, Patrick_Hand } from '@next/font/google';
import clsx from 'clsx';
import { AnalyticsWrapper } from 'components/Analytics';

const fontDisplay = Fredoka_One({
  variable: '--font-display',
  weight: '400',
  subsets: ['latin'],
});

const fontSans = Patrick_Hand({
  variable: '--font-sans',
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(fontDisplay.variable, fontSans.variable, 'bg-[#1F4290]')}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className="w-[1140px] mx-auto py-20 px-10 lg:px-0">
          <Header />
          <main className="py-20">{children}</main>
          <footer className="text-brand text-center text-xl">
            <p>Copyright &copy; {new Date().getFullYear()} </p>
            <a
              href="https://twitter.com/mhdnauvalazhar"
              target="_blank"
              className="border-b-2 border-brand"
              rel="noreferrer"
            >
              Nauval
            </a>
            <p>Powered by Vercel</p>
          </footer>
        </main>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
