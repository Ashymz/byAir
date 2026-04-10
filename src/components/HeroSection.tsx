import { Button } from "@/components/ui/button";
import heroPhone from "@/assets/hero1.png";
import heroTicket from "@/assets/heroticket.png";
import backgroundImage from "@/assets/background.png";
import playstoreIcon from "@/assets/playstore.png";
import appleIcon from "@/assets/apple.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-visible pb-24 md:pb-32">
      <div className="container mt-4">

        {/* Hero card — fixed natural height, clipped cleanly */}
        <div
          className="rounded-3xl relative overflow-hidden"
          style={{
            background: "linear-gradient(115.88deg, #396FFF 14.63%, #224399 73.54%)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: "repeat",
              backgroundPosition: "top left",
              backgroundSize: "320px auto",
            }}
          />

          <div className="relative z-10 px-6 md:px-10 lg:px-14 py-16 md:py-28">
            <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
              {/* Left: text */}
              <div className="space-y-6 py-4 md:py-8">
                <h1 className="text-5xl md:text-6xl lg:text-[5rem] lg:leading-[1] font-bold text-primary-foreground leading-tight">
                  Fly Smarter<br />Across Nigeria
                </h1>
                <p className="text-primary-foreground/80 max-w-md text-[13.5px]">
                  Search, compare, and book domestic flights in minutes, all in one place.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" className="gap-2">
                    <img src={playstoreIcon} alt="" className="w-5 h-5 shrink-0" aria-hidden />
                    Download Playstore
                  </Button>
                  <Button variant="hero" size="lg" className="gap-2">
                    <img src={appleIcon} alt="" className="w-5 h-5 shrink-0" aria-hidden />
                    Download Appstore
                  </Button>
                </div>
              </div>

              {/* Right: empty column — images are absolutely positioned outside card */}
              <div className="hidden md:block" />
            </div>
          </div>
        </div>

        {/* Placeholder row — light cards under hero (logos / partners / highlights) */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 pt-8 md:pt-10 pb-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="min-h-[66px] rounded-xl bg-muted/90 border border-border/30"
              aria-hidden
            />
          ))}
        </div>

        {/* Phone + ticket — side by side over right half, overflow top and bottom */}
        <div className="absolute hidden md:flex flex-row items-end justify-center gap-0 pointer-events-none z-20"
          style={{ right: "130px", width: "55%", top: "18px" }}>
          {/* Ticket — left, slanted, slightly lower */}
          <img
            src={heroTicket}
            alt="ByAir boarding ticket preview"
            className="rotate-[2deg] z-40 drop-shadow-xl select-none self-center"
            style={{ width: "347px", marginRight: "-68px", marginBottom: "0px", marginTop: "12%", height: "49%" }}
          />
          {/* Phone — right, taller, overflows top and bottom */}
          <img
            src={heroPhone}
            alt="ByAir mobile booking interface"
            className="z-30 drop-shadow-2xl select-none"
            style={{ height: "66%", width: "auto", maxWidth: "305px" }}
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
