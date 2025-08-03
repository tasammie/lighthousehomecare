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
                  Live-in care provides continuous, round-the-clock support for
                  individuals who need help with daily living, including
                  personal care, mobility, medication, and regular routines.
                  Unlike hourly visits or residential care homes, this service
                  places a dedicated carer in the comfort of the client’s own
                  home, ensuring consistent, personalised care day and night.
                </p>
                <p>
                  At Lighthouse Homecare, our 24/7 live-in support is tailored
                  to each person&apos;s health needs, preferences, and
                  lifestyle. From dementia care and stroke recovery to mobility
                  challenges or companionship, we’re here to support individuals
                  to live safely and independently at home.
                </p>
              </div>
            </div>
            <div className="border-t-2 border-white pt-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
              <h2 className="text-3xl font-bold text-white mb-6 lg:col-span-1">
                A Tailored Service{" "}
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed lg:col-span-2">
                <p>
                  We understand that no two care journeys are ever the same.
                  That’s why we design our services to reflect the unique needs,
                  routines, and aspirations of each person we support. Our
                  personalised approach makes care not just effective, but also
                  dignified and empowering.
                </p>
                <p>
                  Unlike generic or one-size-fits-all solutions, our live-in
                  support provides flexibility, continuity, and genuine comfort.
                  It’s a cost effective alternative to residential care — ideal
                  for those who value staying in familiar surroundings, yet need
                  more regular support than occasional visits can offer.
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
