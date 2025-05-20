![Static Badge](https://img.shields.io/badge/Fernando%20H-gray)
[![Static Badge](https://img.shields.io/badge/Bennu-App-%233B82F6?style=flat&labelColor=gray)](https://bennu.com.br/)

> **OBS:** Esta documentação está disponível em duas versões: Inglês e Português. Role para baixo para visualizar a versão em Português (após a seção "---").

🇺🇸 You can see the application works here: https://drive.google.com/file/d/1_W2zCaFUsouahxZSQIMNo0uqHVjxTy9J/view?usp=sharing

🇧🇷 Você pode ver a aplicação funcionando por aqui: https://drive.google.com/file/d/1_W2zCaFUsouahxZSQIMNo0uqHVjxTy9J/view?usp=sharing

# Bennu Challenge App 🇺🇸 📱

## About the Project

Bennu App is a mobile Todo application built with React Native, showcasing modern mobile development technologies and best practices. The app aims to demonstrate effective state management, component architecture, and responsive design principles in React Native development.

The project includes a fully-featured Todo list with multiple views (All, Active, Completed), task management capabilities, and a clean, intuitive user interface.

## Overview of Technologies Used

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React_Native-61DAFB?style=flat&logo=react&logoColor=black)](https://reactnative.dev/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white)](https://redux.js.org/)
[![React Navigation](https://img.shields.io/badge/React_Navigation-6B52AE?style=flat&logo=react&logoColor=white)](https://reactnavigation.org/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io/)
[![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=flat&logo=testing-library&logoColor=white)](https://testing-library.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)
[![Zod](https://img.shields.io/badge/Zod-3068B7?style=flat&logo=zod&logoColor=white)](https://zod.dev/)

- **React Native 0.79**: JavaScript framework for building native mobile applications with the latest features and performance improvements.
- **TypeScript**: Strongly typed programming language that builds on JavaScript, providing better tooling at any scale and improved developer experience.
- **React Navigation 7**: Routing and navigation library for React Native apps with native-like transitions and gestures.
- **Redux Toolkit**: State management library with utilities to simplify common Redux use cases.
- **Redux Persist**: Library to persist and rehydrate a Redux store.
- **React Hook Form**: Performant, flexible and extensible forms with easy-to-use validation and minimal re-renders.
- **Zod**: TypeScript-first schema validation library with static type inference for creating robust form validations.
- **Jest**: Delightful JavaScript testing framework with a focus on simplicity, used for unit and integration tests.
- **React Native Testing Library**: Testing utilities focused on testing components the way users interact with them, encouraging good testing practices.
- **ESLint**: Static code analysis tool for identifying problematic patterns in JavaScript and TypeScript code.
- **Husky**: Git hooks tool to enforce code quality checks before commits.
- **Styled Components**: CSS-in-JS library for styling React components with tagged template literals.
- **React Native MMKV**: High-performance key-value storage framework for React Native.
- **React Native Draggable FlatList**: Library for creating drag-and-drop reorderable lists with smooth animations.
- **Reanimated**: React Native's animation library for creating smooth animations and interactions.

## Requirements

- Node.js 18+
- React Native development environment set up (Android Studio / Xcode)
- Yarn package manager

### Environment Setup

This project uses `react-native-dotenv` to manage environment variables. You'll need to create a `.env` file in the root directory with the following variables:

- IP_ADDRESS

**Important Note:** You must use your machine's local IP address (e.g., 192.168.1.X) instead of localhost or 127.0.0.1. This is necessary because:

1. When running on a physical device, "localhost" refers to the device itself, not your development machine
2. The Android emulator uses a different network interface (10.0.2.2) to reach the host machine
3. Using your machine's actual IP address ensures both iOS and Android can reach the same backend server

To find your IP address:

- On macOS: Open System Preferences > Network and check the connected interface
- On Windows: Run `ipconfig` in Command Prompt
- On Linux: Run `ip addr show` or `ifconfig` in Terminal

## How to Run

Clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/f3rnandorj/desafio-mobile
cd desafio-mobile

# Install server dependencies (from the root directory)
yarn install

# Start the backend server (from the root directory)
yarn start

# In a new terminal window, navigate to the mobile app directory
cd bennu_app

# Install React Native app dependencies
yarn install

# Crie o arquivo .env com base no .env.example
cp .env.example .env

# Install iOS dependencies (if running on iOS)
cd ios && pod install && cd ..

# Run on iOS
yarn ios

# Run on Android
yarn android
```

**Important:** The app requires the backend server to be running to fetch and manage todo items. The server must be started before launching the app.

## How to Run Tests

![image](https://github.com/user-attachments/assets/0e2329db-5097-4d87-8e91-b3889d09a824)

This project includes unit and component tests using Jest and React Native Testing Library. Here's how to run them:

```bash
# Navigate to the mobile app directory (if not already there)
cd bennu_app

# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Generate test coverage report
yarn test:coverage
```

**Note:** All test commands must be executed from the `bennu_app` directory, not from the root project directory.

The test coverage report will be available in the `/coverage` directory after running the coverage command.

For each tested component, you can find detailed test case documentation in the corresponding `__tests__/ComponentName.spec.md` file.

## Project Structure

- `/src/`: Main source code
  - `/api/`: API configuration and API-related utilities
  - `/assets/`: Static assets like fonts and images
  - `/components/`: Reusable UI components
    - `/AddNewTodoButton/`: Button for adding new todo items
    - `/Button/`: Generic button component
    - `/Form/`: Form-related components
    - `/TextInput/`: Text input components
    - `/TodoList/`: Todo list display component
    - And more UI elements...
  - `/context/`: React context providers
  - `/domain/`: Domain logic organized by feature
    - `/Todo/`: Todo-related logic, including types and services
  - `/features/`: Redux toolkit features and slice definitions
  - `/form/`: Form validation schemas and utilities
  - `/hooks/`: Custom React hooks
  - `/routes/`: Navigation configuration
    - `AppStack.tsx`: Main navigation stack
    - `BottomTabNavigator.tsx`: Tab navigation between Todo screens
  - `/screens/`: App screens
    - `/ActiveTodoScreen/`: Active todos view
    - `/AllTodoScreen/`: All todos view
    - `/CompletedTodoScreen/`: Completed todos view
  - `/services/`: Application services
    - `/alert/`: Alert services
    - `/modal/`: Modal services
    - `/storage/`: Storage services
    - `/toast/`: Toast notification services
  - `/theme/`: App theme and styling constants
  - `/types/`: TypeScript type definitions

## State Management Architecture

This application uses a hybrid approach to state management:

- **Redux with Redux Persist and MMKV**: For global application state that needs to be accessible throughout the app and persisted between sessions. The MMKV storage engine provides high-performance persistence compared to AsyncStorage.

- **Context API**: For managing global application services like alerts, toasts, and modals. This separation keeps UI-related global state and services separate from business logic state, making the codebase more maintainable.

This architecture provides several benefits:

- Persisted state survives app restarts
- Clear separation between business data and UI services
- Optimized performance for different types of state
- TypeScript integration for type-safe state management

## Key Features

- **Multiple Todo Views**: Separate screens for all, active, and completed todos
- **Add/Edit/Delete Tasks**: Full CRUD operations for todo management
- **Drag and Drop Reordering**: Intuitive task reordering with smooth animations using react-native-draggable-flatlist
- **Local Storage**: Persistent storage of todos between app launches using Redux Persist with MMKV
- **Hybrid State Management**: Redux for business logic and Context API for global services
- **Form Validation**: Robust form validation using Zod schemas
- **Beautiful UI**: Clean and modern interface with smooth animations
- **Custom Typography**: Rubik font family with various weights for improved readability and modern look
- **Type Safety**: Full TypeScript implementation for robust code
- **Responsive Design**: Adapts to various screen sizes and orientations
- **Comprehensive Testing**: Unit and integration tests for components and functionality

## Drag and Drop Functionality

The app features a smooth drag and drop system for reordering todo items, implemented with react-native-draggable-flatlist:

- **Intuitive Interaction**: Long-press on any todo item to initiate dragging
- **Visual Feedback**: Scale animation provides clear feedback when items are being moved
- **Persistent Ordering**: Todo order is preserved between app sessions
- **Redux Integration**: Task reordering is managed through Redux actions and state
- **Order Tracking**: Each todo has an `order` property that determines its position in the list
- **Optimized Rendering**: Tasks are efficiently reordered without unnecessary re-renders

The implementation uses Redux to manage the reordering logic through a dedicated `reorderTodo` action. When a user drags and drops a task, the action updates the position of all affected todos and maintains their order properties.

## Figma Design

The project doesn't follow any Figma design - the UI was created by me from scratch.

## Contact Information

You can reach me at:

- Email: [f3rnandorj10@gmail.com]
- LinkedIn: https://www.linkedin.com/in/fernando-h-fernandes/

## App Icon

The App Icon for this project was generated using [FaviconGenerator](https://favicon.io/favicon-generator/)

## How to Use

1. Navigate between tabs to view different todo lists (Active, Completed, All)
2. Add new todos using the add button
3. Mark todos as complete by tapping on them
4. Edit or delete todos through the item menu
5. Reorder todos by long-pressing on a task and dragging it to a new position

---

# Aplicativo Bennu Challenge 🇧🇷 📱

## Sobre o Projeto

Bennu App é uma aplicação mobile de lista de tarefas construída com React Native, apresentando tecnologias modernas de desenvolvimento móvel e melhores práticas. O app tem como objetivo demonstrar gerenciamento de estado eficiente, arquitetura de componentes e princípios de design responsivo no desenvolvimento React Native.

O projeto inclui uma lista de tarefas completa com múltiplas visualizações (Todas, Ativas, Concluídas), recursos de gerenciamento de tarefas e uma interface de usuário limpa e intuitiva.

## Visão Geral das Tecnologias Utilizadas

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React_Native-61DAFB?style=flat&logo=react&logoColor=black)](https://reactnative.dev/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white)](https://redux.js.org/)
[![React Navigation](https://img.shields.io/badge/React_Navigation-6B52AE?style=flat&logo=react&logoColor=white)](https://reactnavigation.org/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io/)
[![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=flat&logo=testing-library&logoColor=white)](https://testing-library.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)
[![Zod](https://img.shields.io/badge/Zod-3068B7?style=flat&logo=zod&logoColor=white)](https://zod.dev/)

- **React Native 0.79**: Framework JavaScript para construir aplicações móveis nativas com os recursos mais recentes e melhorias de desempenho.
- **TypeScript**: Linguagem de programação fortemente tipada baseada em JavaScript, fornecendo melhores ferramentas em qualquer escala e experiência aprimorada para desenvolvedores.
- **React Navigation 7**: Biblioteca de roteamento e navegação para apps React Native com transições e gestos nativos.
- **Redux Toolkit**: Biblioteca de gerenciamento de estado com utilidades para simplificar casos de uso comuns do Redux.
- **Redux Persist**: Biblioteca para persistir e reidratar uma store Redux.
- **React Hook Form**: Formulários eficientes, flexíveis e extensíveis com validação fácil e re-renderizações mínimas.
- **Zod**: Biblioteca de validação de esquema com foco em TypeScript e inferência de tipo estático para criar validações de formulário robustas.
- **Jest**: Framework de teste JavaScript com foco na simplicidade, usado para testes unitários e de integração.
- **React Native Testing Library**: Utilitários de teste focados em testar componentes da maneira como os usuários interagem com eles.
- **ESLint**: Ferramenta de análise de código estático para identificar padrões problemáticos em código JavaScript e TypeScript.
- **Husky**: Ferramenta de hooks Git para impor verificações de qualidade de código antes dos commits.
- **Styled Components**: Biblioteca CSS-in-JS para estilização de componentes React com literais de template.
- **React Native MMKV**: Framework de armazenamento chave-valor de alto desempenho para React Native.
- **React Native Draggable FlatList**: Biblioteca para criar listas reordenáveis com funcionalidade de arrastar e soltar com animações suaves.
- **Reanimated**: Biblioteca de animações do React Native para criar animações suaves e interações.

## Requisitos

- Node.js 18+
- Ambiente de desenvolvimento React Native configurado (Android Studio / Xcode)
- Gerenciador de pacotes Yarn

### Configuração de Ambiente

Este projeto utiliza `react-native-dotenv` para gerenciar variáveis de ambiente. Você precisará criar um arquivo `.env` no diretório raiz com as seguintes variáveis:

- IP_ADDRESS

**Nota Importante:** Você deve usar o endereço IP local da sua máquina (ex: 192.168.1.X) em vez de localhost ou 127.0.0.1. Isso é necessário porque:

1. Quando executado em um dispositivo físico, "localhost" se refere ao próprio dispositivo, não à sua máquina de desenvolvimento
2. O emulador Android usa uma interface de rede diferente (10.0.2.2) para acessar a máquina host
3. Usar o endereço IP real da sua máquina garante que iOS e Android possam acessar o mesmo servidor backend

Para encontrar seu endereço IP:

- No macOS: Abra Preferências do Sistema > Rede e verifique a interface conectada
- No Windows: Execute `ipconfig` no Prompt de Comando
- No Linux: Execute `ip addr show` ou `ifconfig` no Terminal

## Como Executar

Clone o repositório e instale as dependências:

```bash
# Clone o repositório
git clone https://github.com/f3rnandorj/desafio-mobile
cd desafio-mobile

# Instale as dependências do servidor (no diretório raiz)
npm install

# Inicie o servidor backend (no diretório raiz)
npm start

# Em uma nova janela do terminal, navegue para o diretório da aplicação mobile
cd bennu_app

# Instale as dependências do app React Native
yarn install

# Crie o arquivo .env com base no .env.example
cp .env.example .env

# Instale as dependências iOS (se executar no iOS)
cd ios && pod install && cd ..

# Execute no iOS
yarn ios

# Execute no Android
yarn android
```

**Importante:** O aplicativo requer que o servidor backend esteja em execução para buscar e gerenciar itens de tarefas. O servidor deve ser iniciado antes de lançar o aplicativo.

## Como Executar Testes

![image](https://github.com/user-attachments/assets/bb46475f-3377-44f3-97f6-d887119da876)

Este projeto inclui testes unitários e de componentes usando Jest e React Native Testing Library. Veja como executá-los:

```bash
# Navegue para o diretório da aplicação mobile (se ainda não estiver lá)
cd bennu_app

# Execute todos os testes
yarn test

# Execute testes no modo de observação
yarn test:watch

# Gere relatório de cobertura de testes
yarn test:coverage
```

**Nota:** Todos os comandos de teste devem ser executados no diretório `bennu_app`, não no diretório raiz do projeto.

O relatório de cobertura de testes estará disponível no diretório `/coverage` após executar o comando de cobertura.

Para cada componente testado, você pode encontrar documentação detalhada dos casos de teste no arquivo correspondente `__tests__/NomeDoComponente.spec.md`.

## Estrutura do Projeto

- `/src/`: Código-fonte principal
  - `/api/`: Configuração da API e utilitários relacionados
  - `/assets/`: Recursos estáticos como fontes e imagens
  - `/components/`: Componentes UI reutilizáveis
    - `/AddNewTodoButton/`: Botão para adicionar novas tarefas
    - `/Button/`: Componente de botão genérico
    - `/Form/`: Componentes relacionados a formulários
    - `/TextInput/`: Componentes de campo de texto
    - `/TodoList/`: Componente de exibição da lista de tarefas
    - E mais elementos UI...
  - `/context/`: Provedores de contexto React
  - `/domain/`: Lógica de domínio organizada por recurso
    - `/Todo/`: Lógica relacionada a tarefas, incluindo tipos e serviços
  - `/features/`: Recursos e definições de slice do Redux Toolkit
  - `/form/`: Esquemas de validação de formulário e utilitários
  - `/hooks/`: Hooks React personalizados
  - `/routes/`: Configuração de navegação
    - `AppStack.tsx`: Pilha de navegação principal
    - `BottomTabNavigator.tsx`: Navegação por abas entre telas de tarefas
  - `/screens/`: Telas do aplicativo
    - `/ActiveTodoScreen/`: Visualização de tarefas ativas
    - `/AllTodoScreen/`: Visualização de todas as tarefas
    - `/CompletedTodoScreen/`: Visualização de tarefas concluídas
  - `/services/`: Serviços da aplicação
    - `/alert/`: Serviços de alerta
    - `/modal/`: Serviços de modal
    - `/storage/`: Serviços de armazenamento
    - `/toast/`: Serviços de notificação toast
  - `/theme/`: Tema do aplicativo e constantes de estilo
  - `/types/`: Definições de tipos TypeScript

## Arquitetura de Gerenciamento de Estado

Esta aplicação utiliza uma abordagem híbrida para gerenciamento de estado:

- **Redux com Redux Persist e MMKV**: Para estado global da aplicação que precisa ser acessível em todo o app e persistido entre sessões. O mecanismo de armazenamento MMKV fornece persistência de alto desempenho em comparação com AsyncStorage.

- **Context API**: Para gerenciar serviços globais da aplicação como alertas, toasts e modais. Esta separação mantém o estado global relacionado à UI e serviços separados do estado da lógica de negócios, tornando a base de código mais sustentável.

Esta arquitetura fornece diversos benefícios:

- Estado persistido sobrevive a reinicializações do app
- Clara separação entre dados de negócios e serviços de UI
- Desempenho otimizado para diferentes tipos de estado
- Integração com TypeScript para gerenciamento de estado com tipo seguro

## Principais Recursos

- **Múltiplas Visualizações de Tarefas**: Telas separadas para todas, ativas e concluídas
- **Adicionar/Editar/Excluir Tarefas**: Operações CRUD completas para gerenciamento de tarefas
- **Reordenação por Arrastar e Soltar**: Reordenação intuitiva de tarefas com animações suaves usando react-native-draggable-flatlist
- **Armazenamento Local**: Armazenamento persistente de tarefas entre inicializações do aplicativo usando Redux Persist com MMKV
- **Gerenciamento de Estado Híbrido**: Redux para lógica de negócios e Context API para serviços globais
- **Validação de Formulário**: Validação robusta de formulário usando esquemas Zod
- **UI Bonita**: Interface limpa e moderna com animações suaves
- **Tipografia Personalizada**: Família de fontes Rubik com vários pesos para melhor legibilidade e aparência moderna
- **Segurança de Tipos**: Implementação completa de TypeScript para código robusto
- **Design Responsivo**: Adapta-se a vários tamanhos e orientações de tela
- **Testes Abrangentes**: Testes unitários e de integração para componentes e funcionalidades

## Funcionalidade de Arrastar e Soltar

O aplicativo conta com um sistema suave de arrastar e soltar para reordenar itens de tarefas, implementado com react-native-draggable-flatlist:

- **Interação Intuitiva**: Pressione longamente qualquer item de tarefa para iniciar o arrasto
- **Feedback Visual**: Animação de escala fornece feedback claro quando os itens estão sendo movidos
- **Ordenação Persistente**: A ordem das tarefas é preservada entre as sessões do aplicativo
- **Integração com Redux**: A reordenação de tarefas é gerenciada através de ações e estado do Redux
- **Rastreamento de Ordem**: Cada tarefa possui uma propriedade `order` que determina sua posição na lista
- **Renderização Otimizada**: As tarefas são reordenadas eficientemente sem re-renderizações desnecessárias

A implementação usa Redux para gerenciar a lógica de reordenação através de uma ação dedicada `reorderTodo`. Quando um usuário arrasta e solta uma tarefa, a ação atualiza a posição de todas as tarefas afetadas e mantém suas propriedades de ordem.

## Design Figma

O projeto não segue nenhum design do Figma - a UI foi criada por mim do zero.

## Informações de Contato

Você pode me encontrar em:

- Email: [f3rnandorj10@gmail.com]
- LinkedIn: https://www.linkedin.com/in/fernando-h-fernandes/

## Ícone do App

O ícone deste aplicativo foi gerado usando [FaviconGenerator](https://favicon.io/favicon-generator/)

## Como Usar

1. Navegue entre as abas para visualizar diferentes listas de tarefas (Todas, Ativas, Concluídas)
2. Adicione novas tarefas usando o botão adicionar
3. Marque tarefas como concluídas tocando nelas
4. Edite ou exclua tarefas através do menu do item
5. Reordene tarefas pressionando longamente uma tarefa e arrastando-a para uma nova posição
