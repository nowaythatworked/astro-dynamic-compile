# Astro OnRequest Compile
This is a small demo on how you can compile astro components on a per-request-basis.
Please note, that this is only a proof of conecept.

## How does it work?
In `src/pages/component/[component].astro` we create a normal Astro page, in here is an Object which holds references to the components we want to be able to load. When you load the page the parameter `component` is used as a key to get the component from the object, then the component is rendered (some extra logic passes URLSearchParams as props to the rendered component).

In `src/pages/api/component/[component].astro` lies an API endpoint which makes a get request to `/component/[component]` and parses the returned HTML. The ectracted parameters (scripts, functions, styles, html) can inserted into any website. An Example for this can be seen in `src/pages/index.astro`

## Future?
This proof of concept could be re-written as a astro integration to make it actually usable for more people.

