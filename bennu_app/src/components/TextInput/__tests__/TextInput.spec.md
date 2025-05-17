# TextInput Component Test Documentation

> **OBS:** Esta documentação está disponível em duas versões: Inglês e Português. Role para baixo para visualizar a versão em Português (após a seção "---").

## 🇺🇸 English Version

### Overview

This document describes all test cases implemented for the TextInput component. The tests ensure the component behaves correctly in various states and scenarios, including different variants, with labels, error messages, and icons.

### Test Helper Function

The `renderComponent` helper function was created to simplify the process of rendering the TextInput component for testing purposes. It:

- Renders a TextInput component with the specified props
- Gets references to important elements (input element, label, error message, left icon, right icon)
- Returns these elements for use in tests

### Test Cases

#### 1. Default Props Rendering

**Test:** `renders correctly with default props`  
**Description:** Confirms that the input renders properly with its default properties.  
**Steps:**

- Renders a TextInput with only the required props
- Verifies the input element exists
- Confirms the placeholder text is "Add a new task..."

#### 2. Label Rendering

**Test:** `renders with a label when label prop is provided`  
**Description:** Verifies that the label is correctly displayed when provided as a prop.  
**Steps:**

- Renders a TextInput with a label prop set to "Task Name"
- Verifies the label element exists
- Confirms the label text matches the provided value

#### 3. Error Message Rendering

**Test:** `renders with an error message when errorMessage prop is provided`  
**Description:** Tests that the error message is displayed when the errorMessage prop is provided.  
**Steps:**

- Renders a TextInput with an errorMessage prop set to "This field is required"
- Verifies the error message element exists
- Confirms the error message text matches the provided value

#### 4. Left Icon Rendering

**Test:** `renders with a left icon when leftIcon prop is provided`  
**Description:** Verifies that a left icon is correctly displayed when provided.  
**Steps:**

- Renders a TextInput with a leftIcon prop
- Verifies the left icon element exists

#### 5. Right Icon Rendering

**Test:** `renders with a right icon when rightIcon prop is provided`  
**Description:** Confirms that a right icon is correctly displayed when provided.  
**Steps:**

- Renders a TextInput with a rightIcon prop
- Verifies the right icon element exists

#### 6. Default Variant Settings

**Test:** `uses default variant setting by default`  
**Description:** Ensures that the TextInput uses the correct settings for the default variant.  
**Steps:**

- Renders a TextInput without specifying a variant
- Verifies that multiline is set to false
- Confirms numberOfLines is set to 1
- Confirms textAlignVertical is set to "center"

#### 7. Multiline Variant Settings

**Test:** `uses multiline variant settings when variant is multiline`  
**Description:** Tests that the TextInput applies the correct settings when using the multiline variant.  
**Steps:**

- Renders a TextInput with the variant prop set to "multiline"
- Verifies that multiline is set to true
- Confirms numberOfLines is set to 3
- Confirms textAlignVertical is set to "top"

#### 8. OnChangeText Function

**Test:** `calls the onChangeText function when text is changed`  
**Description:** Verifies that the onChangeText callback is correctly called when the input text changes.  
**Steps:**

- Renders a TextInput with a mocked onChangeText function
- Simulates a text change event
- Verifies that the mocked function was called with the new text value

---

## 🇧🇷 Versão em Português

### Visão Geral

Este documento descreve todos os casos de teste implementados para o componente TextInput. Os testes garantem que o componente se comporte corretamente em vários estados e cenários, incluindo diferentes variantes, com rótulos, mensagens de erro e ícones.

### Função Auxiliar de Teste

A função auxiliar `renderComponent` foi criada para simplificar o processo de renderização do componente TextInput para fins de teste. Ela:

- Renderiza um componente TextInput com as props especificadas
- Obtém referências a elementos importantes (elemento de input, rótulo, mensagem de erro, ícone esquerdo, ícone direito)
- Retorna esses elementos para uso nos testes

### Casos de Teste

#### 1. Renderização com Props Padrão

**Teste:** `renders correctly with default props`  
**Descrição:** Confirma que o input renderiza corretamente com suas propriedades padrão.  
**Passos:**

- Renderiza um TextInput apenas com as props obrigatórias
- Verifica se o elemento de input existe
- Confirma que o texto do placeholder é "Add a new task..."

#### 2. Renderização do Rótulo

**Teste:** `renders with a label when label prop is provided`  
**Descrição:** Verifica se o rótulo é exibido corretamente quando fornecido como uma prop.  
**Passos:**

- Renderiza um TextInput com a prop label definida como "Task Name"
- Verifica se o elemento de rótulo existe
- Confirma que o texto do rótulo corresponde ao valor fornecido

#### 3. Renderização da Mensagem de Erro

**Teste:** `renders with an error message when errorMessage prop is provided`  
**Descrição:** Testa se a mensagem de erro é exibida quando a prop errorMessage é fornecida.  
**Passos:**

- Renderiza um TextInput com a prop errorMessage definida como "This field is required"
- Verifica se o elemento de mensagem de erro existe
- Confirma que o texto da mensagem de erro corresponde ao valor fornecido

#### 4. Renderização do Ícone Esquerdo

**Teste:** `renders with a left icon when leftIcon prop is provided`  
**Descrição:** Verifica se um ícone esquerdo é exibido corretamente quando fornecido.  
**Passos:**

- Renderiza um TextInput com uma prop leftIcon
- Verifica se o elemento de ícone esquerdo existe

#### 5. Renderização do Ícone Direito

**Teste:** `renders with a right icon when rightIcon prop is provided`  
**Descrição:** Confirma que um ícone direito é exibido corretamente quando fornecido.  
**Passos:**

- Renderiza um TextInput com uma prop rightIcon
- Verifica se o elemento de ícone direito existe

#### 6. Configurações da Variante Padrão

**Teste:** `uses default variant setting by default`  
**Descrição:** Garante que o TextInput use as configurações corretas para a variante padrão.  
**Passos:**

- Renderiza um TextInput sem especificar uma variante
- Verifica que multiline está definido como false
- Confirma que numberOfLines está definido como 1
- Confirma que textAlignVertical está definido como "center"

#### 7. Configurações da Variante Multiline

**Teste:** `uses multiline variant settings when variant is multiline`  
**Descrição:** Testa se o TextInput aplica as configurações corretas ao usar a variante multiline.  
**Passos:**

- Renderiza um TextInput com a prop variant definida como "multiline"
- Verifica que multiline está definido como true
- Confirma que numberOfLines está definido como 3
- Confirma que textAlignVertical está definido como "top"

#### 8. Função OnChangeText

**Teste:** `calls the onChangeText function when text is changed`  
**Descrição:** Verifica se o callback onChangeText é chamado corretamente quando o texto do input é alterado.  
**Passos:**

- Renderiza um TextInput com uma função onChangeText mockada
- Simula um evento de alteração de texto
- Verifica se a função mockada foi chamada com o novo valor de texto
