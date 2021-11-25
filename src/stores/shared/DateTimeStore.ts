import { readable, Readable } from "svelte/store";

// Start is called when the store gets it's first subscriber
// Stop is called when the last subscriber unsubscribes
// https://svelte.dev/tutorial/readable-stores
export const dateStore: Readable<Date> = readable(
  new Date(),
  function start(set) {
    const interval = setInterval(() => {
      set(new Date());
    }, 1000);

    return function stop() {
      clearInterval(interval);
    };
  }
);

export let locale: string = "en-EN";

export function getTimeWithoutSecondsAsString(date: Date): string {
  return date.toLocaleTimeString().slice(0, -3);
}

export function getDateString(date: Date): string {
  return date.toLocaleDateString();
}

export function getDayOfWeekString(
  date: Date,
  format: "short" | "long" | "narrow" = "long"
): string {
  return date.toLocaleDateString(locale, { weekday: format });
}

export function getMonthOfYearString(
  date: Date,
  format: "short" | "long" | "narrow" = "long"
): string {
  return date.toLocaleDateString(locale, { month: format });
}

export function getDayOfMonth(date: Date) {
  return date.getDate();
}
