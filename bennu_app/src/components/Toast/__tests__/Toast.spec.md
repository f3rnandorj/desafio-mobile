# Toast Component Test Documentation

> **OBS:** Esta documentação está disponível em duas versões: Inglês e Português. Role para baixo para visualizar a versão em Português (após a seção "---").

## 🇺🇸 English Version

### Overview

This document describes all test cases implemented for the Toast component. The tests ensure the component behaves correctly in various states and scenarios, including displaying messages, handling user interactions, and automatically hiding after a specified duration.

### Test Helper Function

The `renderComponent` helper function was created to simplify the process of rendering the Toast component for testing purposes. It:

- Renders a Toast component with predefined props and the specified isInsideModal parameter
- Gets references to important elements (message text, action button)
- Returns these elements for use in tests

### Test Cases

#### 1. Content Rendering

**Test:** `should render with message and action button`  
**Description:** Verifies that the toast correctly displays its essential content.  
**Steps:**

- Renders the Toast component with the default test configuration
- Verifies the message element exists
- Confirms the action button is visible

#### 2. Action Button Interaction with Custom Handler

**Test:** `should call action onPress when action button is pressed`  
**Description:** Tests that the action button correctly calls the custom handler when provided.  
**Steps:**

- Renders the Toast component with a mocked onPress function
- Simulates a press event on the action button
- Verifies the mocked onPress function was called

#### 3. Action Button Default Behavior

**Test:** `should call hideToast when action button is pressed and no onPress provided`  
**Description:** Ensures that pressing the action button dismisses the toast when no custom handler is provided.  
**Steps:**

- Renders the Toast component with no custom onPress handler
- Simulates a press event on the action button
- Verifies the hideToast function was called

#### 4. Auto-Hide Behavior

**Test:** `should automatically hide toast after duration`  
**Description:** Tests that the toast automatically hides after the specified duration.  
**Steps:**

- Renders the Toast component
- Fast-forwards time by the specified duration
- Verifies the hideToast function was called

#### 5. Success Type Icon

**Test:** `should show success icon for success toast type`  
**Description:** Confirms that the correct icon is displayed for success toasts.  
**Steps:**

- Renders the Toast component with type "success"
- Verifies the success icon is visible

#### 6. Error Type Icon

**Test:** `should show error icon for error toast type`  
**Description:** Confirms that the correct icon is displayed for error toasts.  
**Steps:**

- Renders the Toast component with type "error"
- Verifies the error icon is visible

#### 7. Top Position Rendering

**Test:** `should position toast at the top when position is top`  
**Description:** Tests that the toast is correctly positioned at the top of the screen.  
**Steps:**

- Renders the Toast component with position "top"
- Verifies the toast element has the correct top position value

#### 8. Bottom Position Rendering

**Test:** `should position toast at the bottom when position is bottom`  
**Description:** Tests that the toast is correctly positioned at the bottom of the screen.  
**Steps:**

- Renders the Toast component with position "bottom"
- Verifies the toast element has the correct bottom position value

#### 9. Default Values

**Test:** `should use default values when not provided`  
**Description:** Tests that the component uses appropriate defaults when values are not specified.  
**Steps:**

- Renders the Toast component with minimal props
- Verifies default action title "OK" is used
- Confirms default type "success" is applied

#### 10. Null Toast Handling

**Test:** `should return null if toast is null`  
**Description:** Ensures that nothing is rendered when the toast data is null.  
**Steps:**

- Renders the Toast component with toast set to null
- Verifies that the toast message is not present in the document

### Props (ToastProps)

- **message**: String - The message to display in the toast
- **type**: "success" | "error" - The type of toast affecting its appearance and icon
- **position**: "top" | "bottom" - Where the toast should appear on the screen
- **duration**: Number - How long the toast should remain visible (in milliseconds)
- **action**: Object - Contains customization for the action button:
  - **title**: String - Text for the action button
  - **onPress**: Function - Called when the action button is pressed

### Component Props

- **isInsideModal**: Boolean - Adjusts positioning when the toast is rendered inside a modal

### Usage with Toast Service

The component is designed to be used with the Toast service through the `useToast` hook, which provides:

- Current toast data
- `showToast` function to display a toast
- `hideToast` function to dismiss the toast

---

## 🇧🇷 Versão em Português

### Visão Geral

Este documento descreve todos os casos de teste implementados para o componente Toast. Os testes garantem que o componente se comporte corretamente em vários estados e cenários, incluindo exibição de mensagens, tratamento de interações do usuário e ocultação automática após uma duração especificada.

### Função Auxiliar de Teste

