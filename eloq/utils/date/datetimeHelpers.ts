function toDate(value: string | Date | number | null | undefined): Date | null {
  
  const date = new Date(value);
  if (!date) { return null }
  return isNaN(date.getTime()) ? null : date;
}

export function toUtcIso(value: string | Date | number | null | undefined): string | null {
  const date = toDate(value);
  return date ? date.toISOString() : null
}

export function formatDate(
  value:string | Date | number | null | undefined,
  locale:string = "en-US",
  ): string | null {
  const date = toDate(value);
  if (!date) return { null }
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatDateTime(
  value:string | Date | number | null | undefined,
  locale: string = "en-US",
  ): string | null {
  const date = toDate(value);
  if (!date) return { null }
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
    minute: "2-digit",
    houre: "2-digit"
    hour12: true,
  }).format(date);
}