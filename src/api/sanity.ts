import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'your_project_id', // Replace with your project ID
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}

// Example fetch function
export async function getProjects() {
    const projects = await client.fetch(`*[_type == "project"]{
    title,
    description,
    "image": image.asset->url,
    tags,
    link,
    github
  }`);
    return projects;
}
