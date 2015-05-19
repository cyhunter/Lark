/// <reference path="libs/core" />
/// <reference path="libs/gui" />

class Start extends lark.gui.Group{
	constructor(){
		super();
		var exml = document.getElementById('exml').textContent;
		var ui:any = lark.gui.EXML.parse(exml,"StartUI");
		this.addChild(new ui());
	}
}