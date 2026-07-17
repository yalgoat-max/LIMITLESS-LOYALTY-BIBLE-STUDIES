import "./globals.css";

export const metadata = {
  title: "Limitless Loyalties Bible Studies",
  description: "Faith. Knowledge. Community."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
