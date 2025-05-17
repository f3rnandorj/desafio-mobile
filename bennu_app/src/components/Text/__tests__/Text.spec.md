# Text Component Test Documentation

> **OBS:** Esta documentação está disponível em duas versões: Inglês e Português. Role para baixo para visualizar a versão em Português (após a seção "---").

## 🇺🇸 English Version

### Overview

This document describes all test cases implemented for the Text component. The tests ensure the component renders correctly in various configurations and styling options, including different presets, font styles, colors, and alignments.

### Test Helper Function

The `renderComponent` helper function was created to simplify the process of rendering the Text component for testing purposes. It:

- Renders a Text component with the specified props and "Sample Text" content
- Gets a reference to the text element
- Returns this element for use in tests

### Test Cases

#### 1. Default Props Rendering

**Test:** `renders correctly with default props`  
**Description:** Verifies that the text component renders properly with its default properties.  
**Steps:**

- Renders a text component with only the required props
- Verifies the text element exists
- Confirms the text content is "Sample Text"
- Checks that the default preset is "paragraph"

#### 2. Preset Style Application

**Test:** `applies the correct preset style`  
**Description:** Tests that different text presets (heading1, heading2, etc.) are applied correctly.  
**Steps:**

- Renders a text component with a specific preset ("heading1")
- Verifies the correct preset is applied to the element

#### 3. Bold Style Application

**Test:** `applies bold style when bold prop is true`  
**Description:** Ensures that the bold style is applied when the bold prop is set to true.  
**Steps:**

- Renders a text component with the bold prop set to true
- Verifies the bold property is applied to the element

#### 4. SemiBold Style Application

**Test:** `applies semiBold style when semiBold prop is true`  
**Description:** Confirms that the semiBold style is applied when the semiBold prop is set to true.  
**Steps:**

- Renders a text component with the semiBold prop set to true
- Verifies the semiBold property is applied to the element

#### 5. Italic Style Application

**Test:** `applies italic style when italic prop is true`  
**Description:** Tests that the italic style is applied when the italic prop is set to true.  
**Steps:**

- Renders a text component with the italic prop set to true
- Confirms the italic property is applied to the element

#### 6. Medium Style Application

**Test:** `applies medium style when medium prop is true`  
**Description:** Verifies that the medium style is applied when the medium prop is set to true.  
**Steps:**

- Renders a text component with the medium prop set to true
- Checks that the medium property is applied to the element

#### 7. Color Application

**Test:** `applies the correct text color`  
**Description:** Tests that theme colors can be correctly applied to the text.  
**Steps:**

- Renders a text component with a specific color ("primary")
- Verifies the color property is correctly set on the element

#### 8. Text Alignment

**Test:** `applies the correct text alignment`  
**Description:** Confirms that different text alignments can be properly applied.  
**Steps:**

- Renders a text component with a specific alignment ("center")
- Checks that the alignment property is correctly set on the element

#### 9. Multiple Styles Combination

**Test:** `applies multiple text styles together`  
**Description:** Tests that multiple text styling props can be combined correctly.  
**Steps:**

- Renders a text component with multiple props (preset, bold, italic, color, align)
- Verifies all properties are correctly applied to the element

#### 10. Additional Props Support

**Test:** `passes additional props to the underlying component`  
**Description:** Ensures that additional props (like onPress) are properly passed to the underlying component.  
**Steps:**

- Renders a text component with an onPress handler
- Confirms the handler is correctly passed to the element

---

## 🇧🇷 Versão em Português

### Visão Geral

Este documento descreve todos os casos de teste implementados para o componente Text. Os testes garantem que o componente renderize corretamente em várias configurações e opções de estilo, incluindo diferentes presets, estilos de fonte, cores e alinhamentos.

### Função Auxiliar de Teste

A função auxiliar `renderComponent` foi criada para simplificar o processo de renderização do componente Text para fins de teste. Ela:

- Renderiza um componente Text com as props especificadas e o conteúdo "Sample Text"
- Obtém uma referência ao elemento de texto
- Retorna esse elemento para uso nos testes

### Casos de Teste

#### 1. Renderização com Props Padrão

**Teste:** `renders correctly with default props`  
**Descrição:** Verifica se o componente de texto renderiza corretamente com suas propriedades padrão.  
**Passos:**

- Renderiza um componente de texto apenas com as props obrigatórias
- Verifica se o elemento de texto existe
- Confirma que o conteúdo do texto é "Sample Text"
- Verifica que o preset padrão é "paragraph"

#### 2. Aplicação de Estilo de Preset

**Teste:** `applies the correct preset style`  
**Descrição:** Testa se diferentes presets de texto (heading1, heading2, etc.) são aplicados corretamente.  
**Passos:**

- Renderiza um componente de texto com um preset específico ("heading1")
- Verifica se o preset correto é aplicado ao elemento

#### 3. Aplicação de Estilo Bold

**Teste:** `applies bold style when bold prop is true`  
**Descrição:** Garante que o estilo bold é aplicado quando a prop bold é definida como true.  
**Passos:**

- Renderiza um componente de texto com a prop bold definida como true
- Verifica se a propriedade bold é aplicada ao elemento

#### 4. Aplicação de Estilo SemiBold

**Teste:** `applies semiBold style when semiBold prop is true`  
**Descrição:** Confirma que o estilo semiBold é aplicado quando a prop semiBold é definida como true.  
**Passos:**

- Renderiza um componente de texto com a prop semiBold definida como true
- Verifica se a propriedade semiBold é aplicada ao elemento

#### 5. Aplicação de Estilo Italic

**Teste:** `applies italic style when italic prop is true`  
**Descrição:** Testa se o estilo italic é aplicado quando a prop italic é definida como true.  
**Passos:**

- Renderiza um componente de texto com a prop italic definida como true
- Confirma se a propriedade italic é aplicada ao elemento

#### 6. Aplicação de Estilo Medium

**Teste:** `applies medium style when medium prop is true`  
**Descrição:** Verifica se o estilo medium é aplicado quando a prop medium é definida como true.  
**Passos:**

- Renderiza um componente de texto com a prop medium definida como true
- Verifica se a propriedade medium é aplicada ao elemento

#### 7. Aplicação de Cor

**Teste:** `applies the correct text color`  
**Descrição:** Testa se as cores do tema podem ser corretamente aplicadas ao texto.  
**Passos:**

- Renderiza um componente de texto com uma cor específica ("primary")
- Verifica se a propriedade de cor é configurada corretamente no elemento

#### 8. Alinhamento de Texto

**Teste:** `applies the correct text alignment`  
**Descrição:** Confirma que diferentes alinhamentos de texto podem ser aplicados adequadamente.  
**Passos:**

- Renderiza um componente de texto com um alinhamento específico ("center")
- Verifica se a propriedade de alinhamento é configurada corretamente no elemento

#### 9. Combinação de Múltiplos Estilos

**Teste:** `applies multiple text styles together`  
**Descrição:** Testa se múltiplas props de estilo de texto podem ser combinadas corretamente.  
**Passos:**

- Renderiza um componente de texto com múltiplas props (preset, bold, italic, color, align)
- Verifica se todas as propriedades são aplicadas corretamente ao elemento

#### 10. Suporte a Props Adicionais

**Teste:** `passes additional props to the underlying component`  
**Descrição:** Garante que props adicionais (como onPress) são passadas corretamente para o componente subjacente.  
**Passos:**

- Renderiza um componente de texto com um manipulador onPress
- Confirma se o manipulador é passado corretamente para o elemento
