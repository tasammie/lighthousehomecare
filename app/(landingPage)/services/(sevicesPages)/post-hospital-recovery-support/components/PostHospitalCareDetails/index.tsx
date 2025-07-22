import Image from "next/image";

export default function PostHospitalCareDetails() {
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
                What Is Post-Hospital Recovery Support?{" "}
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed lg:col-span-2">
                <p>
                  Lighthouse Homecare’s Post-Hospital Recovery Support offers
                  short-term in-home care to help your loved one regain
                  strength, stability, and confidence after a hospital
                  discharge. Being in the comfort of familiar surroundings has
                  been shown to speed up recovery and reduce the need for
                  readmission or a move into residential care.
                </p>
                <p>
                  Our compassionate care team focuses on helping individuals
                  safely transition back to everyday life. We support with
                  personal care, meal preparation, light housekeeping, mobility,
                  and medication reminders—all while keeping families informed
                  of their loved one’s progress.
                </p>
              </div>
            </div>
          </div>

          {/* Tailored for Individual Needs */}
          <div className="space-y-6">
            <div className="border-t-2 border-white pt-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
              <h2 className="text-3xl font-bold text-white mb-6 lg:col-span-1">
                How Can I Arrange It?{" "}
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed lg:col-span-2">
                <p>
                  Post-Hospital Recovery Support is typically arranged by the
                  hospital discharge team or social worker before a patient
                  returns home. In many cases, support may be available free of
                  charge through your local authority or the NHS for up to six
                  weeks. (You can contact your council to request an assessment
                  and check eligibility.)
                </p>
                <p>
                  Alternatively, Lighthouse Homecare can step in to provide
                  personalised care, especially if your needs extend beyond this
                  initial period or if there’s an emergency gap in care—such as
                  when the main family caregiver needs support or becomes
                  unavailable. We’re here to ensure no one has to recover alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/blue-bg.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-100"
        />
      </div>
    </div>
  );
}
