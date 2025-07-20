import { ImgComp } from "@/components/ImgComp";

const OvernightCarerServices = () => {
  const services = [
    {
      title: "Nighttime Personal Care",
      description:
        "Assisting with washing, changing, toileting and bedtime routines - providing dignity and comfort before and during sleep.",
      image: "/images/night-personal-care.png",
    },
    {
      title: "Medication Reminders",
      description:
        "Administering or prompting time-sensitive evening or overnight medications to maintain treatment plans.",
      image: "/images/medication-reminder.png",
    },
    {
      title: "Repositioning & Pressure Relief",
      description:
        "Helping individuals change positions to avoid bedsores and improve sleep quality - especially important for those with limited mobility.",
      image: "/images/presure-relive.png",
    },
    {
      title: "Monitoring & Reassurance",
      description:
        "Keeping a watchful eye throughout the night to respond quickly to any distress, confusion, or wandering - ideal for clients with dementia or anxiety.",
      image: "/images/monitoring.png",
    },
    {
      title: "Toileting & Continence Care",
      description:
        "Offering discreet support for overnight toileting or incontinence episodes with patience and compassion.",
      image: "/images/toileting.png",
    },
    {
      title: "Mobility & Fall Prevention",
      description:
        "Helping clients move safely in and out of bed, reducing fall risks and ensuring stability during the night.",
      image: "/images/mobilty.png",
    },
    {
      title: "Companionship & Calm Presence",
      description:
        "Providing gentle reassurance, conversation, or a calming presence for those who feel anxious or lonely at night.",
      image: "/images/companionship-service.png",
    },
    {
      title: "Emergency Support",
      description:
        "Ready to act immediately in any unexpected health or safety situations, offering peace of mind for both client and family.",
      image: "/images/emergency-support.png",
    },
  ];

  return (
    <div className="bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[44px] font-bold text-[#001967] mb-4">
            What Does an Overnight Carer Do?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our overnight carers offer essential evening and night-time care
            support through:
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

export default OvernightCarerServices;
