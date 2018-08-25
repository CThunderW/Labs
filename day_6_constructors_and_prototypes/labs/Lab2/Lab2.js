class Vector{
    constructor(aX, aY, aZ){
        this.aX = aX;
        this.aY = aY;
        this.aZ = aZ;
    }
    plus(vector) {
        let sumaX = this.aX + vector.aX;
        let sumaY = this.aY + vector.aY;
        let sumaZ = this.aZ + vector.aZ;
        return new Vector(sumaX, sumaY, sumaZ)
        

    }
    minus(vector) {
        let difaX = this.aX - vector.aX;
        let difaY = this.aY - vector.aY;
        let difaZ = this.aZ - vector.aZ;
        return new Vector (difaX, difaY,difaZ)
    }
    magnitude(){
        let vecaX = this.aX ;
        let vecaY = this.aY ;
        let vecaZ = this.aZ ;
        let magVec = Math.sqrt((Math.pow(vecaX, 2))+(Math.pow(vecaY, 2))+(Math.pow(vecaZ, 2)));
        return magVec;
    }
}




let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);

console.log(v1.plus(v2)) // returns Vector {x: 5, y: 6, z: 2}
console.log(v2.plus(v1)) // returns Vector {x: 5, y: 6, z: 2}

console.log(v1.minus(v2)) // returns Vector {x: 3, y: 2, z: -2}
console.log(v2.minus(v1)) // returns Vector {x: -3, y: -2, z: 2}

console.log(v1.magnitude()) // returns 5.656854249492381
console.log(v2.magnitude()) // returns 3

