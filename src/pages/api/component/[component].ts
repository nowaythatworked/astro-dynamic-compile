import type { APIRoute } from "astro";

export interface ExtractedElements {
  scripts: string[];
  scriptFunctions: string[];
  styles: string[];
  links: string[];
  renderGateContent: string | null;
}

function extractElements(htmlString: string): ExtractedElements {
  const scriptRegex =
    /<script\b[^>]*(?:src\s*=\s*['"]([^'"]*)['"])?[^>]*>([\s\S]*?)<\/script>/gi;
  const styleRegex = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;
  const linkRegex = /<link\b[^>]*href\s*=\s*['"]([^'"]*)['"][^>]*>/gi;
  const renderGateRegex = /<render-gate>([\s\S]*?)<\/render-gate>/i;

  const scripts: string[] = [];
  const scriptFunctions: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = scriptRegex.exec(htmlString))) {
    const src = match[1];
    const content = match[2];
    if (src) {
      scripts.push(src);
    } else if (content) {
      scriptFunctions.push(content);
    }
  }

  const styles: string[] = [];
  while ((match = styleRegex.exec(htmlString))) {
    styles.push(match[0]);
  }

  const links: string[] = [];
  while ((match = linkRegex.exec(htmlString))) {
    links.push(match[1]);
  }

  const renderGateMatches = htmlString.match(renderGateRegex);
  const renderGateContent =
    renderGateMatches && renderGateMatches.length > 1
      ? renderGateMatches[1].trim()
      : null;

  return {
    scripts,
    scriptFunctions,
    styles,
    links,
    renderGateContent,
  };
}

export const get: APIRoute = async ({ request, params, url }) => {
  const { component } = params;
  const html = await (
    await fetch(`${url.origin}/component/${component}${url.search}`)
  ).text();
  const elements = extractElements(html);
  return new Response(JSON.stringify(elements));
};
