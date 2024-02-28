import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "jsrn3faz",
  dataset: "production",
  apiVersion: "2023-11-23",
  useCdn: true,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
