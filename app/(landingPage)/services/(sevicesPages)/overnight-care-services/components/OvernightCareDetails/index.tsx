import { ImgComp } from "@/components/ImgComp";

export default function OvernightCareDetails() {
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
                What Is Overnight Care?
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed lg:col-span-2">
                <p>
                  Overnight Care is a vital service designed to offer safety,
                  comfort, and tailored reassurance through the night. Whether
                  it’s helping someone settle for bed, assisting with night-time
                  medication, or simply being there when needs arise after dark
                  — our caring team is by your side so you&apos;re never alone.
                </p>
                <p>
                  From managing sleep disturbances to supporting personal
                  hygiene and monitoring safety, we ensure you or your loved one
                  receives attentive, compassionate care — all through the
                  night.
                </p>
              </div>
            </div>
          </div>

          {/* Tailored for Individual Needs */}
          <div className="space-y-6">
            <div className="border-t-2 border-white pt-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
              <h2 className="text-3xl font-bold text-white mb-6 lg:col-span-1">
                💙 Why Choose Our Overnight Care?
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed lg:col-span-2">
                <p>
                  Our Overnight Care is ideal for individuals facing mobility
                  challenges, dementia, or health conditions that require close
                  attention during the night.
                </p>
                <p>
                  With Lighthouse Homecare, you’re not just hiring a night-time
                  sitter — you’re welcoming a trained professional who knows how
                  to create calm, dignity, and peace of mind.
                </p>
                <p>
                  We adapt our support to meet your unique needs — whether that
                  involves repositioning, reassurance during unsettled sleep, or
                  a gentle start to the morning. Your comfort and safety are
                  always our top priority.
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
}
