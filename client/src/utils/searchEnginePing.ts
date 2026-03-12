// Search Engine Ping Utility
// Automatically notify search engines when new content is published

const SEARCH_ENGINE_PING_URLS = {
  google: 'https://www.google.com/ping?sitemap=',
  bing: 'https://www.bing.com/ping?sitemap=',
};

export const pingSearchEngines = async (sitemapUrl: string): Promise<void> => {
  const pingPromises = Object.entries(SEARCH_ENGINE_PING_URLS).map(([engine, baseUrl]) => {
    const pingUrl = `${baseUrl}${encodeURIComponent(sitemapUrl)}`;
    
    return fetch(pingUrl, {
      method: 'GET',
      mode: 'no-cors', // CORS may not be supported, use no-cors
    })
      .then(() => {
        console.log(`✅ Pinged ${engine} successfully`);
      })
      .catch((error) => {
        console.warn(`⚠️ Failed to ping ${engine}:`, error);
      });
  });

  await Promise.allSettled(pingPromises);
};

// Submit URL to Google Indexing API (requires API key)
export const submitToGoogleIndexing = async (
  url: string,
  apiKey?: string
): Promise<boolean> => {
  if (!apiKey) {
    console.warn('Google Indexing API key not provided');
    return false;
  }

  try {
    const response = await fetch(
      `https://indexing.googleapis.com/v3/urlNotifications:publish?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url,
          type: 'URL_UPDATED',
        }),
      }
    );

    if (response.ok) {
      console.log(`✅ Submitted ${url} to Google Indexing API`);
      return true;
    } else {
      console.warn(`⚠️ Failed to submit ${url} to Google Indexing API`);
      return false;
    }
  } catch (error) {
    console.error('Error submitting to Google Indexing API:', error);
    return false;
  }
};

// Notify search engines about new or updated page
export const notifySearchEngines = async (
  _pageUrl: string,
  sitemapUrl: string = 'https://acquireoverseas.in/sitemap.xml'
): Promise<void> => {
  // Ping search engines about sitemap update
  await pingSearchEngines(sitemapUrl);
  
  // Optionally submit individual URL to Google Indexing API
  // This requires API key setup
  // await submitToGoogleIndexing(_pageUrl, process.env.GOOGLE_INDEXING_API_KEY);
};
