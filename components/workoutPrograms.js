const workoutProgram = [
  {
    day: "Day 1: Push",
    // Import the image directly
    exercises: [
      {
        image: require("../demonstration/inclineDumbellBench.jpg"),
        name: "Incline Dumbell Bench",
        sets: 4,
        reps: "6-8",
        tip: "Heavy Reps",
        description:
          "Incline Dumblell Bench is a free weight excersise that trains the upper chest which often is the most lacking.",
        replacement:
          "The normal Incline Bench Press is a great alternative to the dumbell variant. The only difference is some balance and the posibility to isolate each arm",
        isDone: false,
      },
      {
        name: "Incline Smith Machine Bench",
        sets: 4,
        reps: "10-12",
        tip: "Light",
        image: require("../img/gymbackgroundeasy.jpg"),
      },
      { name: "Chest Press", sets: 3, reps: "8-10" },
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 8 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 8 },
    ],
  },
  {
    day: "Day 2: Pull",
    exercises: [
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Close Grip Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Seated Cable Row (one arm)", sets: 3, reps: 10 },
      { name: "Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 3: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12 },
      { name: "BB Squat", sets: 4, reps: 8 },
      { name: "Hack Squat", sets: 3, reps: 10 },
      { name: "Walking Lunges", sets: 3, reps: 12 },
      { name: "Seated Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 4: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 8 },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Low Row", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 5: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10 },
      { name: "Upright Rows", sets: 3, reps: 12 },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12 },
      { name: "BB Curl", sets: 3, reps: 10 },
      { name: "Close Grip Bench", sets: 3, reps: 10 },
      { name: "Incline DB Curl", sets: 3, reps: 10 },
      { name: "Straight Bar Extension", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Day 6: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8 },
      { name: "Leg Curl", sets: 3, reps: 12 },
      { name: "DB RDL", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 10 },
      { name: "Standing Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 7: Rest",
    exercises: [],
  },
  {
    day: "Day 8: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Flat BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 10 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 9: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10 },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 10: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12 },
      { name: "BB Squat", sets: 4, reps: 8 },
      { name: "Hack Squat", sets: 3, reps: 10 },
      { name: "Walking Lunges", sets: 3, reps: 12 },
      { name: "Seated Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 11: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Low Row", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 12: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10 },
      { name: "Upright Rows", sets: 3, reps: 12 },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12 },
      { name: "BB Curl", sets: 3, reps: 10 },
      { name: "Close Grip Bench", sets: 3, reps: 10 },
      { name: "Incline DB Curl", sets: 3, reps: 10 },
      { name: "Straight Bar Extension", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Day 13: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8 },
      { name: "Leg Curl", sets: 3, reps: 12 },
      { name: "DB RDL", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 10 },
      { name: "Standing Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 14: Rest",
    exercises: [],
  },
  {
    day: "Day 15: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Flat BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 10 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 16: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10 },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 17: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12 },
      { name: "BB Squat", sets: 4, reps: 8 },
      { name: "Hack Squat", sets: 3, reps: 10 },
      { name: "Walking Lunges", sets: 3, reps: 12 },
      { name: "Seated Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 18: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Low Row", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 19: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10 },
      { name: "Upright Rows", sets: 3, reps: 12 },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12 },
      { name: "BB Curl", sets: 3, reps: 10 },
      { name: "Close Grip Bench", sets: 3, reps: 10 },
      { name: "Incline DB Curl", sets: 3, reps: 10 },
      { name: "Straight Bar Extension", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Day 20: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8 },
      { name: "Leg Curl", sets: 3, reps: 12 },
      { name: "DB RDL", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 10 },
      { name: "Standing Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 21: Rest",
    exercises: [],
  },
  {
    day: "Day 22: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Flat BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 10 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 23: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10 },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 24: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12 },
      { name: "BB Squat", sets: 4, reps: 8 },
      { name: "Hack Squat", sets: 3, reps: 10 },
      { name: "Walking Lunges", sets: 3, reps: 12 },
      { name: "Seated Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 25: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Low Row", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 26: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10 },
      { name: "Upright Rows", sets: 3, reps: 12 },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12 },
      { name: "BB Curl", sets: 3, reps: 10 },
      { name: "Close Grip Bench", sets: 3, reps: 10 },
      { name: "Incline DB Curl", sets: 3, reps: 10 },
      { name: "Straight Bar Extension", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Day 27: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8 },
      { name: "Leg Curl", sets: 3, reps: 12 },
      { name: "DB RDL", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 10 },
      { name: "Standing Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 28: Rest",
    exercises: [],
  },
  {
    day: "Day 29: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Flat BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 10 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 30: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10 },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 31: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12 },
      { name: "BB Squat", sets: 4, reps: 8 },
      { name: "Hack Squat", sets: 3, reps: 10 },
      { name: "Walking Lunges", sets: 3, reps: 12 },
      { name: "Seated Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 32: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Low Row", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 33: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10 },
      { name: "Upright Rows", sets: 3, reps: 12 },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12 },
      { name: "BB Curl", sets: 3, reps: 10 },
      { name: "Close Grip Bench", sets: 3, reps: 10 },
      { name: "Incline DB Curl", sets: 3, reps: 10 },
      { name: "Straight Bar Extension", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Day 34: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8 },
      { name: "Leg Curl", sets: 3, reps: 12 },
      { name: "DB RDL", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 10 },
      { name: "Standing Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 35: Rest",
    exercises: [],
  },
  {
    day: "Day 36: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Flat BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 10 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 37: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10 },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 38: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12 },
      { name: "BB Squat", sets: 4, reps: 8 },
      { name: "Hack Squat", sets: 3, reps: 10 },
      { name: "Walking Lunges", sets: 3, reps: 12 },
      { name: "Seated Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 39: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Low Row", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 40: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10 },
      { name: "Upright Rows", sets: 3, reps: 12 },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12 },
      { name: "BB Curl", sets: 3, reps: 10 },
      { name: "Close Grip Bench", sets: 3, reps: 10 },
      { name: "Incline DB Curl", sets: 3, reps: 10 },
      { name: "Straight Bar Extension", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Day 41: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8 },
      { name: "Leg Curl", sets: 3, reps: 12 },
      { name: "DB RDL", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 10 },
      { name: "Standing Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 42: Rest",
    exercises: [],
  },
  {
    day: "Day 43: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Flat BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 10 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 44: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10 },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 45: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12 },
      { name: "BB Squat", sets: 4, reps: 8 },
      { name: "Hack Squat", sets: 3, reps: 10 },
      { name: "Walking Lunges", sets: 3, reps: 12 },
      { name: "Seated Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 46: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Low Row", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 47: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10 },
      { name: "Upright Rows", sets: 3, reps: 12 },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12 },
      { name: "BB Curl", sets: 3, reps: 10 },
      { name: "Close Grip Bench", sets: 3, reps: 10 },
      { name: "Incline DB Curl", sets: 3, reps: 10 },
      { name: "Straight Bar Extension", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Day 48: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8 },
      { name: "Leg Curl", sets: 3, reps: 12 },
      { name: "DB RDL", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 10 },
      { name: "Standing Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 49: Rest",
    exercises: [],
  },
  {
    day: "Day 50: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Flat BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 10 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 51: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10 },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 52: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12 },
      { name: "BB Squat", sets: 4, reps: 8 },
      { name: "Hack Squat", sets: 3, reps: 10 },
      { name: "Walking Lunges", sets: 3, reps: 12 },
      { name: "Seated Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 53: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Low Row", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 54: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10 },
      { name: "Upright Rows", sets: 3, reps: 12 },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12 },
      { name: "BB Curl", sets: 3, reps: 10 },
      { name: "Close Grip Bench", sets: 3, reps: 10 },
      { name: "Incline DB Curl", sets: 3, reps: 10 },
      { name: "Straight Bar Extension", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Day 55: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8 },
      { name: "Leg Curl", sets: 3, reps: 12 },
      { name: "DB RDL", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 10 },
      { name: "Standing Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 56: Rest",
    exercises: [],
  },
  {
    day: "Day 57: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Flat BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 10 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 58: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10 },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 59: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12 },
      { name: "BB Squat", sets: 4, reps: 8 },
      { name: "Hack Squat", sets: 3, reps: 10 },
      { name: "Walking Lunges", sets: 3, reps: 12 },
      { name: "Seated Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 60: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Low Row", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 61: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10 },
      { name: "Upright Rows", sets: 3, reps: 12 },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12 },
      { name: "BB Curl", sets: 3, reps: 10 },
      { name: "Close Grip Bench", sets: 3, reps: 10 },
      { name: "Incline DB Curl", sets: 3, reps: 10 },
      { name: "Straight Bar Extension", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Day 62: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8 },
      { name: "Leg Curl", sets: 3, reps: 12 },
      { name: "DB RDL", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 10 },
      { name: "Standing Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 63: Rest",
    exercises: [],
  },
  {
    day: "Day 64: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Flat BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 10 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 65: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10 },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 66: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12 },
      { name: "BB Squat", sets: 4, reps: 8 },
      { name: "Hack Squat", sets: 3, reps: 10 },
      { name: "Walking Lunges", sets: 3, reps: 12 },
      { name: "Seated Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 67: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Low Row", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 68: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10 },
      { name: "Upright Rows", sets: 3, reps: 12 },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12 },
      { name: "BB Curl", sets: 3, reps: 10 },
      { name: "Close Grip Bench", sets: 3, reps: 10 },
      { name: "Incline DB Curl", sets: 3, reps: 10 },
      { name: "Straight Bar Extension", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Day 69: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8 },
      { name: "Leg Curl", sets: 3, reps: 12 },
      { name: "DB RDL", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 10 },
      { name: "Standing Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 70: Rest",
    exercises: [],
  },
  {
    day: "Day 71: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Flat BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 10 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 72: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10 },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 73: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12 },
      { name: "BB Squat", sets: 4, reps: 8 },
      { name: "Hack Squat", sets: 3, reps: 10 },
      { name: "Walking Lunges", sets: 3, reps: 12 },
      { name: "Seated Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 74: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Low Row", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 75: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10 },
      { name: "Upright Rows", sets: 3, reps: 12 },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12 },
      { name: "BB Curl", sets: 3, reps: 10 },
      { name: "Close Grip Bench", sets: 3, reps: 10 },
      { name: "Incline DB Curl", sets: 3, reps: 10 },
      { name: "Straight Bar Extension", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Day 76: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8 },
      { name: "Leg Curl", sets: 3, reps: 12 },
      { name: "DB RDL", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 10 },
      { name: "Standing Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 77: Rest",
    exercises: [],
  },
  {
    day: "Day 78: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Flat BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 10 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 79: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10 },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 80: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12 },
      { name: "BB Squat", sets: 4, reps: 8 },
      { name: "Hack Squat", sets: 3, reps: 10 },
      { name: "Walking Lunges", sets: 3, reps: 12 },
      { name: "Seated Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 81: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Low Row", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 82: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10 },
      { name: "Upright Rows", sets: 3, reps: 12 },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12 },
      { name: "BB Curl", sets: 3, reps: 10 },
      { name: "Close Grip Bench", sets: 3, reps: 10 },
      { name: "Incline DB Curl", sets: 3, reps: 10 },
      { name: "Straight Bar Extension", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Day 83: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8 },
      { name: "Leg Curl", sets: 3, reps: 12 },
      { name: "DB RDL", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 10 },
      { name: "Standing Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 84: Rest",
    exercises: [],
  },
  {
    day: "Day 85: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Flat BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 10 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 86: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10 },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 87: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12 },
      { name: "BB Squat", sets: 4, reps: 8 },
      { name: "Hack Squat", sets: 3, reps: 10 },
      { name: "Walking Lunges", sets: 3, reps: 12 },
      { name: "Seated Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 88: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Low Row", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 89: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10 },
      { name: "Upright Rows", sets: 3, reps: 12 },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12 },
      { name: "BB Curl", sets: 3, reps: 10 },
      { name: "Close Grip Bench", sets: 3, reps: 10 },
      { name: "Incline DB Curl", sets: 3, reps: 10 },
      { name: "Straight Bar Extension", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Day 90: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8 },
      { name: "Leg Curl", sets: 3, reps: 12 },
      { name: "DB RDL", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 10 },
      { name: "Standing Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 91: Rest",
    exercises: [],
  },
  {
    day: "Day 92: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Flat BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 10 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 93: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10 },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 94: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12 },
      { name: "BB Squat", sets: 4, reps: 8 },
      { name: "Hack Squat", sets: 3, reps: 10 },
      { name: "Walking Lunges", sets: 3, reps: 12 },
      { name: "Seated Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 95: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10 },
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Low Row", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 96: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10 },
      { name: "Upright Rows", sets: 3, reps: 12 },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12 },
      { name: "BB Curl", sets: 3, reps: 10 },
      { name: "Close Grip Bench", sets: 3, reps: 10 },
      { name: "Incline DB Curl", sets: 3, reps: 10 },
      { name: "Straight Bar Extension", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Day 97: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8 },
      { name: "Leg Curl", sets: 3, reps: 12 },
      { name: "DB RDL", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 10 },
      { name: "Standing Calf Raise", sets: 4, reps: 15 },
    ],
  },
  {
    day: "Day 98: Rest",
    exercises: [],
  },
  {
    day: "Day 99: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10 },
      { name: "Flat BB Bench", sets: 3, reps: 10 },
      { name: "Flat DB Bench", sets: 3, reps: 10 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "DB Shoulder Press", sets: 3, reps: 10 },
      { name: "Rope Extension", sets: 3, reps: 12 },
      { name: "BB Skullcrusher", sets: 3, reps: 10 },
    ],
  },
  {
    day: "Day 100: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10 },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10 },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12 },
      { name: "Cable BB Curl", sets: 3, reps: 10 },
      { name: "Cable Hammer Curl", sets: 3, reps: 10 },
    ],
  },
];

export default workoutProgram;
