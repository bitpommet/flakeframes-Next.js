import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSImage, 
  MicroCMSListContent,
  MicroCMSQueries,
} from "microcms-js-sdk";

export type Blog = {
  title: string;
  description: string;
  content: string;
  tags: TagLink;
  eyecatch: MicroCMSImage;
} & MicroCMSListContent;

export type TagLink = {
  name: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client
  .getList<Blog>({
    endpoint: "blog",
    queries,
  });
  return listData;
};

