/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the remote content repository (manifest + Markdown bodies). */
  readonly VITE_CONTENT_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
