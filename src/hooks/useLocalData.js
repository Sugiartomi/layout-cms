import { useCallback, useEffect, useState } from "react";
import { getItem, setItem, updateItem } from "../data/storage";

export default function useLocalData(key, fallback) {
	const [data, setData] = useState(() => getItem(key, fallback));

	useEffect(() => {
		const sync = (e) => {
			if (e.type === "storage" || !e.detail || e.detail.key === key) {
				setData(getItem(key, fallback));
			}
		};
		window.addEventListener("arbitgo-storage", sync);
		window.addEventListener("storage", sync);
		return () => {
			window.removeEventListener("arbitgo-storage", sync);
			window.removeEventListener("storage", sync);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [key]);

	const save = useCallback(
		(next) => {
			const current = getItem(key, fallback);
			const value = typeof next === "function" ? next(current) : next;
			setItem(key, value);
			setData(value);
			return value;
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[key]
	);

	const patch = useCallback(
		(updater) => {
			const value = updateItem(key, updater, fallback);
			setData(value);
			return value;
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[key]
	);

	return [data, save, patch];
}
