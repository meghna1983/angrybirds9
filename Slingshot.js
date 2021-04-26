class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    
    }



    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,180,25)
        image(this.sling2,150,30)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48,22,8)
            if(pointA.x<220){
            strokeWeight(6);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x, pointA.y, pointB.x+30, pointB.y+10);
            image(this.sling3,point.x,pointA.y,20,30)
           
        }
        else{
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x, pointA.y, pointB.x+30, pointB.y);
            image(this.sling3,point.x,pointA.y,20,30)
        }
        pop()
    }
    }
    
}