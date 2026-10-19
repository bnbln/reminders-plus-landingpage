import type { CSSProperties } from 'react';

/** Sets the `--tint` color used by `.badge-icon` and `.icon-tile`. */
export function tint(color: string): CSSProperties {
    return { '--tint': color } as CSSProperties;
}
