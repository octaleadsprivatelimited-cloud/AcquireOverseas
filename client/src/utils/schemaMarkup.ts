// Schema markup utilities for structured data

export interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[];
}

export interface LocalBusinessSchema extends OrganizationSchema {
  priceRange?: string;
  openingHours?: string[];
}

export interface FAQSchema {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export interface BreadcrumbSchema {
  items: Array<{
    name: string;
    url: string;
  }>;
}

// Generate Organization Schema
export const generateOrganizationSchema = (data: OrganizationSchema) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    ...(data.address && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.address.streetAddress,
        addressLocality: data.address.addressLocality,
        addressRegion: data.address.addressRegion,
        postalCode: data.address.postalCode,
        addressCountry: data.address.addressCountry,
      },
    }),
    ...(data.contactPoint && {
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: data.contactPoint.telephone,
        contactType: data.contactPoint.contactType,
        ...(data.contactPoint.email && { email: data.contactPoint.email }),
      },
    }),
    ...(data.sameAs && { sameAs: data.sameAs }),
  };
};

// Generate Local Business Schema
export const generateLocalBusinessSchema = (data: LocalBusinessSchema) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    ...(data.address && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.address.streetAddress,
        addressLocality: data.address.addressLocality,
        addressRegion: data.address.addressRegion,
        postalCode: data.address.postalCode,
        addressCountry: data.address.addressCountry,
      },
    }),
    ...(data.contactPoint && {
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: data.contactPoint.telephone,
        contactType: data.contactPoint.contactType,
        ...(data.contactPoint.email && { email: data.contactPoint.email }),
      },
    }),
    ...(data.priceRange && { priceRange: data.priceRange }),
    ...(data.openingHours && { openingHours: data.openingHours }),
    ...(data.sameAs && { sameAs: data.sameAs }),
  };
};

// Generate FAQ Schema
export const generateFAQSchema = (data: FAQSchema) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
};

// Generate Breadcrumb Schema
export const generateBreadcrumbSchema = (data: BreadcrumbSchema) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

// Default organization data for Acquire Overseas Education
export const defaultOrganizationData: OrganizationSchema = {
  name: 'Acquire Overseas Education',
  url: 'https://acquireoverseas.in',
  logo: 'https://acquireoverseas.in/logo.png',
  description: 'Leading study abroad and visa consultancy in Hyderabad, India. Expert guidance for study in USA, UK, Canada, Australia, Germany. 98% success rate, 5000+ students helped.',
  address: {
    streetAddress: 'Hyderabad',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500000',
    addressCountry: 'IN',
  },
  contactPoint: {
    telephone: '+91-9515612909',
    contactType: 'Customer Service',
    email: 'info@acquireoverseas.in',
  },
  sameAs: [
    'https://www.facebook.com/acquireoverseas',
    'https://www.instagram.com/acquireoverseas',
    'https://www.linkedin.com/company/acquireoverseas',
  ],
};
