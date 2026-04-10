import searchIcon from "@/assets/search.png";
import cursorIcon from "@/assets/cursor.png";
import ticketIcon from "@/assets/ticket.png";

const steps = [
  {
    number: "01",
    title: "Search",
    description: "Enter your route and travel dates to explore available flights.",
    iconType: "lucide" as const,
  },
  {
    number: "02",
    title: "Choose",
    description: "Compare options and select the flight that works best for you.",
    iconType: "cursor" as const,
  },
  {
    number: "03",
    title: "Book",
    description: "Complete your payment and receive your ticket instantly.",
    iconType: "ticket" as const,
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Book Your Flight In 3 Simple Steps</h2>
        </div>

        {/* Cards + border */}
        <div className="relative pt-[40px] pb-20">
          {/* Rounded border — full height of this wrapper, sits behind everything */}
          <div className="absolute inset-x-48 top-[128px] bottom-0 rounded-3xl border border-[#396FFF] z-0" />

          {/* Cards grid */}
          <div className="relative z-10 grid md:grid-cols-3 gap-4 px-48 md:px-56">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center">
                <div className="relative w-full rounded-2xl bg-[#F0F0F0] pt-12 pb-6 px-4 flex flex-col items-center text-center space-y-3">
                  {/* Badge */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 grid h-12 w-12 place-items-center rounded-full bg-[#396FFF] text-sm font-bold text-white leading-none">
                    <span className="block translate-y-px">{step.number}</span>
                  </div>

                  {/* Icon */}
                  {step.iconType === "lucide" && (
                    <img src={searchIcon} alt="Search" className="w-8 h-8 object-contain" />
                  )}
                  {step.iconType === "cursor" && (
                    <img src={cursorIcon} alt="Choose" className="w-8 h-8 object-contain" />
                  )}
                  {step.iconType === "ticket" && (
                    <img src={ticketIcon} alt="Book" className="w-8 h-8 object-contain" />
                  )}

                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-[12.5px] leading-relaxed max-w-[200px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
