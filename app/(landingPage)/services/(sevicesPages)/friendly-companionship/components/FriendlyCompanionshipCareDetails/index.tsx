import { ImgComp } from "@/components/ImgComp";

const FriendlyCompanionshipCareDetails = () => {
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
                Why Friendly Companionship Matters{" "}
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed lg:col-span-2">
                <p>
                  As people grow older, life can become quieter and more
                  solitary — often leading to feelings of isolation. This shift,
                  particularly after retirement, bereavement, or a decline in
                  mobility, can affect both mental and emotional well-being.
                  Studies show that long-term loneliness is linked to anxiety,
                  depression, cognitive decline, and even reduced life
                  expectancy. Sometimes, it’s the absence of everyday
                  interactions — a chat over tea, a missed birthday, or simply
                  having no one to reminisce with — that contributes to feeling
                  disconnected.
                </p>
                <p>
                  At Lighthouse Homecare, we believe in the power of simple,
                  meaningful connection. Our Friendly Companion service offers
                  emotional support through regular visits and genuine
                  conversation, helping to restore purpose, build trust, and
                  make every day a little brighter. Even a short visit can bring
                  warmth, reassurance, and the sense that someone truly cares.
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

export default FriendlyCompanionshipCareDetails;
