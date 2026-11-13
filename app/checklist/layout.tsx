import type { Metadata } from 'next';

const siteUrl = 'https://www.famtrix.in';

export const metadata: Metadata = {
  title: 'Free 25-Point Marketing Checklist',
  description:
    'Download the battle-tested 25-point local digital marketing checklist by FAMTRIX for Mysuru businesses, startups, and founders. Step-by-step roadmap for Google Maps, SEO, and WhatsApp conversions.',
  alternates: {
    canonical: `${siteUrl}/checklist`,
  },
  openGraph: {
    title: 'Free 25-Point Marketing Checklist | FAMTRIX',
    description:
      'Download the battle-tested 25-point local digital marketing checklist by FAMTRIX for Mysuru businesses, startups, and founders.',
    url: `${siteUrl}/checklist`,
    siteName: 'FAMTRIX',
    images: [
      {
        url: `${siteUrl}/assets/featured-product-showcase.png`,
        width: 1672,
        height: 941,
        alt: 'FAMTRIX Free 25-Point Marketing Checklist for Local Businesses',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free 25-Point Marketing Checklist | FAMTRIX',
    description:
      'Download the battle-tested 25-point local digital marketing checklist by FAMTRIX for Mysuru businesses, startups, and founders.',
    images: [`${siteUrl}/assets/featured-product-showcase.png`],
    creator: '@famtrix',
  },
};

export default function ChecklistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
