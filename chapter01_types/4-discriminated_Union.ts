{
    type Success = {
        respose: string;
        result : "success"
    }

    type Fail = {
        reason : string;
        result : "fail"

    }

    type Login = Success | Fail;

    const printLogin = (state : Login){
        if(state.result === "success"){
            console.log(state.respose);
        }else{
            console.log(state.reason);
        }
    }

}