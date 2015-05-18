

declare var TodoSkin: typeof lark.gui.Skin;
declare var TodoItemSkin: typeof lark.gui.Skin;

class Main extends lark.gui.Group {
    constructor(){
        super();
        var skinLoader = new SkinLoader();
        skinLoader.loadSkin("skins/TodoSkin.exml","TodoSkin");
        skinLoader.loadSkin("skins/TodoItemSkin.exml","TodoItemSkin");
        skinLoader.on(lark.Event.COMPLETE,this.onExmlLoaded,this);
    }
    private onExmlLoaded(event: lark.Event): void {
        var todo = new Todo();
        todo.skinName = TodoSkin;
        this.addChild(todo);
        
        this.stage.on(lark.Event.RESIZE, this.onResize, this);
        this.onResize();
    }
    
    private onResize(){
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
    }
}


