import React from "react";
import {FlatList} from "react-native";

import Icon from "@react-native-vector-icons/fontawesome6";
import {useTheme} from "styled-components/native";

import {Screen} from "@components";

import {
  Container,
  AddButton,
  TaskCard,
  TaskText,
  TaskActions,
  ActionButton,
  EmptyState,
  EmptyStateText,
  InputContainer,
  Input,
  TaskContainer,
  TaskCheckbox,
} from "./styles";

export function ActiveTasksScreen() {
  const {shadows} = useTheme();

  return (
    <Screen
      title="Lista de Tarefas Ativas"
      headerRight={
        <AddButton>
          <Icon name="plus" size={20} color="#FFF" iconStyle="solid" />
        </AddButton>
      }>
      <Container>
        <InputContainer {...shadows.md}>
          <TaskCheckbox>
            <Icon name="circle" size={24} color="#D1D5DB" iconStyle="regular" />
          </TaskCheckbox>
          <Input
            placeholder="Add a new task..."
            placeholderTextColor="#9CA3AF"
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
                <TaskCheckbox>
                  {item.completed ? (
                    <Icon
                      name="circle-check"
                      size={24}
                      color="#10B981"
                      iconStyle="solid"
                    />
                  ) : (
                    <Icon
                      name="circle"
                      size={24}
                      color="#D1D5DB"
                      iconStyle="regular"
                    />
                  )}
                </TaskCheckbox>
                <TaskText completed={item.completed}>{item.title}</TaskText>
                <TaskActions>
                  <ActionButton>
                    <Icon
                      name="pen"
                      size={16}
                      color="#6B7280"
                      iconStyle="solid"
                    />
                  </ActionButton>
                  <ActionButton>
                    <Icon
                      name="trash"
                      size={16}
                      color="#EF4444"
                      iconStyle="solid"
                    />
                  </ActionButton>
                </TaskActions>
              </TaskCard>
            </TaskContainer>
          )}
          ListEmptyComponent={
            <EmptyState>
              <Icon
                name="clipboard-list"
                size={48}
                color="#9CA3AF"
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
