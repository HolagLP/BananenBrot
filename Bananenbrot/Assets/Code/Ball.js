#pragma strict
 var rb: Rigidbody2D;

function Start () {
  var rn = Random.Range(0,2);
  rb = GetComponent.<Rigidbody2D>();
  if (rn <= 0.5){
    rb.AddForce(new Vector2 (30, 10));
  }else{
  	rb.AddForce(new Vector2 (-30, -10));
  }
}

function OnCollisionEnter2D (colInfo : Collision2D) {
Debug.Log("Nudelsuppe");
	if(colInfo.collider.tag == "Player"){
		var velY = rb.velocity.y;
		velY = velY/2 + colInfo.collider.GetComponent.<Rigidbody2D>().velocity.y/3;
	}
}