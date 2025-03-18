import { groq } from "next-sanity";
import { sanityFetch } from "./client";

// Query types
type MainHero = {
  tagline: string;
  primaryButton: { text: string };
  secondaryButton: { text: string };
};

type MainBackground = {
  backgroundImage: string;
};

type Services = {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image: string;
  icon?: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
  relatedServices?: Array<{
    title: string;
    link: string;
    iconName?: string;
  }>;
  heroSection?: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  };
};

type Shop = {
  _id: string;
  name: string;
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  services: string[];
  hours: string;
  contact: {
    phone: string;
    email: string;
  };
};

export type HeroShopsData = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  slides: {
    images: string[];
  }[];
};

export type PortfolioCategory = {
  _id: string;
  name: string;
  id: string; // Changed from { current: string } to string
};

export type PortfolioItem = {
  /** Unique identifier for the portfolio item */
  _id: string;
  /** Title of the portfolio item */
  title: string;
  /** Category information */
  category: {
    /** Unique identifier for the category */
    _id: string;
    /** Display name of the category */
    name: string;
    /** Slug identifier for the category */
    id: string; // Changed to match PortfolioCategory
  };
  /** Array of image URLs associated with this portfolio item */
  images: string[];
  /** URL of the main display image (typically the first image) */
  mainImage: string;
};

export interface AboutUsData {
  title: string;
  subtitle: string;
  story: string;
  marketDescription: string;
  workDescription: string;
  images: string[];
  features: {
    title: string;
    description: string;
  }[];
}

export type GridSlideData = {
  topImages: {
    src: string;
    alt: string;
    title?: string;
  }[];
  bottomImages: {
    src: string;
    alt: string;
    title?: string;
  }[];
};

export type GridSlideshowData = {
  slides: GridSlideData[];
};

export type Product = {
  _id: string;
  title: string;
  image: string;
};

// Fetch functions with types
export async function getMainHero() {
  return sanityFetch<MainHero>({
    query: groq`
      *[_type == "mainHero"][0] {
        tagline,
        primaryButton,
        secondaryButton
      }
    `,
    tags: ["mainHero"],
  });
}

export async function getMainBackground() {
  return sanityFetch<MainBackground>({
    query: groq`
      *[_type == "mainBackground"][0] {
        "backgroundImage": backgroundImage.asset->url
      }
    `,
    tags: ["mainBackground"],
  });
}

export async function getServices() {
  return sanityFetch<Services[]>({
    query: groq`
      *[_type == "service"] {
        _id,
        title,
        slug,
        description,
        "image": mainImage.asset->url,
        icon,
        features[] {
          title,
          description
        }
      }
    `,
    tags: ["services"],
  });
}

export async function getServiceBySlug(slug: string) {
  return sanityFetch<Services>({
    query: groq`
      *[_type == "service" && slug.current == $slug][0] {
        _id,
        title,
        description,
        "image": mainImage.asset->url,
        icon,
        features[] {
          title,
          description
        },
        relatedServices[]-> {
          title,
          link,
          iconName
        },
        heroSection-> {
          title,
          subtitle,
          "backgroundImage": backgroundImage.asset->url
        }
      }
    `,
    params: { slug },
    tags: [`service:${slug}`],
  });
}

export async function getShops() {
  return sanityFetch<Shop[]>({
    query: groq`
      *[_type == "shop"] {
        _id,
        name,
        location {
          address,
          coordinates {
            lat,
            lng
          }
        },
        services,
        hours,
        contact {
          phone,
          email
        }
      }
    `,
    tags: ["shops"],
  });
}

export async function getShopById(id: string) {
  return sanityFetch<Shop>({
    query: groq`
      *[_type == "shop" && _id == $id][0] {
        _id,
        name,
        location {
          address,
          coordinates {
            lat,
            lng
          }
        },
        services,
        hours,
        contact {
          phone,
          email
        }
      }
    `,
    params: { id },
    tags: [`shop:${id}`],
  });
}

export async function getHeroShops() {
  return sanityFetch<HeroShopsData>({
    query: groq`
      *[_type == "heroShops"][0] {
        title,
        subtitle,
        "backgroundImage": backgroundImage.asset->url,
        "slides": slides[] {
          "images": images[].asset->url
        }
      }
    `,
    tags: ["heroShops"],
  });
}

export async function getRelatedServices(serviceId: string) {
  return sanityFetch<Services[]>({
    query: groq`
      *[_type == "service" && _id != $serviceId] {
        _id,
        title,
        slug,
        description,
        "image": mainImage.asset->url,
        icon
      }
    `,
    params: { serviceId },
    tags: ["relatedServices"],
  });
}

export async function getFeaturedServices() {
  return sanityFetch<Services[]>({
    query: groq`
      *[_type == "service" && featured == true] {
        _id,
        title,
        slug,
        description,
        "image": mainImage.asset->url,
        icon
      }
    `,
    tags: ["featuredServices"],
  });
}

export async function getServicesByCategory(category: string) {
  return sanityFetch<Services[]>({
    query: groq`
      *[_type == "service" && category == $category] {
        _id,
        title,
        slug,
        description,
        "image": mainImage.asset->url,
        icon
      }
    `,
    params: { category },
    tags: [`services:${category}`],
  });
}

export async function getPortfolioCategories() {
  return sanityFetch<PortfolioCategory[]>({
    query: groq`
      *[_type == "portfolioCategory"] {
        _id,
        name,
        "id": id.current // Transform the slug to string in the query
      }
    `,
    tags: ["portfolio"],
  });
}

export async function getPortfolioItems() {
  return sanityFetch<PortfolioItem[]>({
    query: groq`
      *[_type == "portfolio"] {
        _id,
        title,
        category->{
          _id,
          name,
          "id": id.current // Transform the slug to string in the query
        },
        "images": images[].asset->url,
        "mainImage": images[0].asset->url
      }
    `,
    tags: ["portfolio"],
  });
}

export async function getAboutUs() {
  return sanityFetch<AboutUsData>({
    query: groq`
      *[_type == "aboutUs"][0] {
        title,
        subtitle,
        story,
        marketDescription,
        workDescription,
        "images": gallery[].asset->url,
        features[] {
          title,
          description
        }
      }
    `,
    tags: ["aboutUs"],
  });
}

export async function getGridSlideshow() {
  return sanityFetch<GridSlideshowData>({
    query: groq`
      *[_type == "gridSlideshow"][0] {
        "slides": slides[] {
          "topImages": topImages[] {
            "src": image.asset->url,
            alt,
            title
          },
          "bottomImages": bottomImages[] {
            "src": image.asset->url,
            alt,
            title
          }
        }
      }
    `,
    tags: ["gridSlideshow"],
  });
}

export async function getProducts() {
  return sanityFetch<Product[]>({
    query: groq`
      *[_type == "product"] | order(order asc) {
        _id,
        title,
        "image": image.asset->url
      }
    `,
    tags: ["products"],
  });
}
