import { Footer } from "./footer";
import { Header } from "./header";

type props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
