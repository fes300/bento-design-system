// NOTE(gabro): we deprecated the `style` prop due to false positive warnings in
// popular ESLint configs, which expect `style` to be an object.
// We're still keeping the old props around for backwards compatibility.
export type IllustrationProps = {
  size: 24 | 32 | 40 | 80 | 160 | { custom: number };
} & (
  | {
      kind: "color";
      /**
       * @deprecated use `kind` instead
       */
      style?: "color";
    }
  | {
      kind: "outline";
      /**
       * @deprecated use `kind` instead
       */
      style?: "outline";
      color: "default" | "disabled" | "inherit";
    }
);
