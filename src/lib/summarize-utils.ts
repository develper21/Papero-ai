export function extractTag(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>(.*?)<\\/${tag}>`, "is");
  const match = xml.match(regex);
  return match ? match[1].replace(/<[^>]+>/g, "").trim() : "";
}

export function extractAuthors(xml: string): string[] {
  const authorBlocks = xml.match(/<Author[^>]*>.*?<\/Author>/gis) || [];
  return authorBlocks
    .map((block) => {
      const last = extractTag(block, "LastName");
      const first = extractTag(block, "ForeName");
      return `${first} ${last}`.trim();
    })
    .filter(Boolean);
}

export function stripMarkdownFences(text: string): string {
  const trimmedText = text.trim();
  return trimmedText
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}
