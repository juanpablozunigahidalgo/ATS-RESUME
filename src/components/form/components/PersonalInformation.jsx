import React, {useContext} from "react";
import {ResumeContext} from "../../builder";
import { resolveAssetUrl } from "../../utility/resumeJson";

const PersonalInformation = ({}) => {
  const {resumeData, handleProfilePicture, handleChange} =
    useContext(ResumeContext);
  const photoSrc = resolveAssetUrl(resumeData.profilePicture);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Personal Information</h2>
      {photoSrc && (
        <div className="flex items-center gap-3 mb-2">
          <img
            src={photoSrc}
            alt={resumeData.name || "Profile"}
            className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
          />
          <p className="text-white text-sm">
            Profile photo is visible on the CV. Choose a new file to replace it.
          </p>
        </div>
      )}
      <div className="grid-4">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className="pi"
          value={resumeData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Job Title"
          name="position"
          className="pi"
          value={resumeData.position}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Contact Information"
          name="contactInformation"
          className="pi"
          value={resumeData.contactInformation}
          onChange={handleChange}
          minLength="8"
          maxLength="30"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="pi"
          value={resumeData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          className="pi"
          value={resumeData.address}
          onChange={handleChange}
        />
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          className="profileInput"
          onChange={handleProfilePicture}
          placeholder="Profile Picture"
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
