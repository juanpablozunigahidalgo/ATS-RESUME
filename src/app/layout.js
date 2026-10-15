import "../styles/globals.css";

export const metadata = {
  title: "Juan Pablo Zúñiga Hidalgo | AI Engineer & Senior Solutions Architect",
  description:
    "ATS-optimized CV of Juan Pablo Zúñiga Hidalgo — AI Engineer and Senior Solutions Architect specializing in generative AI, full-stack development, and cloud architecture.",
  keywords:
    "AI Solutions Architect, Generative AI, LLM, AWS, Azure, OCI, React, TypeScript, Python, Full-Stack, Göteborg, Juan Pablo Zúñiga Hidalgo",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body>
    <div className={'content'}>
      {children}
    </div>
    </body>
    </html>
  );
}
