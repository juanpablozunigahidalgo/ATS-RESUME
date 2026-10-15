import Image from "next/image";
import ContactInfo from "../components/ContactInfo";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const toHref = (link) => {
  if (!link) return "#";
  if (link.startsWith("http://") || link.startsWith("https://")) {
    return link;
  }
  return `https://${link}`;
};

const withBase = (src) => {
  if (!src) return src;
  if (src.startsWith("data:") || src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${src.startsWith("/") ? src : `/${src}`}`;
};

const Header = ({ resumeData, icons }) => {
  const hasPhoto = resumeData.profilePicture && resumeData.profilePicture.length > 0;

  return (
    <header className={`mb-1 ${hasPhoto ? "flex flex-row items-center gap-4" : "f-col items-center"}`}>
      {hasPhoto && (
        <div className="profile-photo shrink-0 w-28 h-28 rounded-full overflow-hidden border-2 border-blue-700">
          <Image
            src={withBase(resumeData.profilePicture)}
            alt={`${resumeData.name}, ${resumeData.position}`}
            width={112}
            height={112}
            className="object-cover object-center h-full w-full"
            unoptimized
          />
        </div>
      )}

      <div className={`min-w-0 ${hasPhoto ? "flex-1 f-col items-start" : "f-col items-center w-full"}`}>
        <h1 className="name">{resumeData.name}</h1>
        <p className="profession">{resumeData.position}</p>

        <ContactInfo
          mainclass={`flex flex-row flex-wrap gap-x-2 gap-y-0.5 mb-1 contact ${hasPhoto ? "" : "justify-center"}`}
          linkclass="inline-flex items-center gap-1"
          teldata={resumeData.contactInformation}
          emaildata={resumeData.email}
          addressdata={resumeData.address}
          telicon={<MdPhone />}
          emailicon={<MdEmail />}
          addressicon={<MdLocationOn />}
        />

        <div className={`flex flex-wrap gap-x-3 gap-y-0.5 ${hasPhoto ? "" : "justify-center"}`}>
          {resumeData.socialMedia.map((socialMedia, index) => {
            return (
              <a
                href={toHref(socialMedia.link)}
                aria-label={socialMedia.socialMedia}
                key={index}
                title={socialMedia.socialMedia}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 social-media"
              >
                {icons.map((icon, iconIndex) => {
                  if (icon.name === socialMedia.socialMedia.toLowerCase()) {
                    return <span key={iconIndex}>{icon.icon}</span>;
                  }
                })}
                {socialMedia.link}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
