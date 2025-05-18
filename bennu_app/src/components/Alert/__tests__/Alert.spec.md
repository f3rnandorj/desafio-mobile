# Alert Component Test Documentation

> **OBS:** Esta documentação está disponível em duas versões: Inglês e Português. Role para baixo para visualizar a versão em Português (após a seção "---").

## 🇺🇸 English Version

### Overview

This document describes all test cases implemented for the Alert component. The tests ensure the component behaves correctly in various states and scenarios, including displaying alert content, handling user interactions, and managing loading states.

### Test Helper Function

The `renderComponent` helper function was created to simplify the process of rendering the Alert component for testing purposes. It:

- Renders an Alert component with predefined props
- Gets references to important elements (title, subtitle, confirm and cancel buttons)
- Returns these elements for use in tests

### Test Cases

#### 1. Content Rendering

**Test:** `should render with title, subtitle, and buttons`  
**Description:** Verifies that the alert correctly displays all its essential content.  
**Steps:**

- Renders the Alert component with the default test configuration
- Verifies the title element exists
- Verifies the subtitle element exists
- Confirms the confirm and cancel buttons are visible with their respective text

#### 2. Confirm Button Interaction

**Test:** `should call onConfirm when confirm button is pressed`  
**Description:** Tests that the confirm button correctly calls the onConfirm callback when pressed.  
**Steps:**

- Renders the Alert component with a mocked onConfirm function
- Simulates a press event on the confirm button
- Verifies the mocked onConfirm function was called

#### 3. Cancel Button Interaction

**Test:** `should call onCancel and hideAlert when cancel button is pressed`  
**Description:** Ensures that pressing the cancel button calls both the onCancel function and dismisses the alert.  
**Steps:**

- Renders the Alert component with mocked onCancel and hideAlert functions
- Simulates a press event on the cancel button
- Verifies both the onCancel and hideAlert functions were called

#### 4. Hardware Back Button Handling

**Test:** `should hide alert on hardware back press`  
**Description:** Tests that the Android hardware back button will dismiss the alert.  
**Steps:**

- Mocks the React Native BackHandler
- Renders the Alert component
- Simulates a hardware back button press
- Verifies the hideAlert function was called

#### 5. Loading State

**Test:** `should show loading when isLoading is true`  
**Description:** Confirms that the loading indicator appears when the alert is in a loading state.  
**Steps:**

- Renders the Alert component with isLoading prop set to true
- Verifies the loading indicator is visible
- Confirms the confirm button text is not visible

#### 6. Validation

**Test:** `should throw error if no title and no icon are provided`  
**Description:** Tests that the component throws an error if required props are missing.  
**Steps:**

- Attempts to render the Alert component without title and icon
- Verifies that an error is thrown with the message "You must provide a title or an iconName"

#### 7. Null Alert Handling

**Test:** `should return null if alert is null`  
**Description:** Ensures that nothing is rendered when the alert data is null.  
**Steps:**

- Renders the Alert component with alert set to null
- Verifies that the alert title is not present in the document

### Props (AlertProps)

- **title**: String - Main heading text for the alert (optional if icon is provided)
- **subTitle**: String - Secondary text/description for the alert
- **acceptMessage**: String - Text for the confirmation button
- **cancelMessage**: String - Text for the cancelation button
- **isLoading**: Boolean - When true, displays a loading indicator instead of the accept button text
- **icon**: Object - Icon configuration with `name` property
- **action**: Object - Contains callback functions:
  - **onConfirm**: Function - Called when the confirm button is pressed
  - **onCancel**: Function - Called when the cancel button is pressed

### Test IDs

- **alert-accept-button**: The confirmation button
- **alert-cancel-button**: The cancelation button
- **loading**: The loading indicator (visible when isLoading is true)

### Usage with Alert Service

The component is designed to be used with the Alert service through the `useAlert` hook, which provides:

- Current alert data
- `hideAlert` function to dismiss the alert

---

## 🇧🇷 Versão em Português

### Visão Geral

Este documento descreve todos os casos de teste implementados para o componente Alert. Os testes garantem que o componente se comporte corretamente em vários estados e cenários, incluindo exibição do conteúdo do alerta, tratamento de interações do usuário e gerenciamento de estados de carregamento.

