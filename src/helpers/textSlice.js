export function useTextLessener(text, n) {
  const textDots = text.length > n ? "..." : "";

  return text.slice(0, n) + textDots;
}
