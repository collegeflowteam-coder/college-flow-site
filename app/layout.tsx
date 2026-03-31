import "./globals.css";

export const metadata = {
  title: "College Flow",
  description: "Personalized college guidance",
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
