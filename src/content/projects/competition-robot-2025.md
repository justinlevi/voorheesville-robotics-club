---
title: "2025 Regional Competition Robot"
description: "Our autonomous robot designed for the 2025 Regional Robotics Challenge"
date: 2025-10-01
status: "in-progress"
tech: ["Raspberry Pi 4", "Python", "OpenCV", "Servo Motors", "Ultrasonic Sensors"]
team: ["Sarah Martinez", "Alex Chen", "Taylor Johnson", "Jordan Kim"]
image: "/images/projects/competition-2025.jpg"
featured: true
---

## Competition Challenge

The 2025 Regional Challenge requires robots to:
1. Navigate an obstacle course autonomously
2. Identify colored objects using computer vision
3. Pick and place objects into designated zones
4. Complete tasks within a 3-minute time limit

## Our Approach

We're building a modular robot with three key subsystems:
- **Navigation**: Autonomous path planning with ultrasonic sensors
- **Vision**: OpenCV-based object detection and tracking
- **Manipulation**: 3-DOF robotic arm for picking and placing

## Current Progress

### ✅ Completed
- CAD design of chassis and arm
- 3D printed chassis components
- Basic navigation system working
- Motor driver integration
- Power management system

### 🚧 In Progress
- Computer vision object detection (80% complete)
- Gripper mechanism refinement
- Autonomous routine optimization
- Testing and calibration

### 📋 To Do
- Emergency stop system
- Competition field testing
- Driver practice and backup modes
- Final paint and branding

## Technical Highlights

### Computer Vision

We're using OpenCV with HSV color space filtering to detect objects:

```python
import cv2
import numpy as np

def detect_colored_object(frame, color_range):
    """
    Detect objects of a specific color in the frame
    Returns the centroid of the largest detected object
    """
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    mask = cv2.inRange(hsv, color_range['lower'], color_range['upper'])

    # Find contours
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    if contours:
        # Get largest contour
        largest = max(contours, key=cv2.contourArea)
        M = cv2.moments(largest)

        if M["m00"] > 0:
            cx = int(M["m10"] / M["m00"])
            cy = int(M["m01"] / M["m00"])
            return (cx, cy)

    return None

# Example usage
red_range = {
    'lower': np.array([0, 100, 100]),
    'upper': np.array([10, 255, 255])
}

cap = cv2.VideoCapture(0)
while True:
    ret, frame = cap.read()
    position = detect_colored_object(frame, red_range)

    if position:
        cv2.circle(frame, position, 10, (0, 255, 0), -1)

    cv2.imshow('Detection', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
```

### Path Planning

Our navigation system uses a simple but effective algorithm:
1. Scan environment with ultrasonic sensors
2. Create occupancy grid of obstacles
3. Use A* pathfinding to plan route
4. Execute movement with PID-controlled motors

## Design Decisions

### Why Raspberry Pi over Arduino?
- Need processing power for computer vision
- Python is more suitable for complex algorithms
- Can run OpenCV natively
- Arduino handles low-level motor control via serial

### Modular Architecture
Each subsystem operates independently with defined interfaces:
- **Navigation Module**: Handles movement and obstacle avoidance
- **Vision Module**: Detects and tracks objects
- **Arm Module**: Controls gripper and arm positioning
- **Main Controller**: Coordinates all modules

This allows parallel development and easier debugging.

## Timeline

- **Week 1-2**: Design and CAD modeling ✅
- **Week 3-4**: Chassis build and motor integration ✅
- **Week 5-6**: Vision system development 🚧
- **Week 7-8**: Arm mechanism and gripper
- **Week 9-10**: Integration testing
- **Week 11**: Competition field practice
- **Week 12**: Competition day! 🏆

## Competition Day: November 15, 2025

We're excited and nervous! Follow our progress on this website and our social media.

## Team Roles

- **Sarah Martinez**: Team lead, vision system
- **Alex Chen**: Mechanical design, CAD
- **Taylor Johnson**: Software architecture, navigation
- **Jordan Kim**: Arm control, gripper mechanism

## Support Our Team

Want to help? We're looking for:
- ~~Sponsorship for parts and competition fees~~ (Goal reached! Thank you!)
- Mentors with robotics or computer vision experience
- Practice space with good lighting for vision testing

Contact us at robotics@school.edu

---

*Last updated: October 17, 2025*
*Competition in 29 days!*
