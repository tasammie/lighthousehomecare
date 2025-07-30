import { ImgComp } from "@/components/ImgComp";

const CompassionateEndOfLifeCareDetails = () => {
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
                What Is Compassionate End-of-Life Care?{" "}
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed lg:col-span-2">
                <p>
                  Compassionate End-of-Life Care at Lighthouse Homecare is
                  dedicated to supporting individuals in the final stages of
                  life with empathy, dignity, and peace. This care is not
                  focused on curing illness, but rather on easing discomfort,
                  enhancing comfort, and honouring personal preferences during
                  the last weeks, days, or even hours of life. Our experienced
                  care team works closely with individuals and their families to
                  create highly personalised care plans. These plans are
                  designed to address a range of needs— from physical symptoms
                  and emotional wellbeing to spiritual support and practical
                  assistance
                </p>
                <p>
                  We provide gentle, one-to-one care that helps ease anxiety,
                  support daily routines, and relieve the emotional burden on
                  loved ones. Whether at home or in a familiar setting, our goal
                  is to ensure comfort, presence, and compassion at every step
                  of this deeply personal journey.
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

export default CompassionateEndOfLifeCareDetails;
