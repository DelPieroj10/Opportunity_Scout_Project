export interface YelpBusiness {
    id: string;
		name: string;
		url: string;
		rating: number;
		review_count: number;
		price?: string;
		location: {
			address1: string;
			city: string;
			state: string;
			zip_code: string;
		};
		categories: Array<{
			alias: string;
			title: string;
		}>[];
}

export interface YelpSearchResponse {
	businesses: YelpBusiness[];
	total: number;
}