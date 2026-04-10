import feature1 from "@/assets/feature1.png";
import feature2 from "@/assets/feature2.png";
import feature3 from "@/assets/feature3.png";
import feature4 from "@/assets/feature4.png";

const features = [
  {
    step: 1,
    image: feature1,
    title: "Compare Flights Easily",
    description: "View multiple airlines, prices, and schedules side by side, so you can quickly choose the option that best fits your time and budget.",
  },
  {
    step: 2,
    image: feature2,
    title: "Transparent Pricing",
    description: "See a clear breakdown of fares, taxes, and fees before you pay, no hidden charges, no surprises at checkout.",
  },
  {
    step: 3,
    image: feature3,
    title: "Instant Ticket Delivery",
    description: "Receive your ticket immediately after booking, with easy access in-app and delivery via email or WhatsApp for convenience.",
  },
  {
    step: 4,
    image: feature4,
    title: "Manage Your Trips",
    description: "Easily reschedule, cancel, or view your bookings anytime, with full control and real-time updates throughout your journey.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="values" >
      <div className="container">
        <div className="rounded-3xl border border-border/40 bg-[#F0F0F0] px-5 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-3">Our Features</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">Everything You Need To Book With Confidence</h2>
          </div>

          <div className="space-y-20 md:space-y-24">
            {features.map((feature, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={feature.step}
                  className={`flex flex-col gap-14 md:flex-row md:items-stretch md:gap-16 ${isEven ? "" : "md:flex-row-reverse"}`}
                >
                  {/* Image: nudge toward center gap — right when image is on left, left when image is on right */}
                  <div
                    className={`flex flex-1 w-full items-center justify-center ${isEven ? "md:justify-end" : "md:justify-start"}`}
                  >
                    <div className="w-72 max-w-full md:w-96 lg:w-[28rem]">
                      <img src={feature.image} alt={feature.title} loading="lazy" width={512} height={900} className="w-full" />
                    </div>
                  </div>
                  {/* Text: vertically centered vs image column; horizontal zig-zag alignment on md+ */}
                  <div
                    className={`flex min-h-0 w-full flex-1 flex-col justify-center space-y-5 md:pt-32 lg:pt-40 ${
                      isEven
                        ? "items-center text-center md:items-start md:text-left"
                        : "items-center text-center md:items-end md:text-right"
                    }`}
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#D9D9D9] text-base font-medium tabular-nums leading-none text-foreground">
                      <span className="block translate-y-px">{feature.step}</span>
                    </div>
                    <h3 className="text-3xl font-serif md:text-4xl">{feature.title}</h3>
                    <p className="max-w-md text-[13.5px] leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