A função auxiliar `renderComponent` foi criada para simplificar o processo de renderização do componente Toast para fins de teste. Ela:

- Renderiza um componente Toast com propriedades predefinidas e o parâmetro isInsideModal especificado
- Obtém referências para elementos importantes (texto da mensagem, botão de ação)
- Retorna esses elementos para uso nos testes

### Casos de Teste

#### 1. Renderização de Conteúdo

**Teste:** `should render with message and action button`  
**Descrição:** Verifica se o toast exibe corretamente seu conteúdo essencial.  
**Passos:**

- Renderiza o componente Toast com a configuração padrão de teste
- Verifica se o elemento de mensagem existe
- Confirma se o botão de ação está visível

#### 2. Interação com o Botão de Ação com Manipulador Personalizado

**Teste:** `should call action onPress when action button is pressed`  
**Descrição:** Testa se o botão de ação chama corretamente o manipulador personalizado quando fornecido.  
**Passos:**

- Renderiza o componente Toast com uma função onPress mockada
- Simula um evento de pressionar no botão de ação
- Verifica se a função onPress mockada foi chamada

#### 3. Comportamento Padrão do Botão de Ação

**Teste:** `should call hideToast when action button is pressed and no onPress provided`  
**Descrição:** Garante que pressionar o botão de ação fecha o toast quando nenhum manipulador personalizado é fornecido.  
**Passos:**

- Renderiza o componente Toast sem um manipulador onPress personalizado
- Simula um evento de pressionar no botão de ação
- Verifica se a função hideToast foi chamada

#### 4. Comportamento de Auto-Ocultação

**Teste:** `should automatically hide toast after duration`  
**Descrição:** Testa se o toast se oculta automaticamente após a duração especificada.  
**Passos:**

- Renderiza o componente Toast
- Avança o tempo pela duração especificada
- Verifica se a função hideToast foi chamada

#### 5. Ícone de Tipo Sucesso

**Teste:** `should show success icon for success toast type`  
**Descrição:** Confirma que o ícone correto é exibido para toasts de sucesso.  
**Passos:**

- Renderiza o componente Toast com tipo "success"
- Verifica se o ícone de sucesso está visível

#### 6. Ícone de Tipo Erro

**Teste:** `should show error icon for error toast type`  
**Descrição:** Confirma que o ícone correto é exibido para toasts de erro.  
**Passos:**

- Renderiza o componente Toast com tipo "error"
- Verifica se o ícone de erro está visível

#### 7. Renderização na Posição Superior

**Teste:** `should position toast at the top when position is top`  
**Descrição:** Testa se o toast é posicionado corretamente na parte superior da tela.  
**Passos:**

- Renderiza o componente Toast com posição "top"
- Verifica se o elemento toast tem o valor correto de posição superior

#### 8. Renderização na Posição Inferior

**Teste:** `should position toast at the bottom when position is bottom`  
**Descrição:** Testa se o toast é posicionado corretamente na parte inferior da tela.  
**Passos:**

- Renderiza o componente Toast com posição "bottom"
- Verifica se o elemento toast tem o valor correto de posição inferior

#### 9. Valores Padrão

**Teste:** `should use default values when not provided`  
**Descrição:** Testa se o componente usa padrões apropriados quando os valores não são especificados.  
**Passos:**

- Renderiza o componente Toast com propriedades mínimas
- Verifica se o título de ação padrão "OK" é usado
- Confirma se o tipo padrão "success" é aplicado

#### 10. Tratamento de Toast Nulo

**Teste:** `should return null if toast is null`  
**Descrição:** Garante que nada seja renderizado quando os dados do toast são nulos.  
**Passos:**

- Renderiza o componente Toast com toast definido como null
- Verifica se a mensagem do toast não está presente no documento

### Props (ToastProps)

- **message**: String - A mensagem a ser exibida no toast
- **type**: "success" | "error" - O tipo de toast afetando sua aparência e ícone
- **position**: "top" | "bottom" - Onde o toast deve aparecer na tela
- **duration**: Number - Por quanto tempo o toast deve permanecer visível (em milissegundos)
- **action**: Object - Contém personalização para o botão de ação:
  - **title**: String - Texto para o botão de ação
  - **onPress**: Function - Chamado quando o botão de ação é pressionado

### Props do Componente

- **isInsideModal**: Boolean - Ajusta o posicionamento quando o toast é renderizado dentro de um modal

### Uso com Serviço de Toast

O componente foi projetado para ser usado com o serviço de Toast através do hook `useToast`, que fornece:

- Dados atuais do toast
- Função `showToast` para exibir um toast
- Função `hideToast` para fechar o toast
