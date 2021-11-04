// 배열을 사용하지 않고 배열 만들기(LIFO 형식)

interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;
  get size() {
    return this._size;
  }
  push(value: string) {
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
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

const stack = new StackImpl();
stack.push("1");
stack.push("2");
stack.push("3");
while (stack.size !== 0) {
  console.log(stack.pop());
}
