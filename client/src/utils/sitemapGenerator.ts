// Sitemap generator utility
// This generates a sitemap with all indexable pages

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://acquireoverseas.in';
  const currentDate = new Date().toISOString().split('T')[0];

  // Define all indexable pages
  const urls: SitemapUrl[] = [
    // Main Pages - High Priority
    { loc: '/', lastmod: currentDate, changefreq: 'weekly', priority: 1.0 },
    { loc: '/your-trusted-education-partner', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/comprehensive-education-solutions', lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: '/lets-start-your-journey', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/our-portfolio', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/blog-resources', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { loc: '/success-stories', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/frequently-asked-questions', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/build-your-career-with-us', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    
    // Study Abroad Pages - High Priority
    { loc: '/guide-to-study-abroad', lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: '/study-abroad-benefits', lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: '/guide-for-parents', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/cost-to-study-abroad', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/scholarships-to-study-abroad', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/studying-abroad-faqs', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    
    // Education Services - High Priority
    { loc: '/study-abroad-programs', lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: '/university-selection', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/course-selection', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/application-support', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/student-visa-extension-services', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    
    // Consultation Services
    { loc: '/education-consultation', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: '/career-counseling-services', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/academic-profile-assessment', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/document-preparation-services', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    
    // Legal Pages
    { loc: '/privacy-policy', lastmod: currentDate, changefreq: 'yearly', priority: 0.5 },
    { loc: '/terms-of-service', lastmod: currentDate, changefreq: 'yearly', priority: 0.5 },
    
    // Legacy Routes for Backward Compatibility
    { loc: '/about', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/services', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/portfolio', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/blog', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { loc: '/testimonials', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/careers', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/contact', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/faq', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/study-visa', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/immigration-consultation', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/job-placement', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/skill-assessment', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/document-attestation', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { loc: '/visa-extension', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
  ];

  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

// Function to add blog posts to sitemap
export const addBlogPostsToSitemap = (sitemapXml: string, blogPosts: Array<{ slug: string; date: string }>): string => {
  const baseUrl = 'https://acquireoverseas.in';
  
  // Remove closing tag
  let xml = sitemapXml.replace('</urlset>', '');
  
  // Add blog posts
  blogPosts.forEach(post => {
    const lastmod = new Date(post.date).toISOString().split('T')[0];
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};
