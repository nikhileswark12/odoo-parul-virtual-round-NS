/**
 * Antique chart / atlas palette — ink, sea teal, tarnished metals, dusty jewel tones.
 * Used by city banners and explore cards so the UI reads as one navigational motif.
 */

const CITY_BANNER_STOPS: Record<string, string> = {
  default: '#332319, #684b35',
  'hill-station': '#4d3626, #8e6f57',
  beach: '#75665a, #a8917c',
  heritage: '#5f5248, #8b6914',
  tropical: '#543e2a, #7d6246',
  desert: '#6b4818, #8b6914',
  wildlife: '#42362b, #7a6652',
  metro: '#362e28, #5f5248',
};

export function cityBannerGradient(type?: string): string {
  const pair = CITY_BANNER_STOPS[type || ''] ?? CITY_BANNER_STOPS.default;
  return `linear-gradient(135deg, ${pair})`;
}

export const TRIP_CARD_ROTATION_GRADIENTS = [
  'linear-gradient(135deg, var(--sky-700), var(--accent))',
  'linear-gradient(135deg, var(--sky-500), color-mix(in srgb, var(--accent-brass) 42%, var(--accent)))',
  'linear-gradient(135deg, var(--accent), var(--sky-600))',
] as const;

