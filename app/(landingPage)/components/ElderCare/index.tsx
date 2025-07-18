"use client";
import { ImgComp } from "@/components/ImgComp";
import { motion } from "framer-motion";

export default function ElderCare() {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between min-h-screen max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left (images) */}
      {/* <motion.div
        className="relative flex justify-center md:w-[50%] gap-[30px] mb-6 md:mb-0 p-5 md:p-0"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -top-8 -left-8 w-20 h-20 md:w-28 md:h-28 z-10">
          <ImgComp
            src="/images/blue-heart.png"
            alt="Blue Heart Decoration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-2/3">
          <ImgComp
            src="/images/lady-with-woman.png"
            alt="Caregiver with elderly"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        <div className="w-1/3 flex flex-col gap-4">
          <ImgComp
            src="/images/elderly-couple-with-coffee.png"
            alt="Elderly couple with coffee"
            className="rounded-lg w-full object-cover"
          />
          <ImgComp
            src="/images/man-with-woman.png"
            alt="Elderly couple outdoors"
            className="rounded-lg w-full object-cover"
          />
        </div>

     
      </motion.div> */}

      <div className="relative flex justify-center w-full md:w-[50%] gap-[30px] mb-6 md:mb-0 p-5 md:p-0">
        <ImgComp
          src={"/images/caregiversimage.png"}
          alt="care gives"
          className="w-full h-full"
        />
      </div>

      {/* Right (text) */}
      <motion.div
        className="m-6 md:w-1/2"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-[44px] font-bold text-[#001967] mb-8">
          The Best Elderly Care Center For You
        </h1>
        <ul className="space-y-6">
          {/* Expert Carers */}
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-12 h-12 mr-4 bg-[#8092CD] text-white rounded-full flex-shrink-0">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 4V3H9.5V2H8.5V3H7.5V4H8.5V5H9.5V4H10.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.66 5.8835L13.649 3.0805C13.917 2.3205 13.535 1.4605 12.7345 1.207C11.805 0.912 10.285 0.5 9.00002 0.5C7.71502 0.5 6.19502 0.912 5.26502 1.207C4.46502 1.461 4.08302 2.321 4.35102 3.0805L5.34052 5.8835C5.07193 6.49239 4.9595 7.15868 5.01342 7.82199C5.06735 8.48531 5.28592 9.12468 5.64933 9.6822C6.01275 10.2397 6.50953 10.6977 7.09465 11.0148C7.67978 11.3318 8.33477 11.4979 9.00027 11.4979C9.66577 11.4979 10.3208 11.3318 10.9059 11.0148C11.491 10.6977 11.9878 10.2397 12.3512 9.6822C12.7146 9.12468 12.9332 8.48531 12.9871 7.82199C13.041 7.15868 12.9286 6.49239 12.66 5.8835ZM9.00002 1.5C7.88002 1.5 6.48552 1.869 5.56752 2.16C5.33752 2.233 5.20252 2.489 5.29402 2.748L6.30602 5.615C8.09952 5.045 9.90052 5.045 11.694 5.615L12.706 2.748C12.7975 2.489 12.6625 2.233 12.4325 2.1605C11.5145 1.869 10.1195 1.5 9.00002 1.5ZM11.903 6.7405C11.8765 6.73513 11.8499 6.7276 11.8245 6.718C9.93752 6.0105 8.06252 6.0105 6.17552 6.718C6.15001 6.72763 6.12376 6.73515 6.09702 6.7405C5.98155 7.18407 5.96926 7.6482 6.06109 8.09726C6.15292 8.54633 6.34642 8.96837 6.62675 9.33101C6.90707 9.69365 7.26676 9.98723 7.67821 10.1892C8.08966 10.3912 8.54192 10.4962 9.00027 10.4962C9.45862 10.4962 9.91088 10.3912 10.3223 10.1892C10.7338 9.98723 11.0935 9.69365 11.3738 9.33101C11.6541 8.96837 11.8476 8.54633 11.9394 8.09726C12.0313 7.6482 12.0185 7.18407 11.903 6.7405Z"
                  fill="white"
                />
                <path
                  d="M14 14.5H15V15.5H14V16.5H13V15.5H12V14.5H13V13.5H14V14.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.4395 11.5C5.4395 11.5 0 13.1965 0 15.2335V18.5H18V15.2335C18 13.1965 12.5605 11.5 12.5605 11.5L9.5745 13.5965C9.40621 13.7146 9.2056 13.778 9 13.778C8.7944 13.778 8.59379 13.7146 8.4255 13.5965L5.4395 11.5ZM12.7205 12.61L10.1495 14.415C9.81287 14.6514 9.41156 14.7782 9.00025 14.7782C8.58894 14.7782 8.18763 14.6514 7.851 14.415L5.2795 12.61C4.55777 12.8632 3.85198 13.1597 3.166 13.498C2.518 13.821 1.925 14.1795 1.508 14.544C1.0575 14.9375 1 15.1715 1 15.2335V17.5H17V15.2335C17 15.1715 16.9425 14.9375 16.492 14.5435C16.075 14.1795 15.482 13.821 14.8335 13.4975C14.2557 13.2129 13.6637 12.9579 13.06 12.7335C12.9347 12.6868 12.8215 12.646 12.7205 12.61Z"
                  fill="white"
                />
              </svg>
            </span>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Carers
              </h3>
              <p className="text-gray-600">
                Skilled, compassionate professionals providing tailored care
                with dignity and respect—right in the comfort of your home.
              </p>
            </div>
          </li>

          {/* 24/7 Support */}
          <li className="flex items-start ml-0 md:ml-15">
            <span className="inline-flex items-center justify-center w-12 h-12 mr-4 bg-[#F94D1C] text-white rounded-full flex-shrink-0">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 4V3H9.5V2H8.5V3H7.5V4H8.5V5H9.5V4H10.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.66 5.8835L13.649 3.0805C13.917 2.3205 13.535 1.4605 12.7345 1.207C11.805 0.912 10.285 0.5 9.00002 0.5C7.71502 0.5 6.19502 0.912 5.26502 1.207C4.46502 1.461 4.08302 2.321 4.35102 3.0805L5.34052 5.8835C5.07193 6.49239 4.9595 7.15868 5.01342 7.82199C5.06735 8.48531 5.28592 9.12468 5.64933 9.6822C6.01275 10.2397 6.50953 10.6977 7.09465 11.0148C7.67978 11.3318 8.33477 11.4979 9.00027 11.4979C9.66577 11.4979 10.3208 11.3318 10.9059 11.0148C11.491 10.6977 11.9878 10.2397 12.3512 9.6822C12.7146 9.12468 12.9332 8.48531 12.9871 7.82199C13.041 7.15868 12.9286 6.49239 12.66 5.8835ZM9.00002 1.5C7.88002 1.5 6.48552 1.869 5.56752 2.16C5.33752 2.233 5.20252 2.489 5.29402 2.748L6.30602 5.615C8.09952 5.045 9.90052 5.045 11.694 5.615L12.706 2.748C12.7975 2.489 12.6625 2.233 12.4325 2.1605C11.5145 1.869 10.1195 1.5 9.00002 1.5ZM11.903 6.7405C11.8765 6.73513 11.8499 6.7276 11.8245 6.718C9.93752 6.0105 8.06252 6.0105 6.17552 6.718C6.15001 6.72763 6.12376 6.73515 6.09702 6.7405C5.98155 7.18407 5.96926 7.6482 6.06109 8.09726C6.15292 8.54633 6.34642 8.96837 6.62675 9.33101C6.90707 9.69365 7.26676 9.98723 7.67821 10.1892C8.08966 10.3912 8.54192 10.4962 9.00027 10.4962C9.45862 10.4962 9.91088 10.3912 10.3223 10.1892C10.7338 9.98723 11.0935 9.69365 11.3738 9.33101C11.6541 8.96837 11.8476 8.54633 11.9394 8.09726C12.0313 7.6482 12.0185 7.18407 11.903 6.7405Z"
                  fill="white"
                />
                <path
                  d="M14 14.5H15V15.5H14V16.5H13V15.5H12V14.5H13V13.5H14V14.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.4395 11.5C5.4395 11.5 0 13.1965 0 15.2335V18.5H18V15.2335C18 13.1965 12.5605 11.5 12.5605 11.5L9.5745 13.5965C9.40621 13.7146 9.2056 13.778 9 13.778C8.7944 13.778 8.59379 13.7146 8.4255 13.5965L5.4395 11.5ZM12.7205 12.61L10.1495 14.415C9.81287 14.6514 9.41156 14.7782 9.00025 14.7782C8.58894 14.7782 8.18763 14.6514 7.851 14.415L5.2795 12.61C4.55777 12.8632 3.85198 13.1597 3.166 13.498C2.518 13.821 1.925 14.1795 1.508 14.544C1.0575 14.9375 1 15.1715 1 15.2335V17.5H17V15.2335C17 15.1715 16.9425 14.9375 16.492 14.5435C16.075 14.1795 15.482 13.821 14.8335 13.4975C14.2557 13.2129 13.6637 12.9579 13.06 12.7335C12.9347 12.6868 12.8215 12.646 12.7205 12.61Z"
                  fill="white"
                />
              </svg>
            </span>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                We&lsquo;re here any time, day or night. Reliable care and
                assistance whenever you need it.
              </p>
            </div>
          </li>

          {/* Assisted Living at Home */}
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-12 h-12 mr-4 bg-[#8092CD] text-white rounded-full flex-shrink-0">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 4V3H9.5V2H8.5V3H7.5V4H8.5V5H9.5V4H10.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.66 5.8835L13.649 3.0805C13.917 2.3205 13.535 1.4605 12.7345 1.207C11.805 0.912 10.285 0.5 9.00002 0.5C7.71502 0.5 6.19502 0.912 5.26502 1.207C4.46502 1.461 4.08302 2.321 4.35102 3.0805L5.34052 5.8835C5.07193 6.49239 4.9595 7.15868 5.01342 7.82199C5.06735 8.48531 5.28592 9.12468 5.64933 9.6822C6.01275 10.2397 6.50953 10.6977 7.09465 11.0148C7.67978 11.3318 8.33477 11.4979 9.00027 11.4979C9.66577 11.4979 10.3208 11.3318 10.9059 11.0148C11.491 10.6977 11.9878 10.2397 12.3512 9.6822C12.7146 9.12468 12.9332 8.48531 12.9871 7.82199C13.041 7.15868 12.9286 6.49239 12.66 5.8835ZM9.00002 1.5C7.88002 1.5 6.48552 1.869 5.56752 2.16C5.33752 2.233 5.20252 2.489 5.29402 2.748L6.30602 5.615C8.09952 5.045 9.90052 5.045 11.694 5.615L12.706 2.748C12.7975 2.489 12.6625 2.233 12.4325 2.1605C11.5145 1.869 10.1195 1.5 9.00002 1.5ZM11.903 6.7405C11.8765 6.73513 11.8499 6.7276 11.8245 6.718C9.93752 6.0105 8.06252 6.0105 6.17552 6.718C6.15001 6.72763 6.12376 6.73515 6.09702 6.7405C5.98155 7.18407 5.96926 7.6482 6.06109 8.09726C6.15292 8.54633 6.34642 8.96837 6.62675 9.33101C6.90707 9.69365 7.26676 9.98723 7.67821 10.1892C8.08966 10.3912 8.54192 10.4962 9.00027 10.4962C9.45862 10.4962 9.91088 10.3912 10.3223 10.1892C10.7338 9.98723 11.0935 9.69365 11.3738 9.33101C11.6541 8.96837 11.8476 8.54633 11.9394 8.09726C12.0313 7.6482 12.0185 7.18407 11.903 6.7405Z"
                  fill="white"
                />
                <path
                  d="M14 14.5H15V15.5H14V16.5H13V15.5H12V14.5H13V13.5H14V14.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.4395 11.5C5.4395 11.5 0 13.1965 0 15.2335V18.5H18V15.2335C18 13.1965 12.5605 11.5 12.5605 11.5L9.5745 13.5965C9.40621 13.7146 9.2056 13.778 9 13.778C8.7944 13.778 8.59379 13.7146 8.4255 13.5965L5.4395 11.5ZM12.7205 12.61L10.1495 14.415C9.81287 14.6514 9.41156 14.7782 9.00025 14.7782C8.58894 14.7782 8.18763 14.6514 7.851 14.415L5.2795 12.61C4.55777 12.8632 3.85198 13.1597 3.166 13.498C2.518 13.821 1.925 14.1795 1.508 14.544C1.0575 14.9375 1 15.1715 1 15.2335V17.5H17V15.2335C17 15.1715 16.9425 14.9375 16.492 14.5435C16.075 14.1795 15.482 13.821 14.8335 13.4975C14.2557 13.2129 13.6637 12.9579 13.06 12.7335C12.9347 12.6868 12.8215 12.646 12.7205 12.61Z"
                  fill="white"
                />
              </svg>
            </span>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Assisted Living at Home
              </h3>
              <p className="text-gray-600">
                Stay independent with help at home—from daily tasks to
                personalised support that fits your lifestyle.
              </p>
            </div>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
