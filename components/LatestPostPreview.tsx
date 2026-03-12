import { client } from "@/sanity/lib/client";
import { allPostsQuery } from "@/sanity/lib/queries";
import LatestPostPreviewClient from "./LatestPostPreviewClient";

export default async function LatestPostPreview() {
  const posts = await client.fetch(allPostsQuery);
  if (!posts?.length) return null;

  const [featured, ...rest] = posts.slice(0, 4);

  return <LatestPostPreviewClient featured={featured} rest={rest} />;
}
