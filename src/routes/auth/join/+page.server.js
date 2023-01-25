import { auth } from "$lib/firebase";
import formDataToJSON from "$lib/formDataToJSON";
import { createUserWithEmailAndPassword } from "firebase/auth";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const json = await formDataToJSON(request);
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				json.email,
				json.password
			);
			console.log(user);
		} catch (error) {
			console.error(error);
		}
	}
};
