import assert from "node:assert/strict";
import test from "node:test";

import {
  extractAuthors,
  extractTag,
  stripMarkdownFences,
} from "../src/lib/summarize-utils.ts";

test("extractTag returns trimmed text and removes nested XML tags", () => {
  assert.equal(
    extractTag("<ArticleTitle>  A <i>useful</i> study </ArticleTitle>", "ArticleTitle"),
    "A useful study"
  );
});

test("extractTag returns an empty string when the tag is missing", () => {
  assert.equal(extractTag("<ArticleTitle>Study</ArticleTitle>", "AbstractText"), "");
});

test("extractAuthors builds names from PubMed author blocks", () => {
  const xml = `
    <AuthorList>
      <Author><LastName>Curie</LastName><ForeName>Marie</ForeName></Author>
      <Author><LastName>Darwin</LastName></Author>
    </AuthorList>
  `;

  assert.deepEqual(extractAuthors(xml), ["Marie Curie", "Darwin"]);
});

test("stripMarkdownFences removes JSON code fences and surrounding whitespace", () => {
  assert.equal(stripMarkdownFences('  \`\`\`json\n{"ok":true}\n\`\`\`  '), '{"ok":true}');
});

test("stripMarkdownFences leaves unfenced text trimmed", () => {
  assert.equal(stripMarkdownFences("  plain response  "), "plain response");
});
