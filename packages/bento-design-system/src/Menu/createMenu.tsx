import { ComponentProps, FunctionComponent, Ref, useRef } from "react";
import { Children, Popover } from "..";
import { BentoSprinkles, Box, Inset } from "../internal";
import { menuRecipe } from "./Menu.css";
import { useMenuTrigger } from "@react-aria/menu";
import { useMenuTriggerState, MenuTriggerState } from "@react-stately/menu";
import { AriaButtonProps } from "@react-types/button";
import { useButton } from "@react-aria/button";
import { ListProps } from "../List/createListComponents";
import { ListItemProps } from "../List/createListItem";

type Props = {
  size: ListProps["size"];
  items: Array<ListItemProps>;
  /**
   * Optional static content that is displayed before the menu items.
   */
  header?: Children;
  /**
   * The trigger element that will be used to open the menu.
   * It must accept a `ref` prop and other accessibility props to ensure the menu is properly
   * connected to its trigger, for accessibility purposes.
   *
   * It can use the `state` parameter to determine and change the menu state.
   */
  trigger: (
    ref: Ref<HTMLElement>,
    props: Pick<AriaButtonProps, "id" | "aria-labelledby">,
    state: MenuTriggerState
  ) => JSX.Element;
  initialIsOpen?: boolean;
  placement?: ComponentProps<typeof Popover>["placement"];
  offset?: ComponentProps<typeof Popover>["offset"];
};

type MenuConfig = {
  paddingY: BentoSprinkles["paddingY"];
  radius: BentoSprinkles["borderRadius"];
  elevation: "small" | "medium" | "large";
  headerPaddingX: BentoSprinkles["paddingX"];
  headerPaddingY: BentoSprinkles["paddingY"];
};

export function createMenu(List: FunctionComponent<ListProps>, config: MenuConfig) {
  return function Menu({ items, header, trigger, initialIsOpen, placement, offset, size }: Props) {
    const triggerRef = useRef(null);

    const state = useMenuTriggerState({
      defaultOpen: initialIsOpen,
    });

    const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, triggerRef);
    const { buttonProps: triggerProps } = useButton(
      { ...menuTriggerProps, elementType: "div" },
      triggerRef
    );

    return (
      <Box position="relative">
        {trigger(triggerRef, triggerProps, state)}
        {state.isOpen && (
          <Popover
            onClose={() => state.close()}
            triggerRef={triggerRef}
            placement={placement}
            offset={offset}
          >
            <Box
              className={menuRecipe({ elevation: config.elevation })}
              {...menuProps}
              color={undefined}
              borderRadius={config.radius}
            >
              {header && (
                <Box
                  background="backgroundSecondary"
                  paddingX={config.headerPaddingX}
                  paddingY={config.headerPaddingY}
                >
                  {header}
                </Box>
              )}
              <Inset spaceY={config.paddingY}>
                <List items={items} size={size} />
              </Inset>
            </Box>
          </Popover>
        )}
      </Box>
    );
  };
}

export const defaultMenuConfig: MenuConfig = {
  paddingY: 8,
  radius: 8,
  elevation: "medium",
  headerPaddingX: 24,
  headerPaddingY: 24,
};
