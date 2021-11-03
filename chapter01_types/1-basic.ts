{
    // js의타입
    //  1. Primitive : number , string, boolean , bigint, symbol, null, undefined
    //  2. Object : function, array

    //ts의 타입들

    // unknown 타입
    let notSure : unknown = 0;
    notSure = "he";
    notSure = true;
    // unknown은 사용하지 않는것이 좋다.
    
    // void

    function print () : void {
        return;
    }
    // void는 리턴값이 없는 함수의 경우 사용한다.

    // never 
    function throwError(message : string) :never{
        while(true){
            
        }
    };
    // never는 리턴값이 없고 while이나 error을 서버에 던질 때 사용한다.
}

{
    // Optional parameter
    const printName= (firstName : string , lastName? : string )=>{
        console.log(firstName)
        console.log(lastName)
    }
    // ? 가 붙으면 필수사항이 아니다.
    printName('Kim',"Min");
    printName("jong")
    
    // Default parameter
    const printMessage = (message : string = "default message") =>{
        
    }
    printMessage();
    // 요소가 없는 경우 default값이 반환된다.

    // Rest parameter
    const addNumbers = (...numbers:number[]) : number=>{
        return numbers.reduce((a,b)=> a+b);
    }
    console.log(addNumbers(1,2,5));
}