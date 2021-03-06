/**
 * Created by scott on 6/7/2017.
 */

"use strict;"

let Rectangle = function (center, width, height) {
    RigidShape.call(this, center);
    this.mType = "Rectangle";
    this.mWidth = width;
    this.mHeight = height;
    this.mVertex = [];
    this.mFaceNormal = [];

    this.mVertex[0] = new Vec2(center.x - width/2, center.y - height/2); // topLeft
    this.mVertex[1] = new Vec2(center.x + width/2, center.y - height/2); // topRight
    this.mVertex[2] = new Vec2(center.x + width/2, center.y + height/2); // bottomRight
    this.mVertex[3] = new Vec2(center.x - width/2, center.y + height/2); // bottomLeft

    // 0 = top, 1 = right, 2 = bottom, 3 = left
    // mFaceNormal is normal of face towards the rectangle
    this.mFaceNormal[0] = this.mVertex[1].subtract(this.mVertex[2]);
    this.mFaceNormal[0] = this.mFaceNormal[0].normalize();
    this.mFaceNormal[1] = this.mVertex[2].subtract(this.mVertex[3]);
    this.mFaceNormal[1] = this.mFaceNormal[1].normalize();
    this.mFaceNormal[2] = this.mVertex[3].subtract(this.mVertex[0]);
    this.mFaceNormal[2] = this.mFaceNormal[2].normalize();
    this.mFaceNormal[3] = this.mVertex[0].subtract(this.mVertex[1]);
    this.mFaceNormal[3] = this.mFaceNormal[3].normalize();

};

// Ensuring that Rectangle class inherits properly from RigidShape
let prototype = Object.create(RigidShape.prototype);
prototype.constructor = Rectangle;
Rectangle.prototype = prototype;

// Draw Function
Rectangle.prototype.draw = function (context) {
  context.save();
  context.translate(this.mVertex[0].x, this.mVertex[0].y);
  context.rotate(this.mAngle);
  context.strokeRect(0, 0, this.mWidth, this.mHeight);
  context.restore();
};