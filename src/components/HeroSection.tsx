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
          className="rounded-3xl relative overflow-visible md:overflow-hidden"
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

          <div className="relative z-10 px-4 md:px-10 lg:px-14 py-10 md:py-28">
            <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
              {/* Left: text */}
              <div className="space-y-6 py-2 md:py-8 text-center md:text-left">
                <h1 className="text-[45px] leading-[0.95] md:text-6xl lg:text-[5rem] lg:leading-[1] font-bold text-primary-foreground">
                  Fly Smarter<br />Across Nigeria
                </h1>
                <p className="text-primary-foreground/80 max-w-md text-[13.5px] mx-auto md:mx-0">
                  Search, compare, and book domestic flights in minutes, all in one place.
                </p>
                <div className="hidden md:flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" className="gap-2">
                    <img src={playstoreIcon} alt="" className="w-5 h-5 shrink-0" aria-hidden />
                    Download Playstore
                  </Button>
                  <Button variant="hero" size="lg" className="gap-2">
                    <img src={appleIcon} alt="" className="w-5 h-5 shrink-0" aria-hidden />
                    Download Appstore
                  </Button>
                </div>
                <div className="md:hidden">
                  <Button
                    variant="hero"
                    size="lg"
                    className="bg-white text-[#396FFF] hover:bg-white/90 border-0 px-10 rounded-[10px]"
                  >
                    Download ByAir
                  </Button>
                </div>
              </div>

              {/* Right: empty column — images are absolutely positioned outside card */}
              <div className="hidden md:block" />
            </div>

            {/* Mobile hero artwork */}
            <div className="relative md:hidden mt-6 mb-10 h-[520px]">
              <img
                src={heroTicket}
                alt="ByAir boarding ticket preview"
                className="absolute left-[-38px] bottom-[-36px] w-[250px] -rotate-[12deg] z-20 drop-shadow-xl select-none"
              />
              <img
                src={heroPhone}
                alt="ByAir mobile booking interface"
                className="absolute right-0 bottom-[-8px] w-[232px] z-30 drop-shadow-2xl select-none"
              />
            </div>
          </div>
        </div>

        {/* Placeholder row — light cards under hero (logos / partners / highlights) */}
        <div className="relative z-10 hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 pt-8 md:pt-10 pb-2">
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
            loading="eager"
            fetchPriority="high"
            className="rotate-[2deg] z-40 drop-shadow-xl select-none self-center"
            style={{ width: "347px", marginRight: "-68px", marginBottom: "0px", marginTop: "12%", height: "49%" }}
          />
          {/* Phone — right, taller, overflows top and bottom */}
          <img
            src={heroPhone}
            alt="ByAir mobile booking interface"
            loading="eager"
            fetchPriority="high"
            className="z-30 drop-shadow-2xl select-none"
            style={{ height: "66%", width: "auto", maxWidth: "305px" }}
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
