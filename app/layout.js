import Link from "next/link"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <h1>Simple App ver 1.0</h1>
          <hr />
            <Link href="/">home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/about">about</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/feedback">feedback</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link href="/users">users</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <hr />
          {children}
      </body>
    </html>
  )
}