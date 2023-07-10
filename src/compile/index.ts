import { transform } from "@astrojs/compiler"
import { access, writeFile, mkdir } from "fs/promises"

const folderExists = async (path: string) => {
    try {
        await access(path)
        return true
    } catch {
        return false
    }
}

/**
 * Doesn´t work, several pain points.
 * 1. 'createMetadata is not a function' error, so it´s removed from code, is mandatory for some components tho.
 * 2. not sure if astro components can be invoked like that
 * 3. more debugging needs to be done, find out what arguments are required for component function call
*/
export const compile = async () => {
    //const source = (await readFile(process.cwd() + '/src/pages/index.astro')).toString()
    const source = (await import('../dynamicComponents/Navigation.astro?raw')).default
    let { code } = await transform(source)
    code = code.replaceAll(',\n  createMetadata as $$createMetadata\n', '')
    code = code.replaceAll('export const $$metadata =', '//export const $$metadata =')
    
    const distFolder = process.cwd() + '/src/result'
    console.log(distFolder)
    if (!await folderExists(distFolder)) await mkdir(distFolder)
    
    await writeFile(distFolder + '/index.js', code)
    // await writeFile(distFolder + '/index.json', JSON.stringify(result))
    // console.log('done writing')
    const codeModule = (await import(/* @vite-ignore */distFolder + '/index.js')).default
    console.log('cm', await codeModule({}, '', '')) // What arguments should these args be?
}