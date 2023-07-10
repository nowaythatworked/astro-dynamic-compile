import {
  Fragment,
  render as $$render,
  createAstro as $$createAstro,
  createComponent as $$createComponent,
  renderComponent as $$renderComponent,
  renderHead as $$renderHead,
  maybeRenderHead as $$maybeRenderHead,
  unescapeHTML as $$unescapeHTML,
  renderSlot as $$renderSlot,
  mergeSlots as $$mergeSlots,
  addAttribute as $$addAttribute,
  spreadAttributes as $$spreadAttributes,
  defineStyleVars as $$defineStyleVars,
  defineScriptVars as $$defineScriptVars} from "astro/runtime/server/index.js";


//export const $metadata = $$createMetadata("<stdin>", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: new Set([]), hoisted: [] });

const $$Astro = $$createAstro();
const Astro = $$Astro;
const $$stdin = $$createComponent(async ($$result, $$props, $$slots) => {
const Astro = $$result.createAstro($$Astro, $$props, $$slots);
Astro.self = $$stdin;

return $$render`${$$maybeRenderHead($$result)}<h1>This could be a Navigation</h1>
<div>
    <div>
        <span>Full HTML</span>
    </div>
</div>`;
}, '<stdin>');
export default $$stdin;
