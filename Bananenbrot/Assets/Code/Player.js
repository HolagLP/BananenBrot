var moveUp : KeyCode;
var moveDown : KeyCode;

var speed : float = 10;

function Start() {
  rb = GetComponent.<Rigidbody2D>();
}

function Update () {
var rb = GetComponent.<Rigidbody2D>();
	if(Input.GetKey(moveUp))
	{
		rb.velocity.y = speed;
	}
	else if(Input.GetKey(moveDown))
	{
		rb.velocity.y = speed *-1;
	}
	else
	{
		rb.velocity.y = 0;
	}
	
	rb.velocity.x = 0;

}