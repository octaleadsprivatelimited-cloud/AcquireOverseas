import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = 'https://acquireoverseas.in/favicon.png',
  ogType = 'website',
  canonicalUrl,
  noindex = false
}) => {
  useEffect(() => {
    const baseTitle = 'Acquire Overseas Education';
    const baseDescription = 'Leading study abroad and visa consultancy in Hyderabad, India. Expert guidance for study in USA, UK, Canada, Australia, Germany. 98% success rate, 5000+ students helped.';
    const baseKeywords = 'study abroad consultancy Hyderabad, visa consultancy Hyderabad, education consultancy India, study in USA, study in UK, study in Canada, study in Australia, student visa services Hyderabad';

    // Update title
    if (title) {
      document.title = `${title} | ${baseTitle}`;
    }

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const selector = isProperty ? `property="${property}"` : `name="${property}"`;
      let element = document.querySelector(`meta[${selector}]`) as HTMLMetaElement;
      
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

    // Update description
    updateMetaTag('description', description || baseDescription);
    updateMetaTag('og:description', description || baseDescription, true);
    updateMetaTag('twitter:description', description || baseDescription, true);

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

    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Update robots
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Update og:url
    const currentUrl = canonicalUrl || window.location.href;
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('twitter:url', currentUrl, true);
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, noindex]);

  return null;
};

export default SEO;

