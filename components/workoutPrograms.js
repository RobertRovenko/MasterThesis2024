const workoutProgram = [
  {
    day: "Day 1: Push",
    exercises: [
      {
        image1: require("../demonstration/inclineDumbellBench.jpg"),
        image2: require("../demonstration/inclineDumbellBench.jpeg"),
        name: "Incline Dumbell Bench",
        sets: 4,
        reps: "6-8",
        tip: "Heavy Sets",
        description:
          "Incline Dumbbell Bench targets the upper chest, an area often lacking in development. This free weight exercise enhances chest aesthetics and strength by isolating the upper pectoral muscles. It also engages stabilizing muscles for improved shoulder and arm strength. Ideal for addressing muscle imbalances, it offers a greater range of motion compared to other chest exercises",
        replacement:
          "The normal Incline Bench Press is a great alternative to the dumbell variant. The only difference is some balance and the posibility to isolate each arm",
        isDone: false,
      },
      {
        name: "Incline Smith Machine Bench",
        sets: 4,
        reps: "10-12",
        tip: "Medium-Light Sets",
        description:
          "The Incline Smith Machine Bench involves using medium to light weight and focusing on going to failure. This exercise is excellent for isolating the upper pecs and achieving a pump, enhancing muscle engagement during subsequent exercises.",
        replacement:
          "A suitable alternative to the Incline Smith Machine Bench is the standard Incline Bench Press. The primary difference lies in the aspect of balance and the ability to push yourself to complete muscle failure more effectively.",
      },

      {
        name: "Machine Chest Press",
        sets: 3,
        reps: "8-10",
        tip: "Medium Sets",
        description:
          "The Machine Chest Press is a resistance exercise that targets the chest muscles using a machine. It's performed by pushing the handles forward until the arms are fully extended and then returning to the starting position.",
        replacement:
          "A suitable alternative to the Machine Chest Press is the standard Bench Press. The primary difference lies in the aspect of balance and the ability to work each arm independently, allowing for more targeted muscle engagement and development.",
      },

      {
        name: "Chest Machine Fly",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        description:
          "The Chest Fly Machine involves sitting in the machine and pushing the handles together in a controlled motion, mimicking a fly movement. This exercise effectively isolates the chest muscles.",
        replacement:
          "An effective alternative to the Pec Deck is the Dumbbell Fly. This exercise can be performed lying on a flat bench with dumbbells, allowing for a greater range of motion and increased stabilization work.",
      },
      {
        name: "Lateral Raises",
        sets: 4,
        reps: 12,
        tip: "Light Sets",
        description:
          "Lateral Raises target the lateral deltoids and are performed by raising the arms to the sides until they are parallel to the ground. This exercise helps in strengthening and defining the shoulders.",
        replacement:
          "The Cable Lateral Raises is a great alternative to the normal Lateral Raises. The primary difference is the constant tension provided by the cable throughout the movement, which can enhance muscle activation and growth.",
      },

      {
        name: "Dumbell Shoulder Press",
        sets: 3,
        reps: 8,
        tip: "Medium-Heavy Sets",
        description:
          "The Dumbbell Shoulder Press is a compound exercise targeting the shoulders. It's performed by pressing dumbbells overhead while seated or standing, engaging the deltoid muscles.",
        replacement:
          "An effective alternative to the DB Shoulder Press is the Barbell Shoulder Press, also known as the Overhead Press. This exercise utilizes a barbell instead of dumbbells and allows for heavier weights to be lifted, thus promoting strength and muscle growth in the shoulders.",
      },
      {
        name: "Rope Extension",
        sets: 3,
        reps: 12,
        tip: "Medium Sets",
        description:
          "Rope Extension, also known as Triceps Pushdown with Rope, targets the triceps muscles. It's performed by grasping a rope attachment with palms facing down, then pushing the rope downwards while keeping the upper arms stationary.",
        replacement:
          "A suitable alternative to Rope Extension is the Close Grip Bench Press. This compound exercise not only targets the triceps but also engages the chest and shoulders. It involves using a barbell with a narrow grip, lowering it to the chest and pressing it back up.",
      },
      {
        name: "Barebell Skullcrusher",
        sets: 3,
        reps: 8,
        description:
          "The Barbell Skullcrusher, also known as lying triceps extension, is an isolation exercise targeting the triceps. It's performed by lying on a bench and lowering the barbell towards the forehead, then extending the arms to raise the barbell back to the starting position.",
        replacement:
          "An alternative to the Barbell Skullcrusher is the Dumbbell Skullcrusher. This exercise provides similar benefits while allowing for greater unilateral development of the triceps. It's performed using dumbbells instead of a barbell, which can offer better range of motion and stabilization.",
      },
    ],
  },
  {
    day: "Day 2: Pull",
    exercises: [
      {
        name: "Straight Arm Pulldown",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        description:
          "The Straight Arm Pulldown targets the lats and upper back. It's performed by pulling a cable attachment down with straight arms until the hands reach thigh level, then returning to the starting position.",
        replacement:
          "An alternative to the Straight Arm Pulldown is the Lat Pulldown. This exercise also targets the lats but involves bending the elbows and pulling the bar down to the chest instead of keeping the arms straight.",
      },
      {
        name: "Wide Grip Pulldown",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        description:
          "The Wide Grip Pulldown primarily targets the upper back and lats. It's performed by pulling a wide grip bar down to the chest while keeping the torso upright and elbows pointed outwards.",
        replacement:
          "A suitable alternative to the Wide Grip Pulldown is the Pull-Up. This bodyweight exercise effectively targets the same muscle groups but requires a pull-up bar. It's performed by pulling the body up until the chin reaches or clears the bar, then lowering back down with control.",
      },
      {
        name: "Close Grip Pulldown",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        description:
          "The Close Grip Pulldown targets the middle back and biceps. It's performed by pulling a close grip bar down to the upper chest while keeping the elbows close to the body.",
        replacement:
          "An effective alternative to the Close Grip Pulldown is the Close Grip Seated Row. This exercise also targets the middle back and biceps but involves pulling a close grip handle towards the lower chest while seated and keeping the back straight.",
      },
      {
        name: "BB Row",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        description:
          "The Barbell Row targets the middle back, lats, and biceps. It's performed by bending at the hips and knees, keeping the back flat, and pulling a barbell towards the lower abdomen.",
        replacement:
          "A suitable alternative to the Barbell Row is the T-Bar Row. This exercise also targets the middle back, lats, and biceps but involves using a T-bar machine or landmine attachment instead of a barbell.",
      },
      {
        name: "Seated Cable Row (one arm)",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        description:
          "The Seated Cable Row (one arm) targets the middle back, lats, and biceps. It's performed by sitting upright, pulling a cable handle towards the midsection with one arm at a time, and then returning to the starting position.",
        replacement:
          "An alternative to the Seated Cable Row (one arm) is the Seated Cable Row (both arms). This exercise targets the same muscle groups but involves pulling a cable handle towards the midsection with both arms simultaneously.",
      },
      {
        name: "Rear Delt Fly",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        description:
          "The Rear Delt Fly primarily targets the rear deltoids and upper back. It's performed by sitting on a bench with a slight forward lean, holding dumbbells, and raising the arms to the sides until they reach shoulder level.",
        replacement:
          "A suitable alternative to the Rear Delt Fly is the Reverse Pec Deck Fly. This exercise also targets the rear deltoids and upper back but involves sitting in a pec deck machine and pushing the handles backwards against resistance.",
      },
      {
        name: "Cable BB Curl",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        description:
          "The Cable Barbell Curl targets the biceps. It's performed by attaching a straight bar to a low cable pulley, grabbing the bar with an underhand grip, and curling the bar towards the shoulders while keeping the elbows stationary.",
        replacement:
          "An alternative to the Cable Barbell Curl is the Standing Barbell Curl. This exercise also targets the biceps but involves using a free-weight barbell instead of a cable machine.",
      },
      {
        name: "Cable Hammer Curl",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        description:
          "The Cable Hammer Curl targets the brachialis and brachioradialis muscles of the forearm, as well as the biceps. It's performed by holding cable attachments with a neutral grip and curling them towards the shoulders while keeping the elbows stationary.",
        replacement:
          "A suitable alternative to the Cable Hammer Curl is the Dumbbell Hammer Curl. This exercise also targets the brachialis, brachioradialis, and biceps but involves using dumbbells instead of a cable machine, allowing for greater range of motion and unilateral training.",
      },
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
