export default {
	async fetch(request: Request): Promise<Response> {
		const pathAndParams = request.url.replace('https://', '').split('/').slice(1).join('/');
		const ghRequest = new Request(`https://github.com/${pathAndParams}`, request);
		return fetch(ghRequest);
	},
};
