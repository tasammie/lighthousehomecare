import { ImgComp } from "@/components/ImgComp";

const TwentyFourHourCarerServices = () => {
  const services = [
    {
      title: "Night-time Personal Care",
      description:
        "Helping with washing, changing, toileting, and bedtime routines — ensuring dignity and comfort both before and during sleep.",
      image: "/images/night-personal-care.webp",
    },
    {
      title: "Medication Reminders",
      description:
        "Prompting or administering time-sensitive evening or night-time medication to help maintain prescribed treatment plans.",
      image: "/images/medication-reminder.webp",
    },
    {
      title: "Repositioning & Pressure Relief",
      description:
        "Assisting with regular position changes to prevent pressure sores and enhance sleep — vital for those with reduced mobility.",
      image: "/images/presure-relive.webp",
    },
    {
      title: "Monitoring & Reassurance",
      description:
        "Maintaining a watchful presence through the night to quickly respond to distress, confusion, or wandering  especially helpful for those with dementia or anxiety.",
      image: "/images/monitoring.webp",
    },
    {
      title: "Toileting & Continence Care",
      description:
        "Providing discreet assistance during the night with toileting or incontinence episodes — always with kindness, patience, and respect.",
      image: "/images/toileting.webp",
    },
    {
      title: "Mobility & Fall Prevention",
      description:
        "Offering calming company, soothing conversation, or quiet reassurance for those feeling unsettled, anxious, or alone during the night.",
      image: "/images/mobilty.webp",
    },
    {
      title: "Companionship & Calm Presence",
      description:
        "Providing gentle reassurance, conversation, or a calming presence for those who feel anxious or lonely at night.",
      image: "/images/companionship-service.webp",
    },
    {
      title: "Emergency Support",
      description:
        "Prepared to act swiftly in unexpected health or safety incidents, delivering peace of mind to both clients and their loved ones.",
      image: "/images/emergency-support.webp",
    },
  ];

  return (
    <div className="bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[44px] font-bold text-[#001967] mb-4">
            What Does 24-Hour Live-In Support Do?{" "}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our live-in carers provide comprehensive assistance in the following
            areas:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              {/* <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="w-32 h-32 bg-blue-300 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
                </div>
              </div> */}

              <div className="p-2">
                <ImgComp
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[289px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[24px] font-[700] text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-[400] text-[16px] text-sm leading-[30px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwentyFourHourCarerServices;
