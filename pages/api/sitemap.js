export default function handler(req, res) {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
      
      // Instructing the Vercel edge to cache the file
      res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
      
      // generate sitemap here
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      
      <!-- Homepage -->
      <url>
          <loc>https://WaveWork.in/</loc>
          <lastmod>2023-08-29</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
      </url>
      
      <!-- Privacy Policy -->
      <url>
          <loc>https://WaveWork.in/privacy-policy</loc>
          <lastmod>2023-08-29</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
      </url>
      
      <!-- Terms and Conditions -->
      <url>
          <loc>https://WaveWork.in/terms-and-conditions</loc>
          <lastmod>2023-08-29</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
      </url>
      
      <!-- Partner Terms and Conditions -->
      <url>
          <loc>https://WaveWork.in/partner-terms-and-conditions</loc>
          <lastmod>2023-08-29</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
      </url>
      
      </urlset>`
  
    res.end(xml)
  }