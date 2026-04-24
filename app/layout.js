import "./globals.css";

export const metadata = {
  title: "Corvo — AI Voice Agents for Outbound Sales",
  description: "Corvo runs outbound calls, qualifies leads, and books meetings with a voice so composed, your prospects forget it isn't human.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
