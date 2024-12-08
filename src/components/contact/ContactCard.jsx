import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";
import Link from "next/link";

import { useTheme } from "@/context/ThemeProvider";

const Contactcard = () => {
  const { theme } = useTheme();

  const contactDetails = [
    {
      name: "Facebook",
      icon: <FaFacebook className="hover:animate-pulse" />,
      link: "https://www.facebook.com/profile.php?id=61569188792086",
    },
    {
      name: "login.aimers@gmail.com",
      icon: <IoMail className="hover:animate-pulse" />,
      link: "mailto:login.aimers@gmail.com",
    },
    {
      name: "9810689165",
      icon: <FaPhoneAlt className="hover:animate-pulse" />,
      link: "tel:9810689165",
    },
  ];

  return (
    <div
      className="  flex  font-bold flex-col gap-5 rounded-md p-2 justify-center items-center hover:scale-105 transition-all ease-linear"
      style={{
        backgroundColor: theme.colors.surface,
        color: theme.colors.textPrimary,
      }}
    >
      {contactDetails.map((detail, index) => (
        <div key={index} className="w-full flex flex-col gap-5">
          <div className="flex w-full items-center justify-between ">
            <div className="w-full ">
              <Link
                href={detail.link}
                className="flex items-center justify-around"
              >
                {detail.icon}
                <h1 className="font-semi-bold">{detail.name}</h1>
              </Link>
            </div>
          </div>
          <div
            className="w-full h-[1px] "
            style={{ backgroundColor: theme.colors.textPrimary }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Contactcard;
