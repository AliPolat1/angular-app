export class Model{
    user;
    items;

    constructor() {
        this.user="Ali"
        this.items= [
                        new TodoItem("Kahvaltı",true),
                        new TodoItem("Oyun",false),
                        new TodoItem("Fatura",false),
                        new TodoItem("Sinema",false)
                    ]; 
    }
}

export class TodoItem{
    description;
    action;
    
    constructor(description, action){
        this.description = description
        this.action = action
    }

}