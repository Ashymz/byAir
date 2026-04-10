import flightDownload from "@/assets/flightdownload.png";
import playstoreIcon from "@/assets/playstore.png";
import appleIcon from "@/assets/apple.png";
import curveBackground from "@/assets/curvebackground.png";

const DownloadCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* paddingTop gives room for phone to break out above card */}
        <div className="relative" style={{ paddingTop: "180px" }}>

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
            {/* True 6/6 grid */}
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

              {/* Right col: empty — phone is absolutely positioned over this */}
              <div />
            </div>
          </div>

          {/* Phone — absolutely positioned, natural size, breaks out top and bottom */}
          <div
            className="hidden md:block absolute pointer-events-none"
            style={{ top: "-60px", right: "6%", width: "36%" }}
          >
            <img
              src={flightDownload}
              alt="ByAir app on mobile"
              loading="lazy"
              className="w-full drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
