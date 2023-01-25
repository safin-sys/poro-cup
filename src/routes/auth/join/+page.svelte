<div class="grid place-content-center h-screen">
	<h1 class="font-medium text-lg text-center">Join</h1>
	<form method="POST" class="mt-4 p-4 border rounded">
		<label class="flex flex-col">
			Email
			<input class="border mt-1 rounded p-1" name="email" type="email" required />
		</label>
		<label class="flex flex-col mt-2">
			IGN
			<input class="border mt-1 rounded p-1" name="ign" type="text" required />
		</label>
		<label class="flex flex-col mt-2">
			Role
			<select name="role" class="border mt-1 rounded p-1">
				<option value="player">Player</option>
				<option value="captain">Captain</option>
			</select>
		</label>
		<label class="flex flex-col mt-2">
			Password
			<input
				class="border mt-1 rounded p-1"
				name="password"
				type="password"
				required
			/>
		</label>
		<button class="border rounded bg-slate-100 w-full mt-4">Join</button>
	</form>
</div>
