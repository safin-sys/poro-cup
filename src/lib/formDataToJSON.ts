const formDataToJSON = async (request: Request) => {
	const hashmap = new Map();
	const formData = await request.formData();
	formData.forEach((value, key) => {
		hashmap.set(key, value);
	});
	return Object.fromEntries(hashmap);
};

export default formDataToJSON;
