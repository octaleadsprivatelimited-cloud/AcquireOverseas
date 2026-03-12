import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  schema?: object;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = 'https://acquireoverseas.in/logo.png',
  ogType = 'website',
  canonicalUrl,
  noindex = false,
  schema,
  breadcrumbs
}) => {
  useEffect(() => {
    const baseTitle = 'Acquire Overseas Education';
    const baseDescription = 'Leading study abroad and visa consultancy in Hyderabad, India. Expert guidance for study in USA, UK, Canada, Australia, Germany. 98% success rate, 5000+ students helped.';
    const baseKeywords = 'study abroad consultancy Hyderabad, visa consultancy Hyderabad, education consultancy India, study in USA, study in UK, study in Canada, study in Australia, student visa services Hyderabad';
    const baseUrl = 'https://acquireoverseas.in';

    // Get clean canonical URL (remove query params and hash)
    const getCleanCanonicalUrl = () => {
      if (canonicalUrl) {
        return canonicalUrl;
      }
      // Get current path without query params or hash
      const path = window.location.pathname;
      return `${baseUrl}${path}`;
    };

    const finalCanonicalUrl = getCleanCanonicalUrl();

    // Update title
    if (title) {
      document.title = `${title} | ${baseTitle}`;
    }

    // Remove all existing canonical tags first to avoid duplicates
    const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');
    existingCanonicals.forEach(canonical => canonical.remove());

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      let element: HTMLMetaElement | null = null;
      
      if (isProperty) {
        element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      } else {
        element = document.querySelector(`meta[name="${property}"]`) as HTMLMetaElement;
      }
      
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update description - always update even if it exists
    const finalDescription = description || baseDescription;
    
    // Ensure description meta tag exists and is updated
    let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', finalDescription);
    
    // Update Open Graph and Twitter descriptions
    updateMetaTag('og:description', finalDescription, true);
    updateMetaTag('twitter:description', finalDescription, true);
    updateMetaTag('twitter:card', 'summary_large_image', true);

    // Update keywords
    if (keywords) {
      updateMetaTag('keywords', `${baseKeywords}, ${keywords}`);
    }

    // Update Open Graph tags
    if (title) {
      updateMetaTag('og:title', `${title} | ${baseTitle}`, true);
      updateMetaTag('twitter:title', `${title} | ${baseTitle}`, true);
    }
    
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('twitter:image', ogImage, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', baseTitle, true);
    updateMetaTag('og:locale', 'en_IN', true);

    // Always set canonical URL (required for SEO)
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', finalCanonicalUrl);
    document.head.appendChild(canonical);

    // Update robots - ensure indexable pages are properly marked
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Update og:url
    updateMetaTag('og:url', finalCanonicalUrl, true);
    updateMetaTag('twitter:url', finalCanonicalUrl, true);

    // Add schema markup
    const removeExistingSchema = () => {
      const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
      existingSchemas.forEach(schema => schema.remove());
    };

    removeExistingSchema();

    // Add breadcrumb schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url
        }))
      };
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(breadcrumbScript);
    }

    // Add custom schema if provided
    if (schema) {
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.text = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, noindex, schema, breadcrumbs]);

  return null;
};

export default SEO;

