import {
  ExtendedRenderOptions,
  fireEvent,
  renderScreen,
  screen,
} from "test-utils";

import {useTodoGetList} from "@domain";
import {Todo} from "@domain";
import {ActiveTodoScreen} from "@screens";
import {useModal} from "@services";

jest.mock("@domain/Todo/useCases/useTodoGetList", () => ({
  useTodoGetList: jest.fn(),
}));

jest.mock("@services", () => ({
  ...jest.requireActual("@services"),
  useModal: jest.fn(),
}));

const mockUseTodoGetList = jest.mocked(useTodoGetList);
const mockUseModal = jest.mocked(useModal);
const fetchTodos = jest.fn();
const showModal = jest.fn();

function renderScreenComponent(options?: ExtendedRenderOptions) {
  renderScreen(<ActiveTodoScreen />, options);
  const titleElement = screen.getByText("Tarefas Ativas");
  return {titleElement};
}

beforeEach(() => {
  jest.clearAllMocks();
  mockUseTodoGetList.mockReturnValue({fetchTodos});
  mockUseModal.mockReturnValue({
    showModal: showModal,
    hideModal: jest.fn(),
    modal: null,
  });
});

afterAll(() => {
  jest.resetAllMocks();
});

describe("<ActiveTodoScreen />", () => {
  it("renders the screen with the correct title", () => {
    const mockTodos: Todo[] = [
      {id: "1", title: "Task 1", completed: false, order: 1},
      {id: "2", title: "Task 2", completed: false, order: 2},
    ];

    const {titleElement} = renderScreenComponent({
      preloadedState: {
        todo: {
          todos: mockTodos,
          concludedTodos: [],
          isGetListError: false,
          isLoading: false,
        },
      },
    });

    expect(titleElement).toBeTruthy();
  });

  it("displays only active todos", () => {
    const mockTodos: Todo[] = [
      {id: "1", title: "Active task", completed: false, order: 1},
      {id: "2", title: "Completed task", completed: true, order: 2},
    ];

    renderScreenComponent({
      preloadedState: {
        todo: {
          todos: mockTodos,
          concludedTodos: [],
          isGetListError: false,
          isLoading: false,
        },
      },
    });

    expect(screen.getByText("Active task")).toBeTruthy();
    expect(screen.queryByText("Completed task")).toBeNull();
  });

  it("displays the empty state when there are no active todos", () => {
    const mockTodos: Todo[] = [
      {id: "1", title: "Completed task", completed: true, order: 1},
    ];

    renderScreenComponent({
      preloadedState: {
        todo: {
          todos: mockTodos,
          concludedTodos: [],
          isGetListError: false,
          isLoading: false,
        },
      },
    });

    expect(
      screen.getByText("Você ainda não tem nenhuma tarefa aqui 😞"),
    ).toBeTruthy();
  });

  it("calls useTodoGetList on mount", () => {
    renderScreenComponent({
      preloadedState: {
        todo: {
          todos: [],
          concludedTodos: [],
          isGetListError: false,
          isLoading: false,
        },
      },
    });

    expect(useTodoGetList).toHaveBeenCalledWith({enabled: true});
  });

  it("renders the 'Add New Todo' button", () => {
    renderScreenComponent({
      preloadedState: {
        todo: {
          todos: [],
          concludedTodos: [],
          isGetListError: false,
          isLoading: false,
        },
      },
    });

    expect(screen.getByTestId("add-new-todo-button")).toBeTruthy();
  });

  it("handles 'Add New Todo' button press", () => {
    renderScreenComponent({
      preloadedState: {
        todo: {
          todos: [],
          concludedTodos: [],
          isGetListError: false,
          isLoading: false,
        },
      },
    });

    const addButton = screen.getByTestId("add-new-todo-button");
    expect(addButton).toBeTruthy();

    fireEvent.press(addButton);

    expect(showModal).toHaveBeenCalled();
  });
});
