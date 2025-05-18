# useAppSafeArea Hook Test Documentation

> **OBS:** Esta documentação está disponível em duas versões: Inglês e Português. Role para baixo para visualizar a versão em Português (após a seção "---").

## 🇺🇸 English Version

### Overview

This document describes all test cases implemented for the useAppSafeArea hook. The tests ensure the hook correctly calculates safe area insets for top and bottom areas of the screen, respecting minimum requirements from the app's theme.

### Test Helper Function

The tests utilize the `renderHook` function from the testing utilities to render the hook in a test environment. The `useSafeAreaInsets` hook from react-native-safe-area-context is mocked to simulate different inset values.

### Test Cases

#### 1. Minimum Requirements

**Test:** `when the safe area is less than minimum requirement, it returns the minimum requirement`  
**Description:** Verifies that the hook returns minimum theme values when device safe area insets are smaller than the minimum requirements.  
**Steps:**

- Mocks the useSafeAreaInsets hook to return small values (top: 4, bottom: 2)
- Renders the useAppSafeArea hook
- Checks that the returned top value equals theme.spacing.s48
- Checks that the returned bottom value equals theme.spacing.s16

#### 2. Device Safe Area Values

**Test:** `when the safe area is greater than minimum requirement, it returns the safe area`  
**Description:** Verifies that the hook returns the actual device safe area values when they are larger than the minimum requirements.  
**Steps:**

- Mocks the useSafeAreaInsets hook to return larger values (top: 50, bottom: 50)
- Renders the useAppSafeArea hook
- Checks that the returned top value equals 50
- Checks that the returned bottom value equals 50

### Implementation Details

The `useAppSafeArea` hook:

1. Utilizes the react-native-safe-area-context's `useSafeAreaInsets` to get the device's safe area values
2. Gets spacing values from the app's theme using styled-components' `useTheme`
3. Returns calculated values for top and bottom insets, ensuring they are at least the minimum values defined in the theme

---

## 🇧🇷 Versão em Português

### Visão Geral

Este documento descreve todos os casos de teste implementados para o hook useAppSafeArea. Os testes garantem que o hook calcule corretamente os espaçamentos de área segura para as áreas superior e inferior da tela, respeitando os requisitos mínimos do tema do aplicativo.

### Função Auxiliar de Teste

Os testes utilizam a função `renderHook` das utilidades de teste para renderizar o hook em um ambiente de teste. O hook `useSafeAreaInsets` do react-native-safe-area-context é simulado para simular diferentes valores de inset.

### Casos de Teste

#### 1. Requisitos Mínimos

**Teste:** `quando a área segura é menor que o requisito mínimo, retorna o requisito mínimo`  
**Descrição:** Verifica se o hook retorna valores mínimos do tema quando os insets de área segura do dispositivo são menores que os requisitos mínimos.  
**Passos:**

- Simula o hook useSafeAreaInsets para retornar valores pequenos (topo: 4, base: 2)
- Renderiza o hook useAppSafeArea
- Verifica se o valor retornado para o topo é igual a theme.spacing.s48
- Verifica se o valor retornado para a base é igual a theme.spacing.s16

#### 2. Valores da Área Segura do Dispositivo

**Teste:** `quando a área segura é maior que o requisito mínimo, retorna a área segura`  
**Descrição:** Verifica se o hook retorna os valores reais da área segura do dispositivo quando eles são maiores que os requisitos mínimos.  
**Passos:**

- Simula o hook useSafeAreaInsets para retornar valores maiores (topo: 50, base: 50)
- Renderiza o hook useAppSafeArea
- Verifica se o valor retornado para o topo é igual a 50
- Verifica se o valor retornado para a base é igual a 50

### Detalhes de Implementação

O hook `useAppSafeArea`:

1. Utiliza o `useSafeAreaInsets` do react-native-safe-area-context para obter os valores de área segura do dispositivo
2. Obtém valores de espaçamento do tema do aplicativo usando o `useTheme` do styled-components
3. Retorna valores calculados para os insets superior e inferior, garantindo que sejam pelo menos os valores mínimos definidos no tema
