import { Request, Response } from 'express'
import { FourSquareSearchResponse } from '../types/fourSquare.types';


const FOURSQUARE_API_URL = 'https://places-api.foursquare.com/places/search';

export async function searchBusinesses(req: Request, res: Response): Promise<void> {
  const { term, location } = req.query;

  if (typeof term !== 'string' || typeof location !== 'string') {
    res.status(400).json({ error: "Missing 'term' or 'location' query params" });
    return;
  }

  try {
    const url = new URL(FOURSQUARE_API_URL);
    url.searchParams.append('query', term);
    url.searchParams.append('near', location);
    url.searchParams.append('limit', "10");

    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${process.env.FOURSQUARE_API_KEY}`,
            'X-Places-Api-Version': '2025-06-17'
        },
    });

    if (!response.ok) {
      const errorBody = await response.json();
      res.status(response.status).json({ error: errorBody });
      return;
    }

    const data: FourSquareSearchResponse = await response.json();
    res.json(data);

  } catch (error) {
    console.error('FourSquare API Error:', error);
    res.status(500).json({ error: "Failed to search data from FourSquare" });
  }
}
