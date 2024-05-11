const workoutProgram = [
  {
    day: "Day 1: Push",
    exercises: [
      {
        image1: require("../demonstration/chest/inclineDumbellBenchPress1.jpg"),
        image2: require("../demonstration/chest/inclineDumbellBenchPress2.jpg"),
        name: "Incline Dumbell Bench",
        sets: 4,
        reps: "6-8",
        completed: false,
        tip: "Heavy Sets",
        description:
          "Incline Dumbbell Bench targets the upper chest, an area often lacking in development. This free weight exercise enhances chest aesthetics and strength by isolating the upper pectoral muscles. It also engages stabilizing muscles for improved shoulder and arm strength. Ideal for addressing muscle imbalances, it offers a greater range of motion compared to other chest exercises",
        replacement:
          "The normal Incline Bench Press is a great alternative to the dumbell variant. The only difference is some balance and the posibility to isolate each arm",
      },
      {
        name: "Incline Smith Machine Bench",
        image1: require("../demonstration/chest/inclineSmithBenchPress1.jpg"),
        image2: require("../demonstration/chest/inclineSmithBenchPress2.jpg"),
        sets: 4,
        reps: "10-12",
        completed: false,
        tip: "Medium-Light Sets",
        description:
          "The Incline Smith Machine Bench involves using medium to light weight and focusing on going to failure. This exercise is excellent for isolating the upper pecs and achieving a pump, enhancing muscle engagement during subsequent exercises.",
        replacement:
          "A suitable alternative to the Incline Smith Machine Bench is the standard Incline Bench Press. The primary difference lies in the aspect of balance and the ability to push yourself to complete muscle failure more effectively.",
      },

      {
        name: "Machine Chest Press",
        image1: require("../demonstration/chest/machineChestPress1.jpg"),
        image2: require("../demonstration/chest/machineChestPress2.jpg"),
        sets: 3,
        reps: "8-10",
        completed: false,
        tip: "Medium Sets",
        description:
          "The Machine Chest Press is a resistance exercise that targets the chest muscles using a machine. It's performed by pushing the handles forward until the arms are fully extended and then returning to the starting position.",
        replacement:
          "A suitable alternative to the Machine Chest Press is the standard Bench Press. The primary difference lies in the aspect of balance and the ability to work each arm independently, allowing for more targeted muscle engagement and development.",
      },

      {
        name: "Chest Machine Fly",
        image1: require("../demonstration/chest/chestMachineFly1.jpg"),
        image2: require("../demonstration/chest/chestMachineFly2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Chest Fly Machine involves sitting in the machine and pushing the handles together in a controlled motion, mimicking a fly movement. This exercise effectively isolates the chest muscles.",
        replacement:
          "An effective alternative to the Pec Deck is the Dumbbell Fly. This exercise can be performed lying on a flat bench with dumbbells, allowing for a greater range of motion and increased stabilization work.",
      },
      {
        name: "Seated Lateral Raises",
        image1: require("../demonstration/shoulders/seatedLateralRaises1.jpg"),
        image2: require("../demonstration/shoulders/seatedLateralRaises2.jpg"),
        sets: 4,
        reps: 12,
        tip: "Light Sets",
        completed: false,

        description:
          "Lateral Raises target the lateral deltoids and are performed by raising the arms to the sides until they are parallel to the ground. This exercise helps in strengthening and defining the shoulders.",
        replacement:
          "The Cable Lateral Raises is a great alternative to the normal Lateral Raises. The primary difference is the constant tension provided by the cable throughout the movement, which can enhance muscle activation and growth.",
      },

      {
        name: "Dumbell Shoulder Press",
        image1: require("../demonstration/shoulders/dumbellShoulderPress1.jpg"),
        image2: require("../demonstration/shoulders/dumbellShoulderPress2.jpg"),
        sets: 3,
        reps: 8,
        tip: "Medium-Heavy Sets",
        completed: false,

        description:
          "The Dumbbell Shoulder Press is a compound exercise targeting the shoulders. It's performed by pressing dumbbells overhead while seated or standing, engaging the deltoid muscles.",
        replacement:
          "An effective alternative to the DB Shoulder Press is the Barbell Shoulder Press, also known as the Overhead Press. This exercise utilizes a barbell instead of dumbbells and allows for heavier weights to be lifted, thus promoting strength and muscle growth in the shoulders.",
      },
      {
        name: "Rope Extension",
        image1: require("../demonstration/triceps/tricepRopeExtension1.jpg"),
        image2: require("../demonstration/triceps/tricepRopeExtension2.jpg"),
        sets: 3,
        reps: 12,
        tip: "Medium Sets",
        completed: false,
        description:
          "Rope Extension, also known as Triceps Pushdown with Rope, targets the triceps muscles. It's performed by grasping a rope attachment with palms facing down, then pushing the rope downwards while keeping the upper arms stationary.",
        replacement:
          "A suitable alternative to Rope Extension is the Close Grip Bench Press. This compound exercise not only targets the triceps but also engages the chest and shoulders. It involves using a barbell with a narrow grip, lowering it to the chest and pressing it back up.",
      },
      {
        name: "Barebell Skullcrusher",
        image1: require("../demonstration/triceps/tricepBarebellSkullcrusher1.jpg"),
        image2: require("../demonstration/triceps/tricepBarebellSkullcrusher2.jpg"),
        sets: 3,
        tip: "Medium Sets",
        reps: 8,
        completed: false,
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
        image1: require("../demonstration/back/straightArmPulldown1.jpg"),
        image2: require("../demonstration/back/straightArmPulldown2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Straight Arm Pulldown targets the lats and upper back. It's performed by pulling a cable attachment down with straight arms until the hands reach thigh level, then returning to the starting position.",
        replacement:
          "An alternative to the Straight Arm Pulldown is the Lat Pulldown. This exercise also targets the lats but involves bending the elbows and pulling the bar down to the chest instead of keeping the arms straight.",
      },
      {
        name: "Pullups",
        image1: require("../demonstration/back/pullups1.jpg"),
        image2: require("../demonstration/back/pullups2.jpg"),
        sets: 3,
        reps: 8,
        tip: "Do as many as you can each set",
        completed: false,
        description:
          "The Wide Grip Pulldown primarily targets the upper back and lats. It's performed by pulling a wide grip bar down to the chest while keeping the torso upright and elbows pointed outwards.",
        replacement:
          "A suitable alternative to the Pull-Ups is the Wide Grip Pulldown. This exercise effectively targets the same muscle groups but requires a machine. It's performed by pulling the body up until the chin reaches or clears the bar, then lowering back down with control.",
      },
      {
        name: "Wide Grip Pulldown",
        image1: require("../demonstration/back/widegripPulldown1.jpg"),
        image2: require("../demonstration/back/widegripPulldown2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Wide Grip Pulldown primarily targets the upper back and lats. It's performed by pulling a wide grip bar down to the chest while keeping the torso upright and elbows pointed outwards.",
        replacement:
          "A suitable alternative to the Wide Grip Pulldown is the Pull-Up. This bodyweight exercise effectively targets the same muscle groups but requires a pull-up bar. It's performed by pulling the body up until the chin reaches or clears the bar, then lowering back down with control.",
      },
      {
        name: "Close Grip Pulldown",
        image1: require("../demonstration/back/closeGripPulldown1.jpg"),
        image2: require("../demonstration/back/closeGripPulldown2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Close Grip Pulldown targets the middle back and biceps. It's performed by pulling a close grip bar down to the upper chest while keeping the elbows close to the body.",
        replacement:
          "An effective alternative to the Close Grip Pulldown is the Close Grip Seated Row. This exercise also targets the middle back and biceps but involves pulling a close grip handle towards the lower chest while seated and keeping the back straight.",
      },
      {
        name: "BB Row",
        image1: require("../demonstration/back/bbRow1.jpg"),
        image2: require("../demonstration/back/bbRow2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Barbell Row targets the middle back, lats, and biceps. It's performed by bending at the hips and knees, keeping the back flat, and pulling a barbell towards the lower abdomen.",
        replacement:
          "A suitable alternative to the Barbell Row is the T-Bar Row. This exercise also targets the middle back, lats, and biceps but involves using a T-bar machine or landmine attachment instead of a barbell.",
      },
      {
        name: "Seated Cable Row",
        image1: require("../demonstration/back/seatedCableRow1.jpg"),
        image2: require("../demonstration/back/seatedCableRow2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Seated Cable Row targets the middle back, lats, and biceps. It's performed by sitting upright, pulling a cable handle towards the midsection with both arms, and then returning to the starting position.",
        replacement:
          "An alternative to the Seated Cable Row is the Seated Row Machine. This exercise targets the same muscle groups but involves pulling a cable handle towards the midsection with both arms simultaneously.",
      },
      {
        name: "Rear Delt Fly",
        image1: require("../demonstration/back/rearDeltFly1.jpg"),
        image2: require("../demonstration/back/rearDeltFly2.jpg"),
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,
        description:
          "The Rear Delt Fly primarily targets the rear deltoids and upper back. It's performed by sitting on a bench with a slight forward lean, holding dumbbells, and raising the arms to the sides until they reach shoulder level.",
        replacement:
          "A suitable alternative to the Rear Delt Fly is the Reverse Pec Deck Fly. This exercise also targets the rear deltoids and upper back but involves sitting in a pec deck machine and pushing the handles backwards against resistance.",
      },
      {
        name: "Cable Barebell Curl",
        image1: require("../demonstration/biceps/cableBBCurl1.jpg"),
        image2: require("../demonstration/biceps/cableBBCurl2.jpg"),
        sets: 3,
        reps: 9,
        tip: "Medium-Heavy Sets",
        completed: false,
        description:
          "The Cable Barbell Curl targets the biceps. It's performed by attaching a straight bar to a low cable pulley, grabbing the bar with an underhand grip, and curling the bar towards the shoulders while keeping the elbows stationary.",
        replacement:
          "An alternative to the Cable Barbell Curl is the Standing Barbell Curl. This exercise also targets the biceps but involves using a free-weight barbell instead of a cable machine.",
      },
      {
        name: "Cable Hammer Curl",
        image1: require("../demonstration/biceps/cableHammerCurl1.jpg"),
        image2: require("../demonstration/biceps/cableHammerCurl2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

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
      {
        name: "Leg Extension",
        image1: require("../demonstration/legs/legExtension1.jpg"),
        image2: require("../demonstration/legs/legExtension2.jpg"),
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,
        description:
          "The Leg Extension primarily targets the quadriceps. It's performed by extending the legs against resistance while seated, effectively isolating the quadriceps muscles.",
        replacement:
          "A suitable alternative to the Leg Extension is the Bulgarian Split Squat. This exercise also targets the quadriceps but involves performing a split squat movement with one leg elevated behind you on a bench or platform.",
      },
      {
        name: "Barebell Squat",
        image1: require("../demonstration/legs/barebellSquats1.jpg"),
        image2: require("../demonstration/legs/barebellSquats2.jpg"),
        sets: 4,
        reps: 8,
        tip: "Heavy Sets\n\nWarning\nGoing too deep may hurt your lower back",
        completed: false,
        description:
          "The Barbell Squat is a compound exercise that targets the quadriceps, hamstrings, glutes, and lower back. It's performed by squatting down while holding a barbell across the upper back and then standing back up.",
        replacement:
          "An alternative to the Barbell Squat is the Goblet Squat. This exercise also targets the quadriceps, hamstrings, and glutes but involves holding a single dumbbell or kettlebell in front of your chest while squatting.",
      },
      {
        name: "Leg Press",
        image1: require("../demonstration/legs/legPress1.jpg"),
        image2: require("../demonstration/legs/legPress2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Heavy Sets\n\nWarning\nDo not over-straighten your legs",
        completed: false,
        description:
          "The Hack Squat targets the quadriceps, hamstrings, and glutes. It's performed by squatting down on a machine with a platform angled behind you and then pushing the platform upwards.",
        replacement:
          "A suitable alternative to the Hack Squat is the Front Squat. This exercise also targets the quadriceps, hamstrings, and glutes but involves holding a barbell in front of your shoulders while squatting.",
      },
      {
        name: "Seated Hamstring Curl",
        image1: require("../demonstration/legs/seatedLegCurl1.jpg"),
        image2: require("../demonstration/legs/seatedLegCurl2.jpg"),
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,
        description:
          "Walking Lunges target the quadriceps, hamstrings, glutes, and calves. They're performed by taking a step forward with one leg, lowering the body until both knees are bent at 90-degree angles, and then stepping forward with the other leg.",
        replacement:
          "An alternative to Walking Lunges is the Reverse Lunge. This exercise also targets the quadriceps, hamstrings, glutes, and calves but involves stepping backward into a lunge instead of forward.",
      },
      {
        name: "Seated Calf Raise",
        image1: require("../demonstration/legs/seatedCalfRaise1.jpg"),
        image2: require("../demonstration/legs/seatedCalfRaise2.jpg"),
        sets: 4,
        reps: 15,
        tip: "Light Sets",
        completed: false,

        description:
          "The Seated Calf Raise primarily targets the calf muscles. It's performed by sitting on a calf raise machine, placing the balls of the feet on the platform, and then lifting the heels as high as possible.",
        replacement:
          "A suitable alternative to the Seated Calf Raise is the Standing Calf Raise. This exercise also targets the calf muscles but involves standing upright and lifting the heels while holding onto a stable support for balance.",
      },
    ],
  },

  {
    day: "Day 4: Chest & Back",
    exercises: [
      {
        name: "Incline Barebell Bench",
        image1: require("../demonstration/chest/inclineBBBench1.jpg"),
        image2: require("../demonstration/chest/inclineBBBench2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Incline Barbell Bench Press targets the upper chest, shoulders, and triceps. It's performed by lying on an incline bench with a barbell and pressing the weight upwards until the arms are fully extended.",
        replacement:
          "A suitable alternative to the Incline Barbell Bench Press is the Incline Dumbbell Bench Press. This exercise also targets the upper chest but involves using dumbbells instead of a barbell, allowing for greater range of motion and muscle activation.",
      },
      {
        name: "Flat Dumbell Bench",
        image1: require("../demonstration/chest/flatBBBench1.jpg"),
        image2: require("../demonstration/chest/flatBBBench2.jpg"),
        sets: 3,
        reps: 8,
        tip: "Heavy Sets",
        completed: false,
        description:
          "The Flat Dumbbell Bench Press targets the chest, shoulders, and triceps. It's performed by lying on a flat bench with dumbbells and pressing them upwards until the arms are fully extended.",
        replacement:
          "An alternative to the Flat Dumbbell Bench Press is the Barbell Bench Press. This exercise also targets the chest, shoulders, and triceps but involves using a barbell instead of dumbbells.",
      },
      {
        name: "Incline Smith Machine Press",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,
        description:
          "Cable Flys (low to high) target the chest muscles. They're performed by standing in front of a cable machine with the pulleys set at the lowest position, and then bringing the handles up and together in a wide arc motion.",
        replacement:
          "A suitable alternative to Cable Flys (low to high) is the Pec Deck machine. This exercise also targets the chest muscles but involves sitting in a machine and bringing the handles together in front of the chest.",
      },
      {
        name: "Straight Arm Pulldown",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Straight Arm Pulldown targets the lats and upper back. It's performed by pulling a cable attachment down with straight arms until the hands reach thigh level, then returning to the starting position.",
        replacement:
          "An alternative to the Straight Arm Pulldown is the Lat Pulldown. This exercise also targets the lats but involves bending the elbows and pulling the bar down to the chest instead of keeping the arms straight.",
      },
      {
        name: "Barebell Row",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Barbell Row targets the middle back, lats, and biceps. It's performed by bending at the hips and knees, keeping the back flat, and pulling a barbell towards the lower abdomen.",
        replacement:
          "A suitable alternative to the Barbell Row is the T-Bar Row. This exercise also targets the middle back, lats, and biceps but involves using a T-bar machine or landmine attachment instead of a barbell.",
      },
      {
        name: "Low Row",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Low Row targets the middle back, lats, and biceps. It's performed by sitting at a low row machine, grabbing the handles, and pulling them towards the lower abdomen while keeping the back straight.",
        replacement:
          "An alternative to the Low Row is the Seated Cable Row. This exercise also targets the middle back, lats, and biceps but involves sitting on a bench and pulling a cable handle towards the midsection.",
      },
    ],
  },
  {
    day: "Day 5: Delts & Arms",
    exercises: [
      {
        name: "BB Shoulder Press",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Barbell Shoulder Press is a compound exercise targeting the shoulders. It's performed by pressing a barbell overhead while standing or seated, engaging the deltoid muscles.",
        replacement:
          "An alternative to the Barbell Shoulder Press is the Dumbbell Shoulder Press. This exercise also targets the shoulders but involves using dumbbells instead of a barbell, allowing for greater range of motion and unilateral training.",
      },
      {
        name: "Upright Rows",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,

        description:
          "Upright Rows target the shoulders and upper traps. They're performed by holding a barbell with an overhand grip and pulling it up towards the chin, keeping the elbows higher than the wrists.",
        replacement:
          "A suitable alternative to Upright Rows is the Lateral Raise. This exercise also targets the shoulders but involves raising dumbbells to the sides until they reach shoulder height, maintaining a slight bend in the elbows throughout.",
      },
      {
        name: "Rear Delt Fly (DB)",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,

        description:
          "The Rear Delt Fly with Dumbbells targets the rear deltoids and upper back. It's performed by bending at the hips, keeping the back flat, and raising dumbbells to the sides until they reach shoulder height.",
        replacement:
          "An alternative to the Rear Delt Fly with Dumbbells is the Face Pull. This exercise also targets the rear deltoids and upper back but involves pulling a rope attachment towards the face while keeping the elbows high and wide.",
      },
      {
        name: "BB Curl",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Barbell Curl targets the biceps. It's performed by holding a barbell with an underhand grip and curling it upwards towards the shoulders while keeping the elbows close to the body.",
        replacement:
          "An alternative to the Barbell Curl is the Alternating Dumbbell Curl. This exercise also targets the biceps but involves curling dumbbells alternately towards the shoulders while keeping the elbows close to the body.",
      },
      {
        name: "Close Grip Bench",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "Close Grip Bench Press targets the triceps. It's performed by gripping the barbell with hands closer than shoulder-width apart and lowering it to the lower chest before pressing it back up.",
        replacement:
          "A suitable alternative to the Close Grip Bench Press is the Tricep Dip. This bodyweight exercise also targets the triceps but involves lowering the body by bending the elbows and then pressing back up.",
      },
      {
        name: "Incline DB Curl",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Incline Dumbbell Curl targets the biceps. It's performed by lying on an incline bench and curling dumbbells upwards towards the shoulders while keeping the elbows stationary.",
        replacement:
          "An alternative to the Incline Dumbbell Curl is the Preacher Curl. This exercise also targets the biceps but involves using a preacher bench and curling a barbell or dumbbells with full range of motion.",
      },
      {
        name: "Straight Bar Extension",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,

        description:
          "The Straight Bar Extension targets the triceps. It's performed by holding a straight bar overhead with arms fully extended and then bending the elbows to lower the bar behind the head before extending them back to the starting position.",
        replacement:
          "A suitable alternative to the Straight Bar Extension is the Overhead Tricep Extension with Dumbbell. This exercise also targets the triceps but involves holding a dumbbell with both hands and extending it overhead while keeping the elbows close to the head.",
      },
    ],
  },
  {
    day: "Day 6: Legs",
    exercises: [
      {
        name: "Deadlift",
        sets: 4,
        reps: 8,
        tip: "Heavy Sets",
        completed: false,

        description:
          "The Deadlift is a compound exercise that targets multiple muscle groups including the hamstrings, glutes, lower back, and traps. It's performed by lifting a barbell from the floor to a standing position, keeping the back straight and knees slightly bent.",
        replacement:
          "A suitable alternative to the Deadlift is the Romanian Deadlift. This exercise also targets the hamstrings and lower back but involves keeping the legs straight with a slight bend in the knees and focusing on hip hinge movement.",
      },
      {
        name: "Leg Curl",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,

        description:
          "The Leg Curl targets the hamstrings. It's performed by lying face down on a leg curl machine and curling the legs towards the buttocks against resistance.",
        replacement:
          "An alternative to the Leg Curl is the Swiss Ball Hamstring Curl. This exercise also targets the hamstrings but involves lying on your back with your feet on a Swiss ball and curling the ball towards your buttocks.",
      },
      {
        name: "DB RDL",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Dumbbell Romanian Deadlift targets the hamstrings and lower back. It's performed by holding dumbbells in front of the thighs, bending at the hips while keeping the back straight, and lowering the dumbbells towards the floor.",
        replacement:
          "A suitable alternative to the Dumbbell Romanian Deadlift is the Barbell Hip Thrust. This exercise also targets the hamstrings and glutes but involves sitting on the floor with a barbell across the hips and thrusting the hips upwards.",
      },
      {
        name: "Leg Press",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Leg Press targets the quadriceps, hamstrings, and glutes. It's performed by pushing a weighted platform away from the body using the legs while seated on a leg press machine.",
        replacement:
          "An alternative to the Leg Press is the Bulgarian Split Squat. This exercise also targets the quadriceps, hamstrings, and glutes but involves performing a split squat movement with one leg elevated behind you on a bench or platform.",
      },
      {
        name: "Standing Calf Raise",
        sets: 4,
        reps: 15,
        tip: "Light Sets",
        completed: false,

        description:
          "The Standing Calf Raise primarily targets the calf muscles. It's performed by standing on a raised platform with the heels hanging off the edge and then lifting the heels as high as possible.",
        replacement:
          "A suitable alternative to the Standing Calf Raise is the Seated Calf Raise. This exercise also targets the calf muscles but involves sitting on a calf raise machine and lifting the weight with the balls of the feet.",
      },
    ],
  },
  {
    day: "Day 7: Rest",
    exercises: [
      {
        name: "Rest Day",
        sets: null,
        reps: null,
        completed: false,
        description: "",
        replacement: "",
      },
    ],
  },
  {
    day: "Day 8: Push",
    exercises: [
      {
        name: "Pec Deck",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Pec Deck machine targets the chest muscles. It's performed by sitting in the machine and bringing the handles together in front of the chest in a controlled motion.",
        replacement:
          "An effective alternative to the Pec Deck machine is the Cable Crossover. This exercise also targets the chest muscles but involves standing in front of cable pulleys and crossing the hands over the body in a fly motion.",
      },
      {
        name: "Flat BB Bench",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Flat Barbell Bench Press is a compound exercise targeting the chest, shoulders, and triceps. It's performed by lying on a flat bench with a barbell and pressing it upwards until the arms are fully extended.",
        replacement:
          "An alternative to the Flat Barbell Bench Press is the Dumbbell Bench Press. This exercise also targets the chest, shoulders, and triceps but involves using dumbbells instead of a barbell, allowing for greater range of motion and muscle activation.",
      },
      {
        name: "Flat DB Bench",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Flat Dumbbell Bench Press targets the chest, shoulders, and triceps. It's performed by lying on a flat bench with dumbbells and pressing them upwards until the arms are fully extended.",
        replacement:
          "A suitable alternative to the Flat Dumbbell Bench Press is the Barbell Bench Press. This exercise also targets the chest, shoulders, and triceps but involves using a barbell instead of dumbbells.",
      },
      {
        name: "Lateral Raises",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,

        description:
          "Lateral Raises target the lateral deltoids and are performed by raising the arms to the sides until they are parallel to the ground. This exercise helps in strengthening and defining the shoulders.",
        replacement:
          "The Cable Lateral Raises is a great alternative to the normal Lateral Raises. The primary difference is the constant tension provided by the cable throughout the movement, which can enhance muscle activation and growth.",
      },
      {
        name: "DB Shoulder Press",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Dumbbell Shoulder Press is a compound exercise targeting the shoulders. It's performed by pressing dumbbells overhead while seated or standing, engaging the deltoid muscles.",
        replacement:
          "An effective alternative to the DB Shoulder Press is the Barbell Shoulder Press, also known as the Overhead Press. This exercise utilizes a barbell instead of dumbbells and allows for heavier weights to be lifted, thus promoting strength and muscle growth in the shoulders.",
      },
      {
        name: "Rope Extension",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,

        description:
          "Rope Extension, also known as Triceps Pushdown with Rope, targets the triceps muscles. It's performed by grasping a rope attachment with palms facing down, then pushing the rope downwards while keeping the upper arms stationary.",
        replacement:
          "A suitable alternative to Rope Extension is the Close Grip Bench Press. This compound exercise not only targets the triceps but also engages the chest and shoulders. It involves using a barbell with a narrow grip, lowering it to the chest and pressing it back up.",
      },
      {
        name: "BB Skullcrusher",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Barbell Skullcrusher, also known as lying triceps extension, is an isolation exercise targeting the triceps. It's performed by lying on a bench and lowering the barbell towards the forehead, then extending the arms to raise the barbell back to the starting position.",
        replacement:
          "An alternative to the Barbell Skullcrusher is the Dumbbell Skullcrusher. This exercise provides similar benefits while allowing for greater unilateral development of the triceps. It's performed using dumbbells instead of a barbell, which can offer better range of motion and stabilization.",
      },
    ],
  },
  {
    day: "Day 9: Pull",
    exercises: [
      {
        name: "BB Row",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Barbell Row targets the middle back, lats, and biceps. It's performed by bending at the hips and knees, keeping the back flat, and pulling a barbell towards the lower abdomen.",
        replacement:
          "A suitable alternative to the Barbell Row is the T-Bar Row. This exercise also targets the middle back, lats, and biceps but involves using a T-bar machine or landmine attachment instead of a barbell.",
      },
      {
        name: "Straight Arm Pulldown",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,

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
        completed: false,

        description:
          "The Wide Grip Pulldown primarily targets the lats. It's performed by sitting at a pulldown machine with a wide grip on the bar and pulling it down towards the chest, then returning to the starting position.",
        replacement:
          "An effective alternative to the Wide Grip Pulldown is the Pull-Up. This bodyweight exercise also targets the lats but involves pulling the body up to a bar instead of pulling a bar down.",
      },
      {
        name: "Seated Cable Row (close)",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Seated Cable Row targets the middle back, lats, and biceps. It's performed by sitting at a cable row machine with a close grip on the handles and pulling them towards the abdomen, then returning to the starting position.",
        replacement:
          "An alternative to the Seated Cable Row is the Bent-Over Barbell Row. This exercise also targets the middle back, lats, and biceps but involves bending at the hips with a barbell in hand and pulling it towards the lower abdomen.",
      },
      {
        name: "Cable Rear Delt Fly",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,

        description:
          "The Cable Rear Delt Fly targets the rear deltoids and upper back. It's performed by pulling the cables out to the sides while keeping the arms straight and squeezing the shoulder blades together, then returning to the starting position.",
        replacement:
          "An effective alternative to the Cable Rear Delt Fly is the Reverse Pec Deck Fly. This machine exercise also targets the rear deltoids and upper back but involves sitting facing the machine and pulling the handles towards each other behind the body.",
      },
      {
        name: "Cable BB Curl",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Cable Barbell Curl targets the biceps. It's performed by attaching a straight bar to a low pulley cable, grasping the bar with an underhand grip, and curling it towards the shoulders while keeping the elbows stationary.",
        replacement:
          "An alternative to the Cable Barbell Curl is the Standing Barbell Curl. This exercise also targets the biceps but involves using a free-weight barbell instead of a cable machine.",
      },
      {
        name: "Cable Hammer Curl",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Cable Hammer Curl targets the brachialis and brachioradialis muscles of the forearm, along with the biceps. It's performed by grasping cable attachments with a neutral grip and curling them towards the shoulders while keeping the elbows stationary.",
        replacement:
          "An effective alternative to the Cable Hammer Curl is the Dumbbell Hammer Curl. This exercise also targets the brachialis, brachioradialis, and biceps but involves using dumbbells instead of a cable machine, allowing for greater range of motion and muscle activation.",
      },
    ],
  },

  {
    day: "Day 10: Legs",
    exercises: [
      {
        name: "Leg Extension",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,

        description:
          "The Leg Extension primarily targets the quadriceps. It's performed by extending the legs against resistance while seated, effectively isolating the quadriceps muscles.",
        replacement:
          "A suitable alternative to the Leg Extension is the Bulgarian Split Squat. This exercise also targets the quadriceps but involves performing a split squat movement with one leg elevated behind you on a bench or platform.",
      },
      {
        name: "BB Squat",
        sets: 4,
        reps: 8,
        tip: "Heavy Sets",
        completed: false,

        description:
          "The Barbell Squat is a compound exercise targeting the quadriceps, hamstrings, glutes, and lower back. It's performed by squatting down while holding a barbell on the shoulders, then standing back up.",
        replacement:
          "An alternative to the Barbell Squat is the Goblet Squat. This exercise also targets the quadriceps, hamstrings, glutes, and lower back but involves holding a single dumbbell or kettlebell in front of the chest while squatting.",
      },
      {
        name: "Hack Squat",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Hack Squat machine targets the quadriceps, hamstrings, and glutes. It's performed by standing on a platform and pushing a weighted sled upwards at a 45-degree angle.",
        replacement:
          "An effective alternative to the Hack Squat machine is the Dumbbell Step-Up. This exercise also targets the quadriceps, hamstrings, and glutes but involves stepping onto a platform with dumbbells in hand.",
      },
      {
        name: "Walking Lunges",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,

        description:
          "Walking Lunges target the quadriceps, hamstrings, glutes, and calves. They're performed by taking a large step forward, lowering the body until the rear knee nearly touches the ground, then pushing back up and stepping forward with the opposite leg.",
        replacement:
          "A suitable alternative to Walking Lunges is the Reverse Lunge. This exercise also targets the quadriceps, hamstrings, glutes, and calves but involves stepping backward instead of forward.",
      },
      {
        name: "Seated Calf Raise",
        sets: 4,
        reps: 15,
        tip: "Light Sets",
        completed: false,

        description:
          "The Seated Calf Raise targets the calf muscles. It's performed by sitting at a calf raise machine with the knees bent and lifting the weight by extending the ankles, then lowering the weight back down.",
        replacement:
          "An alternative to the Seated Calf Raise is the Standing Calf Raise. This exercise also targets the calf muscles but involves standing instead of sitting and lifting the body by extending the ankles while holding onto a bar or railing for support.",
      },
    ],
  },

  {
    day: "Day 11: Chest & Back",
    exercises: [
      {
        name: "Incline BB Bench",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Incline Barbell Bench Press targets the upper chest, shoulders, and triceps. It's performed by lying on an incline bench with a barbell and pressing the weight upwards until the arms are fully extended.",
        replacement:
          "A suitable alternative to the Incline Barbell Bench Press is the Incline Dumbbell Bench Press. This exercise also targets the upper chest but involves using dumbbells instead of a barbell, allowing for greater range of motion and muscle activation.",
      },
      {
        name: "Flat DB Bench",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Flat Dumbbell Bench Press targets the chest, shoulders, and triceps. It's performed by lying on a flat bench with dumbbells and pressing them upwards until the arms are fully extended.",
        replacement:
          "A suitable alternative to the Flat Dumbbell Bench Press is the Barbell Bench Press. This exercise also targets the chest, shoulders, and triceps but involves using a barbell instead of dumbbells.",
      },
      {
        name: "Cable Flys (low to high)",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,

        description:
          "Cable Flys (low to high) target the chest muscles. They're performed by standing between two high pulleys with cables attached, then bringing the hands together in a fly motion from a low position to a high position in front of the body.",
        replacement:
          "An alternative to Cable Flys (low to high) is the Dumbbell Fly. This exercise also targets the chest muscles but involves lying on a flat bench with dumbbells and bringing them together in a fly motion.",
      },
      {
        name: "Straight Arm Pulldown",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Straight Arm Pulldown targets the lats and upper back. It's performed by pulling a cable attachment down with straight arms until the hands reach thigh level, then returning to the starting position.",
        replacement:
          "An alternative to the Straight Arm Pulldown is the Lat Pulldown. This exercise also targets the lats but involves bending the elbows and pulling the bar down to the chest instead of keeping the arms straight.",
      },
      {
        name: "BB Row",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Barbell Row targets the middle back, lats, and biceps. It's performed by bending at the hips and knees, keeping the back flat, and pulling a barbell towards the lower abdomen.",
        replacement:
          "A suitable alternative to the Barbell Row is the T-Bar Row. This exercise also targets the middle back, lats, and biceps but involves using a T-bar machine or landmine attachment instead of a barbell.",
      },
      {
        name: "Low Row",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Low Row targets the middle back, lats, and biceps. It's performed by sitting at a cable row machine with a low pulley, grasping the handles, and pulling them towards the abdomen, then returning to the starting position.",
        replacement:
          "An alternative to the Low Row is the Seated Cable Row. This exercise also targets the middle back, lats, and biceps but involves sitting upright with a close grip on the handles and pulling them towards the lower abdomen.",
      },
    ],
  },

  {
    day: "Day 12: Delts & Arms",
    exercises: [
      {
        name: "BB Shoulder Press",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Barbell Shoulder Press is a compound exercise targeting the shoulders. It's performed by pressing a barbell overhead while seated or standing, engaging the deltoid muscles.",
        replacement:
          "An effective alternative to the Barbell Shoulder Press is the Dumbbell Shoulder Press. This exercise also targets the shoulders but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
      {
        name: "Upright Rows",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,

        description:
          "Upright Rows primarily target the shoulders and upper traps. They're performed by holding a barbell with an overhand grip and lifting it upwards towards the chin, keeping the elbows higher than the forearms.",
        replacement:
          "An alternative to Upright Rows is the Lateral Raise. This exercise also targets the shoulders but involves lifting dumbbells or cables out to the sides instead of pulling a barbell upwards.",
      },
      {
        name: "Rear Delt Fly (DB)",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,

        description:
          "The Rear Delt Fly with Dumbbells targets the rear deltoids and upper back. It's performed by bending forward at the hips with dumbbells in hand and lifting them out to the sides, squeezing the shoulder blades together.",
        replacement:
          "An effective alternative to the Rear Delt Fly with Dumbbells is the Reverse Pec Deck Fly. This machine exercise also targets the rear deltoids and upper back but involves sitting facing the machine and pulling the handles towards each other behind the body.",
      },
      {
        name: "BB Curl",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Barbell Curl primarily targets the biceps. It's performed by holding a barbell with an underhand grip and curling it towards the shoulders while keeping the elbows stationary.",
        replacement:
          "An alternative to the Barbell Curl is the Dumbbell Curl. This exercise also targets the biceps but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
      {
        name: "Close Grip Bench",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "Close Grip Bench Press primarily targets the triceps. It's performed by gripping the barbell with hands closer than shoulder-width apart and lowering it to the chest before pushing it back up.",
        replacement:
          "An effective alternative to the Close Grip Bench Press is the Tricep Dip. This bodyweight exercise also targets the triceps but involves dipping down and pushing back up using a dip bar or parallel bars.",
      },
      {
        name: "Incline DB Curl",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Incline Dumbbell Curl targets the biceps. It's performed by lying on an incline bench and curling dumbbells upwards while keeping the elbows stationary.",
        replacement:
          "An alternative to the Incline Dumbbell Curl is the Preacher Curl. This exercise also targets the biceps but involves sitting at a preacher curl bench with arms resting on the pad and curling a barbell or dumbbells.",
      },
      {
        name: "Straight Bar Extension",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,

        description:
          "Straight Bar Extension targets the triceps. It's performed by holding a straight bar with an overhand grip and lowering it behind the head, then extending the arms to raise the bar back up.",
        replacement:
          "An alternative to the Straight Bar Extension is the Rope Tricep Pushdown. This exercise also targets the triceps but involves using a rope attachment on a cable machine, allowing for a different grip and range of motion.",
      },
    ],
  },

  {
    day: "Day 13: Legs",
    exercises: [
      {
        name: "Deadlift",
        sets: 4,
        reps: 8,
        tip: "Heavy Sets",
        completed: false,
        description:
          "The Deadlift is a compound exercise targeting the posterior chain, including the hamstrings, glutes, and lower back. It's performed by lifting a loaded barbell or weights from the ground to a standing position.",
        replacement:
          "An alternative to the Deadlift is the Romanian Deadlift (RDL). This variation also targets the hamstrings and lower back but involves a greater emphasis on hip hinge movement.",
      },
      {
        name: "Leg Curl",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,
        description:
          "The Leg Curl is an isolation exercise targeting the hamstrings. It's performed by curling the legs towards the glutes while lying face down on a leg curl machine.",
        replacement:
          "An alternative to the Leg Curl is the Swiss Ball Hamstring Curl. This bodyweight exercise also targets the hamstrings but involves lying on your back with feet on a Swiss ball and curling the ball towards your glutes.",
      },
      {
        name: "DB RDL",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Dumbbell Romanian Deadlift (DB RDL) targets the hamstrings and lower back. It's performed by holding dumbbells in front of the thighs and hinging at the hips to lower the weights towards the ground while keeping the back straight.",
        replacement:
          "An alternative to the Dumbbell Romanian Deadlift is the Kettlebell Swing. This dynamic exercise targets the posterior chain and involves swinging a kettlebell between the legs and up to chest height.",
      },
      {
        name: "Leg Press",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Leg Press primarily targets the quadriceps, but it also works the glutes and hamstrings. It's performed by pushing a weighted platform away from the body using the legs while seated on a leg press machine.",
        replacement:
          "An alternative to the Leg Press is the Goblet Squat. This exercise also targets the quadriceps, glutes, and hamstrings but involves holding a kettlebell or dumbbell at chest height and performing a squat.",
      },
      {
        name: "Standing Calf Raise",
        sets: 4,
        reps: 15,
        tip: "Light Sets",
        completed: false,
        description:
          "The Standing Calf Raise targets the calf muscles (gastrocnemius and soleus). It's performed by standing on a calf raise machine or raised platform and lifting the heels as high as possible.",
        replacement:
          "An alternative to the Standing Calf Raise is the Seated Calf Raise. This exercise also targets the calf muscles but involves sitting on a bench with knees bent and lifting a weight by pushing against a lever with the feet.",
      },
    ],
  },
  {
    day: "Day 14: Rest",
    exercises: [{ name: "Rest Day", sets: null, reps: null, completed: false }],
  },
  {
    day: "Day 15: Push",
    exercises: [
      {
        name: "Pec Deck",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Pec Deck machine targets the chest muscles (pectoralis major). It's performed by sitting and pressing the handles together in front of the chest against resistance.",
        replacement:
          "An alternative to the Pec Deck machine is the Cable Crossover. This exercise also targets the chest but involves pulling cables across the body from high to low or vice versa.",
      },
      {
        name: "Flat BB Bench",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Flat Barbell Bench Press is a compound exercise targeting the chest, shoulders, and triceps. It's performed by lying on a flat bench and pressing a barbell upwards from the chest.",
        replacement:
          "An alternative to the Flat Barbell Bench Press is the Flat Dumbbell Bench Press. This exercise also targets the chest but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
      {
        name: "Flat DB Bench",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Flat Dumbbell Bench Press targets the chest, shoulders, and triceps. It's performed by lying on a flat bench and pressing dumbbells upwards from the chest.",
        replacement:
          "An alternative to the Flat Dumbbell Bench Press is the Machine Chest Press. This exercise also targets the chest but involves using a chest press machine, providing more stability and control.",
      },
      {
        name: "Lateral Raises",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,
        description:
          "Lateral Raises target the lateral deltoids (side shoulder muscles). They're performed by holding dumbbells at the sides and raising them out to the sides until they reach shoulder height.",
        replacement:
          "An alternative to Lateral Raises is the Cable Lateral Raise. This exercise also targets the lateral deltoids but involves using cables instead of dumbbells, providing constant tension throughout the movement.",
      },
      {
        name: "DB Shoulder Press",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Dumbbell Shoulder Press is a compound exercise targeting the shoulders. It's performed by pressing dumbbells overhead while seated or standing, engaging the deltoid muscles.",
        replacement:
          "An alternative to the Dumbbell Shoulder Press is the Military Press. This exercise also targets the shoulders but involves using a barbell instead of dumbbells, allowing for heavier lifting.",
      },
      {
        name: "Rope Extension",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,
        description:
          "Rope Tricep Extension targets the triceps. It's performed by holding rope handles overhead and extending the arms downwards by contracting the triceps.",
        replacement:
          "An alternative to Rope Tricep Extension is the Overhead Tricep Extension with a Dumbbell. This exercise also targets the triceps but involves holding a dumbbell with both hands overhead and lowering it behind the head.",
      },
      {
        name: "BB Skullcrusher",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "Barbell Skull Crushers, also known as Lying Tricep Extensions, target the triceps. They're performed by lying on a bench and lowering a barbell towards the forehead while keeping the upper arms stationary.",
        replacement:
          "An alternative to Barbell Skull Crushers is the Dumbbell Skull Crusher. This exercise also targets the triceps but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
    ],
  },
  {
    day: "Day 16: Pull",
    exercises: [
      {
        name: "BB Row",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "Barbell Rows target the upper back, lats, and biceps. They're performed by bending at the hips with a barbell in hand and pulling it towards the abdomen while keeping the back straight.",
        replacement:
          "An alternative to Barbell Rows is the T-Bar Row. This exercise also targets the upper back and lats but involves using a T-Bar row machine, providing more stability and control.",
      },
      {
        name: "Straight Arm Pulldown",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,
        description:
          "Straight Arm Pulldowns target the lats and upper back. They're performed by standing with arms extended overhead and pulling a cable attachment downwards towards the thighs while keeping the arms straight.",
        replacement:
          "An alternative to Straight Arm Pulldowns is the Lat Pulldown. This exercise also targets the lats but involves using a wide grip attachment and pulling the bar down towards the chest while seated.",
      },
      {
        name: "Wide Grip Pulldown",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "Wide Grip Pulldowns primarily target the lats. They're performed by sitting at a lat pulldown machine with a wide grip on the bar and pulling it down towards the chest.",
        replacement:
          "An alternative to Wide Grip Pulldowns is the Pull-Up. This bodyweight exercise also targets the lats but involves pulling the body upwards using an overhead bar.",
      },
      {
        name: "Seated Cable Row (close)",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "Seated Cable Rows target the upper back, lats, and biceps. They're performed by sitting at a cable row machine with feet braced and pulling the handles towards the abdomen while keeping the back straight.",
        replacement:
          "An alternative to Seated Cable Rows is the Bent Over Barbell Row. This exercise also targets the upper back and lats but involves bending forward at the hips with a barbell in hand and pulling it towards the abdomen.",
      },
      {
        name: "Cable Rear Delt Fly",
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,
        description:
          "Cable Rear Delt Flyes target the rear deltoids and upper back. They're performed by standing with cables in hand and pulling them out to the sides while keeping the arms straight.",
        replacement:
          "An alternative to Cable Rear Delt Flyes is the Reverse Pec Deck Fly. This machine exercise also targets the rear deltoids and upper back but involves sitting facing the machine and pulling the handles towards each other behind the body.",
      },
      {
        name: "Cable BB Curl",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "Cable Barbell Curls primarily target the biceps. They're performed by attaching a straight bar to a low pulley cable and curling it upwards towards the shoulders while keeping the elbows stationary.",
        replacement:
          "An alternative to Cable Barbell Curls is the Standing Cable Curl. This exercise also targets the biceps but involves using a single cable attachment and curling the handle towards the shoulders.",
      },
      {
        name: "Cable Hammer Curl",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "Cable Hammer Curls target the brachialis and brachioradialis muscles of the forearm, as well as the biceps. They're performed by holding cable handles in a neutral grip and curling them towards the shoulders.",
        replacement:
          "An alternative to Cable Hammer Curls is the Dumbbell Hammer Curl. This exercise also targets the brachialis and brachioradialis muscles but involves using dumbbells instead of cables, allowing for greater range of motion and individual muscle engagement.",
      },
    ],
  },
  {
    day: "Day 17: Legs",
    exercises: [
      {
        name: "Leg Extension",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Leg Extensions primarily target the quadriceps. They're performed by sitting on a leg extension machine with knees bent and extending the legs upwards, lifting the weight against resistance.",
        replacement:
          "An alternative to Leg Extensions is the Bulgarian Split Squat. This exercise also targets the quadriceps but involves standing with one foot elevated behind on a bench or platform and squatting downwards with the other leg.",
      },
      {
        name: "BB Squat",
        sets: 4,
        reps: 8,
        completed: false,
        tip: "Heavy Sets",
        description:
          "Barbell Squats are a compound exercise targeting the quadriceps, hamstrings, glutes, and lower back. They're performed by standing with a barbell on the upper back and squatting downwards until thighs are parallel to the ground, then returning to standing position.",
        replacement:
          "An alternative to Barbell Squats is the Goblet Squat. This exercise also targets the quadriceps, hamstrings, and glutes but involves holding a dumbbell or kettlebell at chest level and squatting downwards.",
      },
      {
        name: "Hack Squat",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "Hack Squats primarily target the quadriceps, hamstrings, and glutes. They're performed by standing on a platform with a barbell behind the legs and squatting downwards until thighs are parallel to the ground, then returning to standing position.",
        replacement:
          "An alternative to Hack Squats is the Leg Press. This machine exercise also targets the quadriceps, hamstrings, and glutes but involves sitting on a reclined seat and pushing a weighted platform away from the body with the feet.",
      },
      {
        name: "Walking Lunges",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Walking Lunges target the quadriceps, hamstrings, glutes, and calves. They're performed by taking a large step forward with one leg and lowering the body until both knees are bent at a 90-degree angle, then stepping forward with the opposite leg and repeating the movement.",
        replacement:
          "An alternative to Walking Lunges is the Reverse Lunge. This exercise also targets the quadriceps, hamstrings, glutes, and calves but involves stepping backwards into the lunge position instead of forward.",
      },
      {
        name: "Seated Calf Raise",
        sets: 4,
        reps: 15,
        completed: false,
        tip: "Light Sets",
        description:
          "Seated Calf Raises primarily target the calf muscles. They're performed by sitting on a calf raise machine with knees bent and lifting the heels upwards, extending the ankles against resistance.",
        replacement:
          "An alternative to Seated Calf Raises is the Standing Calf Raise. This exercise also targets the calf muscles but involves standing with heels elevated on a step or platform and lifting the body upwards onto the toes.",
      },
    ],
  },
  {
    day: "Day 18: Chest & Back",
    exercises: [
      {
        name: "Incline BB Bench",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Incline Barbell Bench Press primarily targets the upper chest. It's performed by lying on an incline bench with a barbell and pressing it upwards from the chest to full arm extension.",
        replacement:
          "An alternative to the Incline Barbell Bench Press is the Incline Dumbbell Bench Press. This exercise also targets the upper chest but involves using dumbbells instead of a barbell for greater range of motion and individual muscle engagement.",
      },
      {
        name: "Flat DB Bench",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Flat Dumbbell Bench Press primarily targets the middle chest. It's performed by lying on a flat bench with dumbbells and pressing them upwards from the chest to full arm extension.",
        replacement:
          "An alternative to the Flat Dumbbell Bench Press is the Flat Barbell Bench Press. This exercise also targets the middle chest but involves using a barbell instead of dumbbells for greater stability and overall strength.",
      },
      {
        name: "Cable Flys (low to high)",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Cable Flys target the chest muscles. They're performed by standing in front of cable crossover machine with cables set at low position, grabbing the handles, and crossing them in front of the body while keeping a slight bend in the elbows.",
        replacement:
          "An alternative to Cable Flys is the Pec Deck Machine. This machine exercise also targets the chest muscles but involves sitting and pressing pads together in front of the body against resistance.",
      },
      {
        name: "Straight Arm Pulldown",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "Straight Arm Pulldowns primarily target the lats. They're performed by standing in front of a cable machine with arms extended overhead, grabbing the bar, and pulling it downwards while keeping the arms straight.",
        replacement:
          "An alternative to Straight Arm Pulldowns is the Lat Pulldown. This exercise also targets the lats but involves sitting and pulling a bar or handle down towards the chest while leaning slightly back.",
      },
      {
        name: "BB Row",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "Barbell Rows primarily target the upper back. They're performed by bending at the hips with a barbell in hand, pulling the bar towards the lower chest while keeping the back straight, and then lowering the bar back down.",
        replacement:
          "An alternative to Barbell Rows is the T-Bar Row. This exercise also targets the upper back but involves using a T-bar handle and leaning forward at a 45-degree angle while pulling the weight towards the lower chest.",
      },
      {
        name: "Low Row",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "Low Rows target the middle and lower back. They're performed by sitting at a cable row machine with feet braced, grabbing the handles, and pulling them towards the lower abdomen while keeping the back straight.",
        replacement:
          "An alternative to Low Rows is the Seated Cable Row. This exercise also targets the middle and lower back but involves sitting and pulling a handle towards the torso while keeping the back straight.",
      },
    ],
  },
  {
    day: "Day 19: Delts & Arms",
    exercises: [
      {
        name: "BB Shoulder Press",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Barbell Shoulder Press is a compound exercise targeting the shoulders. It's performed by pressing a barbell overhead while seated or standing, engaging the deltoid muscles.",
        replacement:
          "An effective alternative to the Barbell Shoulder Press is the Dumbbell Shoulder Press. This exercise also targets the shoulders but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
      {
        name: "Upright Rows",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Upright Rows primarily target the shoulders and upper traps. They're performed by holding a barbell with an overhand grip and lifting it upwards towards the chin, keeping the elbows higher than the forearms.",
        replacement:
          "An alternative to Upright Rows is the Lateral Raise. This exercise also targets the shoulders but involves lifting dumbbells or cables out to the sides instead of pulling a barbell upwards.",
      },
      {
        name: "Rear Delt Fly (DB)",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "The Rear Delt Fly with Dumbbells targets the rear deltoids and upper back. It's performed by bending forward at the hips with dumbbells in hand and lifting them out to the sides, squeezing the shoulder blades together.",
        replacement:
          "An effective alternative to the Rear Delt Fly with Dumbbells is the Reverse Pec Deck Fly. This machine exercise also targets the rear deltoids and upper back but involves sitting facing the machine and pulling the handles towards each other behind the body.",
      },
      {
        name: "BB Curl",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Barbell Curl primarily targets the biceps. It's performed by holding a barbell with an underhand grip and curling it towards the shoulders while keeping the elbows stationary.",
        replacement:
          "An alternative to the Barbell Curl is the Dumbbell Curl. This exercise also targets the biceps but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
      {
        name: "Close Grip Bench",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "Close Grip Bench Press primarily targets the triceps. It's performed by gripping the barbell with hands closer than shoulder-width apart and lowering it to the chest before pushing it back up.",
        replacement:
          "An effective alternative to the Close Grip Bench Press is the Tricep Dip. This bodyweight exercise also targets the triceps but involves dipping down and pushing back up using a dip bar or parallel bars.",
      },
      {
        name: "Incline DB Curl",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Incline Dumbbell Curl targets the biceps. It's performed by lying on an incline bench and curling dumbbells upwards while keeping the elbows stationary.",
        replacement:
          "An alternative to the Incline Dumbbell Curl is the Preacher Curl. This exercise also targets the biceps but involves sitting at a preacher curl bench with arms resting on the pad and curling a barbell or dumbbells.",
      },
      {
        name: "Straight Bar Extension",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Straight Bar Extension targets the triceps. It's performed by holding a straight bar with an overhand grip and lowering it behind the head, then extending the arms to raise the bar back up.",
        replacement:
          "An alternative to the Straight Bar Extension is the Rope Tricep Pushdown. This exercise also targets the triceps but involves using a rope attachment on a cable machine, allowing for a different grip and range of motion.",
      },
    ],
  },
  {
    day: "Day 20: Legs",
    exercises: [
      {
        name: "Deadlift",
        sets: 4,
        reps: 8,
        completed: false,
        tip: "Heavy Sets",
        description:
          "The Deadlift is a compound exercise targeting multiple muscle groups, including the hamstrings, glutes, lower back, and core. It's performed by lifting a barbell or weights from the ground to a standing position, keeping the back straight and pushing through the heels.",
        replacement:
          "An alternative to the Deadlift is the Romanian Deadlift (RDL). This exercise also targets the hamstrings and lower back but involves less knee flexion and more hip hinge, making it suitable for individuals with lower back issues or those focusing more on hamstring development.",
      },
      {
        name: "Leg Curl",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Leg Curl primarily targets the hamstrings. It's performed by lying face down on a leg curl machine and curling the weight towards the buttocks by bending the knees.",
        replacement:
          "An alternative to the Leg Curl is the Swiss Ball Leg Curl. This bodyweight exercise also targets the hamstrings but involves lying on your back with your feet on a Swiss ball and curling the ball towards your buttocks.",
      },
      {
        name: "DB RDL",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Dumbbell Romanian Deadlift (DB RDL) targets the hamstrings and lower back. It's performed by holding dumbbells in front of the thighs, hinging at the hips while keeping the back straight, and lowering the weights towards the ground until feeling a stretch in the hamstrings, then returning to the starting position.",
        replacement:
          "An alternative to the Dumbbell Romanian Deadlift is the Kettlebell Swing. This dynamic exercise also targets the hamstrings and lower back but involves swinging a kettlebell between the legs and up to chest level using hip drive.",
      },
      {
        name: "Leg Press",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Leg Press primarily targets the quadriceps, but also involves the hamstrings and glutes to a lesser extent. It's performed by pushing a platform away from the body using the legs while seated at a leg press machine.",
        replacement:
          "An alternative to the Leg Press is the Bulgarian Split Squat. This exercise also targets the quadriceps but involves standing with one foot elevated behind on a bench or platform while performing a squat motion with the other leg.",
      },
      {
        name: "Standing Calf Raise",
        sets: 4,
        reps: 15,
        completed: false,
        tip: "High Reps",
        description:
          "The Standing Calf Raise targets the calf muscles (gastrocnemius and soleus). It's performed by standing on a calf raise machine or platform with the heels hanging off the edge, then lifting the heels as high as possible by pushing through the balls of the feet.",
        replacement:
          "An alternative to the Standing Calf Raise is the Seated Calf Raise. This exercise also targets the calf muscles but involves sitting on a calf raise machine or bench with the knees bent at 90 degrees and lifting the heels by pushing through the balls of the feet.",
      },
    ],
  },
  {
    day: "Day 21: Rest",
    exercises: [{ name: "Rest Day", sets: null, reps: null, completed: false }],
  },
  {
    day: "Day 22: Push",
    exercises: [
      {
        name: "Pec Deck",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Pec Deck machine targets the chest muscles (pectorals). It's performed by sitting with the back against the machine's pad, grasping the handles, and bringing them together in front of the chest, squeezing the pecs at the peak contraction.",
        replacement:
          "An alternative to the Pec Deck is the Cable Crossover. This exercise also targets the chest but involves standing between two cable stations with D-handles attached, then crossing the hands over the body to bring the handles together.",
      },
      {
        name: "Flat BB Bench",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Flat Barbell Bench Press primarily targets the chest muscles (pectorals), front deltoids, and triceps. It's performed by lying on a flat bench with a barbell above the chest, lowering the barbell to the chest, then pressing it back up to the starting position.",
        replacement:
          "An alternative to the Flat Barbell Bench Press is the Flat Dumbbell Bench Press. This exercise also targets the chest but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
      {
        name: "Flat DB Bench",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Flat Dumbbell Bench Press targets the chest muscles (pectorals), front deltoids, and triceps. It's performed by lying on a flat bench with dumbbells in hand, lowering the dumbbells to the sides of the chest, then pressing them back up to the starting position.",
        replacement:
          "An alternative to the Flat Dumbbell Bench Press is the Incline Dumbbell Bench Press. This exercise also targets the chest but involves lying on an incline bench, which shifts more emphasis to the upper chest.",
      },
      {
        name: "Lateral Raises",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Lateral Raises primarily target the side deltoids. They're performed by holding dumbbells at the sides with palms facing each other, then raising the arms out to the sides until they're parallel to the ground, maintaining a slight bend in the elbows.",
        replacement:
          "An alternative to Lateral Raises is the Cable Lateral Raise. This exercise also targets the side deltoids but involves using a cable machine with D-handles attached and performing the same lifting motion.",
      },
      {
        name: "DB Shoulder Press",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Dumbbell Shoulder Press primarily targets the deltoid muscles. It's performed by sitting or standing with dumbbells at shoulder height, then pressing the dumbbells overhead until the arms are fully extended, then lowering them back down.",
        replacement:
          "An alternative to the Dumbbell Shoulder Press is the Seated Machine Shoulder Press. This exercise also targets the deltoids but involves using a shoulder press machine, which provides stability and can be beneficial for those with shoulder issues.",
      },
      {
        name: "Rope Extension",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Rope Tricep Extension targets the triceps. It's performed by attaching a rope to a cable machine, grasping the ends of the rope with palms facing each other, and extending the arms downward while keeping the elbows stationary.",
        replacement:
          "An alternative to Rope Tricep Extension is the Overhead Tricep Extension. This exercise also targets the triceps but involves holding a dumbbell or barbell overhead with both hands and lowering it behind the head, then extending the arms to raise the weight back up.",
      },
      {
        name: "BB Skullcrusher",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Barbell Skullcrusher targets the triceps. It's performed by lying on a bench with a barbell held above the forehead, then bending the elbows to lower the barbell towards the forehead while keeping the upper arms stationary, then extending the arms to raise the barbell back up.",
        replacement:
          "An alternative to the Barbell Skullcrusher is the Dumbbell Skullcrusher. This exercise also targets the triceps but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
    ],
  },
  {
    day: "Day 23: Pull",
    exercises: [
      {
        name: "BB Row",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Barbell Row targets the upper back muscles (latissimus dorsi), middle back, and biceps. It's performed by bending at the hips with knees slightly bent, grabbing a barbell with an overhand grip, pulling the barbell towards the lower chest while keeping the back straight, then lowering the barbell back down to the starting position.",
        replacement:
          "An alternative to the Barbell Row is the T-Bar Row. This exercise also targets the upper back and middle back but involves using a T-bar machine or landmine attachment instead of a barbell.",
      },
      {
        name: "Straight Arm Pulldown",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "The Straight Arm Pulldown targets the latissimus dorsi muscles (lats) and the teres major. It's performed by standing in front of a cable machine with arms extended and grasping a straight bar attached to the high pulley, then pulling the bar down towards the thighs while keeping the arms straight, then slowly raising the bar back up to the starting position.",
        replacement:
          "An alternative to the Straight Arm Pulldown is the Lat Pulldown. This exercise also targets the lats but involves using a wide grip on a lat pulldown machine and pulling the bar down towards the chest.",
      },
      {
        name: "Wide Grip Pulldown",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Wide Grip Pulldown primarily targets the latissimus dorsi muscles (lats). It's performed by sitting at a lat pulldown machine with a wide grip on the bar, pulling the bar down towards the chest while arching the back slightly, then slowly raising the bar back up to the starting position.",
        replacement:
          "An alternative to the Wide Grip Pulldown is the Chin-Up. This bodyweight exercise also targets the lats but involves pulling the body up towards a bar placed overhead, using an underhand grip with hands shoulder-width apart.",
      },
      {
        name: "Seated Cable Row (close)",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Seated Cable Row targets the middle back muscles (rhomboids and middle trapezius). It's performed by sitting at a cable row machine with knees slightly bent, grasping a close-grip handle, pulling the handle towards the abdomen while keeping the back straight, then slowly extending the arms forward to return to the starting position.",
        replacement:
          "An alternative to the Seated Cable Row is the Bent Over Barbell Row. This exercise also targets the middle back but involves bending at the hips with knees slightly bent, grasping a barbell with an overhand grip, pulling the barbell towards the lower chest while keeping the back straight, then lowering the barbell back down to the starting position.",
      },
      {
        name: "Cable Rear Delt Fly",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "The Cable Rear Delt Fly targets the rear deltoid muscles. It's performed by standing between two cable machines with D-handles attached, bending forward at the hips, and pulling the handles out to the sides while keeping the arms straight, then slowly returning to the starting position.",
        replacement:
          "An alternative to the Cable Rear Delt Fly is the Dumbbell Rear Delt Fly. This exercise also targets the rear deltoids but involves lying face down on an incline bench with dumbbells in hand, then lifting the dumbbells out to the sides while keeping the arms straight.",
      },
      {
        name: "Cable BB Curl",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Cable Barbell Curl targets the biceps. It's performed by attaching a straight bar to a low cable pulley, grasping the bar with an underhand grip, and curling the bar upwards while keeping the elbows close to the body, then slowly lowering the bar back down to the starting position.",
        replacement:
          "An alternative to the Cable Barbell Curl is the Cable Preacher Curl. This exercise also targets the biceps but involves using a preacher curl attachment on a cable machine, which provides stability and isolates the biceps.",
      },
      {
        name: "Cable Hammer Curl",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Cable Hammer Curl targets the brachialis and brachioradialis muscles of the forearm, as well as the biceps. It's performed by attaching a rope handle to a low pulley cable, grasping the handles with a neutral grip, and curling the handles towards the shoulders while keeping the elbows stationary, then slowly lowering the handles back down to the starting position.",
        replacement:
          "An alternative to the Cable Hammer Curl is the Dumbbell Hammer Curl. This exercise also targets the brachialis and brachioradialis muscles but involves using dumbbells instead of a cable machine, allowing for greater range of motion and individual muscle engagement.",
      },
    ],
  },
  {
    day: "Day 24: Legs",
    exercises: [
      {
        name: "Leg Extension",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "The Leg Extension primarily targets the quadriceps muscles (front of the thigh). It's performed by sitting on a leg extension machine with the legs positioned under the padded bar, extending the legs upwards against the resistance, then lowering the legs back down to the starting position.",
        replacement:
          "An alternative to the Leg Extension is the Dumbbell Step-Up. This exercise also targets the quadriceps but involves stepping onto a bench or platform with one foot while pushing through the heel to straighten the leg, then lowering back down and repeating with the other leg.",
      },
      {
        name: "BB Squat",
        sets: 4,
        reps: 8,
        completed: false,
        tip: "Heavy Sets",
        description:
          "The Barbell Squat is a compound exercise targeting multiple lower body muscles, including the quadriceps, hamstrings, and glutes. It's performed by standing with the feet shoulder-width apart, holding a barbell across the upper back, bending at the hips and knees to lower the body into a squat position, then pushing through the heels to return to the starting position.",
        replacement:
          "An alternative to the Barbell Squat is the Goblet Squat. This exercise also targets the lower body muscles but involves holding a single dumbbell or kettlebell at chest height while performing the squat movement.",
      },
      {
        name: "Hack Squat",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Hack Squat machine targets the quadriceps, hamstrings, and glutes. It's performed by standing on the machine's footplate with the back against the pad, placing the shoulders under the shoulder pads, and lowering the body by bending the knees, then pushing through the heels to return to the starting position.",
        replacement:
          "An alternative to the Hack Squat machine is the Bulgarian Split Squat. This exercise also targets the quadriceps, hamstrings, and glutes but involves standing in a split stance with one foot elevated on a bench or platform while performing a squat.",
      },
      {
        name: "Walking Lunges",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Walking Lunges target the quadriceps, hamstrings, glutes, and calves. They're performed by taking a step forward with one leg and lowering the body until both knees are bent at a 90-degree angle, then pushing through the front heel to return to a standing position and repeating with the opposite leg.",
        replacement:
          "An alternative to Walking Lunges is the Reverse Lunge. This exercise also targets the lower body muscles but involves stepping backwards into the lunge position instead of forward.",
      },
      {
        name: "Seated Calf Raise",
        sets: 4,
        reps: 15,
        completed: false,
        tip: "Light Sets",
        description:
          "The Seated Calf Raise targets the calf muscles (gastrocnemius and soleus). It's performed by sitting on a calf raise machine with the balls of the feet on the footplate, lifting the heels as high as possible by contracting the calf muscles, then lowering the heels back down below the level of the footplate.",
        replacement:
          "An alternative to the Seated Calf Raise is the Standing Calf Raise. This exercise also targets the calf muscles but involves standing on the edge of a step or platform with the heels hanging off and performing calf raises.",
      },
    ],
  },
  {
    day: "Day 25: Chest & Back",
    exercises: [
      {
        name: "Incline BB Bench",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Incline Barbell Bench Press primarily targets the upper chest muscles. It's performed by lying on an incline bench with the back supported, holding a barbell with an overhand grip, and pressing the barbell upwards until the arms are fully extended, then lowering it back down towards the chest.",
        replacement:
          "An alternative to the Incline Barbell Bench Press is the Incline Dumbbell Bench Press. This exercise also targets the upper chest but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
      {
        name: "Flat DB Bench",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Flat Dumbbell Bench Press targets the entire chest muscles. It's performed by lying on a flat bench with a dumbbell in each hand, extending the arms upwards until they are fully extended, then lowering the dumbbells down towards the chest, and pressing them back up.",
        replacement:
          "An alternative to the Flat Dumbbell Bench Press is the Flat Barbell Bench Press. This exercise also targets the chest but involves using a barbell instead of dumbbells, providing stability and allowing for heavier weights to be lifted.",
      },
      {
        name: "Cable Flys (low to high)",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Cable Flys with a low-to-high motion target the chest muscles. They're performed by standing in the middle of a cable machine with D-handles attached to the low pulleys, and pulling the handles upwards and together in a controlled motion, crossing them over at the top of the movement.",
        replacement:
          "An alternative to Cable Flys is the Pec Deck machine. This machine exercise also targets the chest but involves sitting and pushing two handles together in front of the body against resistance.",
      },
      {
        name: "Straight Arm Pulldown",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Straight Arm Pulldown targets the lats and upper back muscles. It's performed by attaching a straight bar to a high pulley cable machine, grasping the bar with an overhand grip, and pulling it down towards the thighs while keeping the arms straight, then returning to the starting position.",
        replacement:
          "An alternative to the Straight Arm Pulldown is the Lat Pulldown. This exercise also targets the lats but involves using a wide grip and pulling the bar down in front of the body towards the chest.",
      },
      {
        name: "BB Row",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Barbell Row targets the upper back muscles, including the lats and traps. It's performed by bending at the hips with a slight bend in the knees, holding a barbell with an overhand grip, and pulling the barbell towards the lower chest while keeping the back straight, then lowering it back down.",
        replacement:
          "An alternative to the Barbell Row is the T-Bar Row. This exercise also targets the upper back muscles but involves using a T-bar machine with a chest pad and handles to perform the rowing motion.",
      },
      {
        name: "Low Row",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Low Row targets the middle and lower back muscles, including the lats and rhomboids. It's performed by sitting at a cable row machine with the feet braced and pulling the handles towards the lower abdomen while keeping the back straight, then returning to the starting position.",
        replacement:
          "An alternative to the Low Row is the Dumbbell Row. This exercise also targets the back muscles but involves bending over with one hand and knee on a bench while rowing a dumbbell with the other hand.",
      },
    ],
  },
  {
    day: "Day 26: Delts & Arms",
    exercises: [
      {
        name: "BB Shoulder Press",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Barbell Shoulder Press is a compound exercise targeting the shoulders. It's performed by pressing a barbell overhead while seated or standing, engaging the deltoid muscles.",
        replacement:
          "An effective alternative to the Barbell Shoulder Press is the Dumbbell Shoulder Press. This exercise also targets the shoulders but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
      {
        name: "Upright Rows",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Upright Rows primarily target the shoulders and upper traps. They're performed by holding a barbell with an overhand grip and lifting it upwards towards the chin, keeping the elbows higher than the forearms.",
        replacement:
          "An alternative to Upright Rows is the Lateral Raise. This exercise also targets the shoulders but involves lifting dumbbells or cables out to the sides instead of pulling a barbell upwards.",
      },
      {
        name: "Rear Delt Fly (DB)",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "The Rear Delt Fly with Dumbbells targets the rear deltoids and upper back. It's performed by bending forward at the hips with dumbbells in hand and lifting them out to the sides, squeezing the shoulder blades together.",
        replacement:
          "An effective alternative to the Rear Delt Fly with Dumbbells is the Reverse Pec Deck Fly. This machine exercise also targets the rear deltoids and upper back but involves sitting facing the machine and pulling the handles towards each other behind the body.",
      },
      {
        name: "BB Curl",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Barbell Curl primarily targets the biceps. It's performed by holding a barbell with an underhand grip and curling it towards the shoulders while keeping the elbows stationary.",
        replacement:
          "An alternative to the Barbell Curl is the Dumbbell Curl. This exercise also targets the biceps but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
      {
        name: "Close Grip Bench",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "Close Grip Bench Press primarily targets the triceps. It's performed by gripping the barbell with hands closer than shoulder-width apart and lowering it to the chest before pushing it back up.",
        replacement:
          "An effective alternative to the Close Grip Bench Press is the Tricep Dip. This bodyweight exercise also targets the triceps but involves dipping down and pushing back up using a dip bar or parallel bars.",
      },
      {
        name: "Incline DB Curl",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Incline Dumbbell Curl targets the biceps. It's performed by lying on an incline bench and curling dumbbells upwards while keeping the elbows stationary.",
        replacement:
          "An alternative to the Incline Dumbbell Curl is the Preacher Curl. This exercise also targets the biceps but involves sitting at a preacher curl bench with arms resting on the pad and curling a barbell or dumbbells.",
      },
      {
        name: "Straight Bar Extension",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Straight Bar Extension targets the triceps. It's performed by holding a straight bar with an overhand grip and lowering it behind the head, then extending the arms to raise the bar back up.",
        replacement:
          "An alternative to the Straight Bar Extension is the Rope Tricep Pushdown. This exercise also targets the triceps but involves using a rope attachment on a cable machine, allowing for a different grip and range of motion.",
      },
    ],
  },
  {
    day: "Day 27: Legs",
    exercises: [
      {
        name: "Deadlift",
        sets: 4,
        reps: 8,
        completed: false,
        tip: "Heavy Sets",
        description:
          "The Deadlift is a compound exercise targeting the posterior chain, including the hamstrings, glutes, and lower back. It's performed by lifting a loaded barbell from the ground to a standing position, keeping the back straight and engaging the core.",
        replacement:
          "An alternative to the Deadlift is the Romanian Deadlift (RDL). This exercise also targets the hamstrings and lower back but involves a slight bend in the knees and focuses more on the eccentric phase of the movement.",
      },
      {
        name: "Leg Curl",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Leg Curl targets the hamstrings. It's performed by curling the legs towards the buttocks while lying face down on a leg curl machine, engaging the hamstrings.",
        replacement:
          "An effective alternative to the Leg Curl is the Swiss Ball Leg Curl. This bodyweight exercise also targets the hamstrings but involves lying on your back with feet on a Swiss ball and curling the ball towards the buttocks.",
      },
      {
        name: "DB RDL",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Dumbbell Romanian Deadlift (RDL) targets the hamstrings and lower back. It's performed by hinging at the hips with a slight bend in the knees while holding dumbbells, lowering the weights towards the ground, and then returning to the starting position.",
        replacement:
          "An alternative to the Dumbbell Romanian Deadlift is the Barbell Romanian Deadlift. This exercise also targets the hamstrings and lower back but involves using a barbell instead of dumbbells for added resistance.",
      },
      {
        name: "Leg Press",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Leg Press primarily targets the quadriceps and glutes. It's performed by pushing a weighted platform away from the body while seated, extending the knees and hips.",
        replacement:
          "An effective alternative to the Leg Press is the Hack Squat. This machine exercise also targets the quadriceps and glutes but involves a slightly different movement pattern and engages stabilizing muscles to a greater extent.",
      },
      {
        name: "Standing Calf Raise",
        sets: 4,
        reps: 15,
        completed: false,
        tip: "High Reps",
        description:
          "The Standing Calf Raise targets the calf muscles. It's performed by standing on a raised surface with the heels hanging off, then lifting the heels as high as possible by extending the ankles.",
        replacement:
          "An alternative to the Standing Calf Raise is the Seated Calf Raise. This exercise also targets the calf muscles but is performed while sitting down, allowing for a greater stretch at the bottom of the movement.",
      },
    ],
  },
  {
    day: "Day 28: Rest",
    exercises: [{ name: "Rest Day", sets: null, reps: null, completed: false }],
  },
  {
    day: "Day 29: Push",
    exercises: [
      {
        name: "Pec Deck",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Pec Deck machine targets the chest muscles. It's performed by sitting down and pressing the handles together in front of the chest, engaging the pectoral muscles.",
        replacement:
          "An alternative to the Pec Deck machine is the Dumbbell Fly. This exercise also targets the chest muscles but involves lying on a bench and lowering and raising dumbbells in a wide arc motion.",
      },
      {
        name: "Flat BB Bench",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Flat Barbell Bench Press is a compound exercise targeting the chest, shoulders, and triceps. It's performed by lying on a flat bench and pressing a loaded barbell upwards from the chest to full arm extension.",
        replacement:
          "An effective alternative to the Flat Barbell Bench Press is the Flat Dumbbell Bench Press. This exercise also targets the chest, shoulders, and triceps but allows for a greater range of motion and individual muscle engagement.",
      },
      {
        name: "Flat DB Bench",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Flat Dumbbell Bench Press targets the chest, shoulders, and triceps. It's performed by lying on a flat bench and pressing dumbbells upwards from the chest to full arm extension.",
        replacement:
          "An alternative to the Flat Dumbbell Bench Press is the Incline Dumbbell Bench Press. This exercise also targets the chest, shoulders, and triceps but involves lying on an incline bench, targeting the upper chest more effectively.",
      },
      {
        name: "Lateral Raises",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Lateral Raises primarily target the side deltoid muscles. It's performed by holding dumbbells at the sides and raising them out to the sides until the arms are parallel to the ground, engaging the side deltoids.",
        replacement:
          "An alternative to Lateral Raises is the Cable Lateral Raise. This exercise also targets the side deltoids but involves using a cable machine for constant tension throughout the movement.",
      },
      {
        name: "DB Shoulder Press",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Dumbbell Shoulder Press targets the shoulders. It's performed by pressing dumbbells overhead while seated or standing, engaging the deltoid muscles.",
        replacement:
          "An effective alternative to the Dumbbell Shoulder Press is the Barbell Shoulder Press. This exercise also targets the shoulders but involves using a barbell for added stability and increased weight potential.",
      },
      {
        name: "Rope Extension",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Rope Tricep Extensions target the triceps. It's performed by using a cable machine with a rope attachment to extend the arms downward, engaging the triceps.",
        replacement:
          "An alternative to Rope Tricep Extensions is the Overhead Tricep Extension. This exercise also targets the triceps but involves using a single dumbbell or barbell overhead, providing a different angle of resistance.",
      },
      {
        name: "BB Skullcrusher",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Barbell Skull Crusher is an isolation exercise targeting the triceps. It's performed by lying on a bench and lowering a barbell towards the forehead, then extending the arms to raise the barbell back up.",
        replacement:
          "An alternative to the Barbell Skull Crusher is the Dumbbell Skull Crusher. This exercise also targets the triceps but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
    ],
  },
  {
    day: "Day 30: Pull",
    exercises: [
      {
        name: "BB Row",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Barbell Row targets the back muscles, primarily the lats. It's performed by bending at the hips with a slight knee bend, keeping the back straight, and pulling a loaded barbell towards the lower chest.",
        replacement:
          "An alternative to the Barbell Row is the Dumbbell Row. This exercise also targets the back muscles but allows for greater range of motion and unilateral training, promoting balance and symmetry.",
      },
      {
        name: "Straight Arm Pulldown",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "The Straight Arm Pulldown targets the lats and the upper back. It's performed by standing or sitting with arms straight, pulling a cable attachment downward until the arms are at the sides.",
        replacement:
          "An alternative to the Straight Arm Pulldown is the Lat Pulldown. This exercise also targets the lats and allows for heavier loads, promoting strength and muscle growth.",
      },
      {
        name: "Wide Grip Pulldown",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Wide Grip Lat Pulldown primarily targets the lats. It's performed by sitting at a lat pulldown machine and pulling a bar attachment down towards the chest, engaging the lats.",
        replacement:
          "An effective alternative to the Wide Grip Lat Pulldown is the Chin-Up. This bodyweight exercise also targets the lats but involves pulling the body upwards to a bar, promoting functional strength.",
      },
      {
        name: "Seated Cable Row (close)",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Seated Cable Row targets the middle back and lats. It's performed by sitting at a cable row machine, grabbing the handles with an underhand grip, and pulling them towards the lower abdomen, squeezing the shoulder blades together.",
        replacement:
          "An alternative to the Seated Cable Row is the T-Bar Row. This exercise also targets the middle back and lats but involves using a T-bar attachment and bent-over position, promoting stability and core engagement.",
      },
      {
        name: "Cable Rear Delt Fly",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "The Cable Rear Delt Fly targets the rear deltoids and upper back. It's performed by standing or sitting with arms extended in front, pulling cable attachments out to the sides until the arms are in line with the body.",
        replacement:
          "An effective alternative to the Cable Rear Delt Fly is the Bent-Over Reverse Fly. This dumbbell exercise also targets the rear deltoids and upper back but involves bending at the waist and lifting dumbbells out to the sides.",
      },
      {
        name: "Cable BB Curl",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Cable Barbell Curl targets the biceps. It's performed by standing with a straight torso, holding a barbell attached to a low pulley cable, and curling the barbell towards the shoulders.",
        replacement:
          "An alternative to the Cable Barbell Curl is the Standing EZ Bar Curl. This exercise also targets the biceps but involves using an EZ curl bar for a more comfortable grip and reduced strain on the wrists.",
      },
      {
        name: "Cable Hammer Curl",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Cable Hammer Curl targets the brachialis and brachioradialis muscles of the forearm, as well as the biceps. It's performed by standing with a straight torso, holding cable attachments in each hand with a neutral grip, and curling them towards the shoulders.",
        replacement:
          "An alternative to the Cable Hammer Curl is the Dumbbell Hammer Curl. This exercise also targets the brachialis and brachioradialis muscles but involves using dumbbells instead of cables, allowing for unilateral training and increased stability.",
      },
    ],
  },
  {
    day: "Day 31: Legs",
    exercises: [
      {
        name: "Leg Extension",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "The Leg Extension primarily targets the quadriceps. It's performed by sitting on a leg extension machine and extending the legs against resistance, lifting the weight until the legs are straight.",
        replacement:
          "An alternative to the Leg Extension is the Bulgarian Split Squat. This exercise also targets the quadriceps but involves performing a split squat with one leg elevated behind on a bench, promoting balance and stability.",
      },
      {
        name: "BB Squat",
        sets: 4,
        reps: 8,
        completed: false,
        tip: "Heavy Sets",
        description:
          "The Barbell Squat is a compound exercise targeting multiple lower body muscles, including the quadriceps, hamstrings, and glutes. It's performed by holding a barbell across the upper back and shoulders, squatting down until the thighs are parallel to the ground, then returning to the starting position.",
        replacement:
          "An effective alternative to the Barbell Squat is the Goblet Squat. This exercise also targets the lower body muscles but involves holding a single dumbbell or kettlebell at chest level, promoting core engagement and upright posture.",
      },
      {
        name: "Hack Squat",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Hack Squat targets the quadriceps, hamstrings, and glutes. It's performed by placing the shoulders and back against a pad, positioning the feet on a platform slightly in front, then squatting down and pushing upwards against the resistance.",
        replacement:
          "An alternative to the Hack Squat is the Dumbbell Step-Up. This exercise also targets the lower body muscles but involves stepping up onto a platform with one leg at a time while holding dumbbells, promoting unilateral strength and balance.",
      },
      {
        name: "Walking Lunges",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Walking Lunges target the quadriceps, hamstrings, and glutes, as well as the calves and core for stabilization. They're performed by stepping forward with one leg and lowering the body until both knees are bent at 90-degree angles, then pushing back up and repeating with the other leg.",
        replacement:
          "An effective alternative to Walking Lunges is the Reverse Lunge. This exercise also targets the lower body muscles but involves stepping backwards into the lunge position, promoting balance and stability.",
      },
      {
        name: "Seated Calf Raise",
        sets: 4,
        reps: 15,
        completed: false,
        tip: "Light Sets",
        description:
          "The Seated Calf Raise primarily targets the calf muscles. It's performed by sitting on a calf raise machine with the feet on a platform, then lifting the heels as high as possible by pushing through the balls of the feet.",
        replacement:
          "An alternative to the Seated Calf Raise is the Standing Calf Raise. This exercise also targets the calf muscles but involves standing on a raised surface with the heels hanging off, then lifting the heels as high as possible.",
      },
    ],
  },
  {
    day: "Day 32: Chest & Back",
    exercises: [
      {
        name: "Incline BB Bench",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Incline Barbell Bench Press targets the upper chest and shoulders. It's performed by lying on an inclined bench with a barbell, lowering the weight to the upper chest, and pressing it back up.",
        replacement:
          "An alternative to the Incline Barbell Bench Press is the Incline Dumbbell Bench Press. This exercise also targets the upper chest but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
      {
        name: "Flat DB Bench",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Flat Dumbbell Bench Press primarily targets the chest muscles. It's performed by lying on a flat bench with dumbbells, lowering the weights to the sides of the chest, and pressing them upwards.",
        replacement:
          "An effective alternative to the Flat Dumbbell Bench Press is the Push-Up. This bodyweight exercise also targets the chest but involves pushing the body up and down using the arms and chest muscles, promoting core stability and balance.",
      },
      {
        name: "Cable Flys (low to high)",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Cable Flys target the chest muscles and help develop chest definition and separation. It's performed by setting the cable pulleys to the lowest position, grasping the handles, and pulling them up and together in a fly motion.",
        replacement:
          "An alternative to Cable Flys is the Pec Deck Machine. This machine exercise also targets the chest but involves sitting and pushing the handles together in front of the body, providing constant tension throughout the movement.",
      },
      {
        name: "Straight Arm Pulldown",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Straight Arm Pulldown targets the lats and helps develop back width. It's performed by standing in front of a cable machine, grasping the handle with arms extended overhead, and pulling the bar down to the thighs while keeping the arms straight.",
        replacement:
          "An effective alternative to the Straight Arm Pulldown is the Lat Pulldown. This exercise also targets the lats but involves pulling a bar down to the chest while seated, allowing for heavier weights and greater muscle activation.",
      },
      {
        name: "BB Row",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Barbell Row primarily targets the upper back muscles. It's performed by bending at the hips with a slight knee bend, grasping a barbell with an overhand grip, and pulling the weight towards the lower chest while keeping the back straight.",
        replacement:
          "An alternative to the Barbell Row is the T-Bar Row. This exercise also targets the upper back but involves using a T-bar machine or landmine attachment, providing a different angle of resistance.",
      },
      {
        name: "Low Row",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Moderate Sets",
        description:
          "The Low Cable Row targets the mid and lower back muscles. It's performed by sitting at a cable machine, grasping the handles with arms extended, and pulling the weight towards the lower chest while keeping the back straight.",
        replacement:
          "An effective alternative to the Low Cable Row is the Dumbbell Row. This exercise also targets the mid and lower back but involves bending over with one hand and knee on a bench while rowing a dumbbell with the other hand, promoting unilateral strength and stability.",
      },
    ],
  },
  {
    day: "Day 33: Delts & Arms",
    exercises: [
      {
        name: "BB Shoulder Press",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Barbell Shoulder Press is a compound exercise targeting the shoulders. It's performed by pressing a barbell overhead while seated or standing, engaging the deltoid muscles.",
        replacement:
          "An effective alternative to the Barbell Shoulder Press is the Dumbbell Shoulder Press. This exercise also targets the shoulders but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
      {
        name: "Upright Rows",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Upright Rows primarily target the shoulders and upper traps. They're performed by holding a barbell with an overhand grip and lifting it upwards towards the chin, keeping the elbows higher than the forearms.",
        replacement:
          "An alternative to Upright Rows is the Lateral Raise. This exercise also targets the shoulders but involves lifting dumbbells or cables out to the sides instead of pulling a barbell upwards.",
      },
      {
        name: "Rear Delt Fly (DB)",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "The Rear Delt Fly with Dumbbells targets the rear deltoids and upper back. It's performed by bending forward at the hips with dumbbells in hand and lifting them out to the sides, squeezing the shoulder blades together.",
        replacement:
          "An effective alternative to the Rear Delt Fly with Dumbbells is the Reverse Pec Deck Fly. This machine exercise also targets the rear deltoids and upper back but involves sitting facing the machine and pulling the handles towards each other behind the body.",
      },
      {
        name: "BB Curl",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Barbell Curl primarily targets the biceps. It's performed by holding a barbell with an underhand grip and curling it towards the shoulders while keeping the elbows stationary.",
        replacement:
          "An alternative to the Barbell Curl is the Dumbbell Curl. This exercise also targets the biceps but involves using dumbbells instead of a barbell, allowing for greater range of motion and individual muscle engagement.",
      },
      {
        name: "Close Grip Bench",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "Close Grip Bench Press primarily targets the triceps. It's performed by gripping the barbell with hands closer than shoulder-width apart and lowering it to the chest before pushing it back up.",
        replacement:
          "An effective alternative to the Close Grip Bench Press is the Tricep Dip. This bodyweight exercise also targets the triceps but involves dipping down and pushing back up using a dip bar or parallel bars.",
      },
      {
        name: "Incline DB Curl",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Incline Dumbbell Curl targets the biceps. It's performed by lying on an incline bench and curling dumbbells upwards while keeping the elbows stationary.",
        replacement:
          "An alternative to the Incline Dumbbell Curl is the Preacher Curl. This exercise also targets the biceps but involves sitting at a preacher curl bench with arms resting on the pad and curling a barbell or dumbbells.",
      },
      {
        name: "Straight Bar Extension",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "Straight Bar Extension targets the triceps. It's performed by holding a straight bar with an overhand grip and lowering it behind the head, then extending the arms to raise the bar back up.",
        replacement:
          "An alternative to the Straight Bar Extension is the Rope Tricep Pushdown. This exercise also targets the triceps but involves using a rope attachment on a cable machine, allowing for a different grip and range of motion.",
      },
    ],
  },
  {
    day: "Day 34: Legs",
    exercises: [
      {
        name: "Deadlift",
        sets: 4,
        reps: 8,
        completed: false,
        tip: "Heavy Sets",
        description:
          "The Deadlift is a compound exercise targeting multiple muscle groups, including the hamstrings, glutes, lower back, and core. It's performed by lifting a barbell or weights from the ground to a standing position, focusing on maintaining a neutral spine and engaging the legs and hips.",
        replacement:
          "An alternative to the Deadlift is the Romanian Deadlift (RDL). This exercise also targets the hamstrings and lower back but involves keeping the legs slightly bent and focusing more on the hip hinge movement.",
      },
      {
        name: "Leg Curl",
        sets: 3,
        reps: 12,
        completed: false,
        tip: "Light Sets",
        description:
          "The Leg Curl targets the hamstrings. It's performed by lying face down on a leg curl machine and curling the weight towards the glutes by flexing the knees.",
        replacement:
          "An alternative to the Leg Curl is the Swiss Ball Leg Curl. This bodyweight exercise also targets the hamstrings but involves lying on your back with your feet on a Swiss ball and lifting your hips while curling the ball towards your glutes.",
      },
      {
        name: "DB RDL",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Dumbbell Romanian Deadlift (RDL) targets the hamstrings and lower back. It's performed by holding dumbbells in front of the thighs and hinging at the hips to lower the weights towards the ground while keeping the back straight.",
        replacement:
          "An alternative to the Dumbbell Romanian Deadlift (RDL) is the Kettlebell Swing. This exercise also targets the hamstrings and lower back but involves swinging a kettlebell between the legs explosively while maintaining a strong hip hinge.",
      },
      {
        name: "Leg Press",
        sets: 3,
        reps: 10,
        completed: false,
        tip: "Medium Sets",
        description:
          "The Leg Press primarily targets the quadriceps, hamstrings, and glutes. It's performed by pushing a weighted platform away from the body using the legs while seated on a leg press machine.",
        replacement:
          "An alternative to the Leg Press is the Bulgarian Split Squat. This exercise also targets the quadriceps, hamstrings, and glutes but involves performing a squat motion with one foot elevated behind on a bench.",
      },
      {
        name: "Standing Calf Raise",
        sets: 4,
        reps: 15,
        completed: false,
        tip: "Light Sets",
        description:
          "Standing Calf Raises primarily target the calf muscles (gastrocnemius and soleus). It's performed by standing on the edge of a platform with the heels hanging off and lifting the body by raising the heels as high as possible.",
        replacement:
          "An alternative to Standing Calf Raises is Seated Calf Raises. This exercise also targets the calf muscles but is performed while seated, allowing for better isolation of the calves.",
      },
    ],
  },
];

export default workoutProgram;
