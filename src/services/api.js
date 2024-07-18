import { contentfulClient } from "../lib/contentful";

export const getCars = async () => {
  const res = await contentfulClient.getEntries({
    content_type: "gutisClasicCars",
  });
  return res.items;
};

export const getCar = async (slug) => {
  const res = await getCars();
  const car = res.find((car) => car.fields.slug === slug);
  return car;
};
