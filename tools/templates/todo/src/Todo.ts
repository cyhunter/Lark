

class Todo extends lark.gui.Component{
	
	todos:TodoItem[] = [];
	txTodo:lark.gui.TextInput;
	groupItems:lark.gui.Group;
	
	constructor(){
		super();
		this.skinName = TodoSkin;
		this.txTodo.on(lark.TextInputEvent.KEY_DOWN,this.addTodo,this);
        this.left = this.right = this.top = this.bottom = 0;
	}
	
	addTodo(e:lark.TextInputEvent){
		if (e.keyCode != 13 || this.txTodo.text=="")
			return;
		var taskName = this.txTodo.text;
		var todo = new TodoItem(taskName);
		var index = this.groupItems.numChildren;
		todo.y = 60 * index;
		this.groupItems.addChild(todo);
		todo.percentWidth = 100;
		todo.on('delete',this.removeTodo,this);
		this.todos.unshift(todo);
		this.updateDisplay();
		this.txTodo.text = "";
	}

	removeTodo(e:lark.Event){
		var item = e.target;
		var index = this.todos.indexOf(item);
		this.todos.splice(index,1);
		this.updateDisplay();
	}
	
	private updateDisplay(){
		var group = this.groupItems;
		group.removeChildren();
		this.todos.forEach((todo,index)=>{
			todo.top = index * 60;
			group.addChild(todo);
		})
	}
}