import LighthouseFooter from "./components/footer";
import Navbar from "./components/Navbar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>

      <div>
        <LighthouseFooter />
      </div>
    </div>
  );
}
