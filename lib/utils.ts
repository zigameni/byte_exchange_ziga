import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const diffMs = Date.now() - createdAt.getTime();
  const seconds = Math.floor(diffMs / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
};


export const formatNumber = (num: number): string => {
  const format = (value: number, divisor: number, suffix: string) => {
    const divided = value / divisor;
    const truncated = Math.floor(divided * 10) / 10; // Truncate to 1 decimal without rounding
    return truncated % 1 === 0
        ? `${truncated.toFixed(0)}${suffix}`
        : `${truncated.toFixed(1)}${suffix}`;
  };

  if (num >= 1e9) return format(num, 1e9, 'B');
  if (num >= 1e6) return format(num, 1e6, 'M');
  if (num >= 1e3) return format(num, 1e3, 'K');
  return num.toString();
};