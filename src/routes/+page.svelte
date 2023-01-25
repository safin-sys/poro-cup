<script lang="ts">
	// import { db } from "$lib/firebase";
	// import { collection, getDocs } from "firebase/firestore";

	// const getDB = async () => {
	// 	let data: any = [];
	// 	const snapshot = await getDocs(collection(db, "users"));
	// 	snapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
	// 	return data;
	// };

	// getDB().then((res) => console.log(res));
</script>

<div class="bg-black text-white h-screen w-screen grid place-content-center">
	<h1>Home</h1>
	<a href="/auth/login">Login</a>
	<a href="/auth/join">Join</a>
</div>
