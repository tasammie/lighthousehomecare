import { ImgComp } from "@/components/ImgComp";

export const PersonalisedCareDetails = () => {
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
                What Is Personalised Care & Hygiene?{" "}
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed lg:col-span-2">
                <p>
                  Personalised care and hygiene are essential aspects of
                  domiciliary care. This support helps individuals maintain
                  their daily routines while upholding dignity, comfort, and
                  wellbeing.
                </p>
                <p>
                  It includes assistance with tasks such as bathing, toileting,
                  grooming, dressing, oral hygiene, feeding, positioning, and
                  transferring. It may also involve meal preparation, laundry,
                  bed changing, and medication support.
                </p>
                <p>
                  These tasks are delivered with compassion, empathy, and
                  understanding — making each person feel respected and cared
                  for.
                </p>
                <p>
                  By maintaining personal hygiene, we help prevent infections,
                  support physical health, and reduce the risk of hospital
                  readmissions or premature entry into residential care.
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
