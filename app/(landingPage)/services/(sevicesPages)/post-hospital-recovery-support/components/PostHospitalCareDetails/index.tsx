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
                <p>Helping your loved one regain strength, safely at home</p>
                <p>
                  When someone is discharged from hospital, the road to full
                  recovery often continues at home. At Lighthouse Homecare, we
                  offer short-term, in-home support to help individuals rebuild
                  strength, stability, and confidence in familiar surroundings —
                  proven to speed up recovery and reduce the risk of readmission
                  or moving into residential care.
                </p>
                <p>Our experienced carers assist with:</p>
                <ul>
                  <li>Personal care</li>
                  <li>Meal preparation and light housekeeping</li>
                  <li>Mobility support and medication reminders</li>
                </ul>
                <p>
                  All while keeping families informed every step of the way.
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
                  In many cases, your hospital’s discharge team or social worker
                  will help arrange recovery care before you return home. Some
                  support may be available free of charge for up to six weeks
                  through your local authority or NHS — speak to your council
                  for an assessment and to check eligibility.
                </p>
                <p>
                  If your needs go beyond that period, or if there’s an
                  emergency gap in care (e.g. if a family carer becomes
                  unavailable), Lighthouse Homecare can step in to provide
                  tailored, flexible support — ensuring no one has to face
                  recovery alone.
                </p>{" "}
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
