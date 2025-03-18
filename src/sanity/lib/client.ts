import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// Default fetch options for Sanity client
const defaultFetchOptions = {
  next: { revalidate: 10 }, // Cache for 10 seconds
};

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

// Enhanced fetch method with revalidation
export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: object;
  tags?: string[];
}): Promise<T> {
  return client.fetch(query, params, {
    ...defaultFetchOptions,
    ...(tags?.length > 0 && { next: { tags } }),
  });
}
