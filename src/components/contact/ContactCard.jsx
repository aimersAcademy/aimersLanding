import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import { useTheme } from "@/context/ThemeProvider";

const ContactCard = () => {
  const { theme } = useTheme();

  const contactDetails = [
    {
      name: "Facebook",
      icon: <FaFacebook className="text-lg" />,
      link: "https://www.facebook.com/profile.php?id=61569188792086",
    },
    {
      name: "login.aimers@gmail.com",
      icon: <IoMail className="text-lg" />,
      link: "mailto:login.aimers@gmail.com",
    },
    {
      name: "9810689165 , 9843521965",
      icon: <FaPhoneAlt className="text-lg" />,
      link: "tel:9810689165",
    },
  ];

  return (
    <div
      className="flex flex-col gap-4 rounded-lg p-6 w-full max-w-md shadow-md transition-transform transform hover:scale-105"
      style={{
        backgroundColor: theme.colors.surface,
        color: theme.colors.textPrimary,
      }}
    >
      {contactDetails.map((detail, index) => (
        <Link
          key={index}
          href={detail.link}
          className="flex items-center gap-4 py-3 hover:bg-opacity-5 hover:shadow-md transition-all rounded-lg"
          style={{ color: theme.colors.textPrimary }}
        >
          {/* Icon aligned to the left */}
          <div
            className="flex justify-center items-center w-12 h-12 rounded-full"
            style={{
              backgroundColor: theme.colors.background,
              color: theme.colors.textPrimary,
            }}
          >
            {detail.icon}
          </div>

          {/* Contact detail text */}
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold">{detail.name}</h1>
            <span className="text-sm font-light">
              {detail.name.includes("@") ? "Email us" : "Reach us"}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ContactCard;
