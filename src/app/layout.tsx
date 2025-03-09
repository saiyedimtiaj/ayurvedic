import { Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import PixelTrackerClient from "../components/PixelTrackerClient"; // Import the client component

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?                         
              n.callMethod.apply(n,arguments):n.queue.push   
              (arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!
              0;n.version='2.0';n.queue=[];t=b.createElement(e);
              t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1170484508077907');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height={1}
            width={1}
            alt="shdfuih"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1170484508077907&ev=
            PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`${poppins.className} antialiased`}>
        <PixelTrackerClient /> {/* Now using the client component */}
        {children}
      </body>
    </html>
  );
}
