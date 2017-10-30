(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"start_atlas_", frames: [[0,2776,1940,253],[1664,1598,157,163],[1145,1879,135,139],[1324,1354,86,85],[930,1885,127,131],[1324,1256,94,96],[1282,1879,93,143],[1589,1951,150,186],[1393,1678,269,271],[1393,2126,139,241],[0,0,1936,1098],[1393,1951,194,173],[1430,1256,252,153],[930,1100,392,403],[1430,1411,192,196],[1324,1100,534,154],[930,1505,498,171],[1145,1678,210,199],[1393,2369,202,161],[1624,1411,196,185],[930,1678,213,205],[0,1100,928,928],[0,2030,744,744],[746,2030,645,645]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["start_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("effect");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CCFF").s().p("AApCrIAAgeQgNAPgLAGQgRALgXAAQgpAAgaggQgaggAAgqQAAg1AfglQAfgmAtAAQAQAAAPAHQAKAGAJAJIAAhOQAAgPgDgFQgDgGgNAAIgFAAIgKABIAAgIIAUgFIAWgGIAUgGIAMgFIACAAIgBAaIAAAdIAAAdIgBDHQAAAPAEAHQAEAGARAAIAFAAIAGAAIAAAIIgkAMIgmAOgAg4gUQgRAaAAAoQAAAnASAfQATAfAkAAQASAAALgMQAMgKAAgLIAAhpQAAgegRgNQgRgNgPAAQgfgBgRAcg");
	this.shape.setTransform(109.1,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("AANBzIAAgHQASgDAHgGQAHgIAAgZIAAhoQAAgUgIgOQgIgOgUAAQgOAAgPAKIgVASIAACIQAAARAIAHQAIAFAQABIAAAHIhqAAIAAgHQARgCAHgGQAHgHAAgWIAAh7QAAgQgDgGQgFgKgOAAIgEABIgGAAIAAgIIAvgPIAXgIIACABIABAEIAAAkQAWgVANgIQASgMAUAAQARAAANAJQAbATAAAvIAAByQAAARAHAIQAHAIAQAAIAAAHg");
	this.shape_1.setTransform(83.7,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33CCFF").s().p("AhCBkQgUgPABgjIAAh+QgBgTgHgHQgGgEgSgBIAAgHIBJAAIAACbQAAARAFAKQAJASAYAAQAQAAAPgLQAKgGAJgLIAAiFQAAgSgIgGQgGgGgXgBIAAgIIBPAAIAACrQAAAQAHAHQAFAGATgBIAAAHIgUAFIgUAHIgcAKIgCgBIAAgCIAAgoQgRAUgOAKQgTAOgYAAQgVAAgSgPg");
	this.shape_2.setTransform(58.4,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CCFF").s().p("AhOBUQgggjAAgzQAAgwAfgiQAfghAwAAQAwAAAfAfQAgAgAAA1QAAAwgfAjQgeAkgxAAQguAAghgigAgohaQgZAWAAA3QAAAqAUAmQAUAlAiAAQAbAAAPgZQAPgZAAgpQAAgpgTglQgTgmgjAAQgTAAgOANg");
	this.shape_3.setTransform(33.6,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CCFF").s().p("AgkBxIgWgFIgFACIgDAFIgHAAIAAhPIAIAAQAGAcAKAPQARAbAgAAQASAAAKgKQALgKAAgQQAAgLgGgJQgGgKgQgJIgagPQgegQgOgQQgOgQAAgWQAAgbATgSQAUgRAdAAQAMAAAQAEIARAFIAGgBIAEgEIAGAAIABBEIgHAAQgFgXgIgOQgPgYgcAAQgRAAgKAKQgKALAAAOQAAAWAiASIAfARQA0AcAAAlQAAAdgVASQgWASgiABQgOgBgTgEg");
	this.shape_4.setTransform(11.7,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-8.4,191,54);


(lib.lib_9599_1240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-100,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-106,210,199);


(lib.lib_9563_780 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC3C46").s().p("Ai9DVQgbgbAAgmQAAgQAckWQADg+AkgLIAOgCIEaAAQAzgFATAkQgSgJgcACIkaAAIgOACQgjAMgEA+QgbEVAAARQAAAcAOAWQgHgFgFgFg");
	this.shape.setTransform(-4,56.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC555D").s().p("AiMDcQhCgCgdgSQgPgWAAgcQAAgQAckWQAEg+AjgLIAOgCIEaAAQAbgDASAJQAEAHACAJQBYDOgBBWQgEAZgNATQglA3htAMQh+APhNAAIgZgBg");
	this.shape_1.setTransform(1.8,58.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FC555D").s().p("AinDMIgPgDQgKgPAAgYIgdkOQAAgHABgHQAIgjA9gNQENhGARgCQAbgEAWAKQAUAZAIA7QALBMgCCQQAABqgzAsQgSAPgYAIQgSADgZAAQhXABilgpg");
	this.shape_2.setTransform(59.1,-3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC3C46").s().p("Ai7CsIgdkNQgBgHABgHQAIgjA9gNQEOhGAQgDQAlgFAdAVQAHAFAGAIQgXgKgbAEQgQACkOBGQg9ANgIAjQgBAHABAHIAdEOQAAAYAJAPQgmgMAAgyg");
	this.shape_3.setTransform(55.7,-7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FC555D").s().p("AicDsQgYgIgSgPQgYgrAAhJQgCiPAMhMQALhMAdgWQAdgWAmAGQAQACEOBDQAaAEAQAKIABANIgeENQgBA7g1AHQiqArhYAAQgWAAgQgCg");
	this.shape_4.setTransform(-59.4,-3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC3C46").s().p("AjrBeQgBiQALhMQALhMAdgVQAegWAlAFQAQADEPBCQA8AMAIAjQgQgJgagFQkOhDgQgCQgmgFgdAWQgdAWgLBLQgMBMACCQQAABJAYAqQgzgqAAhqg");
	this.shape_5.setTransform(-60.8,-6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC3C46").s().p("AjiCeQgckVAAgRQAAgmAbgaQAbgbBQgDQBQgDCVARQBtAMAkA3QgogchMgJQiTgRhQADQhQADgbAbQgbAbAAAmQAAAQAcEWQABAZAHASQgjgMgEg+g");
	this.shape_6.setTransform(-0.2,-61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FC555D").s().p("ABVDaIkaAAQgIgBgGgCQgHgRgBgaQgckVAAgRQAAgmAbgbQAbgaBQgDQBQgDCUARQBLAIApAdQANATAEAZQABBVhYDPQgNAvg0AAIgLAAg");
	this.shape_7.setTransform(2.1,-60);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#D9D1C6").ss(5,1,1).p("As9G/QhqjKAAj1QAAmLESkYQESkYGDAAQGDAAESEYQBCBDAyBKQCfDpAAEtQAAGMkTEYQkSEYmDAAQmDAAkSkYQhohqhAh7g");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E3D4CD").ss(1,1,1).p("Ai/DmQgKgIgKgKQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQAKAKAJAKQBFBSAABtQAAB8hYBYQhXBXh8AAQhtAAhShFg");
	this.shape_9.setTransform(-0.7,-2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EBEBE9").s().p("ArJHRQhphqhAh6QAyBIBBBDQESEYGEAAQGCAAESkYQESkYAAmLQAAj1hpjIQCfDpAAEuQAAGKkTEYQkSEZmCgBQmDABkSkZg");
	this.shape_10.setTransform(5.3,21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFDC64").s().p("AjSDTQhFhRAAhvQAAh7BXhXQBYhYB7AAQBuAABSBFQBFBRAABvQAAB7hYBYQhXBXh7AAQhuAAhShFg");
	this.shape_11.setTransform(1.2,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5C950").s().p("AiwD3QhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXIASAUQhRhFhuAAQh7AAhYBXQhXBYAAB7QAABuBEBRIgTgRg");
	this.shape_12.setTransform(-4.2,-5.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AqwJ3QhAhDgyhIQhqjKAAj2QAAmKESkYQESkYGDAAQGDAAESEYQBBBCAyBLQBqDIAAD1QAAGLkSEYQkSEYmDAAQmEAAkSkYgAi/i8QhXBXAAB8QAAB8BXBXIATASQBSBGBuAAQB8AABXhYQBXhXAAh8QAAhuhFhSIgSgTQhXhYh8AAQh7AAhYBYg");
	this.shape_13.setTransform(-2.7,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-98,192.1,196.1);


(lib.lib_9355_5263 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap21();
	this.instance.parent = this;
	this.instance.setTransform(-126,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-77,252,153);


(lib.lib_9347_5724 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-118,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-113,196,185);


(lib.lib_9336_9755 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap25();
	this.instance.parent = this;
	this.instance.setTransform(-251,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251,-86,498,171);


(lib.lib_9271_4604 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E442B").s().p("Ax9LEQnckmAAmeQAAmeHcklQHdkkKgAAQKhAAHdEkQHcElAAGeQAAGencEmQndEkqhAAQqgAAndkkg");
	this.shape.setTransform(0,0,1.052,0.847,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.4,-100.8,324.9,201.6);


(lib.lib_9269_4876 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap16();
	this.instance.parent = this;
	this.instance.setTransform(-47,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-72,93,143);


(lib.lib_8878_9917 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap24();
	this.instance.parent = this;
	this.instance.setTransform(-267,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lib_8878_9917, new cjs.Rectangle(-267,-77,534,154), null);


(lib.lib_8855_8361 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap19();
	this.instance.parent = this;
	this.instance.setTransform(-70,-121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-121,139,241);


(lib.lib_7871_2099 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5E442B").ss(4,1,1).p("AiHi9QAoiOhcgWQgugFgbASQgcASgFAkQgEAkAOAfQiBABABBFQABBEAzARQAyAQBGgVAGcBYQhDhhh4AAQh4AAg4BnQg2BmBBBjQAYAkAkAZ");
	this.shape.setTransform(-18.5,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDFDFD").s().p("AAAAsQgRAAgNgNQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAIAAAAg");
	this.shape_1.setTransform(-34,-63.5,0.879,0.879);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDFDFD").s().p("AgzA0QgVgVAAgfQAAgeAVgVQAVgVAeAAQAeAAAWAVQAVAVAAAeQAAAfgVAVQgWAVgeAAQgeAAgVgVg");
	this.shape_2.setTransform(-33.7,-77.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D432A").s().p("AiLCMQg6g6AAhSQAAhRA6g6IAAAAQA6g6BRAAQBSAAA6A6QA6A6AABRQAABSg6A6IAAAAQg6A6hSAAIAAAAQhRAAg6g6g");
	this.shape_3.setTransform(-32.7,-71.4,0.879,0.879);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDFDFD").s().p("AAAAsQgRAAgNgNQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAIAAAAg");
	this.shape_4.setTransform(19.6,-29.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDFDFD").s().p("Ag5A7QgZgYAAgjQAAghAZgZQAXgYAiAAQAiAAAZAYQAYAZAAAhQAAAjgYAYQgZAYgiAAQgiAAgXgYg");
	this.shape_5.setTransform(19.9,-45.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D432A").s().p("AiLCMQg6g6AAhSQAAhRA6g6IAAAAQA6g6BRAAQBSAAA6A6QA6A6AABRQAABSg6A6IAAAAQg6A6hSAAIAAAAQhRAAg6g6g");
	this.shape_6.setTransform(21,-38.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5E442B").ss(4,1,1).p("AEPkOQBwBxAACdQAACehwBwQhwBxifAAQidAAhxhxQhwhwAAieQAAidBwhxQBxhwCdAAQCfAABwBwg");
	this.shape_7.setTransform(25.8,-32.6,1.074,1.074);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AkOEOQhwhwAAieQAAidBwhxQBxhwCdAAQCfAABwBwQBwBxAACdQAACehwBwQhwBxifAAQidAAhxhxg");
	this.shape_8.setTransform(25.8,-32.6,1.074,1.074);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5E442B").ss(4,1,1).p("AEPkOQBwBxAACdQAACehwBwQhwBxifAAQidAAhxhxQhwhwAAieQAAidBwhxQBxhwCdAAQCfAABwBwg");
	this.shape_9.setTransform(-26.4,-66.7,1.019,1.019);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AkOEOQhwhwAAieQAAidBwhxQBxhwCdAAQCfAABwBwQBwBxAACdQAACehwBwQhwBxifAAQidAAhxhxg");
	this.shape_10.setTransform(-26.4,-66.7,1.019,1.019);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5E442B").ss(4,1,1).p("ALkipQBtFihEDiQhFDhkyBXQkyBXlJiQQlKiQickqQickoBvkUQBukVE3hdQE3heFJCQQFKCQBtFjg");
	this.shape_11.setTransform(-15,8.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FC555D").s().p("AjlKaQlKiQickqQickoBvkUQBukVE3hdQE3heFJCQQFKCQBtFjQBtFihEDiQhFDhkyBXQhzAhh2AAQjEAAjOhag");
	this.shape_12.setTransform(-15,8.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiYDMQgRgRAAgYQAAgYAQgQIABgBQASgRAXAAQAYAAARARQARASAAAXQAAAYgRARIgBAAQgRARgXAAQgXAAgSgRgAA9huQgTgUAAgaQAAgaATgTQATgTAaAAQAbAAASATQATATAAAaQAAAagTAUQgSASgbAAQgaAAgTgSg");
	this.shape_13.setTransform(68.8,76.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5E442B").ss(4,1,1).p("Ag9kEQA+gyBZAAQBYAAA/AyQA/AzAABHQAABHg/AzQg/AxhYAAQgeAAgbgFQAUAlAHAmQAHAkgGAlQgDAOgDAOQgSA6gxAdQg+AkhLgeQhLgcgshNQgthNANhQQAMhOA9gkQAzgdA7AOQgHgVAAgXQAAhHA/gzg");
	this.shape_14.setTransform(65.4,74.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FB565D").s().p("AiVEpQhLgcgshNQgthNANhQQAMhOA9gkQAzgdA7AOQgHgVAAgXQAAhHA/gzQA+gyBZAAQBYAAA/AyQA/AzAABHQAABHg/AzQg/AxhYAAQgeAAgbgFQAUAlAHAmQAHAkgGAlIgGAcQgSA6gxAdQgiAUglAAQggAAgigOg");
	this.shape_15.setTransform(65.4,74.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.7,-107.7,195.6,215.5);


(lib.lib_7766_2187 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDDDE").s().p("AgGAvQgTgDgMgPQgMgQADgTQADgTAQgMQAPgMATADQATADAMAQQAMAPgDATQgDATgPAMQgNAKgPAAIgHgBg");
	this.shape.setTransform(7.3,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB2E37").s().p("Ah1C/QgIgCgFgHIgBgBIgDgDQhjhzAXh8QAXiHBkgCQBagGArBpQBxgUApBTQAxBWhqBYQhHA9hqAAQgnAAgsgIgAhVieQhEAFgSBjQgSBrBVBjIABABQCKAXBShEQBNhBgdg8Qgig9heAWQgHABgHgDQgGgEgDgHQgehZhDAAIgCAAg");
	this.shape_1.setTransform(16.6,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FC555D").s().p("AiPDoQgKgCgFgIIgBgBIgEgFQh5iKAciYQAcikB6gCQBtgIA0CAQCKgZAyBlQA7BpiBBrQhWBKiBAAQgwAAg1gKgAhXjEQhkACgYCHQgWB8BiByIAEAEIAAABQAGAHAIABQCjAeBhhSQBphZgwhVQgphUhyAUQgohjhSAAIgKABgAhoCbIAAgBQhVhkAShrQAShiBEgFQBFgBAeBZQADAHAGAEQAHAEAHgCQBegWAhA9QAdA9hMBAQg+AzhcAAQggAAgjgFgAh5huQgPAMgEATQgCAUAMAQQAMAPATADQAUADAQgMQAPgMADgTQACgUgLgPQgMgQgUgDIgHgBQgPAAgNAKg");
	this.shape_2.setTransform(16.6,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF2C6").s().p("AjILeQgMgDgGgLQgGgLADgMQAEgMALgGQAKgGANADQDiA/AviLQAEgMALgGQALgFANADQALAEAGALQAFALgDAMQgoCLidAAQhCAAhVgXgABDE8QgIAAgGgHQgFgGAAgIQABgIAGgGQBBg6g4hcQgFgHACgIQADgIAHgFQAHgEAIACQAIACAEAHQBMB8hdBNQgGAFgHAAIgBAAgACjgLQgIgBgGgGQgFgHAAgIQABgIAGgFQAggbAAgYQgEgbgngaQgHgFgBgIQgCgIAFgHQAEgHAIgCQAJgBAHAEQA5AoADAqQAFArgzAsQgGAEgHAAIgBAAgAh7p0QgigFgIgWQgJgWAVgaQAUgbAmgPQAlgPAiAFQAhAFAIAWQAIAWgUAaQgUAaglAQQgcALgaAAIgRgBg");
	this.shape_3.setTransform(-32.9,-10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDD53F").s().p("AE1NtQipgPhahPQhShUAThiQAYh9CPgSQCzgXBSiDQBgiigkiZQg8iMiEAdQiYBOhBhBQhThMARh5QAyitBhhqQBwh0B4ARQBgADBRBvQApA7A/AXQC/B2gUEIQg5GWi9GeQhnCjioAAIgFAAgAmcKmQkVgXhHhlQg1haAjhsQAchTgdgwQgvg9gGg5QAOhqB6gsQBtgwhKhXQhChCAphrQA/hQB8gDQDRATCVBdQBjBEgVBUQgZBGheARQhXASBKBYQBCBBgeBZQgUAyhIAlQgWAIgIAEQgvAXACAqQgDApAzANQCFAwgmB5QgqByipAAIgSAAgAoYI+QgLAFgDANQgEALAHALQAGALAMADQElBRA4jFQADgMgGgLQgGgKgLgEQgMgEgLAGQgMAFgDAMQgwCLjjg+IgIgCQgIAAgHAFgAkCgBQgHADgCAJQgCAIAEAHQA5BbhBA6QgHAGAAAIQgBAIAGAHQAGAGAIABQAHAAAHgFQBchOhMh7QgEgGgHgDIgFgBQgGAAgFAEgAi1kkQgIABgFAIQgEAGABAIQACAJAGAEQAnAbAEAaQABAZggAaQgGAFgBAIQgBAJAGAGQAFAHAIABQAIAAAHgFQAzgsgGgqQgCgqg6goQgFgEgGAAIgEABgAkJnkQhSgdg7ANQiCAxhMhRQgng7AahLQAoiBCLg8QB8g0BUBOQA1A9CpAlQBMAbAHBpQgSBjg8AvQgeAcgwAAQhFAAhrg7gAmptSQgmAPgUAbQgUAaAIAVQAJAWAhAFQAiAFAmgPQAlgPAUgaQAUgagIgXQgIgWghgFIgRgBQgaAAgdAMg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E442B").s().p("AEzPNIgHgBQjNgThrhiIgFgFQhfhhAAhvQhJCLjmgIIgFAAQlRgchRiIIgDgGQhMh9AxiXIAAgBQALgggDgSQg8hRgGhNQgBgLABgLQAPiaCohEQhdhlA+ieQAFgNAIgKQAfgqApgaIgCgDQhChfAph4QAzipC2hPIABAAQC4hNB8B5IAIAHQArAoB/AcIAKADQBbAaAjBYQB4hcB+ATQCHABBwCZIACACQAWAhAkAOQAJADAIAFQDwCPgYFHIgBAGQg6GijDGsIgGALQiEDQjXAAIgMAAgAHbgtQAkCZhgCiQhSCCizAXQiPASgYB+QgTBiBSBUQBaBOCpAQQCrACBpimQC9meA5mVQAUkJi/h1Qg/gXgpg7QhRhvhggEQh4gRhwB0QhhBqgyCuQgRB4BTBMQBBBCCYhPQAWgEAUAAQBkAAAyB0gAqumBQgpBqBCBCQBKBYhtAwQh6AsgOBqQAGA5AvA8QAdAxgcBSQgjBtA1BZQBHBlEVAXQC4AHAth4QAmh5iFgwQgzgOADgoQgCgrAvgWQAIgFAWgIQBIgkAUgzQAehZhChAQhKhYBXgTQBegRAZhGQAVhUhjhDQiVhejRgTQh8ADg/BRgAA7hrQh5ACgcCjQgcCZB3CLIAFAEIABABQAFAJAKACQDIAkB1hkQCBhsg7hpQgyhkiKAXQgxh3hlAAIgMAAgAkJoHQC1BmBJhHQA8guAShkQgHhphMgaQipglg1g+QhUhNh8AzQiLA9goCAQgaBLAnA7QBMBSCCgxQASgEAVAAQAtAAA5ATg");
	this.shape_5.setTransform(0,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.7,-93.9,185.6,194.6);


(lib.lib_6842_6132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEEBED").s().p("ACWHcQgGgBgDgFQgEgGABgGQACgFAFgEQAFgDAGABQBmAUAvh+QACgFAGgDQAGgDAFACQAGADACAFQADAGgCAGQgwCAhiAAQgSAAgTgEgAlHBEQgEgEgBgGQgBgHAEgEQADgFAHgBQA6gJAehSQADgGAFgCQAGgEAGADQAFACADAGQACAFgCAGQgmBmhLAJIgBAAQgGAAgEgDgAk/lrQgNgIgBgWQAAgWAOgYQANgXATgLQATgLAOAIQAOAIgBAWQABAWgNAXQgOAYgTALQgLAGgKAAQgGAAgGgDg");
	this.shape.setTransform(1.4,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDBBC7").s().p("ACOH+QhRgOhUgeQh4gxgZhXQgZg7AkiEQAhh8Bfg3QBegzB4AgQChAwAxB1QAaBDgqCSQgcBmgnAqQgwA0hLAAQgWAAgZgFgACMHOQgFAEgCAFQgBAGAEAGQADAFAGABQB+AcA5iYQACgGgDgGQgCgFgGgDQgFgCgGADQgGADgCAFQgvB+hmgUIgCAAQgFAAgEACgACYE/QgIAeAmALQA2AKANglQAIgagmgKQgSgFgNAAQgfAAgFAbgAg6EGQgMAhA4AQQAmAGAMghQAFgfghgNQgNgEgMAAQgeAAgLAagADGCFQgNAhA5AQQApALAJgiQAKgmgmgKQgQgEgNAAQgeAAgHAagAgLBZQgJAiA3AQQAnAGAJgiQAJgigigJQgNgCgMAAQghAAgLAXgAmSFoQhmgcgGh+QAJiLArihQBGkEAuhUQAzhkBxAfQBjAWAAB5QACByhBDxQhFD/gxBAQghA8g6AAQgYAAgbgKgAjkgtQgFACgDAGQgeBSg6AJQgHABgDAFQgEAEABAHQABAGAEAEQAFADAGAAQBLgJAmhmQACgGgCgFQgDgGgFgCIgFgBQgDAAgEACgAlRhuQgVBPAlAOQAsAQAYhbQAZhegqgHQgFgCgGAAQghAAgXBVgAkknMQgTALgNAXQgOAYAAAWQABAWANAIQAOAIATgLQATgLAOgYQANgXgBgWQABgWgOgIQgGgDgGAAQgKAAgLAGgAErgwQglgKgggxQgDgBgDgFQgFgNgPgEQgPgEgaAJQADABgIACQgoAdgqgLQgsgQgdgsQgMgYgPgHQgygiAIg/QAKg1BKgZQAogNAKgGQA2giAwARQAhAJAeAoQAUAeAhgQQAxgTAqAMQA0AOAgA9QALATAUARQAdAcgPA4QgPA5g8AMQgjAHgUAPQgWAUgdAAQgMAAgOgEg");
	this.shape_1.setTransform(1.9,-3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E442B").s().p("ACAJSIABABQhZgQhbghIgCgBQiCg1guhYQhKBPh7gqIgCAAQidgmgKi/IAAgJQAKiTAuirQBJkUAzhZQBPibCwAuQB7AZAdB1IADgBIgBAAQAbgJAHgEIABAAQBWg2BPAeQAvALAqAvQA/gTA3AQQBTAUAyBcQAGAKAKAJIACACQBBA0geBvIAAgBQgbBphtAXIgBABQgNACgIAEQAbAiARAqIABACQAmBVg1C1QgiB+g0AzIAAABQhGBPhtAAQggAAgigHgAgnhrQhfA3ghB8QgkCDAZA7QAZBYB4AwQBUAfBRAOQBrAUA/hEQAngqAchmQAqiRgahEQgxh1ihgvQgugNgrAAQhEAAg5AggAlgn6QguBVhGEDQgrCigJCKQAGB/BmAbQBgAiAuhUQAxhABFj/QBBjxgChxQAAh5hjgXQgagHgYAAQhLAAgnBMgADCjGQAPAEAFAOQADAEADABQAgAxAlALQAuAMAfgcQAUgPAjgHQA8gNAPg4QAPg5gdgbQgUgSgLgTQggg9g0gOQgqgLgxATQghAQgUgeQgegoghgJQgwgRg2AiQgKAFgoAOQhKAYgKA2QgIA+AyAiQAPAIANAYQAcAsAsAQQAqALAogeQAIgCgDgBQASgGANAAIAKABgACsEkQgmgKAIgfQAHgmA8AQQAmAKgIAbQgLAcgjAAQgKAAgLgCgAgYDzQg4gPAMghQAPglA0APQAgAMgFAgQgKAbgcAAIgMgBgADoByQg5gPANghQAKgmA4AQQAmAKgKAlQgHAagZAAQgIAAgKgDgAAZBHQg3gPAJgiQAQgfA1AKQAiAJgJAhQgIAdgdAAIgLgBgAlLhUQglgOAVhPQAahiApAPQAqAHgZBeQgVBNgjAAQgGAAgGgCg");
	this.shape_2.setTransform(2.9,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.7,-56.5,119.3,120.1);


(lib.lib_6641_3629 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF2C6").s().p("ADDO4QCEgbA2hyQA2hygKhlIgNh5IAJgHQBmAegRCDQgPBxg3BiQg6BmhvAVQgQADgOAAQgaAAgQgOgArNhIQgLgBgIgJQgGgIABgKQAMiDCwhGQALgFAJAFQAKAEAFAKQAEAKgFAJQgEALgLAEQiPA4gMBlQgCAMgIAGQgHAGgIAAIgDAAgAJfkzQgGgGgCgJQgPhnB9hZQAIgGAIACQAIABAGAHQAFAHgCAJQgBAIgIAGQhlBHAJBSQABAJgFAHQgFAHgIAAIgDABQgIAAgGgEgAiPs5QgOgXAUgiQATgkAqgXQApgYAnAAQAoAAANAYQAOAZgUAiQgTAigoAYQgpAYgoAAQgoAAgOgZg");
	this.shape.setTransform(-21.6,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDD53F").s().p("AmjL7QgRiBBYizQBNhxhlnWQg4kRgajAQg9mADhg6QD8g+COFqQCAGJBcKlQBWJ4mQBJQgrAFgoAAQkrAAgvkagADEHVIANB5QAKBlg2ByQg2BxiDAcQAXAVAwgLQBvgUA6hmQA3hjAPhwQARiDhmgfgAkkuzQgqAXgTAkQgUAiAOAXQAOAZAoAAQAoAAApgYQApgYATgiQAUgigOgZQgNgYgoAAQgoAAgpAYgAt/PHQiigigdlVQAEl/BIkqQBQksDsAPQDHAdAlESQAeFehSFtQhLFMjnAAQglAAgqgJgAsBkzQiwBGgMCCQgBALAGAIQAIAIALACQAKABAIgHQAIgHACgLQAMhlCPg4QALgEAEgLQAFgKgEgKQgFgJgKgEQgFgCgFAAQgFAAgFACgAJaJUQivlLhOm0QhClZDEhAQCQgmCbCuQDlE6A/HSQBCFajEBAQgzAVgwAAQiFAAhqirgAHtoIQh9BYAPBoQACAJAGAFQAIAFAJgBQAIAAAFgHQAFgHgBgJQgJhSBlhHQAIgGABgIQACgJgFgHQgGgHgIgBIgFAAQgGAAgFAEg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E442B").s().p("AnsNqQgqBKg3AtQiABvjGgqQjmgdgkmvIgBgJQAEmLBKkzIABgCQBnmBE3AeIAHAAQBdAKBCAxQgPhcgLhPIABACQhOnmE3g/IABAAQFHhfCyHFIACAFQAlBxAiCJQAyh5CHgjIAFgCQDBg+DJDjIAGAHQDyFLBEHtQBRG0kQBLQkGB3i+k0IgEgFQguhXgnheQAmJfm8BDIgHABQg0AGgxAAQlFAAhVkNgAkow7QjhA6A9GAQAaDAA4ERQBlHWhNBxQhYCzARCBQA1E/F4gqQGQhJhWp4QhcqliAmJQh5k1jKAAQgiAAglAJgAv4iJQhIEqgEF/QAdFVCiAiQEqA/BXmCQBSltgeleQglkSjHgdIgWAAQjZAAhNEdgAHZp0QjEBABCFZQBOG0CvFLQCQDoDChSQDEhAhClaQg/nSjlk6Qh/iPh4AAQgaAAgaAHg");
	this.shape_2.setTransform(0.6,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.6,-109.4,236.6,228.6);


(lib.lib_6338_1338 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-196,-201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196,-201,392,403);


(lib.lib_6219_145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap10();
	this.instance.parent = this;
	this.instance.setTransform(-63,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-43,157,163);


(lib.lib_6083_4008 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEEBED").s().p("AE0HWQgGgFAAgHQAAgHAFgFQAFgGAGAAQB5gIAPicQABgHAFgFQAGgEAHABQAGAAAGAGQAEAFgBAIQgSC8iWAHQgHAAgFgFgAlSCgQgHgEgDgGQgCgGACgHQADgHAHgDQA+gcAKhkQABgIAFgFQAFgFAIABQAHABAEAFQAFAGgBAGQgMB/hRAhIgHABIgGgBgAnMlIQgRgDgHgZQgHgZAIgfQAHgeAUgSQASgSARAFQASAFAGAYQAHAZgIAeQgHAegTASQgOAPgOAAIgIgCg");
	this.shape.setTransform(1,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDBBC7").s().p("AB8IKQiUgTg3haQgtg7AAifQAAiWBbhZQBZhXCSAAQDDAFBaB2QAyBDgECxQAAB6ggA7QgyBgh/AJQgvAEgyAAQgyAAg1gEgAHWEaQgGAFgBAGQgPCch4AIQgHABgFAGQgEAFgBAGQABAHAGAGQAFAEAGAAQCWgGATi9QAAgIgEgFQgFgFgHgBIgBAAQgGAAgFAEgAAZEwQgFApBEAAQAtgFAFgpQgFgkgogEQhAAAgEAtgAEXEwQAAAkAtAAQBAgEAEguQAAgfgtAAQhJAAAFAtgAAZBfQAAApBEAAQAtgEAAgpQAAgpgpAAQg/AEgJApgAESBSQgEAoBEAAQAyAAAAgoQAAguguAAQhEAAAAAugAlNIFQh6AAguiNQgfieAAjDQAAk4AbhtQAbh/CIAAQB2gFAkCIQAlB/AAEiQAAE0glBWQgZBlhmAAIgSgBgAj6ADQgGAEgBAIQgJBmg/AcQgHADgCAHQgDAGADAGQACAHAHADQAHADAHgDQBRggALh/QACgHgFgGQgFgFgHAAIgCAAQgGAAgEADgAmRgfQAABeAuAFQA2AFAAhsQAAhygyAFIgDAAQgvAAAABxgAm/m6QgTASgIAdQgIAfAHAZQAHAZARAEQASAFATgSQASgSAIgfQAHgdgGgZQgHgYgRgGIgHgBQgOAAgPAPgAghjCQgXgXgSgEQhEgXgJhJQgFg/BNgyQApgbAJgJQAxg3A7AFQApAAAtAkQAgAbAggbQAygkAyAAQA/AAA2A7QATASAbAOQApAWAABEQAABEhAAgQgkASgSAXQgbApg3AAQgtAAgyguQgFAAgEgEQgJgOgSAAQgTAAgbASQAFAAgJAFQglAtgyAAQg2gEgsgpg");
	this.shape_1.setTransform(0,-3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E442B").s().p("ABxJUIgDgBQiagThLhSQg6BriRgJIgCAAQi1AEhBjLIgDgKQghiiABjHQgBk/AdhvQApi+DLgBQCMgJBCB2IACgCIgBABQAcgSAHgGIABAAQBNhUBeAJQA1gBA7AmQA/gnBAADQBfgEBQBWQAKAJANAHIADABQBVAmAACAIAAAAQABB4hvA5IgBABQgNAFgHAIQAnAdAeAqIACABQBCBQgGDUIABgBQAACTgqBGIAAgBQhDCJixANIABAAQgyAFg0AAQg0AAg3gFgAgiheQhbBaAACVQAACfAuA7QA2BaCVATQBoAJBggJQB/gJAxhgQAgg7AAh6QAFixgyhDQhbh2jDgFQiRAAhaBXgAlWo/QiIAAgcB/QgbBtAAE5QAADCAgCeQAtCNB7AAQB2AJAbhtQAkhWAAkzQAAkjgkh/QgjiEhwAAIgHABgAgdoEQgJAJgpAbQhNAyAEA/QAJBJBEAXQASAEAXAXQAsApA3AEQAxAAAlgtQAJgFgEAAQAbgSASAAQASAAAJAOQAFAEAEAAQAyAuAuAAQA2AAAbgpQASgXAlgSQA/ggAAhEQAAhEgpgWQgbgOgSgSQg2g7hAAAQgyAAgyAkQggAbgfgbQgugkgoAAIgJgBQg2AAgtAzgAAYD+QAFgtA/AAQApAEAFAkQgFApgtAFQhFAAAFgpgAEWD+QgEgtBIAAQAuAAAAAfQgFAug/AEQguAAAAgkgAAYAtQAJgpBAgEQApAAAAApQAAApguAEQhEAAAAgpgAESAgQAAgtBEAAQAtAAAAAtQAAAogyAAQhEAAAFgogAlkASQgtgFAAheQAAh2AyAFQAxgFAAByQAABngxAAIgFAAg");
	this.shape_2.setTransform(0.1,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-58.3,121.3,120.1);


(lib.lib_5673_2585 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEEBED").s().p("AmWEdQIVi6DAl/QBxAWgfBeQlqHFmwAAIgNAAg");
	this.shape.setTransform(50.1,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEBAC7").s().p("AvHB+IBriTQLoFlJRoyQDrkPCjBUQCCCBgzCSQgJAYgNAYQgeA4g3A5QmWGbnsAAQmqAAnqk0gABfE8QG5AHFvnMQAghehxgWQjBF/oWC6g");
	this.shape_1.setTransform(-0.1,-5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E442B").s().p("Av7DQQgXgOgMgYQgMgYADgaQACgbAQgVIBriUQAVgcAhgIQAhgIAfAPQKqFHIhoAQEmlSDYCEQANAHALALQCvCuhKDHIAAABQgLAegQAfIgBAAQgjBBhBBFIgBABQmyG6oOAAQnEAAoIlGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.4,-53.4,212.9,106.9);


(lib.lib_5628_1136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap17();
	this.instance.parent = this;
	this.instance.setTransform(-75,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-93,150,186);


(lib.lib_5547_7314 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(-47,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-48,94,96);


(lib.lib_5317_2680 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-115,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-115,213,205);


(lib.lib_4710_343 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-102,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-68,135,139);


(lib.lib_4631_1404 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap18();
	this.instance.parent = this;
	this.instance.setTransform(-134,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-135,269,271);


(lib.lib_3634_6233 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(-96,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-98,192,196);


(lib.lib_3628_3654 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-86,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-100,202,161);


(lib.lib_2476_1114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-372,-372);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-372,-372,744,744);


(lib.lib_2242_6560 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-464,-464);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-464,-464,928,928);


(lib.lib_1982_5430 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFF6CC").s().p("Ai3JoQCDgBBHhhQBJhjAJhiIALh1IAJgGQBcAxgpB6QgjBnhIBUQhJBVhugBIgEAAQgsAAgRgYgAg9n5QgPgIgDgZQgCgZAOgbQANgbAVgNQAUgOAPAIQAQAIABAYQADAZgOAbQgMAbgVAOQgOAJgKAAQgGAAgGgDg");
	this.shape.setTransform(-39,-7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3DE51").s().p("AC5LjQjAgmhXiBQh4jECCkNQCGjoDzA2QDqApA6CYQBSDxh5DgQhvCfivAAQgkAAgngHgAEfGVQgLA5AwAWQA0AKAXg8QAOhEg5gMQgJgDgHAAQghAAgUA2gAAXFtQgHA/AzAKQA7AGAKgzQAEg1grgUIgPgCQgnAAgUAvgAFNCsQgTBDA+ANQBAAHAIhFQAKg0g6gFQgKgCgJAAQgnAAgJApgAB4BZQgvAaAVAtQAkA2A8gjQAhgugVgoQgSgNgXAAQgTAAgWAJgAo6JTQiAgOgnh9QgehZA0hVQApg+BvAKQBMAEgBg2QAKgzhTABQhygWgMg4Qgdh1CUgjQBBgdgBgYQANgmhEgOQhOgWAUiDQAMhcAjgdQAwg9AHhAQgPhnBBgdQBsglBeB3QAfA1A3gMQBLgPAwAzQA3BMhXCTQhCBeALB4QAXBegsC+QgnDBgPAtQgLA5gYAkQhkB8idAAQgeAAgggEgAkVCBIgLB1QgJBihJBiQhIBhiDACQASAYAvgBQBuACBKhWQBIhTAjhoQAph6hcgwgAmnrCQgVAOgNAaQgOAcACAZQADAZAPAHQAPAIAVgOQAVgOANgbQAOgagDgZQgBgYgQgJQgGgDgGAAQgLAAgNAJgAH9g5QhVgRgnhJQgggvg7AdIgOAJQg3Aqg6gGQhKgPgYg5QgOgygegYQg3guAHhAQANhEA1gfQApgbALgbQAqg/BQAKQBCgFAsBQQAZA0AkgEQAeAAAQgVIANgJQAzgxBFAIQA5ALAnBJQAOAyAkAZQAzAngUBJQgFA1gbASIgHAEQgcAYgnAuQglA6hFAAIgXgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E442B").s().p("ACpNCIgDAAQjrgvhoihIgCgDQgRgbgNgbQiRCZjngfQi+gUg5i5IAAACQgtiDBMh7IACgDQAYgqApgYQgvglgDg3QgahpA7hFQAYgjAtgYQg4hBAWiQIAAgCQASiDA4gsQAUgcAGgeQgTitB/gsIAIgDQCmhCCNCyIAEAFQB4gTBOBVIAJAKQAJAKAHALQBChLBwAJQBtgMBJB1QBOhABmAMIAHABQBiANA/B4QAFAJADAKQAEAOAJAIIAEADQBkBIgiCFQgLBkg9AgIgCABQgVASgbAhQggAxgtAXQAWAiAOAoIABADQBfEYiNEFIgFAJQiMDIjdAAQgtAAgxgJgAhVBZQiCENB5DDQBWCBDBAnQDjAnCGjAQB5jghSjxQg6iYjqgoQgugKgqAAQi1AAhtC8gArMEIQg0BUAeBZQAnB+CAANQDJAdB2iUQAZglALg5QAPgsAmjBQAsi/gWhdQgMh4BCheQBXiTg2hNQgxgyhKAOQg4ANgfg2Qheh3hsAlQhBAdAPBoQgHBAgvA9QgjAcgNBcQgUCEBPAWQBEANgOAnQABAXhBAdQiUAjAeB1QAMA4ByAXQBTgBgKAyQAAA2hMgDIgdgCQhXAAgkA2gAouCJIADAAIgEAAIABAAgAGBimQAmBJBVARQBXALArhEQAmgtAdgYIAHgFQAbgSAEg0QAVhJgzgoQglgZgOgyQgmhJg5gLQhFgIg0AyIgNAIQgQAVgdAAQglAFgZg0QgrhQhCAFQhRgKgpA+QgMAbgpAbQg0AfgOBEQgHBAA3AvQAfAYAOAyQAYA5BKAPQA5AGA4grIAOgJQAWgLATAAQAeAAAUAdgApRi7IACgEIgJADIADAAIAEABgAFEHRQgxgVAMg6QAZhBArAPQA5ALgNBEQgUA0gpAAIgOgCgAF6GuIAAACIABgCIgBAAgAE0GaIABgCIAAgCgABDGkQgzgKAHhAQAXg3AzAKQArAVgFA1QgJAtgwABIgLgBgABWFcIgBgBIgDgBIAEACgAF4DpQg/gMAUhDQAKgzA5ALQA6AGgLAzQgHA/g1AAIgLgBgABdCOQgVgtAvgbQAzgTAfAYQAVAnggAvQgYAOgUAAQgfAAgWghg");
	this.shape_2.setTransform(0,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-82.4,169.1,168.6);


(lib.lib_1948_1733 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEEBED").s().p("AmWEdQIVi6DAl/QBxAWgfBeQlqHFmwAAIgNAAg");
	this.shape.setTransform(50.1,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEBAC7").s().p("AvHB+IBriTQLoFlJRoyQDrkPCjBUQCCCBgzCSQgJAYgNAYQgeA4g3A5QmWGbnsAAQmqAAnqk0gABfE8QG5AHFvnMQAghehxgWQjBF/oWC6g");
	this.shape_1.setTransform(-0.1,-5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E442B").s().p("Av7DQQgXgOgMgYQgMgYADgaQACgbAQgVIBriUQAVgcAhgIQAhgIAfAPQKqFHIhoAQEmlSDYCEQANAHALALQCvCuhKDHIAAABQgLAegQAfIgBAAQgjBBhBBFIgBABQmyG6oOAAQnEAAoIlGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.4,-53.4,212.9,106.9);


(lib.lib_1819_4080 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEEBED").s().p("AmWEdQIVi6DAl/QBxAWgfBeQlqHFmwAAIgNAAg");
	this.shape.setTransform(50.1,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEBAC7").s().p("AvHB+IBriTQLoFlJRoyQDrkPCjBUQCCCBgzCSQgJAYgNAYQgeA4g3A5QmWGbnsAAQmqAAnqk0gABfE8QG5AHFvnMQAghehxgWQjBF/oWC6g");
	this.shape_1.setTransform(-0.1,-5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E442B").s().p("Av7DQQgXgOgMgYQgMgYADgaQACgbAQgVIBriUQAVgcAhgIQAhgIAfAPQKqFHIhoAQEmlSDYCEQANAHALALQCvCuhKDHIAAABQgLAegQAfIgBAAQgjBBhBBFIgBABQmyG6oOAAQnEAAoIlGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.4,-53.4,212.9,106.9);


(lib.lib_1792_5590 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap20();
	this.instance.parent = this;
	this.instance.setTransform(-97,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-87,194,173);


(lib.lib_1220_8294 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(-323,-323);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-323,645,645);


(lib.lib_983_1834 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;
	this.instance.setTransform(-43,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-42,86,85);


(lib.lib_955_2822 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(-64,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-65,127,131);


(lib.lib_618_7358 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E442B").s().p("ACXK/IABAAQhpgShsgnIgDgCQiZg+g2hoQhYBdiSgxIgCgBQi6gtgLjhIAAgLQALiuA2jLQBXlHA9hpQBdi3DQA3QCRAdAjCKIADgBIgBAAQAggLAJgEIABAAQBmhABeAjQA3ANAxA4QBLgXBBAUQBiAXA7BtQAHAMAMALIADACQBMA+gjCDIAAgBQggB8iBAbIgBABQgPACgKAGQAhAoATAyIABACQAuBlhADXIABgCQgpCXg9A8IAAgBQhSBfiCAAQglAAgpgIgAgjhhQhyBCgnCTQgrCdAdBHQAeBoCQA6QBjAlBhAQQCBAZBKhSQAvgyAhh5QAziugfhRQg6iLjBg4Qg4gPgzAAQhQAAhEAlgAmYo8Qg4BkhTE2Qg0DAgLCmQAICXB5AhQBzAoA4hlQA6hLBSkxQBNkfgCiIQAAiQh2gbQgggIgbAAQhaAAguBbgADzjNQASAFAFAQQAEAFAEACQAmA6AtAMQA2AOAmghQAYgSAogIQBHgPAShDQAShDgighQgXgVgNgXQgmhJg/gRQgygNg7AXQgnASgYgjQgjgwgogLQg6gUhAApQgLAGgwAQQhYAdgMBAQgLBLA9AoQARAJAQAdQAiA0A1ATQAxAOAwgkQAKgCgEgBQAWgHAPAAQAHAAAFABgADZF7QgtgMAJgkQAIguBIATQAtAMgJAgQgNAigqAAQgLAAgOgDgAgRFBQhEgSAQgnQAQgsA+ARQAnAPgFAlQgMAhgiAAIgOgBgAEgCnQhEgSAQgnQAMgtBDASQAtAMgMAtQgIAfgeAAQgKAAgMgEgAAqB0QhDgSALgpQATgmBAAMQApALgLApQgJAigjAAIgNgBgAmAhGQgsgRAZheQAgh1AwASQAzAJgfBwQgYBcgqAAQgHAAgIgDg");
	this.shape.setTransform(2.4,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEEBED").s().p("ACzI4QgHgCgEgGQgEgHABgGQACgHAGgEQAGgFAHACQB5AYA5iWQACgHAHgDQAGgEAIADQAGADAEAHQADAGgDAHQg6Cah0AAQgVAAgXgFgAmGBQQgGgFgBgGQgBgIAFgFQAEgHAIAAQBFgLAlhiQADgHAGgEQAHgDAGADQAHADAEAGQADAHgDAHQguB6hYAKIgDAAQgGAAgFgEgAl9myQgQgJAAgbQAAgaAQgcQAPgbAYgNQAXgNAQAJQAQAJAAAaQAAAbgQAbQgQAcgXANQgNAIgLAAQgIAAgHgEg");
	this.shape_1.setTransform(2.1,-3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDBBC7").s().p("ACpJhQhhgRhjgkQiQg6gehpQgdhGAridQAniVByhBQBwg9CPAnQDBA4A6CMQAfBRgzCuQghB5gvAyQg5A/hZAAQgbAAgegGgACsIcQgHAEgBAHQgCAGAFAHQADAGAHACQCWAhBFi2QACgHgDgGQgDgHgHgDQgHgDgGAEQgHADgDAHQg4CWh5gYIgEAAQgFAAgEADgAC2F8QgJAkAtANQBAAMAQgsQAJgfgtgMQgWgGgPAAQglAAgGAggAhEE5QgQAnBEASQAtAIAPgnQAFgmgngPQgQgEgOAAQgkAAgMAfgADtCfQgQAoBEASQAxANALgpQAMgtgtgMQgTgFgPAAQglAAgIAggAgNBrQgLAoBDASQAuAIALgpQALgogpgLQgPgDgOAAQgoAAgOAdgAngGtQh5gggIiYQALilA0jBQBTk2A4hkQA8h3CHAlQB2AaAACRQACCHhNEgQhSEwg6BMQgoBIhGAAQgcAAghgMgAkLhDQgHAEgDAHQglBihFALQgHAAgFAHQgEAFABAIQABAGAGAFQAFAFAIgBQBZgKAth6QADgHgDgHQgDgGgHgDIgHgBIgGABgAmSiEQgZBfAsAQQA1ATAchsQAfhwgzgIQgHgCgGAAQgnAAgcBkgAlYowQgXANgPAbQgQAcgBAaQABAbAQAJQAQAJAXgNQAXgNAQgcQAQgbgBgbQABgagRgJQgGgEgIAAQgLAAgOAIgAFmg6QgtgMgmg6QgEgBgEgGQgFgQgSgEQgRgFggAKQAEACgKACQgwAjgxgNQg1gTgig1QgQgcgRgJQg9gpALhKQAMhABYgdQAwgQALgHQBAgpA6AVQAoAKAjAwQAYAkAngTQA7gXAyAOQA/ARAmBJQANAWAXAVQAiAhgSBDQgSBEhHAPQgoAIgYASQgbAXgiAAQgPAAgQgFg");
	this.shape_2.setTransform(2.3,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-70,141.1,142.2);


(lib.lib_485_4856 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEEBED").s().p("AmWEdQIVi6DAl/QBxAWgfBeQlqHFmwAAIgNAAg");
	this.shape.setTransform(50.1,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEBAC7").s().p("AvHB+IBriTQLoFlJRoyQDrkPCjBUQCCCBgzCSQgJAYgNAYQgeA4g3A5QmWGbnsAAQmqAAnqk0gABfE8QG5AHFvnMQAghehxgWQjBF/oWC6g");
	this.shape_1.setTransform(-0.1,-5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E442B").s().p("Av7DQQgXgOgMgYQgMgYADgaQACgbAQgVIBriUQAVgcAhgIQAhgIAfAPQKqFHIhoAQEmlSDYCEQANAHALALQCvCuhKDHIAAABQgLAegQAfIgBAAQgjBBhBBFIgBABQmyG6oOAAQnEAAoIlGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.4,-53.4,212.9,106.9);


(lib.lib_7235_1258 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 0
	this.instance = new lib.lib_7871_2099("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(234.9,-316.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({y:59.2},5,cjs.Ease.get(0.7)).to({y:39.6},7,cjs.Ease.get(0.7)).to({y:44.5},5).wait(26));

	// layer 1
	this.instance_1 = new lib.lib_6083_4008("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(79.3,-272.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({y:104},5,cjs.Ease.get(0.7)).to({y:84.4},7,cjs.Ease.get(1)).to({y:89.3},5).wait(20));

	// layer 2
	this.instance_2 = new lib.lib_6842_6132("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-23.4,-291.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({y:84.3},5,cjs.Ease.get(0.7)).to({y:64.7},7,cjs.Ease.get(1)).to({y:69.6},5).wait(22));

	// layer 3
	this.instance_3 = new lib.lib_618_7358("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-123.1,-310.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({y:65.3},5,cjs.Ease.get(0.7)).to({y:45.7},7,cjs.Ease.get(1)).to({y:50.6},5).wait(24));

	// layer 4
	this.instance_4 = new lib.lib_7766_2187("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(97.3,-409.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({y:-33.6},5,cjs.Ease.get(0.7)).to({y:-53.2},7,cjs.Ease.get(1)).to({y:-48.3},5).wait(28));

	// layer 5
	this.instance_5 = new lib.lib_1982_5430("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-44.9,-410.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({y:-34.8},5,cjs.Ease.get(0.7)).to({y:-54.4},7,cjs.Ease.get(1)).to({y:-49.5},5).wait(30));

	// layer 6
	this.instance_6 = new lib.lib_6641_3629("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-213,-429.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:-53.8},5,cjs.Ease.get(0.7)).to({y:-73.4},7,cjs.Ease.get(1)).to({y:-68.5},5).wait(31));

	// layer 7
	this.instance_7 = new lib.lib_1948_1733("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(213.9,-236.8);
	this.instance_7._off = true;

	this.instance_8 = new lib.lib_1819_4080("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(213.9,139.2);
	this.instance_8._off = true;

	this.instance_9 = new lib.lib_5673_2585("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(213.9,119.6);
	this.instance_9._off = true;

	this.instance_10 = new lib.lib_485_4856("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(213.9,124.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},12).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},5).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({_off:true,y:139.2},5,cjs.Ease.get(0.7)).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},5,cjs.Ease.get(0.7)).to({_off:true,y:119.6},7,cjs.Ease.get(1)).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},7,cjs.Ease.get(1)).to({_off:true,y:124.5},5).wait(19));

	// layer 8
	this.instance_11 = new lib.lib_9271_4604("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(127.2,-316.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({y:59.1},5,cjs.Ease.get(0.7)).to({y:39.5},7,cjs.Ease.get(1)).to({y:44.4},5).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330.7,-539.3,236.6,228.5);


(lib.lib_7111_3160 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 1
	this.instance = new lib.lib_1220_8294("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,1,0.1,0.1,0,0,0,0,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({regY:0,scaleX:1.05,scaleY:1.05,x:0.1,y:10.4},5,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.98,x:0,y:9.5},7,cjs.Ease.get(0.7)).to({scaleX:1,scaleY:1,x:0.1,y:10},6,cjs.Ease.get(0.7)).wait(206));

	// layer 2
	this.instance_1 = new lib.lib_2476_1114("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:1.05,scaleY:1.05},5,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.98},7,cjs.Ease.get(0.7)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(0.7)).wait(209));

	// layer 3
	this.instance_2 = new lib.lib_2242_6560("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.05,scaleY:1.05},5,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.98},7,cjs.Ease.get(0.7)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(0.7)).wait(212));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.3,-46.3,92.8,92.8);


(lib.lib_6280_4532 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 1
	this.instance = new lib.lib_9599_1240("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(24,172.4,1,1,-78.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15.5,guide:{path:[24,172.4,138,-268,586.2,-243.7]}},15,cjs.Ease.get(1)).wait(19));

	// layer 3
	this.instance_1 = new lib.lib_3628_3654("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(121.8,197.9,1,1,-56.5,0,0,-0.1,4.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({rotation:6.2,guide:{path:[121.8,197.9,182.6,-354.5,719.6,-382.5]}},15,cjs.Ease.get(1)).wait(14));

	// layer 5
	this.instance_2 = new lib.lib_5317_2680("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56.1,185.5,1,1,52.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({rotation:8.2,guide:{path:[-56.2,185.5,-120.2,-206.1,-557.8,-225.2]}},15,cjs.Ease.get(1)).wait(17));

	// layer 7
	this.instance_3 = new lib.lib_9347_5724("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-169.4,205.1,1,1,40.7,0,0,0.1,-0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({regX:0,rotation:-23.2,guide:{path:[-169.5,205.1,-114.8,-461.1,-698.5,-386.4]}},15,cjs.Ease.get(1)).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.2,43,237.9,246.4);


(lib.lib_2313_6834 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 1
	this.instance = new lib.lib_8855_8361("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(153,848.2,1,1,0,0,0,-43.3,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:80.9,rotation:-6,y:24.4},7,cjs.Ease.get(0.7)).to({regX:-43.2,regY:81,rotation:3.7,x:153.1,y:55.8},7,cjs.Ease.get(0.7)).to({regX:-43.3,rotation:0,x:153,y:46.7},6,cjs.Ease.get(0.7)).wait(30));

	// layer 2
	this.instance_1 = new lib.lib_6338_1338("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.6,825,1,1,0,0,0,26.4,165.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.7,x:28.7,y:1.3},7,cjs.Ease.get(0.7)).to({rotation:2.7,x:28.6,y:32.6},7,cjs.Ease.get(0.7)).to({rotation:0,y:23.5},6,cjs.Ease.get(0.7)).wait(30));

	// layer 3
	this.instance_2 = new lib.lib_9269_4876("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-58.8,1004.3,1,1,0,0,0,3.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-7,y:180.6},7,cjs.Ease.get(0.7)).to({regX:3.6,rotation:5,y:211.8},7,cjs.Ease.get(0.7)).to({regX:3.7,rotation:0,y:202.8},6,cjs.Ease.get(0.7)).wait(30));

	// layer 4
	this.instance_3 = new lib.lib_4631_1404("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(50.3,896.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:72.8},7,cjs.Ease.get(0.7)).to({y:104},7,cjs.Ease.get(0.7)).to({y:95},6,cjs.Ease.get(0.7)).wait(30));

	// layer 5
	this.instance_4 = new lib.lib_1792_5590("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-55,851.6,1,1,0,0,0,16.2,-41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-41.3,rotation:-6.2,y:28.1},7,cjs.Ease.get(0.7)).to({regY:-41.4,rotation:0,y:59.2},7,cjs.Ease.get(0.7)).to({y:50.2},6,cjs.Ease.get(0.7)).wait(30));

	// layer 6
	this.instance_5 = new lib.lib_9355_5263("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-57.7,950.5,1,1,0,0,0,82,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:9,y:126.9},7,cjs.Ease.get(0.7)).to({rotation:-2.7,y:158.1},7,cjs.Ease.get(0.7)).to({rotation:0,y:149.1},6,cjs.Ease.get(0.7)).wait(30));

	// layer 7
	this.instance_6 = new lib.lib_5628_1136("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(138.5,1001.9,1,1,0,0,0,-6.7,-50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-6.6,rotation:-7.7,x:138.6,y:178.3},7,cjs.Ease.get(0.7)).to({regX:-6.5,rotation:2,x:138.7,y:209.5},7,cjs.Ease.get(0.7)).to({regX:-6.7,rotation:0,x:138.5,y:200.5},6,cjs.Ease.get(0.7)).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.7,458.3,531,686.8);


(lib.lib_1932_5868 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 1
	this.instance = new lib.lib_6219_145("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-21.9,52.5,0.1,0.1,0,0,0,16,34);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:360,guide:{path:[-21.9,52.9,301.4,73.5,324.5,308.2]}},10,cjs.Ease.get(1)).wait(15));

	// layer 3
	this.instance_1 = new lib.lib_5547_7314("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-21.8,53,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-360,guide:{path:[-21.7,53,198.3,-43.5,420.3,96.6]}},10,cjs.Ease.get(1)).wait(13));

	// layer 5
	this.instance_2 = new lib.lib_955_2822("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-22.1,52.6,0.1,0.1,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0,scaleX:1,scaleY:1,rotation:360,guide:{path:[-22.1,52.6,-130.4,-142,-2.2,-328]}},10,cjs.Ease.get(1)).wait(18));

	// layer 7
	this.instance_3 = new lib.lib_983_1834("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-22.1,53,0.1,0.1,0,0,0,0,-0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,rotation:-360,guide:{path:[-22.2,53,-169.3,-97.6,-423.8,-50.9]}},10,cjs.Ease.get(1)).wait(17));

	// layer 9
	this.instance_4 = new lib.lib_4710_343("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-21.7,53,0.1,0.1,0,0,0,-32,2.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({regY:2,scaleX:1,scaleY:1,rotation:360,guide:{path:[-21.8,53.4,-272.5,38.4,-373.1,207.4]}},10,cjs.Ease.get(1)).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,46.1,12.7,13.1);


(lib.lib_1212_5666 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// layer 0
	this.instance = new lib.lib_3634_6233("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.lib_9563_780("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:360},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-98,192,196);


(lib.startBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn.on('mousedown',function(e){
				e.currentTarget.scaleX=0.9;
			e.currentTarget.scaleY=0.9;
			})
			this.btn.on('pressup',function(e){
				e.currentTarget.scaleX=1;
			e.currentTarget.scaleY=1;
			})
	}
	this.frame_460 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(460).call(this.frame_460).wait(1));

	// layer 1
	this.ball = new lib.lib_1212_5666();
	this.ball.parent = this;
	this.ball.setTransform(-657.7,430.4);

	this.timeline.addTween(cjs.Tween.get(this.ball).to({rotation:360,guide:{path:[-657.6,430.4,-604.5,-62.9,-203.4,0.6]}},15,cjs.Ease.get(0.99)).wait(2).to({x:-203.4,y:0.5},0).to({rotation:720,guide:{path:[-203.3,0.5,-203.4,0.5,-203.4,0.5]}},18,cjs.Ease.get(0.7)).wait(426));

	// layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_17 = new cjs.Graphics().p("EgsMAMjIAA5FMBYZAAAIAAZFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:35.4,y:2.2}).wait(444));

	// layer 3
	this.btn = new lib.lib_8878_9917();
	this.btn.parent = this;
	this.btn.setTransform(-392.9,-1.4);
	this.btn.visible = false;

	var maskedShapeInstanceList = [this.btn];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(17).to({visible:true},0).to({x:31.8},18,cjs.Ease.get(0.7)).wait(426));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-753.7,-78.4,627.8,606.8);


(lib.lib_7693_2527 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_98 = function() {
		this.stop();
		
		var ball = this.btn.ball;
		this.btn.on('click', (function (e) {
			this.dispatchEvent('startBtnClick', true);
		}).bind(this), null, true);
		
		this.stage.enableMouseOver();
		
		this.btn.on('mouseover', function (e) {
			ball.gotoAndPlay(1)
		})
		
		this.btn.on('mouseout', function (e) {
			ball.gotoAndStop(0)
		})
		this.btn.cursor='pointer';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(98).call(this.frame_98).wait(1));

	// Layer 10
	this.instance = new lib.sound();
	this.instance.parent = this;
	this.instance.setTransform(-384.1,620.3,1,1,0,0,0,61.5,18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99));

	// layer 0
	this.instance_1 = new lib.lib_7235_1258("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.1,-479.7,1,1,0,0,0,1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).wait(53));

	// layer 1
	this.instance_2 = new lib.lib_9336_9755("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-26.3,-92.7,0.1,0.1,0,0,0,238,45.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({regX:238.5,regY:45.9,scaleX:1.05,scaleY:1.05,x:-258.3,y:-247.3},6,cjs.Ease.get(0.7)).to({regX:238.4,regY:45.8,scaleX:0.97,scaleY:0.97,x:-252.9,y:-242},6,cjs.Ease.get(0.7)).to({regX:238.5,regY:45.9,scaleX:1,scaleY:1,y:-241.9},7,cjs.Ease.get(0.7)).wait(50));

	// layer 2
	this.btn = new lib.startBtn();
	this.btn.parent = this;
	this.btn.setTransform(-41.6,216.5);
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(64).to({_off:false},0).wait(35));

	// layer 3
	this.instance_3 = new lib.Bitmap1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-970,152);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99));

	// layer 4
	this.instance_4 = new lib.lib_2313_6834("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-42.1,-62.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).wait(83));

	// layer 5
	this.instance_5 = new lib.lib_1932_5868("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(2.2,-178.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).wait(78));

	// layer 6
	this.instance_6 = new lib.lib_6280_4532("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(24.1,337.7,1,1,0,0,0,-0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99));

	// layer 7
	this.instance_7 = new lib.lib_7111_3160("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-22.3,-156.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).wait(83));

	// layer 8
	this.instance_8 = new lib.Bitmap2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-970,-694);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(99));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-970,-694,1940,1341.2);


// stage content:
(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.lib_7693_2527();
	this.instance.parent = this;
	this.instance.setTransform(960.2,686.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(950.2,532.2,1940,1341.2);
// library properties:
lib.properties = {
	id: 'ECC92C0561AF43C39DBFF4FCD20F0C42',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/start_atlas_.png?1504158862806", id:"start_atlas_",loadTimeout:3000000},
		{src:"sounds/effect.mp3?1504158862864", id:"effect",loadTimeout:3000000}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['ECC92C0561AF43C39DBFF4FCD20F0C42'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;