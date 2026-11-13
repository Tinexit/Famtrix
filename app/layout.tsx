import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = 'https://www.famtrix.in';
const siteTitle = 'FAMTRIX | Digital Marketing Software & Web Development in Mysuru';
const siteDescription =
  'FAMTRIX offers AI automation, web development, and digital marketing software for startups and local businesses in Mysuru. Get a free consultation today.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | FAMTRIX',
  },
  description: siteDescription,
  keywords: [
    'Digital marketing software Mysuru',
    'Web development company Mysuru',
    'AI automation services',
    'Graphic design Mysuru',
    'Cybersecurity solutions India',
    'Tech solutions for startups',
    'Full-stack development Mysuru',
    'Mysore software company',
    'FAMTRIX',
  ],
  authors: [{ name: 'FAMTRIX', url: siteUrl }],
  creator: 'FAMTRIX',
  publisher: 'FAMTRIX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'FAMTRIX',
    images: [
      {
        url: `${siteUrl}/assets/hero-banner.png`,
        width: 1536,
        height: 1024,
        alt: 'FAMTRIX | Digital Marketing Software & Web Development in Mysuru',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/assets/hero-banner.png`],
    creator: '@famtrix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/assets/famtrix-logo.png',
    apple: '/assets/famtrix-logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'FAMTRIX',
      url: siteUrl,
      logo: `${siteUrl}/assets/famtrix-logo.png`,
      email: 'contact@famtrix.in',
      telephone: '+91-8317477430',
      description: 'Technology solutions, web development, and digital marketing services.',
      areaServed: 'Mysuru, Karnataka, India',
      knowsAbout: [
        'Digital Marketing',
        'Web Development',
        'AI Automation',
        'Cybersecurity',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mysuru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://wa.me/918317477430',
        'https://www.linkedin.com/in/famtrix',
      ],
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${siteUrl}/#localbusiness`,
      name: 'FAMTRIX',
      url: siteUrl,
      telephone: '+91-8317477430',
      email: 'contact@famtrix.in',
      image: `${siteUrl}/assets/hero-banner.png`,
      logo: `${siteUrl}/assets/famtrix-logo.png`,
      priceRange: '$$',
      areaServed: 'Mysuru, Karnataka, India',
      knowsAbout: [
        'Digital Marketing',
        'Web Development',
        'AI Automation',
        'Cybersecurity',
      ],
      description:
        'FAMTRIX offers AI automation, web development, and digital marketing software for startups and local businesses in Mysuru. Get a free consultation today.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mysuru',
        addressLocality: 'Mysuru',
        addressRegion: 'Karnataka',
        postalCode: '570001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.2958,
        longitude: 76.6394,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          opens: '09:00',
          closes: '19:00',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service-digital-marketing`,
      name: 'Digital Marketing Software for Startups',
      serviceType: 'Digital Marketing & Growth',
      provider: {
        '@id': `${siteUrl}/#localbusiness`,
      },
      description:
        'Flagship growth suite. Multi-channel campaign manager, automated SEO insights, and lead tracking built for local reach and ROI in Mysuru.',
      areaServed: {
        '@type': 'City',
        name: 'Mysuru',
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service-ai-automation`,
      name: 'AI & Automation Services for Businesses',
      serviceType: 'Artificial Intelligence & Workflow Automation',
      provider: {
        '@id': `${siteUrl}/#localbusiness`,
      },
      description:
        'Intelligent workflow automation, AI agents, CRM sync, and operational efficiency tools tailored for modern businesses in Mysuru.',
      areaServed: {
        '@type': 'City',
        name: 'Mysuru',
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service-fullstack`,
      name: 'Full-Stack Web Development in Mysuru',
      serviceType: 'Web & Software Engineering',
      provider: {
        '@id': `${siteUrl}/#localbusiness`,
      },
      description:
        'Custom web applications, MVP development, scalable SaaS architectures, and cloud microservices built with Next.js by our Mysuru team.',
      areaServed: {
        '@type': 'City',
        name: 'Mysuru',
      },
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service-cybersecurity`,
      name: 'Cybersecurity Solutions in India',
      serviceType: 'Information Security & Audits',
      provider: {
        '@id': `${siteUrl}/#localbusiness`,
      },
      description:
        'Vulnerability assessments, code security audits, penetration testing, and hardened infrastructure protection for growing ventures.',
      areaServed: {
        '@type': 'City',
        name: 'Mysuru',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable} scroll-smooth dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface-canvas text-slate-100 antialiased selection:bg-brand-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
