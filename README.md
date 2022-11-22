## Setup before working with vite

In file tsconfig.json:

-   config path file import in vscode
    ```json
    {
        "compilerOptions": {
            "baseUrl": ".",
            "paths": {
                "src/*": ["./src/*"] // TODO: cái này để import path sẽ bắt đầu bằng src, nếu viết "@/*": [./src/*] thì sẽ bắt đầu bằng @/... => config cho vscode
            },
            "types": ["vite/client"]
        }
    }
    ```
-   config vite can understand that type of path import:

    ```ts
    export default defineConfig({
        plugins: [react()],
        resolve: {
            alias: {
                src: path.resolve('src/'), // TODO: config for vite understand import "src/..."
            },
        },
    });
    ```

## Using .env variable

In file global.config.ts

```ts
declare global {
    interface ImportMetaEnv {
        readonly VITE_PORT: string;
        // more env variables...
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}

export const MetaEnv = import.meta.env;
```

When want to have suggestion when using `meta.env` need to declare variavle in `ImportMetaEnv` interface
