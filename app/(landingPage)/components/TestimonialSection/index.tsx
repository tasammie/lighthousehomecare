"use client";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      text: "I am truly pleased with the quality of care given to my son. I have seen tremendous improvement in his health, and it means so much to witness his progress. He is now able to remember things a bit better than before, which is such an encouraging sign.I sincerely appreciate the dedication and support provided by LIGHTHOUSE HOMECARE. The care has made a real difference. Please keep up the great work!",
      name: "John Smith",
      location: "Patient, United Kingdom.",
    },
    {
      id: 2,
      text: "She sure is. Every time I take her shopping, she is much better mobility-wise and hardly breathless, which is a massive achievement. She always looks forward to you guys visiting and always has lots to say about you to me. This makes us all very happy. I'm also now doing mums meals for her so she's not always eating ready meals. 😁",
      name: "Mary Johnson",
      location: "Patient, United Kingdom.",
    },
    {
      id: 3,
      text: "Thank you for always encouraging mum to do her exercises and all you both do for her. She's always very happy when you guys come round she is always singing your praises.",
      name: "David Brown",
      location: "Patient, United Kingdom.",
    },
    {
      id: 4,
      text: "🙏🏻🫶🏻 always and this is 100% the truth. If I hadn't gone with Mum to the hospital last April after her 2nd respiratory failure, she would be here today. And with your help, she's still here. 🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻",
      name: "Sarah Williams",
      location: "Patient, United Kingdom.",
    },
    {
      id: 5,
      text: '"I truly appreciate the excellent care your company has provided for my son. Your staff are not only competent and committed, but they also work with such diligence and compassion to ensure his well-being.There was a time I used to be afraid of coming to his room to see him, even though I had the natural urge as a mother to be close to my child. But now, things have changed. My son speaks to me calmly and kindly. He acknowledges me as his mother, and that means everything to me. He looks fine and healthy physically This transformation brings me so much peace and joy. I am giving you five stars. Please continue the good work  you are making a real difference."',
      name: "Client's Mother",
      location: "Patient, United Kingdom.",
    },
    {
      id: 6,
      text: "I would like to express my sincere appreciation to the entire care team looking after my brother. The level of quality care, patience, and professionalism shown by the staff has been truly outstanding.I was amazed to see how well he is being supported not just physically, but emotionally as well. I have noticed a big difference, in his physical appearance, in his mood and how he interacts with us as a family. He’s calmer, more communicative, and the way he remembers extended families names , even some events that happened in the family and more.Knowing that he’s in such capable hands brings peace of mind to our family. Thank you for the continued commitment and compassion. Please keep up the amazing work. ",
      name: "Client's brother",
      location: "Patient, United Kingdom.",
    },
    {
      id: 7,
      text: "With sincere gratitude, I would like to commend the team for the outstanding care and support they continue to provide to my brother in law. Every time I visit, I am impressed by how attentive, patient, and compassionate the staff are with him.There has been a noticeable improvement in his overall physical performance,  he moving his hands and legs very well and emotional wellbeing. He seems more at ease and more connected with his family, especially when we come for Eid celebrations . It’s comforting to know he’s in an environment where he is genuinely cared for and treated with respect.As a family member, it gives me great peace of mind knowing he is in safe and capable hands. Thank you for your dedication , quality care and the positive difference you are making in his life.",
      name: "Client's Sister Inlaw.",
      location: "Patient, United Kingdom.",
    },
  ];

  const scrollToIndex = (index: number) => {
    setCurrentSlide(index);
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({ left: width * index, behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % testimonials.length;
    scrollToIndex(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(prev);
  };

  useEffect(() => {
    const iv = setInterval(nextSlide, 5000);
    return () => clearInterval(iv);
  }, [currentSlide]);

  const StarRating = () => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-orange-400 text-lg">
          ★
        </span>
      ))}
    </div>
  );

  return (
    <motion.div
      className="bg-gray-50 py-16 px-4 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="max-w-7xl mx-auto md:ml-[20rem]"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-start mb-12">
          <p className="text-[#00269B] text-sm mb-2">
            Read convincing testimonies from some of our care patients{" "}
          </p>
          <h2 className="text-[44px] font-[700] text-[#001967]">
            What our Clients say
          </h2>
        </div>

        {/* Carousel */}
        <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div ref={carouselRef} className="flex overflow-hidden mb-8">
            {testimonials.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2"
              >
                <div className="bg-white rounded-lg p-6 shadow-sm h-full flex flex-col">
                  <StarRating />
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    &quot;
                    {t.text.length > 200
                      ? t.text.slice(0, 200) + "..."
                      : t.text}
                    &quot;
                  </p>
                  <div className="mt-auto flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <motion.div
            className="flex items-center justify-between"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentSlide ? "bg-primaryColor" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-2 mr-14">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-primaryColor text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-primaryColor text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialSection;
