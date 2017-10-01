import { EventEmitter } from "events";
import Dispatcher from '../Dispatcher';

class CategoryStore extends EventEmitter {
    constructor(){
        super();
        this.categories = [
            {
                id: "1",
                name: "Computers",
                subCategories: ["Desktops", "Notebooks", "Tablets"]
            },
            {
                id: "2",
                name: "Accessories",
                subCategories: ["Bags", "Cables"]
            }
        ]
    }


    // createTodo(text) {
    //     const id = Date.now();
    //     this.todos.push({
    //         id,
    //         text,
    //         complete: false,
    //     });
    //
    //     this.emit("change");
    // }

    getAll(){
        return this.categories;
    }

    // handleActions(action){
    //     switch (action.type){
    //         case "CREATE_TODO":{
    //             this.createTodo(action.text);
    //         }
    //     }
    // }
}

const categoryStore = new CategoryStore();
//Dispatcher.register(categoryStore.handleActions.bind(categoryStore));
window.Dispatcher = Dispatcher;
export default categoryStore;