import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'rest-api.yaml',
  output: {
    path: 'generated/ts',
    clean: true,
    indexFile: true,
  },
  client: 'fetch', // lightweight client stubs
  schemas: true,
  services: true,
  // We want valueField to remain a number; avoid bigint coercion.
  // @hey-api/openapi-ts treats integer without int64 as number, so we leave format off for custom pseudo format like int52.
  // If we introduce custom formats (e.g., int52) they will default to number unless we configure transformers.
});
