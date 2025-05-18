# ActiveTodoScreen Component Test Documentation

> **OBS:** Esta documentação está disponível em duas versões: Inglês e Português. Role para baixo para visualizar a versão em Português (após a seção "---").

## 🇺🇸 English Version

### Overview

This document describes all test cases implemented for the ActiveTodoScreen component. The tests ensure the screen correctly displays active todos, handles empty states, properly initializes data fetching, and allows users to add new todos.

### Test Helper Function

The `renderScreenComponent` helper function was created to simplify the process of rendering the ActiveTodoScreen component for testing purposes. It:

- Renders an ActiveTodoScreen component within the test environment
- Gets reference to the screen title element
- Returns these elements for use in tests

### Mock Setup

Several key dependencies are mocked to isolate the component for testing:

- `useTodoGetList`: Mocked to control todo fetching behavior
- `useModal`: Mocked to verify modal interactions when adding todos

### Test Cases

#### 1. Screen Title Rendering

**Test:** `renders the screen with the correct title`  
**Description:** Verifies that the screen renders with the expected title "Tarefas Ativas".  
**Steps:**

- Renders the screen with mock active todos
- Verifies the title element is present and displays the correct text

#### 2. Filtering Active Todos

**Test:** `displays only active todos`  
**Description:** Confirms that the screen only displays todos that are not marked as completed.  
**Steps:**

- Renders the screen with a mix of active and completed todos
- Verifies that only active todos are visible
- Confirms completed todos are not present in the rendered output

#### 3. Empty State Handling

**Test:** `displays the empty state when there are no active todos`  
**Description:** Tests that the screen shows an appropriate empty state message when no active todos exist.  
**Steps:**

- Renders the screen with only completed todos (no active todos)
- Verifies the empty state message "Você ainda não tem nenhuma tarefa aqui 😞" is displayed

#### 4. Data Fetching

**Test:** `calls useTodoGetList on mount`  
**Description:** Ensures that the component initiates data fetching when it mounts.  
**Steps:**

- Renders the screen component
- Verifies that the useTodoGetList hook was called with the correct parameters

#### 5. Add Button Rendering

**Test:** `renders the 'Add New Todo' button`  
**Description:** Confirms that the screen includes a button to add new todos.  
**Steps:**

- Renders the screen component
- Verifies that the add button element is present in the DOM

#### 6. Add Button Interaction

**Test:** `handles 'Add New Todo' button press`  
**Description:** Tests that pressing the add button correctly triggers the modal to add a new todo.  
**Steps:**

- Renders the screen component
- Locates the add button element
- Simulates a press event on the button
- Verifies that the showModal function was called

### Implementation Details

The ActiveTodoScreen component:

1. Fetches the todo list using the useTodoGetList hook
2. Filters todos to display only those that are not completed
3. Renders a screen with a title "Tarefas Ativas" and an add button in the header
4. Displays the filtered list of active todos or an empty state message when appropriate

---

## 🇧🇷 Versão em Português

### Visão Geral

Este documento descreve todos os casos de teste implementados para o componente ActiveTodoScreen. Os testes garantem que a tela exiba corretamente as tarefas ativas, lide com estados vazios, inicialize adequadamente a busca de dados e permita que os usuários adicionem novas tarefas.

### Função Auxiliar de Teste

A função auxiliar `renderScreenComponent` foi criada para simplificar o processo de renderização do componente ActiveTodoScreen para fins de teste. Ela:

- Renderiza um componente ActiveTodoScreen dentro do ambiente de teste
- Obtém referência ao elemento de título da tela
- Retorna esses elementos para uso nos testes

### Configuração de Mocks

Várias dependências-chave são simuladas para isolar o componente para teste:

- `useTodoGetList`: Simulado para controlar o comportamento de busca de tarefas
- `useModal`: Simulado para verificar interações modais ao adicionar tarefas

### Casos de Teste

#### 1. Renderização do Título da Tela

**Teste:** `renderiza a tela com o título correto`  
**Descrição:** Verifica se a tela é renderizada com o título esperado "Tarefas Ativas".  
**Passos:**

- Renderiza a tela com tarefas ativas simuladas
- Verifica se o elemento de título está presente e exibe o texto correto

#### 2. Filtragem de Tarefas Ativas

**Teste:** `exibe apenas tarefas ativas`  
**Descrição:** Confirma que a tela exibe apenas tarefas que não estão marcadas como concluídas.  
**Passos:**

- Renderiza a tela com uma mistura de tarefas ativas e concluídas
- Verifica se apenas tarefas ativas estão visíveis
- Confirma que tarefas concluídas não estão presentes na saída renderizada

#### 3. Tratamento de Estado Vazio

**Teste:** `exibe o estado vazio quando não há tarefas ativas`  
**Descrição:** Testa se a tela mostra uma mensagem de estado vazio apropriada quando não existem tarefas ativas.  
**Passos:**

- Renderiza a tela apenas com tarefas concluídas (sem tarefas ativas)
- Verifica se a mensagem de estado vazio "Você ainda não tem nenhuma tarefa aqui 😞" é exibida

#### 4. Busca de Dados

**Teste:** `chama useTodoGetList na montagem`  
**Descrição:** Garante que o componente inicie a busca de dados quando é montado.  
**Passos:**

- Renderiza o componente da tela
- Verifica se o hook useTodoGetList foi chamado com os parâmetros corretos

#### 5. Renderização do Botão Adicionar

**Teste:** `renderiza o botão 'Adicionar Nova Tarefa'`  
**Descrição:** Confirma que a tela inclui um botão para adicionar novas tarefas.  
**Passos:**

- Renderiza o componente da tela
- Verifica se o elemento do botão adicionar está presente no DOM

#### 6. Interação com o Botão Adicionar

**Teste:** `lida com o pressionamento do botão 'Adicionar Nova Tarefa'`  
**Descrição:** Testa se pressionar o botão adicionar aciona corretamente o modal para adicionar uma nova tarefa.  
**Passos:**

- Renderiza o componente da tela
- Localiza o elemento do botão adicionar
- Simula um evento de pressionamento no botão
- Verifica se a função showModal foi chamada

### Detalhes de Implementação

O componente ActiveTodoScreen:

1. Busca a lista de tarefas usando o hook useTodoGetList
2. Filtra as tarefas para exibir apenas aquelas que não estão concluídas
3. Renderiza uma tela com o título "Tarefas Ativas" e um botão adicionar no cabeçalho
4. Exibe a lista filtrada de tarefas ativas ou uma mensagem de estado vazio quando apropriado
