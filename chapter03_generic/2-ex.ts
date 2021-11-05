// 배열을 사용하지 않고 배열 만들기(LIFO 형식)

interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;
  get size() {
    return this._size;
  }
  push(value: T) {
    const node: StackNode<T> = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    // === 로 할 경우 js는 undefined는 null이 아니므로 오류가 발생할 수 있다.
    // 따라서 ==로 null과 undefined 둘 다 포함시키게 코드를 작성해야한다.
    if (this.head == null) {
      throw new Error("stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>();
stack.push("1");
stack.push("2");
stack.push("3");
while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>();
stack2.push(1);
stack2.push(2);
stack2.push(3);
while (stack2.size !== 0) {
  console.log(stack2.pop());
}
