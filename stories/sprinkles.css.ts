import {
  createMapValueFn,
  createNormalizeValueFn,
  ConditionalValue,
  RequiredConditionalValue,
} from "@vanilla-extract/sprinkles";
import { unconditionalProperties, statusProperties, responsiveProperties } from "./atoms";
import { defineBentoSprinkles } from "../src/sprinkles";

export const [sprinkles, _, responsiveStyles] = defineBentoSprinkles(
  unconditionalProperties,
  responsiveProperties,
  statusProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];

export const mapResponsiveValue = createMapValueFn(responsiveStyles);
export const normalizeResponsiveValue = createNormalizeValueFn(responsiveStyles);

export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveStyles,
  Value
>;

export type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<
  typeof responsiveStyles,
  Value
>;
