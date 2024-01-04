export function getImageUrl(name: string): string {
    return new URL(`../../../assets/photos/${name}`, import.meta.url).href
}