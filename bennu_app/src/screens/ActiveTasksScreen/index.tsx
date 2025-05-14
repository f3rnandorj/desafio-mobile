import React from "react";
import {FlatList} from "react-native";

import {useTheme} from "styled-components/native";

import {Icon, Screen} from "@components";

import {
  Container,
  TaskCard,
  TaskText,
  TaskActions,
  EmptyState,
  EmptyStateText,
  InputContainer,
  Input,
  TaskContainer,
} from "./styles";

export function ActiveTasksScreen() {
  const {shadows, spacing} = useTheme();

  return (
    <Screen title="Lista de Tarefas Ativas">
      <Container>
        <InputContainer {...shadows.md}>
          <Icon
            onPress={() => {}}
            name="circle"
            color="gray400"
            iconStyle="regular"
            style={{marginRight: spacing.s8}}
          />
          <Input
            placeholder="Add a new task..."
            placeholderTextColor="#9CA3AF"
          />
          <Icon
            onPress={() => {}}
            name="circle-plus"
            size={30}
            color="primary"
            iconStyle="solid"
          />
        </InputContainer>

        <FlatList
          data={[
            {id: "1", title: "Complete project proposal", completed: false},
            {id: "2", title: "Design UI mockups", completed: true},
            {id: "3", title: "Implement authentication", completed: false},
          ]}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TaskContainer>
              <TaskCard {...shadows.md}>
                {item.completed ? (
                  <Icon
                    onPress={() => {}}
                    name="circle-check"
                    color="success"
                    iconStyle="solid"
                    style={{marginRight: spacing.s8}}
                  />
                ) : (
                  <Icon
                    onPress={() => {}}
                    name="circle"
                    color="gray400"
                    iconStyle="regular"
                    style={{marginRight: spacing.s8}}
                  />
                )}
                <TaskText completed={item.completed}>{item.title}</TaskText>
                <TaskActions>
                  <Icon
                    onPress={() => {}}
                    name="pen"
                    size={16}
                    color="gray400"
                    iconStyle="solid"
                    style={{paddingRight: spacing.s16}}
                  />
                  <Icon
                    onPress={() => {}}
                    name="trash"
                    size={16}
                    color="danger"
                    iconStyle="solid"
                  />
                </TaskActions>
              </TaskCard>
            </TaskContainer>
          )}
          ListEmptyComponent={
            <EmptyState>
              <Icon
                name="clipboard-list"
                size={48}
                color="gray400"
                iconStyle="solid"
              />
              <EmptyStateText>
                No tasks yet! Add your first task above.
              </EmptyStateText>
            </EmptyState>
          }
        />
      </Container>
    </Screen>
  );
}
