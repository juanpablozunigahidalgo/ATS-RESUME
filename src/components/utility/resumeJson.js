export const orderResumeData = (data) => {
  if (!data || typeof data !== "object") {
    return data;
  }

  return {
    name: data.name ?? "",
    position: data.position ?? "",
    contactInformation: data.contactInformation ?? "",
    email: data.email ?? "",
    address: data.address ?? "",
    profilePicture: data.profilePicture ?? "",
    socialMedia: Array.isArray(data.socialMedia)
      ? data.socialMedia.map((item) => ({
          socialMedia: item.socialMedia ?? "",
          link: item.link ?? "",
        }))
      : [],
    summary: data.summary ?? "",
    education: Array.isArray(data.education)
      ? data.education.map((item) => ({
          school: item.school ?? "",
          degree: item.degree ?? "",
          startYear: item.startYear ?? "",
          endYear: item.endYear ?? "",
        }))
      : [],
    workExperience: Array.isArray(data.workExperience)
      ? data.workExperience.map((item) => ({
          company: item.company ?? "",
          position: item.position ?? "",
          startYear: item.startYear ?? "",
          endYear: item.endYear ?? "",
          description: item.description ?? "",
          keyAchievements: item.keyAchievements ?? "",
          tools: item.tools ?? "",
        }))
      : [],
    projects: Array.isArray(data.projects)
      ? data.projects.map((item) => ({
          name: item.name ?? "",
          link: item.link ?? "",
          startYear: item.startYear ?? "",
          endYear: item.endYear ?? "",
          description: item.description ?? "",
          keyAchievements: item.keyAchievements ?? "",
        }))
      : [],
    skills: Array.isArray(data.skills)
      ? data.skills.map((item) => ({
          title: item.title ?? "",
          skills: Array.isArray(item.skills) ? item.skills : [],
        }))
      : [],
    languages: Array.isArray(data.languages) ? [...data.languages] : [],
    certifications: Array.isArray(data.certifications)
      ? [...data.certifications]
      : [],
  };
};

export const formatResumeJson = (data) =>
  JSON.stringify(orderResumeData(data), null, 2);

export const resolveAssetUrl = (src) => {
  if (!src) {
    return src;
  }
  if (
    src.startsWith("data:") ||
    src.startsWith("http://") ||
    src.startsWith("https://")
  ) {
    return src;
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${src.startsWith("/") ? src : `/${src}`}`;
};
