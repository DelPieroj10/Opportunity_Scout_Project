import { Request, Response } from 'express'
import { YelpSearchResponse } from '../types/yelp.types';


export async function searchBusinesses(req: Request, res: Response): Promise<void> {
  const { term, location } = req.query;

  if (typeof term !== 'string' || typeof location !== 'string') {
    res.status(400).json({ error: "Missing 'term' or 'location' query params" });
    return;
  }

  try {
    const url = new URL('https://api.yelp.com/v3/businesses/search');
    url.searchParams.append('term', term);
    url.searchParams.append('location', location);
    url.searchParams.append('limit', "10");

    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${process.env.YELP_API_KEY}`,
        },
    });

    if (!response.ok) {
      const errorBody = await response.json();
      res.status(response.status).json({ error: errorBody });
      return;
    }

    const data: YelpSearchResponse = await response.json();
    res.json(data);

  } catch (error) {
    console.error('Yelp API Error:', error);
    res.status(500).json({ error: "Failed to search data from Yelp" });
  }
}
