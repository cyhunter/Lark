
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
