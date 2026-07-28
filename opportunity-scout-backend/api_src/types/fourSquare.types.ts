
export interface FourSquareCategory {
	id: number;
	name: string;
	icon: {
		prefix: string;
		suffix: string;
	};
}

export interface FourSquareLocation {
  address?: string;
  locality?: string;
  region?: string;
  postcode?: string;
  country: string;
  formatted_address: string[];
}


export interface FourSquareBusiness {
    psq_place_id: string;
		name: string;
		categories: FourSquareCategory[];
		location?: FourSquareLocation;
    latitude?: number;
    longitude?: number;
    distance?: number;
    tel: string;
    website: string;
    link: string;
}

export interface FourSquareSearchResponse {
	businesses: FourSquareBusiness[];
}