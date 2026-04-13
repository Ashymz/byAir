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

function StepIcon({ iconType }: { iconType: (typeof steps)[number]["iconType"] }) {
  if (iconType === "lucide") {
    return <img src={searchIcon} alt="Search" className="w-8 h-8 object-contain" />;
  }
  if (iconType === "cursor") {
    return <img src={cursorIcon} alt="Choose" className="w-8 h-8 object-contain" />;
  }
  return <img src={ticketIcon} alt="Book" className="w-8 h-8 object-contain" />;
}

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-xs md:text-sm font-medium text-muted-foreground tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif px-2">
            Book Your Flight In 3 Simple Steps
          </h2>
        </div>

        {/* Mobile: border behind cards, badges on left edge */}
        <div className="md:hidden relative px-2 py-2">
          {/* Border box — z-0 sits behind cards (z-10), badges pierce the left side */}
          <div
            className="absolute z-0 rounded-3xl border border-[#396FFF]"
            style={{ left: "2rem", right: 0, top: "22px", bottom: "22px" }}
          />

          <div className="relative z-10 flex flex-col gap-4 pl-8 pr-0">
            {steps.map((step) => (
              <div key={step.number} className="relative flex items-center">
                {/* Badge — on the left border line */}
                <div className="absolute -left-[1.4rem] z-20 grid h-11 w-11 place-items-center rounded-full bg-[#396FFF] text-xs font-bold text-white leading-none ring-[3px] ring-white shrink-0">
                  <span className="translate-y-px">{step.number}</span>
                </div>
                {/* Card — z-10 so it sits above the border */}
                <div className="relative z-10 w-full rounded-2xl bg-[#F0F0F0] py-8 px-4 flex flex-col items-center text-center space-y-3">
                  <StepIcon iconType={step.iconType} />
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-[12.5px] leading-relaxed max-w-[260px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 3-column grid + outer border */}
        <div className="relative pt-[40px] pb-20 hidden md:block">
          <div className="absolute inset-x-48 top-[128px] bottom-0 rounded-3xl border border-[#396FFF] z-0" />

          <div className="relative z-10 grid md:grid-cols-3 gap-4 px-48 md:px-56">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center">
                <div className="relative w-full rounded-2xl bg-[#F0F0F0] pt-12 pb-6 px-4 flex flex-col items-center text-center space-y-3">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 grid h-12 w-12 place-items-center rounded-full bg-[#396FFF] text-sm font-bold text-white leading-none">
                    <span className="block translate-y-px">{step.number}</span>
                  </div>

                  <StepIcon iconType={step.iconType} />

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
