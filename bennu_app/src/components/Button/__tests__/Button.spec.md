# Button Component Test Documentation

> **OBS:** Esta documentação está disponível em duas versões: Inglês e Português. Role para baixo para visualizar a versão em Português (após a seção "---").

## 🇺🇸 English Version

### Overview

This document describes all test cases implemented for the Button component. The tests ensure the component behaves correctly in various states and scenarios, including normal operation, disabled states, and loading states.

### Test Helper Function

The `renderComponent` helper function was created to simplify the process of rendering the Button component for testing purposes. It:

- Renders a Button component with the specified props
- Gets references to important elements (title, loading indicator, button element)
- Returns these elements for use in tests

### Test Cases

#### 1. Calling onPress Function

**Test:** `calls the onPress function when it is pressed`  
**Description:** Verifies that the button correctly calls the onPress callback function when the user presses it.  
**Steps:**

- Renders a button with a mocked onPress function
- Simulates a press event on the button
- Checks that the mocked function was called
- Ensures no loading indicator is shown

#### 2. Default Props Rendering

**Test:** `renders correctly with default props`  
**Description:** Confirms that the button renders properly with its default properties.  
**Steps:**

- Renders a button with only the required props
- Verifies the button element exists
- Verifies the title text is visible
- Confirms the button is not in a disabled state

#### 3. Disabled State

**Test:** `renders in disabled state when disabled prop is true`  
**Description:** Tests that the button correctly enters a disabled state when the disabled prop is set to true.  
**Steps:**

- Renders a button with the disabled prop set to true
- Checks that the button's accessibility state indicates it's disabled

#### 4. Loading State Indicator

**Test:** `shows loading indicator when isLoading is true`  
**Description:** Verifies that the loading indicator appears and the title text is hidden when the button is in a loading state.  
**Steps:**

- Renders a button with the isLoading prop set to true
- Checks that the loading indicator is visible
- Confirms the title text is not visible

#### 5. Disabled During Loading

**Test:** `disables the button when isLoading is true`  
**Description:** Ensures that the button becomes disabled automatically when it's in a loading state.  
**Steps:**

- Renders a button with the isLoading prop set to true
- Verifies the button's accessibility state shows it as disabled

#### 6. No onPress When Disabled

**Test:** `doesn't call onPress when disabled`  
**Description:** Confirms that the onPress function is not called when the button is in a disabled state.  
**Steps:**

- Renders a button with a mocked onPress function and disabled set to true
- Simulates a press event on the button
- Verifies the mocked function was not called

#### 7. No onPress When Loading

**Test:** `doesn't call onPress when loading`  
**Description:** Ensures that the onPress function is not called when the button is in a loading state.  
**Steps:**

- Renders a button with a mocked onPress function and isLoading set to true
- Simulates a press event on the button
- Confirms the mocked function was not called

---

## 🇧🇷 Versão em Português

### Visão Geral

Este documento descreve todos os casos de teste implementados para o componente Button. Os testes garantem que o componente se comporte corretamente em vários estados e cenários, incluindo operação normal, estados desativados e estados de carregamento.

### Função Auxiliar de Teste

A função auxiliar `renderComponent` foi criada para simplificar o processo de renderização do componente Button para fins de teste. Ela:

- Renderiza um componente Button com as props especificadas
- Obtém referências a elementos importantes (título, indicador de carregamento, elemento do botão)
- Retorna esses elementos para uso nos testes

### Casos de Teste

#### 1. Chamando a Função onPress

**Teste:** `calls the onPress function when it is pressed`  
**Descrição:** Verifica se o botão chama corretamente a função de callback onPress quando o usuário o pressiona.  
**Passos:**

- Renderiza um botão com uma função onPress mockada
- Simula um evento de pressionar no botão
- Verifica se a função mockada foi chamada
- Garante que nenhum indicador de carregamento seja mostrado

#### 2. Renderização com Props Padrão

**Teste:** `renders correctly with default props`  
**Descrição:** Confirma que o botão renderiza corretamente com suas propriedades padrão.  
**Passos:**

- Renderiza um botão apenas com as props obrigatórias
- Verifica se o elemento do botão existe
- Verifica se o texto do título está visível
- Confirma que o botão não está em estado desativado

#### 3. Estado Desativado

**Teste:** `renders in disabled state when disabled prop is true`  
**Descrição:** Testa se o botão entra corretamente em um estado desativado quando a prop disabled é definida como true.  
**Passos:**

- Renderiza um botão com a prop disabled definida como true
- Verifica se o estado de acessibilidade do botão indica que está desativado

#### 4. Indicador de Estado de Carregamento

**Teste:** `shows loading indicator when isLoading is true`  
**Descrição:** Verifica se o indicador de carregamento aparece e o texto do título é ocultado quando o botão está em estado de carregamento.  
**Passos:**

- Renderiza um botão com a prop isLoading definida como true
- Verifica se o indicador de carregamento está visível
- Confirma que o texto do título não está visível

#### 5. Desativado Durante o Carregamento

**Teste:** `disables the button when isLoading is true`  
**Descrição:** Garante que o botão seja desativado automaticamente quando está em estado de carregamento.  
**Passos:**

- Renderiza um botão com a prop isLoading definida como true
- Verifica se o estado de acessibilidade do botão o mostra como desativado

#### 6. Sem onPress Quando Desativado

**Teste:** `doesn't call onPress when disabled`  
**Descrição:** Confirma que a função onPress não é chamada quando o botão está em estado desativado.  
**Passos:**

- Renderiza um botão com uma função onPress mockada e disabled definido como true
- Simula um evento de pressionar no botão
- Verifica se a função mockada não foi chamada

#### 7. Sem onPress Durante o Carregamento

**Teste:** `doesn't call onPress when loading`  
**Descrição:** Garante que a função onPress não seja chamada quando o botão está em estado de carregamento.  
**Passos:**

- Renderiza um botão com uma função onPress mockada e isLoading definido como true
- Simula um evento de pressionar no botão
- Confirma que a função mockada não foi chamada
