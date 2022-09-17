import { websiteData } from "../data";

export const getExperienceData = async () => {
  const options: any = {
    year: "numeric",
    month: "long",
  };

  const date = (date: any) => {
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const result = websiteData.ExperienceCategories.map((value: any) => {
    return {
      companyName: value.companyName,
      title: value.title,
      fromDate: date(value.FromDate),
      toDate: date(value.ToDate),
      JobDescription: value.JobDescription,
    };
  });
  return result;
};

export const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};
