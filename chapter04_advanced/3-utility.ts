{
  type ToDo = {
    title: string;
    description: string;
  };

  /// Readonly
  function diplay(todo: Readonly<ToDo>) {
    todo.title = "jaja";
  }
  /// Partial
  function updateToDo(todo: ToDo, toDoUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...toDoUpdate };
  }

  const todo: ToDo = {
    title: "one",
    description: "blabla",
  };
  updateToDo(todo, { title: "two" });

  /// Pick (선택한 항목만 추출)
  function getValue(todo: Pick<ToDo, "title">) {
    return todo.title;
  }

  /// Omit (선택한 항목은 제외)
  function getValue2(todo: Omit<ToDo, "description">) {
    return todo.title;
  }

  // Record
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "update" | "delete";
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    update: { title: "Update" },
    delete: { title: "Delete" },
  };
}
