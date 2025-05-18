# BaseModal Component Test Documentation

> **OBS:** Esta documentação está disponível em duas versões: Inglês e Português. Role para baixo para visualizar a versão em Português (após a seção "---").

## 🇺🇸 English Version

### Overview

This document describes all test cases implemented for the BaseModal component. The tests ensure the component behaves correctly in various states and scenarios, including displaying content, handling user interactions, keyboard integration, and modal visibility.

### Test Setup

The tests mock several dependencies to isolate the BaseModal component:

- **useModal**: Mocked to provide the modal data and hideModal function
- **useAppSafeArea**: Mocked to provide consistent safe area insets
- **useKeyboardStatus**: Mocked to control keyboard state for relevant tests
- **Keyboard.dismiss**: Mocked to verify keyboard dismissal

### Test Cases

#### 1. Content Rendering

**Test:** `should render with title and content`  
**Description:** Verifies that the modal correctly displays its title and content.  
**Steps:**

- Renders the BaseModal component with default test configuration
- Verifies the title element exists
- Confirms the content is visible

#### 2. Null Modal Handling

**Test:** `should not render anything when modal is null`  
**Description:** Ensures that nothing is rendered when the modal data is null.  
**Steps:**

- Renders the BaseModal component with modal set to null
- Verifies that no content is rendered

#### 3. TouchableWithoutFeedback Interaction

**Test:** `should call Keyboard.dismiss when TouchableWithoutFeedback is pressed`  
**Description:** Ensures that tapping the TouchableWithoutFeedback area dismisses the keyboard.  
**Steps:**

- Renders the BaseModal component
- Simulates a press event on the TouchableWithoutFeedback
- Verifies Keyboard.dismiss was called

### Props (ModalProps)

- **content**: Function - A component function that returns the modal content
- **title**: String - The title displayed at the top of the modal (optional)
- **heightPercentage**: Number - Controls the modal's height as a percentage of screen height
- **style**: Object - Custom styling for the modal content container

---

## 🇧🇷 Versão em Português

### Visão Geral

Este documento descreve todos os casos de teste implementados para o componente BaseModal. Os testes garantem que o componente se comporte corretamente em vários estados e cenários, incluindo a exibição de conteúdo, tratamento de interações do usuário, integração com teclado e visibilidade do modal.

### Configuração de Teste

Os testes simulam várias dependências para isolar o componente BaseModal:

- **useModal**: Simulado para fornecer os dados do modal e a função hideModal
- **useAppSafeArea**: Simulado para fornecer insets de área segura consistentes
- **useKeyboardStatus**: Simulado para controlar o estado do teclado para testes relevantes
- **Keyboard.dismiss**: Simulado para verificar a dispensa do teclado

### Casos de Teste

#### 1. Renderização de Conteúdo

**Teste:** `should render with title and content`  
**Descrição:** Verifica se o modal exibe corretamente seu título e conteúdo.  
**Passos:**

- Renderiza o componente BaseModal com a configuração padrão de teste
- Verifica se o elemento de título existe
- Confirma se o conteúdo está visível

#### 2. Tratamento de Modal Nulo

**Teste:** `should not render anything when modal is null`  
**Descrição:** Garante que nada seja renderizado quando os dados do modal são nulos.  
**Passos:**

- Renderiza o componente BaseModal com modal definido como null
- Verifica que nenhum conteúdo é renderizado

#### 3. Interação com TouchableWithoutFeedback

**Teste:** `should call Keyboard.dismiss when TouchableWithoutFeedback is pressed`  
**Descrição:** Garante que tocar na área TouchableWithoutFeedback fecha o teclado.  
**Passos:**

- Renderiza o componente BaseModal
- Simula um evento de pressionar no TouchableWithoutFeedback
- Verifica se Keyboard.dismiss foi chamado

### Props (ModalProps)

- **content**: Function - Uma função de componente que retorna o conteúdo do modal
- **title**: String - O título exibido na parte superior do modal (opcional)
- **heightPercentage**: Number - Controla a altura do modal como uma porcentagem da altura da tela
- **style**: Object - Estilização personalizada para o contêiner de conteúdo do modal
