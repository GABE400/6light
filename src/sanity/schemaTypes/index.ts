import { type SchemaTypeDefinition } from "sanity";
import product from "./product";
// import service from "./service";
import shop from "./shop";
// import feature from "./feature";
import relatedService from "./relatedService";
// import heroSection from "./heroSection";
import mainHero from "./mainHero";
import heroShops from "./heroShops";
import mainBackground from "./mainBackground";
import portfolio from "./portfolio";
import portfolioCategory from "./portfolioCategory";
import aboutUs from "./aboutUs";
import gridSlideshow from "./gridSlideshow";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    product,
    // service,
    shop,
    // feature,
    relatedService,
    // heroSection,
    mainHero,
    heroShops,
    mainBackground,
    portfolio,
    portfolioCategory,
    aboutUs,
    gridSlideshow,
  ],
};
