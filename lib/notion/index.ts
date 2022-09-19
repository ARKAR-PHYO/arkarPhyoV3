import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId: any) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "FromDate",
        direction: "descending",
      },
    ],
  });
  return response.results;
};

export const getExpData = async (databaseId: any) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "FromDate",
        direction: "descending",
      },
    ],
  });
  const options: any = {
    year: "numeric",
    month: "long",
  };

  const date = (date: any) => {
    const dada = new Date(date).toLocaleDateString("en-US", options);
    return dada;
  };

  const responseResults = response.results.map((value: any) => {
    return {
      id: value.id,
      companyName: value.properties.CompanyName.title[0]?.plain_text,
      title: value.properties.Title.rich_text[0].plain_text,
      employmentTypes: value.properties.EmploymentTypes.select.name,
      jobDescription: value.properties.JobDescription.rich_text,
      fromDate: date(value.properties.FromDate.date.start),
      created_time: date(value.properties.Created_time.created_time),
      toDate: date(value.properties.ToDate.date?.start),
    };
  });
  return responseResults;
};

export const getProjectData = async (databaseId: any) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  const results = response.results.map((value: any) => {
    return {
      id: value.id,
      projectName: value.properties.projectName.title[0]?.plain_text,
      projectSummary: value.properties.projectSummary.rich_text[0]?.plain_text,
      projectTags: value.properties.projectTags.multi_select,
      projectLink: value.properties.projectLink.url,
      projectCover: value.properties.projectCover.files[0]?.file.url,
      isFeatured: value.properties.isFeatured.checkbox,
    };
  });
  return results;
};

export const getPage = async (pageId: any) => {
  const response = await notion.pages.retrieve({
    page_id: pageId,
  });
  return response;
};

export const getBlocks = async (blockId: string) => {
  const blocks = [];
  let cursor: any;
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
};

export const setSession = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(key, value);
  }
};

export const getSession = (key: any) => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem(key);
  }
};

export const getSomeData = async (value: string) => {
  if (value) {
    return value;
  } else {
    return "not value";
  }
};
