import { useEffect } from "react";
import flightDownload from "@/assets/flightdownload.png";
import playstoreIcon from "@/assets/playstore.png";
import appleIcon from "@/assets/apple.png";
import curveBackground from "@/assets/curvebackground.png";

const DownloadCTA = () => {
  useEffect(() => {
    const curve = new Image();
    curve.src = curveBackground;
    const phone = new Image();
    phone.src = flightDownload;
  }, []);

  return (
    <section className="py-12 md:py-32 bg-white">
      <div className="container">

        {/* ── MOBILE layout ── */}
        <div
          className="md:hidden rounded-3xl overflow-visible relative"
          style={{
            backgroundImage: `url(${curveBackground})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Phone breaks out above the card */}
          <div className="flex justify-center pt-0 -mt-2">
            <img
              src={flightDownload}
              alt="ByAir app on mobile"
              loading="eager"
              fetchPriority="high"
              className="w-[75%] max-w-[320px] drop-shadow-2xl relative z-10"
              style={{ marginBottom: "-20px" }}
            />
          </div>

          {/* Text below phone, inside card */}
          <div className="relative z-10 px-8 pt-8 pb-12 text-center flex flex-col items-center gap-5">
            <h2 className="text-3xl font-serif text-white leading-tight">
              Download The ByAir App Today!
            </h2>
            <p className="text-white/80 text-[13.5px] leading-relaxed max-w-xs">
              Download the ByAir app to manage your trips, get instant updates, and book flights on the go.
            </p>
            <button className="bg-white text-[#396FFF] font-medium text-sm px-10 py-3 rounded-[10px] hover:bg-white/90 transition-colors">
              Download ByAir
            </button>
          </div>
        </div>

        {/* ── DESKTOP layout (unchanged) ── */}
        <div className="relative hidden md:block" style={{ paddingTop: "180px" }}>
          {/* Card */}
          <div
            className="relative overflow-hidden"
            style={{
              backgroundImage: `url(${curveBackground})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "460px",
            }}
          >
            <div className="grid grid-cols-2 h-full" style={{ minHeight: "460px" }}>
              {/* Left col: text + buttons */}
              <div className="flex flex-col justify-end gap-6 pl-20 pr-8 pt-10 pb-14">
                <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                  Download The ByAir App Today!
                </h2>
                <p className="text-white/80 text-[19px] leading-relaxed">
                  Download the ByAir app to manage your trips, get instant updates, and book flights on the go.
                </p>
                <div className="flex flex-row flex-wrap gap-4">
                  <button className="flex items-center gap-2 border border-white/60 text-white text-sm px-5 py-3 rounded-lg hover:bg-white/10 transition-colors">
                    <img src={playstoreIcon} alt="" className="w-4 h-4 shrink-0" />
                    Download Playstore
                  </button>
                  <button className="flex items-center gap-2 border border-white/60 text-white text-sm px-5 py-3 rounded-lg hover:bg-white/10 transition-colors">
                    <img src={appleIcon} alt="" className="w-4 h-4 shrink-0" />
                    Download Appstore
                  </button>
                </div>
              </div>
              <div />
            </div>
          </div>

          {/* Phone — breaks out above right side */}
          <div
            className="absolute pointer-events-none"
            style={{ top: "-60px", right: "6%", width: "36%" }}
          >
            <img
              src={flightDownload}
              alt="ByAir app on mobile"
              loading="eager"
              fetchPriority="high"
              className="w-full drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default DownloadCTA;
