import { clearArbitgoStorage, getItem, setItem, BUMPER_SESSION_KEY } from "./storage";
import { seedMap, SEED_VERSION } from "./dummyData";

export function initStorage() {
	const version = getItem("seedVersion", null);
	if (version === SEED_VERSION) return;

	Object.entries(seedMap).forEach(([key, value]) => {
		setItem(key, value);
	});
	setItem("seedVersion", SEED_VERSION);
}

/** Wipe demo data, reseed, clear bumper flag, reload into intro → dashboard */
export function resetDemo() {
	clearArbitgoStorage();
	Object.entries(seedMap).forEach(([key, value]) => {
		setItem(key, value);
	});
	setItem("seedVersion", SEED_VERSION);
	sessionStorage.removeItem(BUMPER_SESSION_KEY);
	window.location.assign("/");
}
