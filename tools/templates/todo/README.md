
#Lark 入门 


新建一个示例文件夹 demo ，下载 Lark 框架放到 demo 下的 libs 目录中。新建一个 index.html, 并将下面的代码粘贴到其中。

```html
	<!DOCTYPE HTML>
	<html>
	    <head>
	        <title>Lark 入门</title>
		    <script src="libs/lark.js"></script>
		    <script src="libs/lark.gui.js"></script>
	    </head>
	    <body>
			<div class="lark-player" data-entry-class="Main" style="height:400px"></div>
	        <script id="ui" type="text/xml">
	            <e:Group xmlns:e="http://ns.egret-labs.org/egret">
	            	<e:Image source="images/lark.png"/>
	            	<e:Label text="Lark" fontSize="128" fontFamily="Helvetica, Arial" left="150"/>
	            </e:Group>
	        </script>
	        <script>
		        var ui = document.getElementById('ui').textContent;
		        lark.gui.EXML.parse(ui, "Main");
	        </script>
	    </body>
	</html>
```

使用浏览器访问这个网页就会看到一个 Lark logo 和文字。 



在index.html中首先我们引入了 Lark 和 Lark GUI 框架。Lark GUI 可以使用 EXML 和丰富的内置组件来构建UI界面。

```html
    <script src="libs/lark.js"></script>
    <script src="libs/lark.gui.js"></script>
```

Lark 会自动识别 `class="lark-player"` 的HTML元素，作为 `canvas` 的容器。
` data-entry-class="Main"` 标示了程序执行的入口是 `Main`。

```html
	<div class="lark-player" data-entry-class="Main" style="height:400px"></div>
```

这个例子中我们使用EXML来组织UI界面，并在运行时解析EXML显示UI界面。
由于解析时 Lark 只需要EXML的文本，所以开发者可以使用任何自己喜欢的形式加载EXML。
这个示例中我们将EXML放置在一个 Script标签中，并通过 JavaScript 来读取EXML内容。


```xml
    <script id="ui" type="text/xml">
        <e:Group xmlns:e="http://ns.egret-labs.org/egret">
        	<e:Image source="images/lark.png"/>
        	<e:Label text="Lark" fontSize="128" fontFamily="Helvetica, Arial" left="150"/>
        </e:Group>
    </script>
```

EXML会被下面的代码解析成一个类 `Main`,作为程序的入口。

```javascript
    var ui = document.getElementById('ui').textContent;
    lark.gui.EXML.parse(ui, "Main");
```
当网页加载完成时，Lark 会实例化 `Main` 这个类，将它添加到显示列表，所以也要求入口类必须继承自显示对象。

##Next:
更加详细的 Lark 使用方法请参考: https://github.com/egret-labs/Lark

