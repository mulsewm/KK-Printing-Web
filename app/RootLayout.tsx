'use client'
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '/public/assets/css/animate.min.css';
import '/public/assets/css/aos.css';
import '/public/assets/css/bootstrap.min.css';
import '/public/assets/css/default.css';
import '/public/assets/css/fontawesome-all.min.css';
import '/public/assets/css/icon-font.css';
import '/public/assets/css/magnific-popup.css';
import '/public/assets/css/select2.min.css';
import '/public/assets/css/style.css';
import '/public/assets/css/swiper-bundle.min.css';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
  session, // Add session prop here
}: {
  children: React.ReactNode,
  session: Session | null, // Define the type for session
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {children}
          <Analytics />
        </SessionProvider>
      </body>
    </html>
  );
}
