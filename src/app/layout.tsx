import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Md Saiful Islam - Research Website',
  description: 'Ph.D. candidate in Mechanical Engineering specializing in Finite Element Analysis, biomechanics, and health-tech innovation. Explore research projects, publications, and professional experience.',
  keywords: ['Finite Element Analysis', 'Biomechanics', 'Mechanical Engineering', 'Research', 'ABAQUS', 'Python', 'Health-tech', 'Osteoarthritis', 'Cartilage Modeling'],
  authors: [{ name: 'Md Saiful Islam' }],
  openGraph: {
    title: 'Md Saiful Islam - Research Website',
    description: 'Ph.D. candidate specializing in FEA, biomechanics, and health-tech innovation',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Saiful Islam - Research Website',
    description: 'Ph.D. candidate specializing in FEA, biomechanics, and health-tech innovation',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}