export const metadata = {
  title: 'SocialTo.Pro — Social2Professionals',
  description: 'Professional social media management platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
