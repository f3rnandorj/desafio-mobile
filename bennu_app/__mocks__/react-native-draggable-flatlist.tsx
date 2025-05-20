import React from "react";
import {View, ViewProps} from "react-native";

import type {
  DraggableFlatListProps,
  RenderItemParams,
} from "react-native-draggable-flatlist";

type ItemType = any;

const MockFlatList = <T extends ItemType>({
  data = [],
  renderItem,
  keyExtractor,
  ListEmptyComponent,
  ...rest
}: DraggableFlatListProps<T> & ViewProps) => {
  if (data.length === 0) {
    return (
      <View {...rest} testID="empty-todo-list">
        {typeof ListEmptyComponent === "function" ? (
          <ListEmptyComponent />
        ) : (
          ListEmptyComponent
        )}
      </View>
    );
  }

  return (
    <View {...rest} testID="draggable-todo-list-container">
      {data.map((item, index) => {
        const rendered = renderItem?.({
          item,
          index,
          drag: jest.fn(),
          isActive: false,
          getIndex: () => index,
        } as RenderItemParams<T>);

        return (
          <View
            key={keyExtractor ? keyExtractor(item, index) : String(index)}
            testID={`todo-item-${(item as any).id}`}
            accessibilityLabel={(item as any).title}>
            {rendered}
          </View>
        );
      })}
    </View>
  );
};

export const ScaleDecorator = ({children}: {children: React.ReactNode}) =>
  children;
export const OpacityDecorator = ({children}: {children: React.ReactNode}) =>
  children;
export const ShadowDecorator = ({children}: {children: React.ReactNode}) =>
  children;

export default MockFlatList;
