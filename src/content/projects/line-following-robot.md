---
title: "Line Following Robot"
description: "An autonomous robot that follows black lines using IR sensors"
date: 2025-09-20
status: "completed"
tech: ["Arduino Uno", "IR Sensors", "DC Motors", "L298N Motor Driver"]
team: ["Alex Chen", "Jamie Lee", "Morgan Taylor"]
image: "/images/projects/line-follower.jpg"
featured: true
---

## Project Overview

Our line-following robot uses infrared sensors to detect and follow a black line on a white surface. This project taught us fundamental concepts in robotics: sensor input, decision-making logic, and motor control.

## Design Goals

1. Follow a line with 90%+ accuracy
2. Handle sharp turns and intersections
3. Maintain smooth, consistent speed
4. Complete a test course in under 60 seconds

## Hardware Components

### Main Controller
- **Arduino Uno**: The brain of our robot
- **9V Battery**: Powers the Arduino and sensors
- **12V Battery Pack**: Powers the motors

### Sensors
- **2x IR Sensors**: Detect the line (black vs white)
- Positioned 3cm apart for optimal line detection

### Motors & Chassis
- **2x DC Motors**: Provide movement
- **L298N Motor Driver**: Controls motor speed and direction
- **Acrylic Chassis**: Lightweight and easy to modify

## The Code

Here's our core line-following logic:

```cpp
const int leftSensor = 2;
const int rightSensor = 3;
const int leftMotorForward = 5;
const int leftMotorBackward = 6;
const int rightMotorForward = 9;
const int rightMotorBackward = 10;

void setup() {
  pinMode(leftSensor, INPUT);
  pinMode(rightSensor, INPUT);
  pinMode(leftMotorForward, OUTPUT);
  pinMode(leftMotorBackward, OUTPUT);
  pinMode(rightMotorForward, OUTPUT);
  pinMode(rightMotorBackward, OUTPUT);
}

void loop() {
  int left = digitalRead(leftSensor);
  int right = digitalRead(rightSensor);

  if (left == LOW && right == LOW) {
    // Both sensors on line: move forward
    moveForward();
  } else if (left == LOW && right == HIGH) {
    // Line drifting right: turn right
    turnRight();
  } else if (left == HIGH && right == LOW) {
    // Line drifting left: turn left
    turnLeft();
  } else {
    // Lost the line: stop
    stopMotors();
  }
}

void moveForward() {
  digitalWrite(leftMotorForward, HIGH);
  digitalWrite(rightMotorForward, HIGH);
  digitalWrite(leftMotorBackward, LOW);
  digitalWrite(rightMotorBackward, LOW);
}

void turnRight() {
  digitalWrite(leftMotorForward, HIGH);
  digitalWrite(rightMotorForward, LOW);
  digitalWrite(leftMotorBackward, LOW);
  digitalWrite(rightMotorBackward, LOW);
}

void turnLeft() {
  digitalWrite(leftMotorForward, LOW);
  digitalWrite(rightMotorForward, HIGH);
  digitalWrite(leftMotorBackward, LOW);
  digitalWrite(rightMotorBackward, LOW);
}

void stopMotors() {
  digitalWrite(leftMotorForward, LOW);
  digitalWrite(rightMotorForward, LOW);
  digitalWrite(leftMotorBackward, LOW);
  digitalWrite(rightMotorBackward, LOW);
}
```

## Challenges We Faced

### 1. Sensor Calibration
**Problem**: Sensors were too sensitive to ambient light.

**Solution**: Added a small shield around each sensor and calibrated the threshold for our specific environment.

### 2. Oscillation
**Problem**: The robot wobbled back and forth while following the line.

**Solution**: Implemented PWM speed control to make gentler turns instead of full-power corrections.

### 3. Sharp Corners
**Problem**: Robot would overshoot tight 90-degree turns.

**Solution**: Added a third sensor in the middle to detect when the robot completely loses the line, then execute a search pattern.

## Results

After testing and tuning:
- ✅ 95% line-following accuracy
- ✅ Handles 90-degree turns
- ✅ Average speed: 0.5 m/s
- ✅ Course completion: 48 seconds

## Lessons Learned

1. **Sensor Placement Matters**: The 3cm spacing between sensors was optimal for our line width
2. **Test Early, Test Often**: We spent 60% of project time testing and tuning
3. **Simple is Better**: Our initial PID control was overkill; simpler logic worked great
4. **Documentation Helps**: Keeping a test log helped us track what changes improved performance

## Next Steps

Future improvements we're considering:
- Add speed control for straightaways vs turns
- Implement PID control for smoother motion
- Add obstacle detection
- Create a race mode for competition

## Want to Build Your Own?

Check out our full build guide and code on GitHub: [github.com/robotics-club/line-follower](https://github.com)
