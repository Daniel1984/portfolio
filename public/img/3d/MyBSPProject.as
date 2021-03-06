package 
	{
	// Class generated by Prefab3D. David Lenaerts & Fabrice Closier, 2011.
	import away3d.arcane;
	import away3d.cameras.lenses.PerspectiveLens;
	import away3d.containers.View3D;
	import away3d.core.base.Object3D;
	import away3d.core.clip.NearfieldClipping;
	import away3d.graphs.ITreeNode;
	import away3d.graphs.TreeIterator;
	import away3d.graphs.bsp.BSPNode;
	import away3d.graphs.bsp.BSPTree;
	import away3d.core.math.Number3D;
	import away3d.loaders.AWData;
	import away3d.physics.BSPCollider;

	import flash.display.*;
	import flash.events.Event;
	import flash.events.KeyboardEvent;
	import flash.events.MouseEvent;
	import flash.ui.Keyboard;

	use namespace arcane;

	//[SWF(frameRate="60", backgroundColor="0x000000", width="800", height="600")]
	public class MyBSPProject extends Sprite
	{
		[Embed(source="myBSPTree.awd", mimeType="application/octet-stream")]
		private var BSPFile:Class;

		private static const MOVE_SPEED:Number = 250;
		private static const JUMP_STRENGTH:Number = 300;
		private static const ACCELERATION:Number = 70;
		private static const RUN_MULTIPLIER:Number = 2;
		private static const GRAVITY:Number = 30;
		private static const FRICTION:Number = .3;
		private var _lastMouseX:Number;
		private var _lastMouseY:Number;
		private var _lastRotX:Number;
		private var _lastRotY:Number;
		private var _rotX:Number;
		private var _rotY:Number;
		private var _right:Boolean;
		private var _left:Boolean;
		private var _rotaccel:Number = 0.0;
		private var _tree:BSPTree;
		private var _view:View3D;
		private var _xDir:Number = 0.0;
		private var _zDir:Number = 0.0;
		private var _mouseDown:Boolean;
		private var _dragX:Number = 0;
		private var _dragY:Number = 0;
		private var _bspCollider:BSPCollider;
		private var _force:Number3D = new Number3D();
		private var _flightMode:Boolean = false;
		private var _speedMultiplier:Number = 1.0;
		private var _noClip:Boolean = false;

		public function MyBSPProject()
		{
			addEventListener(Event.ADDED_TO_STAGE, init);
		}

		private function init(e:Event):void
		{
			initStage();
			initAway3D();
		}
		private function initStage():void
		{
			stage.scaleMode = StageScaleMode.NO_SCALE;
			stage.quality = StageQuality.LOW;
			stage.addEventListener(KeyboardEvent.KEY_DOWN, KeyIsDown);
			stage.addEventListener(KeyboardEvent.KEY_UP, KeyIsUP);
			stage.addEventListener(MouseEvent.MOUSE_DOWN, onMouseIsDown);
			stage.addEventListener(MouseEvent.MOUSE_UP, onMouseIsUp);
		}

		private function initAway3D():void
		{
			_view = new View3D({x: stage.stageWidth*.5, y: stage.stageHeight*.5, clipping: new NearfieldClipping()});
			_view.camera.lens = new PerspectiveLens();
			_view.camera.zoom = 10;
			_view.camera.x = 0;
			_view.camera.y = 405.77;
			_view.camera.z = 0;
			_view.camera.rotationX = 0;
			_view.camera.rotationY = 90;
			_view.camera.rotationZ = 0;

			_tree = BSPTree(AWData.parse(new BSPFile(), {customPath:"./images/"}));
			_view.scene.addChild(_tree);
			_tree.usePVS = true;

			_bspCollider = new BSPCollider(_view.camera, _tree);
			_bspCollider.testMethod = BSPTree.TEST_METHOD_ELLIPSOID;
			_bspCollider.flyMode = _flightMode;
			_bspCollider.maxClimbHeight = 50;
			_bspCollider.maxIterations = 4;

			_bspCollider.minBounds = new Number3D(-97,-314,-252);
			_bspCollider.maxBounds = new Number3D(94,59,92);

			addChild(_view);
			addEventListener(Event.ENTER_FRAME, onEnterFrame);
		}

		private function KeyIsDown(event:KeyboardEvent):void
		{
			switch(event.keyCode) {
				case 90:
				case 87:
				case Keyboard.UP:
					_zDir = 1;
					break;
				case 83:
				case Keyboard.DOWN:
					_zDir = -1;
					break;
				case 81:
				case 65:
				case Keyboard.LEFT:
					_xDir = -1;
					break;
				case 68:
				case Keyboard.RIGHT:
					_xDir = 1;
					break;
				case Keyboard.SPACE:
					if(_bspCollider && _bspCollider.onSolidGround) _force.y = JUMP_STRENGTH;
					break;
				case Keyboard.SHIFT:
					_speedMultiplier = RUN_MULTIPLIER;
					break
			}
		}

		private function KeyIsUP(event:KeyboardEvent):void
		{
			switch(event.keyCode) {
				case 90:
				case 87:
				case 83:
				case Keyboard.UP:
				case Keyboard.DOWN:
					_zDir = 0;
					break;
				case 65:
				case 81:
				case Keyboard.LEFT:
				case 68:
				case Keyboard.RIGHT:
					_xDir = 0;
					break;
				case Keyboard.ENTER:
					_tree.usePVS = !_tree.usePVS;
					break;
				case Keyboard.SHIFT:
					_speedMultiplier = 1;
					break;
				case Keyboard.F1:
					_noClip = !_noClip;
					break
			}
		}

		private function onEnterFrame(event:Event):void
		{
			var maxSpeed:Number = MOVE_SPEED*_speedMultiplier;
			if(_mouseDown){
				_rotX = _lastMouseX - (mouseY - _lastRotY)*0.7;
				_rotY = _lastMouseY + (mouseX - _lastRotX)*0.7;

				if(_rotX > 90) _rotX = 70;
				if(_rotX < -90) _rotX = -70;
				_view.camera.rotationX += (_rotX - _view.camera.rotationX)/4;
				_view.camera.rotationY += (_rotY - _view.camera.rotationY)/4;
			}

			if(_noClip || !_bspCollider) {
				_view.camera.moveForward(_zDir*maxSpeed);
			}
			else {
				var dx:Number = _xDir*ACCELERATION;
				var dz:Number = _zDir*ACCELERATION;

				_force.x += dx;
				_force.z += dz;
				if(_force.x > maxSpeed || _force.x < -maxSpeed) _force.x -= dx;
				if(_force.z > maxSpeed || _force.z < -maxSpeed) _force.z -= dz;

				if(_flightMode) {
					_bspCollider.move(_xDir * maxSpeed, 0, _zDir * maxSpeed);
				} else {
					_force.y = _bspCollider.move(_force.x, _force.y, _force.z).y;
					_force.x /= (1+FRICTION);
					_force.z /= (1+FRICTION);
					_force.y -= GRAVITY;
				}
			}
			_view.render();
		}

		private function onMouseIsDown(event:MouseEvent):void
		{
			_lastMouseX = _view.camera.rotationX;
			_lastMouseY = _view.camera.rotationY;
			_lastRotX = mouseX;
			_lastRotY = mouseY;
			_mouseDown = true;
			_dragX = mouseX;
			_dragY = mouseY;
		}

		private function onMouseIsUp(event:MouseEvent):void
		{
			_mouseDown = false;
		}
	}
	}