import ContactInfo from "../components/ContactInfo";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { resolveAssetUrl } from "../../utility/resumeJson";
import ProfilePhoto from "../../utility/ProfilePhoto";

const toHref = (link) => {
  if (!link) return "#";
  if (link.startsWith("http://") || link.startsWith("https://")) {
    return link;
  }
  return `https://${link}`;
};

const Header = ({ resumeData, icons }) => {
  const photoSrc = resolveAssetUrl(resumeData.profilePicture);
  const hasPhoto = Boolean(photoSrc);

  const identity = (
    <div className="min-w-0 f-col items-start">
      <h1 className="name">{resumeData.name}</h1>
      <p className="profession">{resumeData.position}</p>

      <ContactInfo
        mainclass="flex flex-row flex-wrap gap-x-2 gap-y-0.5 mb-1 contact"
        linkclass="inline-flex items-center gap-1"
        teldata={resumeData.contactInformation}
        emaildata={resumeData.email}
        addressdata={resumeData.address}
        telicon={<MdPhone />}
        emailicon={<MdEmail />}
        addressicon={<MdLocationOn />}
      />

      <div className="flex flex-wrap gap-x-3 gap-y-0.5">
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
              {toHref(socialMedia.link)}
            </a>
          );
        })}
      </div>
    </div>
  );

  if (!hasPhoto) {
    return <header className="mb-1 f-col items-center">{identity}</header>;
  }

  return (
    <header className="resume-header mb-1 grid grid-cols-3 gap-6 items-center">
      <div className="col-span-1 flex justify-center">
        <ProfilePhoto
          resumeData={resumeData}
          className="profile-photo h-[11.385rem] w-[11.385rem]"
        />
      </div>
      <div className="col-span-2">{identity}</div>
    </header>
  );
};

export default Header;
