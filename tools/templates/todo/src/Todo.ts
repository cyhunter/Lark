

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


class TodoItem extends lark.gui.Component{
	
	labelDisplay:lark.gui.Label;
	iconCheck:lark.gui.Image;
	iconDelete:lark.gui.Image;

	get taskName(){
		return this.labelDisplay.text;
	}
	set taskName(value:string){
		this.labelDisplay.text = value;
	}
	


	constructor(taskName?:string){
		super();
		this.skinName = TodoItemSkin;
		this.iconCheck.on(lark.TouchEvent.TOUCH_TAP,this.onCheckIconClick,this);
		this.iconDelete.on(lark.TouchEvent.TOUCH_TAP,this.onDeleteIconClick,this);
		this.labelDisplay.text = taskName;
	}
	
	private onCheckIconClick(){
		this._done = !this._done;
		this.skin.currentState = this._done?'done':'up';
	}
	
	private onDeleteIconClick(){
		this.emitWith('delete', true);
	}
	

	private _done = false;

}


class HelloWorld extends lark.Sprite {
  	constructor() {
		super();
		var textField = new lark.TextField();
		textField.text = "Hello World!";
		this.addChild(textField);
  	}
}
