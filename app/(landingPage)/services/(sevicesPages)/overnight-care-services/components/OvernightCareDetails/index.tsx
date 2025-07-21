import Image from "next/image";

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
                  Overnight care offers vital support to individuals who may
                  require help throughout the night—whether due to mobility
                  issues, medication needs, incontinence, dementia, or recovery
                  from illness or surgery. At Lighthouse Homecare Ltd., our
                  dedicated overnight caregivers remain on-site to ensure your
                  loved one is safe, comfortable, and not alone during the
                  critical nighttime hours.
                </p>
                <p>
                  Our carers provide essential assistance such as toileting
                  support, repositioning in bed, managing restlessness or
                  confusion, and responding quickly to any emergencies. This
                  type of care not only promotes restful sleep for clients but
                  also peace of mind for families.
                </p>
              </div>
            </div>
          </div>

          {/* Tailored for Individual Needs */}
          <div className="space-y-6">
            <div className="border-t-2 border-white pt-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
              <h2 className="text-3xl font-bold text-white mb-6 lg:col-span-1">
                Tailored for Individual Needs
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed lg:col-span-2">
                <p>
                  We understand that everyone&lsquo;s needs are different—some
                  may need active overnight assistance, while others just
                  benefit from having someone nearby. That&apos;s why we offer
                  fully personalised overnight care plans. From dusk till dawn,
                  our compassionate carers are there to offer support, prevent
                  nighttime accidents, and help your loved one feel safe and
                  secure.
                </p>
                <p>
                  Unlike standard domiciliary visits or daytime-only care, our
                  overnight services ensure round-the-clock attention when it
                  matters most—providing both practical assistance and emotional
                  reassurance in the quiet hours of the night.
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
