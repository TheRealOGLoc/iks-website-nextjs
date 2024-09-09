import { Metadata } from "next";

export function GenerateMetaData(seoData: { [key: string]: any }) {
  const metadata: Metadata = {
    title: seoData.title,
  };
  const other: Record<string, string> = {};

  seoData.metaTag.forEach((tag: { attribute: string, content: string }) => {
    if (tag.attribute === 'description') {
      metadata.description = tag.content;
    } else if (tag.attribute === 'keywords') {
      metadata.keywords = tag.content;
    } else {
      other[tag.attribute] = tag.content;
    }
  });

  if (Object.keys(other).length > 0) {
    metadata.other = other;
  }

  if (seoData.canonical) {
    metadata.alternates = {
      canonical: seoData.canonical,
    };
  }

  if (seoData.openGraph) {
    metadata.openGraph = {
      title: seoData.openGraph.title,
      description: seoData.openGraph.description,
      type: seoData.openGraph.type,
      url: seoData.openGraph.url,
      siteName: seoData.openGraph.siteName,
      images: seoData.openGraph.images?.data.map((image: any) => ({
        url: image.attributes.formats.large.url,
        alt: image.attributes.name,
      })),
    };
  }

  return metadata
}