export default function SEOquery() {
  const query = {
    populate: {
      components: {
        populate: {
          chartset: "*",
          title: "*",
          metaTag: "*",
          canonical: "*"
        },
      },
    },
  };
  return query
}