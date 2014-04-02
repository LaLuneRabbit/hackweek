//need to change, not safe

var DAILY_TICKET_COUNT = 3;
var PAID_TICKET_COUNT = 0;
var DAILY_MAP_COUNT = 3;
var PAID_MAP_COUNT = 9;

var BASE_SKILL_LEVEL = 1;
var TEMP_LIFE_VALUE = 10; //delete later

var GAME_NUMBER_OF_ROWS = 7; //this is totally flipped
var GAME_NUMBER_OF_COLS = 7;
var GAME_BLOCK_SIZE;
var GAME_BLOCK_SIZE_X;
var GAME_BLOCK_SIZE_Y;
var ctxBoard;
var boardCanvas;
var boardCanvasObj;

var BUTTON_NUMBER_OF_ROWS = 4; //why the heck is this flipped?
var BUTTON_NUMBER_OF_COLS = 1;
var BUTTON_BLOCK_SIZE_X;
var BUTTON_BLOCK_SIZE_Y;
var ctxButton;
var buttonCanvas;
var buttonCanvasObj;

var GOAL_NUMBER_OF_ROWS = 7; //this is totally flipped
var GOAL_NUMBER_OF_COLS = 7;
var GOAL_BLOCK_SIZE;
var GOAL_BLOCK_SIZE_X;
var GOAL_BLOCK_SIZE_Y;
var ctxGoal;
var goalCanvas;
var goalCanvasObj;

var makerCanvas;

var currentUser;
var userProfile;
var userCanvas;
var userImageObj;

var positionX;
var positionY;

var setButton;
var leftButton;
var downButton;
var upButton;
var rightButton;

var touchX;
var touchY;
var touchRow;
var touchCol;
var updateRowValue;
var updateColValue;
