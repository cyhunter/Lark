

class SkinLoader extends lark.EventEmitter {
    private unloaded = 0;
    
    public loadSkin(url:string,name:string){
        
        var request = new lark.HttpRequest();
        request.once(lark.Event.COMPLETE, e=>this.onExmlLoaded(request,name), this);
        request.open(url);
        request.send();
        this.unloaded ++;
    }
    public onExmlLoaded(request:lark.HttpRequest,name:string): void {
        lark.gui.EXML.parse(request.response, name);
		this.unloaded --;
        if(this.unloaded == 0){
            this.emitWith(lark.Event.COMPLETE);
        }
	}
}