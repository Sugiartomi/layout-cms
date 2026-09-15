const PREFIX = "arbitgo.";

export function getItem(key, fallback = null) {
	try {
		const raw = localStorage.getItem(PREFIX + key);
		if (raw == null) return fallback;
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}

export function setItem(key, value) {
	localStorage.setItem(PREFIX + key, JSON.stringify(value));
	window.dispatchEvent(new CustomEvent("arbitgo-storage", { detail: { key } }));
	return value;
}

export function updateItem(key, updater, fallback = []) {
	const current = getItem(key, fallback);
	const next = typeof updater === "function" ? updater(current) : updater;
	return setItem(key, next);
}

export function removeItem(key) {
	localStorage.removeItem(PREFIX + key);
}

export function uid(prefix = "id") {
	return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function clearArbitgoStorage() {
	const keys = [];
	for (let i = 0; i < localStorage.length; i += 1) {
		const key = localStorage.key(i);
		if (key && key.startsWith(PREFIX)) keys.push(key);
	}
	keys.forEach((key) => localStorage.removeItem(key));
}

export const BUMPER_SESSION_KEY = "arbitgo.bumperDone";
