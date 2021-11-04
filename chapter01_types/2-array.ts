{
  // Array
  const num: number[] = [1, 2, 3];
  const num2: Array<number> = [4, 5, 6];

  //readonly의 경우 그 내용은 변경할 수 없다
  const printNum = (num: readonly number[]) => {
    //즉 이 함수에서 num에 push는 할 수 없다.
  };

  // Tuple
  // Tuple은 서로 다른 타입을 배열에 담을 수 있다.
  let student: [string, number];
  student = ["min", 28];
  // 그러나 Tuple은 내부 정보를 가져올 때 가독성이 떨어지고
  // Object 형태로 작성하는것이 더 효율적이므로
  // Tuple은 자주 사용하지 않는것이 좋다.

  // const [ state , setState ] = useState(0);
  // useState도 Tuple을 사용한 예이다.
}