### Função Auxiliar de Teste

A função auxiliar `renderComponent` foi criada para simplificar o processo de renderização do componente Alert para fins de teste. Ela:

- Renderiza um componente Alert com propriedades predefinidas
- Obtém referências para elementos importantes (título, subtítulo, botões de confirmar e cancelar)
- Retorna esses elementos para uso nos testes

### Casos de Teste

#### 1. Renderização de Conteúdo

**Teste:** `should render with title, subtitle, and buttons`  
**Descrição:** Verifica se o alerta exibe corretamente todo seu conteúdo essencial.  
**Passos:**

- Renderiza o componente Alert com a configuração padrão de teste
- Verifica se o elemento de título existe
- Verifica se o elemento de subtítulo existe
- Confirma se os botões de confirmar e cancelar estão visíveis com seus respectivos textos

#### 2. Interação com o Botão de Confirmar

**Teste:** `should call onConfirm when confirm button is pressed`  
**Descrição:** Testa se o botão de confirmar chama corretamente o callback onConfirm quando pressionado.  
**Passos:**

- Renderiza o componente Alert com uma função onConfirm mockada
- Simula um evento de pressionar no botão de confirmar
- Verifica se a função onConfirm mockada foi chamada

#### 3. Interação com o Botão de Cancelar

**Teste:** `should call onCancel and hideAlert when cancel button is pressed`  
**Descrição:** Garante que pressionar o botão de cancelar chama tanto a função onCancel quanto fecha o alerta.  
**Passos:**

- Renderiza o componente Alert com funções onCancel e hideAlert mockadas
- Simula um evento de pressionar no botão de cancelar
- Verifica se ambas as funções onCancel e hideAlert foram chamadas

#### 4. Tratamento do Botão Voltar do Hardware

**Teste:** `should hide alert on hardware back press`  
**Descrição:** Testa se o botão voltar do hardware Android fechará o alerta.  
**Passos:**

- Mocka o BackHandler do React Native
- Renderiza o componente Alert
- Simula um pressionamento do botão voltar do hardware
- Verifica se a função hideAlert foi chamada

#### 5. Estado de Carregamento

**Teste:** `should show loading when isLoading is true`  
**Descrição:** Confirma que o indicador de carregamento aparece quando o alerta está em estado de carregamento.  
**Passos:**

- Renderiza o componente Alert com a propriedade isLoading definida como true
- Verifica se o indicador de carregamento está visível
- Confirma que o texto do botão de confirmar não está visível

#### 6. Validação

**Teste:** `should throw error if no title and no icon are provided`  
**Descrição:** Testa se o componente lança um erro se as propriedades obrigatórias estiverem ausentes.  
**Passos:**

- Tenta renderizar o componente Alert sem título e ícone
- Verifica se um erro é lançado com a mensagem "You must provide a title or an iconName"

#### 7. Tratamento de Alerta Nulo

**Teste:** `should return null if alert is null`  
**Descrição:** Garante que nada é renderizado quando os dados do alerta são nulos.  
**Passos:**

- Renderiza o componente Alert com alerta definido como null
- Verifica que o título do alerta não está presente no documento

### Props (AlertProps)

- **title**: String - Texto principal do alerta (opcional se o ícone for fornecido)
- **subTitle**: String - Texto secundário/descrição do alerta
- **acceptMessage**: String - Texto para o botão de confirmação
- **cancelMessage**: String - Texto para o botão de cancelamento
- **isLoading**: Boolean - Quando verdadeiro, exibe um indicador de carregamento em vez do texto do botão de aceitação
- **icon**: Object - Configuração do ícone com a propriedade `name`
- **action**: Object - Contém funções de callback:
  - **onConfirm**: Function - Chamada quando o botão de confirmação é pressionado
  - **onCancel**: Function - Chamada quando o botão de cancelamento é pressionado

### Test IDs

- **alert-accept-button**: O botão de confirmação
- **alert-cancel-button**: O botão de cancelamento
- **loading**: O indicador de carregamento (visível quando isLoading é verdadeiro)

### Uso com Serviço de Alerta

O componente foi projetado para ser usado com o serviço de Alerta através do hook `useAlert`, que fornece:

- Dados atuais do alerta
- Função `hideAlert` para fechar o alerta
