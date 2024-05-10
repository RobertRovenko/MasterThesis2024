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
        completed: false,
        tip: "Heavy Sets",
        description:
          "Incline Dumbbell Bench targets the upper chest, an area often lacking in development. This free weight exercise enhances chest aesthetics and strength by isolating the upper pectoral muscles. It also engages stabilizing muscles for improved shoulder and arm strength. Ideal for addressing muscle imbalances, it offers a greater range of motion compared to other chest exercises",
        replacement:
          "The normal Incline Bench Press is a great alternative to the dumbell variant. The only difference is some balance and the posibility to isolate each arm",
      },
      {
        name: "Incline Smith Machine Bench",
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
        name: "Lateral Raises",
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
        sets: 3,
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
        name: "Wide Grip Pulldown",
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
        name: "Seated Cable Row (one arm)",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

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
        completed: false,

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
        completed: false,

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
          "The Barbell Squat is a compound exercise that targets the quadriceps, hamstrings, glutes, and lower back. It's performed by squatting down while holding a barbell across the upper back and then standing back up.",
        replacement:
          "An alternative to the Barbell Squat is the Goblet Squat. This exercise also targets the quadriceps, hamstrings, and glutes but involves holding a single dumbbell or kettlebell in front of your chest while squatting.",
      },
      {
        name: "Hack Squat",
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,

        description:
          "The Hack Squat targets the quadriceps, hamstrings, and glutes. It's performed by squatting down on a machine with a platform angled behind you and then pushing the platform upwards.",
        replacement:
          "A suitable alternative to the Hack Squat is the Front Squat. This exercise also targets the quadriceps, hamstrings, and glutes but involves holding a barbell in front of your shoulders while squatting.",
      },
      {
        name: "Walking Lunges",
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
        reps: 8,
        tip: "Heavy Sets",
        completed: false,

        description:
          "The Flat Dumbbell Bench Press targets the chest, shoulders, and triceps. It's performed by lying on a flat bench with dumbbells and pressing them upwards until the arms are fully extended.",
        replacement:
          "An alternative to the Flat Dumbbell Bench Press is the Barbell Bench Press. This exercise also targets the chest, shoulders, and triceps but involves using a barbell instead of dumbbells.",
      },
      {
        name: "Cable Flys (low to high)",
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
      { name: "Deadlift", sets: 4, reps: 8, completed: false },
      { name: "Leg Curl", sets: 3, reps: 12, completed: false },
      { name: "DB RDL", sets: 3, reps: 10, completed: false },
      { name: "Leg Press", sets: 3, reps: 10, completed: false },
      { name: "Standing Calf Raise", sets: 4, reps: 15, completed: false },
    ],
  },
  {
    day: "Day 14: Rest",
    exercises: [],
  },
  {
    day: "Day 15: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10, completed: false },
      { name: "Flat BB Bench", sets: 3, reps: 10, completed: false },
      { name: "Flat DB Bench", sets: 3, reps: 10, completed: false },
      { name: "Lateral Raises", sets: 3, reps: 12, completed: false },
      { name: "DB Shoulder Press", sets: 3, reps: 10, completed: false },
      { name: "Rope Extension", sets: 3, reps: 12, completed: false },
      { name: "BB Skullcrusher", sets: 3, reps: 10, completed: false },
    ],
  },
  {
    day: "Day 16: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10, completed: false },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12, completed: false },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10, completed: false },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10, completed: false },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12, completed: false },
      { name: "Cable BB Curl", sets: 3, reps: 10, completed: false },
      { name: "Cable Hammer Curl", sets: 3, reps: 10, completed: false },
    ],
  },
  {
    day: "Day 17: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12, completed: false },
      { name: "BB Squat", sets: 4, reps: 8, completed: false },
      { name: "Hack Squat", sets: 3, reps: 10, completed: false },
      { name: "Walking Lunges", sets: 3, reps: 12, completed: false },
      { name: "Seated Calf Raise", sets: 4, reps: 15, completed: false },
    ],
  },
  {
    day: "Day 18: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10, completed: false },
      { name: "Flat DB Bench", sets: 3, reps: 10, completed: false },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12, completed: false },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10, completed: false },
      { name: "BB Row", sets: 3, reps: 10, completed: false },
      { name: "Low Row", sets: 3, reps: 10, completed: false },
    ],
  },
  {
    day: "Day 19: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10, completed: false },
      { name: "Upright Rows", sets: 3, reps: 12, completed: false },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12, completed: false },
      { name: "BB Curl", sets: 3, reps: 10, completed: false },
      { name: "Close Grip Bench", sets: 3, reps: 10, completed: false },
      { name: "Incline DB Curl", sets: 3, reps: 10, completed: false },
      { name: "Straight Bar Extension", sets: 3, reps: 12, completed: false },
    ],
  },
  {
    day: "Day 20: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8, completed: false },
      { name: "Leg Curl", sets: 3, reps: 12, completed: false },
      { name: "DB RDL", sets: 3, reps: 10, completed: false },
      { name: "Leg Press", sets: 3, reps: 10, completed: false },
      { name: "Standing Calf Raise", sets: 4, reps: 15, completed: false },
    ],
  },
  {
    day: "Day 21: Rest",
    exercises: [],
  },
  {
    day: "Day 22: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10, completed: false },
      { name: "Flat BB Bench", sets: 3, reps: 10, completed: false },
      { name: "Flat DB Bench", sets: 3, reps: 10, completed: false },
      { name: "Lateral Raises", sets: 3, reps: 12, completed: false },
      { name: "DB Shoulder Press", sets: 3, reps: 10, completed: false },
      { name: "Rope Extension", sets: 3, reps: 12, completed: false },
      { name: "BB Skullcrusher", sets: 3, reps: 10, completed: false },
    ],
  },
  {
    day: "Day 23: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10, completed: false },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12, completed: false },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10, completed: false },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10, completed: false },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12, completed: false },
      { name: "Cable BB Curl", sets: 3, reps: 10, completed: false },
      { name: "Cable Hammer Curl", sets: 3, reps: 10, completed: false },
    ],
  },
  {
    day: "Day 24: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12, completed: false },
      { name: "BB Squat", sets: 4, reps: 8, completed: false },
      { name: "Hack Squat", sets: 3, reps: 10, completed: false },
      { name: "Walking Lunges", sets: 3, reps: 12, completed: false },
      { name: "Seated Calf Raise", sets: 4, reps: 15, completed: false },
    ],
  },
  {
    day: "Day 25: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10, completed: false },
      { name: "Flat DB Bench", sets: 3, reps: 10, completed: false },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12, completed: false },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10, completed: false },
      { name: "BB Row", sets: 3, reps: 10, completed: false },
      { name: "Low Row", sets: 3, reps: 10, completed: false },
    ],
  },
  {
    day: "Day 26: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10, completed: false },
      { name: "Upright Rows", sets: 3, reps: 12, completed: false },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12, completed: false },
      { name: "BB Curl", sets: 3, reps: 10, completed: false },
      { name: "Close Grip Bench", sets: 3, reps: 10, completed: false },
      { name: "Incline DB Curl", sets: 3, reps: 10, completed: false },
      { name: "Straight Bar Extension", sets: 3, reps: 12, completed: false },
    ],
  },
  {
    day: "Day 27: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8, completed: false },
      { name: "Leg Curl", sets: 3, reps: 12, completed: false },
      { name: "DB RDL", sets: 3, reps: 10, completed: false },
      { name: "Leg Press", sets: 3, reps: 10, completed: false },
      { name: "Standing Calf Raise", sets: 4, reps: 15, completed: false },
    ],
  },
  {
    day: "Day 28: Rest",
    exercises: [],
  },
  {
    day: "Day 29: Push",
    exercises: [
      { name: "Pec Deck", sets: 3, reps: 10, completed: false },
      { name: "Flat BB Bench", sets: 3, reps: 10, completed: false },
      { name: "Flat DB Bench", sets: 3, reps: 10, completed: false },
      { name: "Lateral Raises", sets: 3, reps: 12, completed: false },
      { name: "DB Shoulder Press", sets: 3, reps: 10, completed: false },
      { name: "Rope Extension", sets: 3, reps: 12, completed: false },
      { name: "BB Skullcrusher", sets: 3, reps: 10, completed: false },
    ],
  },
  {
    day: "Day 30: Pull",
    exercises: [
      { name: "BB Row", sets: 3, reps: 10, completed: false },
      { name: "Straight Arm Pulldown", sets: 3, reps: 12, completed: false },
      { name: "Wide Grip Pulldown", sets: 3, reps: 10, completed: false },
      { name: "Seated Cable Row (close)", sets: 3, reps: 10, completed: false },
      { name: "Cable Rear Delt Fly", sets: 3, reps: 12, completed: false },
      { name: "Cable BB Curl", sets: 3, reps: 10, completed: false },
      { name: "Cable Hammer Curl", sets: 3, reps: 10, completed: false },
    ],
  },
  {
    day: "Day 31: Legs",
    exercises: [
      { name: "Leg Extension", sets: 3, reps: 12, completed: false },
      { name: "BB Squat", sets: 4, reps: 8, completed: false },
      { name: "Hack Squat", sets: 3, reps: 10, completed: false },
      { name: "Walking Lunges", sets: 3, reps: 12, completed: false },
      { name: "Seated Calf Raise", sets: 4, reps: 15, completed: false },
    ],
  },
  {
    day: "Day 32: Chest & Back",
    exercises: [
      { name: "Incline BB Bench", sets: 3, reps: 10, completed: false },
      { name: "Flat DB Bench", sets: 3, reps: 10, completed: false },
      { name: "Cable Flys (low to high)", sets: 3, reps: 12, completed: false },
      { name: "Straight Arm Pulldown", sets: 3, reps: 10, completed: false },
      { name: "BB Row", sets: 3, reps: 10, completed: false },
      { name: "Low Row", sets: 3, reps: 10, completed: false },
    ],
  },
  {
    day: "Day 33: Delts & Arms",
    exercises: [
      { name: "BB Shoulder Press", sets: 3, reps: 10, completed: false },
      { name: "Upright Rows", sets: 3, reps: 12, completed: false },
      { name: "Rear Delt Fly (DB)", sets: 3, reps: 12, completed: false },
      { name: "BB Curl", sets: 3, reps: 10, completed: false },
      { name: "Close Grip Bench", sets: 3, reps: 10, completed: false },
      { name: "Incline DB Curl", sets: 3, reps: 10, completed: false },
      { name: "Straight Bar Extension", sets: 3, reps: 12, completed: false },
    ],
  },
  {
    day: "Day 34: Legs",
    exercises: [
      { name: "Deadlift", sets: 4, reps: 8, completed: false },
      { name: "Leg Curl", sets: 3, reps: 12, completed: false },
      { name: "DB RDL", sets: 3, reps: 10, completed: false },
      { name: "Leg Press", sets: 3, reps: 10, completed: false },
      { name: "Standing Calf Raise", sets: 4, reps: 15, completed: false },
    ],
  },
];

export default workoutProgram;
