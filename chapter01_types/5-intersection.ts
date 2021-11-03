{
    // Intersction Types : And

    type Student = {
        name : string;
        score : number;
    };

    type Worker = {
        id : number;
        work() : void;
    };

    const intern=(person : Student & Worker)=>{
        console.log(person.name, person.score, person.id, person.work());
    }

}