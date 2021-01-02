class Slingshot{
    constructor(bodyA,pointB){
        var props={
            //our bodyA is bird's body
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 10
        }
    this.pointB=pointB;
        this.sling = Constraint.create(props);
        World.add(world,this.sling);
   
    }

    fly(){
        this.sling.bodyA=null;
    }

    display(){
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position
            var posB = this.pointB
            push()
               strokeWeight(5);
           line(posA.x,posA.y,posB.x,posB.y,);
             pop()
        }
     
    }
}