import { ImgComp } from "@/components/ImgComp";

export default function CareAtHome() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-[44px] font-bold text-[#001967] leading-tight">
              Personalised Care in the Comfort of Your Home
            </h2>

            <p className="text-lg text-gray-600 font-medium">
              Helping Your Loved One Heal at Home, With Confidence and Dignity
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                At Lighthouse Homecare, our personalised care services are
                designed to support individuals in leading fulfilling, dignified
                lives. We assist with daily tasks in ways that promote
                independence, confidence, and overall wellbeing.
              </p>

              <p>
                Each care plan is thoughtfully developed to reflect the unique
                needs of every client. Through open conversations with families
                and our experienced care management team, we create tailored
                solutions that honour personal routines and preferences — so
                your loved one can continue living life on their own terms.
              </p>

              <p>
                Our goal is to help maintain independence, offering
                compassionate care in a respectful, person-centred way.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <ImgComp
              src="/images/care-at-home.webp"
              alt="Personal carer helping elderly woman at home"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-[44px] font-[700] text-[#001967] mb-4 md:w-[50%]">
            Supporting Your Independence with a Personal Carer
          </h3>

          <p className="text-gray-700">
            For many, home is more than just a place — it&apos;s a space filled
            with familiarity, memories, and a sense of control. That&apos;s why
            maintaining independence at home is a priority for us.
          </p>

          <p className="text-gray-700 mt-4">
            Our dedicated carers play a key role in helping clients remain
            empowered, safe, and supported — all within the comfort of the home
            they love.
          </p>
        </div>
      </div>
    </section>
  );
}
