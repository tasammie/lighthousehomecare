import { ImgComp } from "@/components/ImgComp";

const LiveCareDetails = () => {
  return (
    <div
      className=" bg-gradient-to-br from-[#00269B] to-[#000D35] py-20 relative overflow-hidden"
      style={{ backgroundImage: "url('/images/blue-bg.webp')" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          {/* What Is Overnight Care? */}
          <div className="space-y-6">
            <div className="border-t-2 border-white pt-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
              <h2 className="text-3xl font-bold text-white mb-6 lg:col-span-1">
                What Is Live-In Care?{" "}
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed lg:col-span-2">
                <p>
                  Live-in care provides round-the-clock assistance for
                  individuals who need continuous support—whether that’s help
                  with personal care, mobility, medication, or daily routines.
                  Unlike hourly visits or residential homes, this service allows
                  a dedicated carer to reside in the client’s home, ensuring
                  consistent and personalised care throughout the day and night.
                </p>
                <p>
                  At Sylvian, our 24-hour live-in support is tailored to each
                  person’s health needs, preferences, and lifestyle. From
                  dementia care and stroke recovery to mobility challenges or
                  companionship, we’re here to support individuals to live
                  safely and independently at home.
                </p>
              </div>
            </div>
            <div className="border-t-2 border-white pt-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
              <h2 className="text-3xl font-bold text-white mb-6 lg:col-span-1">
                A Tailored Service{" "}
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed lg:col-span-2">
                <p>
                  We believe that no two care journeys are the same. That’s why
                  we design our services to reflect the specific needs, goals,
                  and routines of the people we support. Our personalised
                  approach ensures that care is not only effective but also
                  respectful and empowering.
                </p>
                <p>
                  Unlike one-size-fits-all solutions, our live-in support offers
                  flexibility, continuity, and comfort. It’s a cost-effective
                  alternative to residential care—ideal for those who value
                  familiar surroundings but need more consistent help than
                  occasional visits can provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <ImgComp
          src="/images/blue-bg.webp"
          alt="Background"
          className="opacity-100"
        />
      </div>
    </div>
  );
};

export default LiveCareDetails;
