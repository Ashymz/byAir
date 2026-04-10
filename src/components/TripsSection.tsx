import trips1 from "@/assets/trips1.png";
import trips2 from "@/assets/trips2.png";
import trips3 from "@/assets/trips3.png";
import trips4 from "@/assets/trips4.png";
import trips5 from "@/assets/trips5.png";

const trips = [trips1, trips2, trips3, trips4, trips5];

const TripsSection = () => {
  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: "#396FFF" }}>
      {/* Heading stays centered in container */}
      <div className="container mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground text-center">
          Your trips, simplified.
        </h2>
      </div>

      {/* Scroll row — full viewport width, no container */}
      <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-6 md:px-10 w-screen items-start">
        {trips.map((src, i) => (
          <div
            key={i}
            className={`flex-shrink-0 snap-center w-[280px] md:w-[320px] lg:w-[360px] ${i % 2 === 0 ? "mt-0" : "mt-16"}`}
          >
            <img
              src={src}
              alt={`Trip screen ${i + 1}`}
              loading="lazy"
              className="w-full rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TripsSection;
