//global.serviceURL = 'http://ehrc-dev.iiitb.ac.in/hitham/webapi/recording';
export function encryptme(pass) {
	var hash = 0;
	for (let i = 0; i < pass.length; i++) {
		char = pass.charCodeAt(i);
		hash = ((hash << 5) - hash) + char;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash;
}
