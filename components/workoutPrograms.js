const workoutProgram = [
  {
    day: "Day 1: Push",
    exercises: [
      {
        name: "Parallel Bar Dips",
        image1: require("../demonstration/triceps/dips1.jpg"),
        image2: require("../demonstration/triceps/dips2.jpg"),
        sets: 3,
        reps: 10,
        tip: "As many as possible",
        completed: false,
        description:
          "Parallel Bar Dips primarily target the triceps, chest, and shoulders. They're performed by gripping parallel bars with arms fully extended, lowering the body until the upper arms are parallel to the ground, then pushing back up to the starting position.",
        replacement:
          "If you need an alternative to Parallel Bar Dips, consider Bench Dips. This exercise also targets the triceps and chest but is performed using a bench. Sit on the edge of the bench, place your hands next to your hips, scoot forward, and lower your body until your upper arms are parallel to the ground. Push yourself back up to the starting position.",
      },
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
        name: "Dumbbell Shoulder Press",
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
        name: "Barebell Row",
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
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Rear Delt Fly with a machine targets the rear deltoids and upper back. Sit comfortably on the machine seat, adjust the handles to chest height, and pull them back by squeezing your shoulder blades together. Focus on keeping your back straight and your elbows slightly bent throughout the movement.",
        replacement:
          "An alternative to the Rear Delt Fly with a machine is the Rear Delt Fly with Dumbbells. This exercise also targets the rear deltoids and upper back. Stand with a dumbbell in each hand, bend at the hips, and raise the dumbbells to the sides until they reach shoulder height, focusing on squeezing your shoulder blades together at the top of the movement.",
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
        name: "Flat Dumbbell Bench",
        image1: require("../demonstration/chest/flatDBBench1.jpg"),
        image2: require("../demonstration/chest/flatDBBench2.jpg"),
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
        image1: require("../demonstration/chest/inclineSmithBenchPress1.jpg"),
        image2: require("../demonstration/chest/inclineSmithBenchPress2.jpg"),
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
        name: "Barebell Row",
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
    ],
  },
  {
    day: "Day 5: Delts & Arms",
    exercises: [
      {
        name: "Barebell Shoulder Press",
        image1: require("../demonstration/shoulders/bbShoulderPress1.jpg"),
        image2: require("../demonstration/shoulders/bbShoulderPress2.jpg"),
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
        name: "Shrugs",
        image1: require("../demonstration/shoulders/shrugs1.jpg"),
        image2: require("../demonstration/shoulders/shrugs2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "Shrugs primarily target the trapezius muscles, which are responsible for lifting and rotating the shoulder blades. They're performed by holding dumbbells or a barbell at your sides and lifting your shoulders towards your ears in a controlled manner.",
        replacement:
          "If you need an alternative to Shrugs, consider the Farmer's Walk. This exercise not only targets the trapezius muscles but also works the forearms, grip strength, and core stability. Simply hold a heavy dumbbell or kettlebell in each hand and walk for a certain distance or time, keeping your posture upright and shoulders back.",
      },
      {
        name: "Rear Delt Fly",
        image1: require("../demonstration/back/rearDeltFly1.jpg"),
        image2: require("../demonstration/back/rearDeltFly2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Rear Delt Fly with a machine targets the rear deltoids and upper back. Sit comfortably on the machine seat, adjust the handles to chest height, and pull them back by squeezing your shoulder blades together. Focus on keeping your back straight and your elbows slightly bent throughout the movement.",
        replacement:
          "An alternative to the Rear Delt Fly with a machine is the Rear Delt Fly with Dumbbells. This exercise also targets the rear deltoids and upper back. Stand with a dumbbell in each hand, bend at the hips, and raise the dumbbells to the sides until they reach shoulder height, focusing on squeezing your shoulder blades together at the top of the movement.",
      },
      {
        name: "Barebell Curl",
        image1: require("../demonstration/biceps/bbCurl1.jpg"),
        image2: require("../demonstration/biceps/bbCurl2.jpg"),
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
        image1: require("../demonstration/triceps/closeGripBench1.jpg"),
        image2: require("../demonstration/triceps/closeGripBench2.jpg"),
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
        name: "Preacher Curl",
        image1: require("../demonstration/biceps/preacherCurl1.jpg"),
        image2: require("../demonstration/biceps/preacherCurl2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Preacher Curl targets the biceps. It's performed by sitting on a preacher bench and curling a barbell or dumbbells upwards towards the shoulders while keeping the upper arms against the preacher bench for support.",
        replacement:
          "An alternative to the Preacher Curl is the Incline Dumbbell Curl. This exercise also targets the biceps but involves lying on an incline bench and curling dumbbells upwards towards the shoulders while keeping the elbows stationary.",
      },
      {
        name: "Straight Bar Extension",
        image1: require("../demonstration/triceps/straightBarExtension1.jpg"),
        image2: require("../demonstration/triceps/straightBarExtension2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Straight Bar Extension targets the triceps. It's performed by holding a straight bar overhead with arms fully extended and then bending the elbows to lower the bar behind the head before extending them back to the starting position.",
        replacement:
          "A suitable alternative to the Straight Bar Extension is the Overhead Tricep Extension with Dumbbell. This exercise also targets the triceps but involves holding a dumbbell with both hands and extending it overhead while keeping the elbows close to the head.",
      },
      {
        name: "One Arm Tricep Extension",
        image1: require("../demonstration/triceps/oneArmCableExt1.jpg"),
        image2: require("../demonstration/triceps/oneArmCableExt2.jpg"),
        sets: "3 on each arm",
        reps: 12,
        tip: "Light Sets",
        completed: false,
        description:
          "The One Arm Cable Tricep Extension targets the triceps. It's performed by setting up a cable machine with a single handle attachment. Grab the handle with one hand and pull it down, keeping your upper arm stationary, until your arm is fully extended. Slowly return to the starting position and repeat. Switch arms for balanced development.",
        replacement:
          "No replacement exercise needed as this already targets the triceps effectively.",
      },
    ],
  },
  {
    day: "Day 6: Legs",
    exercises: [
      {
        name: "Deadlift",
        image1: require("../demonstration/legs/deadlift1.jpg"),
        image2: require("../demonstration/legs/deadlift2.jpg"),
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
        name: "Standing Calf Raise",
        image1: require("../demonstration/legs/calfRaise1.jpg"),
        image2: require("../demonstration/legs/calfRaise2.jpg"),
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
        image1: require("../img/protein1.jpeg"),

        sets: null,
        reps: null,
        completed: false,
        description:
          "Rest days are crucial for building muscle effectively! When you rest, your muscles have the opportunity to repair and grow stronger. It's also important to fuel your body with nutritious food to provide the energy and nutrients needed for muscle growth. Additionally, spending some time in the sun helps your body produce vitamin D, which is essential for muscle health and overall well-being. So make sure to take those rest days seriously, eat well, and enjoy some sunshine to support your muscle-building journey!",
        replacement: null,
      },
    ],
  },
  {
    day: "Day 8: Push",
    exercises: [
      {
        name: "Parallel Bar Dips",
        image1: require("../demonstration/triceps/dips1.jpg"),
        image2: require("../demonstration/triceps/dips2.jpg"),
        sets: 3,
        reps: 10,
        tip: "As many as possible",
        completed: false,
        description:
          "Parallel Bar Dips primarily target the triceps, chest, and shoulders. They're performed by gripping parallel bars with arms fully extended, lowering the body until the upper arms are parallel to the ground, then pushing back up to the starting position.",
        replacement:
          "If you need an alternative to Parallel Bar Dips, consider Bench Dips. This exercise also targets the triceps and chest but is performed using a bench. Sit on the edge of the bench, place your hands next to your hips, scoot forward, and lower your body until your upper arms are parallel to the ground. Push yourself back up to the starting position.",
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
        name: "Flat Barebell Bench",
        image1: require("../demonstration/chest/flatBBBench1.jpg"),
        image2: require("../demonstration/chest/flatBBBench2.jpg"),
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
        name: "Flat Dumbbell Bench",
        image1: require("../demonstration/chest/flatDBBench1.jpg"),
        image2: require("../demonstration/chest/flatDBBench2.jpg"),
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
        name: "Cable Lateral Raises",
        image1: require("../demonstration/shoulders/cableLateralRaises1.jpg"),
        image2: require("../demonstration/shoulders/cableLateralRaises2.jpg"),
        sets: 3,
        reps: 12,
        tip: "Light Sets",
        completed: false,
        description:
          "Cable Lateral Raises target the lateral deltoids and are performed by standing next to a cable machine with the handle attached at the lowest position, then raising the arms to the sides until they are parallel to the ground. This exercise helps in strengthening and defining the shoulders.",
        replacement:
          "The Cable Lateral Raises is a great alternative to the normal Lateral Raises. The primary difference is the constant tension provided by the cable throughout the movement, which can enhance muscle activation and growth.",
      },
      {
        name: "Dumbbell Shoulder Press",
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
        tip: "Light Sets",
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
        name: "Barebell Row",
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
        name: "Straight Arm Pulldown",
        image1: require("../demonstration/back/straightArmPulldown1.jpg"),
        image2: require("../demonstration/back/straightArmPulldown2.jpg"),
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
        image1: require("../demonstration/back/widegripPulldown1.jpg"),
        image2: require("../demonstration/back/widegripPulldown2.jpg"),
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
        name: "Seated Cable Row",
        image1: require("../demonstration/back/seatedCableRow1.jpg"),
        image2: require("../demonstration/back/seatedCableRow2.jpg"),
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
        name: "Rear Delt Fly",
        image1: require("../demonstration/back/rearDeltFly1.jpg"),
        image2: require("../demonstration/back/rearDeltFly2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Rear Delt Fly with a machine targets the rear deltoids and upper back. Sit comfortably on the machine seat, adjust the handles to chest height, and pull them back by squeezing your shoulder blades together. Focus on keeping your back straight and your elbows slightly bent throughout the movement.",
        replacement:
          "An alternative to the Rear Delt Fly with a machine is the Rear Delt Fly with Dumbbells. This exercise also targets the rear deltoids and upper back. Stand with a dumbbell in each hand, bend at the hips, and raise the dumbbells to the sides until they reach shoulder height, focusing on squeezing your shoulder blades together at the top of the movement.",
      },
      {
        name: "Cable Barebell Curl",
        image1: require("../demonstration/biceps/cableBBCurl1.jpg"),
        image2: require("../demonstration/biceps/cableBBCurl2.jpg"),
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
        image1: require("../demonstration/biceps/cableHammerCurl1.jpg"),
        image2: require("../demonstration/biceps/cableHammerCurl2.jpg"),
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
        image1: require("../demonstration/legs/legExtension1.jpg"),
        image2: require("../demonstration/legs/legExtension2.jpg"),
        sets: 3,
        reps: 12,
        tip: "Medium Sets",
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
        tip: "Heavy Sets",
        completed: false,
        description:
          "The Barbell Squat is a compound exercise targeting the quadriceps, hamstrings, glutes, and lower back. It's performed by squatting down while holding a barbell on the shoulders, then standing back up.",
        replacement:
          "An alternative to the Barbell Squat is the Goblet Squat. This exercise also targets the quadriceps, hamstrings, glutes, and lower back but involves holding a single dumbbell or kettlebell in front of the chest while squatting.",
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
    day: "Day 11: Chest & Back",
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
        name: "Flat Dumbbell Bench",
        image1: require("../demonstration/chest/flatDBBench1.jpg"),
        image2: require("../demonstration/chest/flatDBBench2.jpg"),
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
        name: "Barebell Row",
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
    ],
  },

  {
    day: "Day 12: Delts & Arms",
    exercises: [
      {
        name: "Barebell Shoulder Press",
        image1: require("../demonstration/shoulders/bbShoulderPress1.jpg"),
        image2: require("../demonstration/shoulders/bbShoulderPress2.jpg"),
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
        name: "Shrugs",
        image1: require("../demonstration/shoulders/shrugs1.jpg"),
        image2: require("../demonstration/shoulders/shrugs2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "Shrugs primarily target the trapezius muscles, which are responsible for lifting and rotating the shoulder blades. They're performed by holding dumbbells or a barbell at your sides and lifting your shoulders towards your ears in a controlled manner.",
        replacement:
          "If you need an alternative to Shrugs, consider the Farmer's Walk. This exercise not only targets the trapezius muscles but also works the forearms, grip strength, and core stability. Simply hold a heavy dumbbell or kettlebell in each hand and walk for a certain distance or time, keeping your posture upright and shoulders back.",
      },
      {
        name: "Rear Delt Fly",
        image1: require("../demonstration/back/rearDeltFly1.jpg"),
        image2: require("../demonstration/back/rearDeltFly2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Rear Delt Fly with a machine targets the rear deltoids and upper back. Sit comfortably on the machine seat, adjust the handles to chest height, and pull them back by squeezing your shoulder blades together. Focus on keeping your back straight and your elbows slightly bent throughout the movement.",
        replacement:
          "An alternative to the Rear Delt Fly with a machine is the Rear Delt Fly with Dumbbells. This exercise also targets the rear deltoids and upper back. Stand with a dumbbell in each hand, bend at the hips, and raise the dumbbells to the sides until they reach shoulder height, focusing on squeezing your shoulder blades together at the top of the movement.",
      },
      {
        name: "Barebell Curl",
        image1: require("../demonstration/biceps/bbCurl1.jpg"),
        image2: require("../demonstration/biceps/bbCurl2.jpg"),
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
        image1: require("../demonstration/triceps/closeGripBench1.jpg"),
        image2: require("../demonstration/triceps/closeGripBench2.jpg"),
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
        name: "Preacher Curl",
        image1: require("../demonstration/biceps/preacherCurl1.jpg"),
        image2: require("../demonstration/biceps/preacherCurl2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Preacher Curl targets the biceps. It's performed by sitting on a preacher bench and curling a barbell or dumbbells upwards towards the shoulders while keeping the upper arms against the preacher bench for support.",
        replacement:
          "An alternative to the Preacher Curl is the Incline Dumbbell Curl. This exercise also targets the biceps but involves lying on an incline bench and curling dumbbells upwards towards the shoulders while keeping the elbows stationary.",
      },
      {
        name: "Straight Bar Extension",
        image1: require("../demonstration/triceps/straightBarExtension1.jpg"),
        image2: require("../demonstration/triceps/straightBarExtension2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Straight Bar Extension targets the triceps. It's performed by holding a straight bar overhead with arms fully extended and then bending the elbows to lower the bar behind the head before extending them back to the starting position.",
        replacement:
          "A suitable alternative to the Straight Bar Extension is the Overhead Tricep Extension with Dumbbell. This exercise also targets the triceps but involves holding a dumbbell with both hands and extending it overhead while keeping the elbows close to the head.",
      },
    ],
  },

  {
    day: "Day 13: Legs",
    exercises: [
      {
        name: "Deadlift",
        image1: require("../demonstration/legs/deadlift1.jpg"),
        image2: require("../demonstration/legs/deadlift2.jpg"),
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
        name: "Leg Extension",
        image1: require("../demonstration/legs/legExtension1.jpg"),
        image2: require("../demonstration/legs/legExtension2.jpg"),
        sets: 3,
        reps: 12,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Leg Extension primarily targets the quadriceps. It's performed by extending the legs against resistance while seated, effectively isolating the quadriceps muscles.",
        replacement:
          "A suitable alternative to the Leg Extension is the Bulgarian Split Squat. This exercise also targets the quadriceps but involves performing a split squat movement with one leg elevated behind you on a bench or platform.",
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
        name: "Standing Calf Raise",
        image1: require("../demonstration/legs/calfRaise1.jpg"),
        image2: require("../demonstration/legs/calfRaise2.jpg"),
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
    day: "Day 14: Rest",
    exercises: [
      {
        name: "Rest Day",
        sets: null,
        reps: null,
        completed: false,
        description:
          "Rest days are crucial for building muscle effectively! When you rest, your muscles have the opportunity to repair and grow stronger. It's also important to fuel your body with nutritious food to provide the energy and nutrients needed for muscle growth. Additionally, spending some time in the sun helps your body produce vitamin D, which is essential for muscle health and overall well-being. So make sure to take those rest days seriously, eat well, and enjoy some sunshine to support your muscle-building journey!",
        replacement: null,
      },
    ],
  },
  {
    day: "Day 15: Push",
    exercises: [
      {
        name: "Parallel Bar Dips",
        image1: require("../demonstration/triceps/dips1.jpg"),
        image2: require("../demonstration/triceps/dips2.jpg"),
        sets: 3,
        reps: 10,
        tip: "As many as possible",
        completed: false,
        description:
          "Parallel Bar Dips primarily target the triceps, chest, and shoulders. They're performed by gripping parallel bars with arms fully extended, lowering the body until the upper arms are parallel to the ground, then pushing back up to the starting position.",
        replacement:
          "If you need an alternative to Parallel Bar Dips, consider Bench Dips. This exercise also targets the triceps and chest but is performed using a bench. Sit on the edge of the bench, place your hands next to your hips, scoot forward, and lower your body until your upper arms are parallel to the ground. Push yourself back up to the starting position.",
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
        name: "Flat Barebell Bench",
        image1: require("../demonstration/chest/flatBBBench1.jpg"),
        image2: require("../demonstration/chest/flatBBBench2.jpg"),
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
        name: "Flat Dumbbell Bench",
        image1: require("../demonstration/chest/flatDBBench1.jpg"),
        image2: require("../demonstration/chest/flatDBBench2.jpg"),
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
        name: "Dumbbell Shoulder Press",
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
        tip: "Light Sets",
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
    day: "Day 16: Pull",
    exercises: [
      {
        name: "Barebell Row",
        image1: require("../demonstration/back/bbRow1.jpg"),
        image2: require("../demonstration/back/bbRow2.jpg"),
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
        image1: require("../demonstration/back/straightArmPulldown1.jpg"),
        image2: require("../demonstration/back/straightArmPulldown2.jpg"),
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
        image1: require("../demonstration/back/widegripPulldown1.jpg"),
        image2: require("../demonstration/back/widegripPulldown2.jpg"),
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
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Rear Delt Fly with a machine targets the rear deltoids and upper back. Sit comfortably on the machine seat, adjust the handles to chest height, and pull them back by squeezing your shoulder blades together. Focus on keeping your back straight and your elbows slightly bent throughout the movement.",
        replacement:
          "An alternative to the Rear Delt Fly with a machine is the Rear Delt Fly with Dumbbells. This exercise also targets the rear deltoids and upper back. Stand with a dumbbell in each hand, bend at the hips, and raise the dumbbells to the sides until they reach shoulder height, focusing on squeezing your shoulder blades together at the top of the movement.",
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
          "The Cable Hammer Curl targets the brachialis and brachioradialis muscles of the forearm, along with the biceps. It's performed by grasping cable attachments with a neutral grip and curling them towards the shoulders while keeping the elbows stationary.",
        replacement:
          "An effective alternative to the Cable Hammer Curl is the Dumbbell Hammer Curl. This exercise also targets the brachialis, brachioradialis, and biceps but involves using dumbbells instead of a cable machine, allowing for greater range of motion and muscle activation.",
      },
    ],
  },
  {
    day: "Day 17: Legs",
    exercises: [
      {
        name: "Leg Extension",
        image1: require("../demonstration/legs/legExtension1.jpg"),
        image2: require("../demonstration/legs/legExtension2.jpg"),
        sets: 3,
        reps: 12,
        tip: "Medium Sets",
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
        tip: "Heavy Sets",
        completed: false,
        description:
          "The Barbell Squat is a compound exercise targeting the quadriceps, hamstrings, glutes, and lower back. It's performed by squatting down while holding a barbell on the shoulders, then standing back up.",
        replacement:
          "An alternative to the Barbell Squat is the Goblet Squat. This exercise also targets the quadriceps, hamstrings, glutes, and lower back but involves holding a single dumbbell or kettlebell in front of the chest while squatting.",
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
    day: "Day 18: Chest & Back",
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
        name: "Flat Dumbbell Bench",
        image1: require("../demonstration/chest/flatDBBench1.jpg"),
        image2: require("../demonstration/chest/flatDBBench2.jpg"),
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
        name: "Straight Arm Pulldown",
        image1: require("../demonstration/back/straightArmPulldown1.jpg"),
        image2: require("../demonstration/back/straightArmPulldown2.jpg"),
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
        name: "Barebell Row",
        image1: require("../demonstration/back/bbRow1.jpg"),
        image2: require("../demonstration/back/bbRow2.jpg"),
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
    ],
  },
  {
    day: "Day 19: Delts & Arms",
    exercises: [
      {
        name: "Barebell Shoulder Press",
        image1: require("../demonstration/shoulders/bbShoulderPress1.jpg"),
        image2: require("../demonstration/shoulders/bbShoulderPress2.jpg"),
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
        name: "Shrugs",
        image1: require("../demonstration/shoulders/shrugs1.jpg"),
        image2: require("../demonstration/shoulders/shrugs2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "Shrugs primarily target the trapezius muscles, which are responsible for lifting and rotating the shoulder blades. They're performed by holding dumbbells or a barbell at your sides and lifting your shoulders towards your ears in a controlled manner.",
        replacement:
          "If you need an alternative to Shrugs, consider the Farmer's Walk. This exercise not only targets the trapezius muscles but also works the forearms, grip strength, and core stability. Simply hold a heavy dumbbell or kettlebell in each hand and walk for a certain distance or time, keeping your posture upright and shoulders back.",
      },
      {
        name: "Rear Delt Fly",
        image1: require("../demonstration/back/rearDeltFly1.jpg"),
        image2: require("../demonstration/back/rearDeltFly2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Rear Delt Fly with a machine targets the rear deltoids and upper back. Sit comfortably on the machine seat, adjust the handles to chest height, and pull them back by squeezing your shoulder blades together. Focus on keeping your back straight and your elbows slightly bent throughout the movement.",
        replacement:
          "An alternative to the Rear Delt Fly with a machine is the Rear Delt Fly with Dumbbells. This exercise also targets the rear deltoids and upper back. Stand with a dumbbell in each hand, bend at the hips, and raise the dumbbells to the sides until they reach shoulder height, focusing on squeezing your shoulder blades together at the top of the movement.",
      },
      {
        name: "Barebell Curl",
        image1: require("../demonstration/biceps/bbCurl1.jpg"),
        image2: require("../demonstration/biceps/bbCurl2.jpg"),
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
        image1: require("../demonstration/triceps/closeGripBench1.jpg"),
        image2: require("../demonstration/triceps/closeGripBench2.jpg"),
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
        name: "Preacher Curl",
        image1: require("../demonstration/biceps/preacherCurl1.jpg"),
        image2: require("../demonstration/biceps/preacherCurl2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Preacher Curl targets the biceps. It's performed by sitting on a preacher bench and curling a barbell or dumbbells upwards towards the shoulders while keeping the upper arms against the preacher bench for support.",
        replacement:
          "An alternative to the Preacher Curl is the Incline Dumbbell Curl. This exercise also targets the biceps but involves lying on an incline bench and curling dumbbells upwards towards the shoulders while keeping the elbows stationary.",
      },
      {
        name: "Straight Bar Extension",
        image1: require("../demonstration/triceps/straightBarExtension1.jpg"),
        image2: require("../demonstration/triceps/straightBarExtension2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Straight Bar Extension targets the triceps. It's performed by holding a straight bar overhead with arms fully extended and then bending the elbows to lower the bar behind the head before extending them back to the starting position.",
        replacement:
          "A suitable alternative to the Straight Bar Extension is the Overhead Tricep Extension with Dumbbell. This exercise also targets the triceps but involves holding a dumbbell with both hands and extending it overhead while keeping the elbows close to the head.",
      },
    ],
  },
  {
    day: "Day 20: Legs",
    exercises: [
      {
        name: "Deadlift",
        image1: require("../demonstration/legs/deadlift1.jpg"),
        image2: require("../demonstration/legs/deadlift2.jpg"),
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
        name: "Leg Extension",
        image1: require("../demonstration/legs/legExtension1.jpg"),
        image2: require("../demonstration/legs/legExtension2.jpg"),
        sets: 3,
        reps: 12,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Leg Extension primarily targets the quadriceps. It's performed by extending the legs against resistance while seated, effectively isolating the quadriceps muscles.",
        replacement:
          "A suitable alternative to the Leg Extension is the Bulgarian Split Squat. This exercise also targets the quadriceps but involves performing a split squat movement with one leg elevated behind you on a bench or platform.",
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
        name: "Standing Calf Raise",
        image1: require("../demonstration/legs/calfRaise1.jpg"),
        image2: require("../demonstration/legs/calfRaise2.jpg"),
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
    day: "Day 21: Rest",
    exercises: [
      {
        name: "Rest Day",
        sets: null,
        reps: null,
        completed: false,
        description:
          "Rest days are crucial for building muscle effectively! When you rest, your muscles have the opportunity to repair and grow stronger. It's also important to fuel your body with nutritious food to provide the energy and nutrients needed for muscle growth. Additionally, spending some time in the sun helps your body produce vitamin D, which is essential for muscle health and overall well-being. So make sure to take those rest days seriously, eat well, and enjoy some sunshine to support your muscle-building journey!",
        replacement: null,
      },
    ],
  },
  {
    day: "Day 22: Push",
    exercises: [
      {
        name: "Parallel Bar Dips",
        image1: require("../demonstration/triceps/dips1.jpg"),
        image2: require("../demonstration/triceps/dips2.jpg"),
        sets: 3,
        reps: 10,
        tip: "As many as possible",
        completed: false,
        description:
          "Parallel Bar Dips primarily target the triceps, chest, and shoulders. They're performed by gripping parallel bars with arms fully extended, lowering the body until the upper arms are parallel to the ground, then pushing back up to the starting position.",
        replacement:
          "If you need an alternative to Parallel Bar Dips, consider Bench Dips. This exercise also targets the triceps and chest but is performed using a bench. Sit on the edge of the bench, place your hands next to your hips, scoot forward, and lower your body until your upper arms are parallel to the ground. Push yourself back up to the starting position.",
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
        name: "Flat Barebell Bench",
        image1: require("../demonstration/chest/flatBBBench1.jpg"),
        image2: require("../demonstration/chest/flatBBBench2.jpg"),
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
        name: "Flat Dumbbell Bench",
        image1: require("../demonstration/chest/flatDBBench1.jpg"),
        image2: require("../demonstration/chest/flatDBBench2.jpg"),
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
        name: "Dumbbell Shoulder Press",
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
        tip: "Light Sets",
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
    day: "Day 23: Pull",
    exercises: [
      {
        name: "Barebell Row",
        image1: require("../demonstration/back/bbRow1.jpg"),
        image2: require("../demonstration/back/bbRow2.jpg"),
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
        image1: require("../demonstration/back/straightArmPulldown1.jpg"),
        image2: require("../demonstration/back/straightArmPulldown2.jpg"),
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
        image1: require("../demonstration/back/widegripPulldown1.jpg"),
        image2: require("../demonstration/back/widegripPulldown2.jpg"),
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
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Rear Delt Fly with a machine targets the rear deltoids and upper back. Sit comfortably on the machine seat, adjust the handles to chest height, and pull them back by squeezing your shoulder blades together. Focus on keeping your back straight and your elbows slightly bent throughout the movement.",
        replacement:
          "An alternative to the Rear Delt Fly with a machine is the Rear Delt Fly with Dumbbells. This exercise also targets the rear deltoids and upper back. Stand with a dumbbell in each hand, bend at the hips, and raise the dumbbells to the sides until they reach shoulder height, focusing on squeezing your shoulder blades together at the top of the movement.",
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
          "The Cable Hammer Curl targets the brachialis and brachioradialis muscles of the forearm, along with the biceps. It's performed by grasping cable attachments with a neutral grip and curling them towards the shoulders while keeping the elbows stationary.",
        replacement:
          "An effective alternative to the Cable Hammer Curl is the Dumbbell Hammer Curl. This exercise also targets the brachialis, brachioradialis, and biceps but involves using dumbbells instead of a cable machine, allowing for greater range of motion and muscle activation.",
      },
    ],
  },
  {
    day: "Day 24: Legs",
    exercises: [
      {
        name: "Leg Extension",
        image1: require("../demonstration/legs/legExtension1.jpg"),
        image2: require("../demonstration/legs/legExtension2.jpg"),
        sets: 3,
        reps: 12,
        tip: "Medium Sets",
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
        tip: "Heavy Sets",
        completed: false,
        description:
          "The Barbell Squat is a compound exercise targeting the quadriceps, hamstrings, glutes, and lower back. It's performed by squatting down while holding a barbell on the shoulders, then standing back up.",
        replacement:
          "An alternative to the Barbell Squat is the Goblet Squat. This exercise also targets the quadriceps, hamstrings, glutes, and lower back but involves holding a single dumbbell or kettlebell in front of the chest while squatting.",
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
    day: "Day 25: Chest & Back",
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
        name: "Flat Dumbbell Bench",
        image1: require("../demonstration/chest/flatDBBench1.jpg"),
        image2: require("../demonstration/chest/flatDBBench2.jpg"),
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
        name: "Straight Arm Pulldown",
        image1: require("../demonstration/back/straightArmPulldown1.jpg"),
        image2: require("../demonstration/back/straightArmPulldown2.jpg"),
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
        name: "Barebell Row",
        image1: require("../demonstration/back/bbRow1.jpg"),
        image2: require("../demonstration/back/bbRow2.jpg"),
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
    ],
  },
  {
    day: "Day 26: Delts & Arms",
    exercises: [
      {
        name: "Barebell Shoulder Press",
        image1: require("../demonstration/shoulders/bbShoulderPress1.jpg"),
        image2: require("../demonstration/shoulders/bbShoulderPress2.jpg"),
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
        name: "Shrugs",
        image1: require("../demonstration/shoulders/shrugs1.jpg"),
        image2: require("../demonstration/shoulders/shrugs2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "Shrugs primarily target the trapezius muscles, which are responsible for lifting and rotating the shoulder blades. They're performed by holding dumbbells or a barbell at your sides and lifting your shoulders towards your ears in a controlled manner.",
        replacement:
          "If you need an alternative to Shrugs, consider the Farmer's Walk. This exercise not only targets the trapezius muscles but also works the forearms, grip strength, and core stability. Simply hold a heavy dumbbell or kettlebell in each hand and walk for a certain distance or time, keeping your posture upright and shoulders back.",
      },
      {
        name: "Rear Delt Fly",
        image1: require("../demonstration/back/rearDeltFly1.jpg"),
        image2: require("../demonstration/back/rearDeltFly2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Rear Delt Fly with a machine targets the rear deltoids and upper back. Sit comfortably on the machine seat, adjust the handles to chest height, and pull them back by squeezing your shoulder blades together. Focus on keeping your back straight and your elbows slightly bent throughout the movement.",
        replacement:
          "An alternative to the Rear Delt Fly with a machine is the Rear Delt Fly with Dumbbells. This exercise also targets the rear deltoids and upper back. Stand with a dumbbell in each hand, bend at the hips, and raise the dumbbells to the sides until they reach shoulder height, focusing on squeezing your shoulder blades together at the top of the movement.",
      },
      {
        name: "Barebell Curl",
        image1: require("../demonstration/biceps/bbCurl1.jpg"),
        image2: require("../demonstration/biceps/bbCurl2.jpg"),
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
        image1: require("../demonstration/triceps/closeGripBench1.jpg"),
        image2: require("../demonstration/triceps/closeGripBench2.jpg"),
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
        name: "Preacher Curl",
        image1: require("../demonstration/biceps/preacherCurl1.jpg"),
        image2: require("../demonstration/biceps/preacherCurl2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Preacher Curl targets the biceps. It's performed by sitting on a preacher bench and curling a barbell or dumbbells upwards towards the shoulders while keeping the upper arms against the preacher bench for support.",
        replacement:
          "An alternative to the Preacher Curl is the Incline Dumbbell Curl. This exercise also targets the biceps but involves lying on an incline bench and curling dumbbells upwards towards the shoulders while keeping the elbows stationary.",
      },
      {
        name: "Straight Bar Extension",
        image1: require("../demonstration/triceps/straightBarExtension1.jpg"),
        image2: require("../demonstration/triceps/straightBarExtension2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Straight Bar Extension targets the triceps. It's performed by holding a straight bar overhead with arms fully extended and then bending the elbows to lower the bar behind the head before extending them back to the starting position.",
        replacement:
          "A suitable alternative to the Straight Bar Extension is the Overhead Tricep Extension with Dumbbell. This exercise also targets the triceps but involves holding a dumbbell with both hands and extending it overhead while keeping the elbows close to the head.",
      },
    ],
  },
  {
    day: "Day 27: Legs",
    exercises: [
      {
        name: "Deadlift",
        image1: require("../demonstration/legs/deadlift1.jpg"),
        image2: require("../demonstration/legs/deadlift2.jpg"),
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
        name: "BYT UT IGENNENENEN",
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
        name: "Standing Calf Raise",
        image1: require("../demonstration/legs/calfRaise1.jpg"),
        image2: require("../demonstration/legs/calfRaise2.jpg"),
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
    day: "Day 28: Rest",
    exercises: [
      {
        name: "Rest Day",
        sets: null,
        reps: null,
        completed: false,
        description:
          "Rest days are crucial for building muscle effectively! When you rest, your muscles have the opportunity to repair and grow stronger. It's also important to fuel your body with nutritious food to provide the energy and nutrients needed for muscle growth. Additionally, spending some time in the sun helps your body produce vitamin D, which is essential for muscle health and overall well-being. So make sure to take those rest days seriously, eat well, and enjoy some sunshine to support your muscle-building journey!",
        replacement: null,
      },
    ],
  },
  {
    day: "Day 29: Push",
    exercises: [
      {
        name: "Parallel Bar Dips",
        image1: require("../demonstration/triceps/dips1.jpg"),
        image2: require("../demonstration/triceps/dips2.jpg"),
        sets: 3,
        reps: 10,
        tip: "As many as possible",
        completed: false,
        description:
          "Parallel Bar Dips primarily target the triceps, chest, and shoulders. They're performed by gripping parallel bars with arms fully extended, lowering the body until the upper arms are parallel to the ground, then pushing back up to the starting position.",
        replacement:
          "If you need an alternative to Parallel Bar Dips, consider Bench Dips. This exercise also targets the triceps and chest but is performed using a bench. Sit on the edge of the bench, place your hands next to your hips, scoot forward, and lower your body until your upper arms are parallel to the ground. Push yourself back up to the starting position.",
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
        name: "Flat Barebell Bench",
        image1: require("../demonstration/chest/flatBBBench1.jpg"),
        image2: require("../demonstration/chest/flatBBBench2.jpg"),
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
        name: "Flat Dumbbell Bench",
        image1: require("../demonstration/chest/flatDBBench1.jpg"),
        image2: require("../demonstration/chest/flatDBBench2.jpg"),
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
        name: "Dumbbell Shoulder Press",
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
        tip: "Light Sets",
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
    day: "Day 30: Pull",
    exercises: [
      {
        name: "Barebell Row",
        image1: require("../demonstration/back/bbRow1.jpg"),
        image2: require("../demonstration/back/bbRow2.jpg"),
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
        image1: require("../demonstration/back/straightArmPulldown1.jpg"),
        image2: require("../demonstration/back/straightArmPulldown2.jpg"),
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
        image1: require("../demonstration/back/widegripPulldown1.jpg"),
        image2: require("../demonstration/back/widegripPulldown2.jpg"),
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
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Rear Delt Fly with a machine targets the rear deltoids and upper back. Sit comfortably on the machine seat, adjust the handles to chest height, and pull them back by squeezing your shoulder blades together. Focus on keeping your back straight and your elbows slightly bent throughout the movement.",
        replacement:
          "An alternative to the Rear Delt Fly with a machine is the Rear Delt Fly with Dumbbells. This exercise also targets the rear deltoids and upper back. Stand with a dumbbell in each hand, bend at the hips, and raise the dumbbells to the sides until they reach shoulder height, focusing on squeezing your shoulder blades together at the top of the movement.",
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
          "The Cable Hammer Curl targets the brachialis and brachioradialis muscles of the forearm, along with the biceps. It's performed by grasping cable attachments with a neutral grip and curling them towards the shoulders while keeping the elbows stationary.",
        replacement:
          "An effective alternative to the Cable Hammer Curl is the Dumbbell Hammer Curl. This exercise also targets the brachialis, brachioradialis, and biceps but involves using dumbbells instead of a cable machine, allowing for greater range of motion and muscle activation.",
      },
    ],
  },
  {
    day: "Day 31: Legs",
    exercises: [
      {
        name: "Leg Extension",
        image1: require("../demonstration/legs/legExtension1.jpg"),
        image2: require("../demonstration/legs/legExtension2.jpg"),
        sets: 3,
        reps: 12,
        tip: "Medium Sets",
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
        tip: "Heavy Sets",
        completed: false,
        description:
          "The Barbell Squat is a compound exercise targeting the quadriceps, hamstrings, glutes, and lower back. It's performed by squatting down while holding a barbell on the shoulders, then standing back up.",
        replacement:
          "An alternative to the Barbell Squat is the Goblet Squat. This exercise also targets the quadriceps, hamstrings, glutes, and lower back but involves holding a single dumbbell or kettlebell in front of the chest while squatting.",
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
    day: "Day 32: Chest & Back",
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
        name: "Flat Dumbbell Bench",
        image1: require("../demonstration/chest/flatDBBench1.jpg"),
        image2: require("../demonstration/chest/flatDBBench2.jpg"),
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
        name: "Straight Arm Pulldown",
        image1: require("../demonstration/back/straightArmPulldown1.jpg"),
        image2: require("../demonstration/back/straightArmPulldown2.jpg"),
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
        name: "Barebell Row",
        image1: require("../demonstration/back/bbRow1.jpg"),
        image2: require("../demonstration/back/bbRow2.jpg"),
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
    ],
  },
  {
    day: "Day 33: Delts & Arms",
    exercises: [
      {
        name: "Barebell Shoulder Press",
        image1: require("../demonstration/shoulders/bbShoulderPress1.jpg"),
        image2: require("../demonstration/shoulders/bbShoulderPress2.jpg"),
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
        name: "Shrugs",
        image1: require("../demonstration/shoulders/shrugs1.jpg"),
        image2: require("../demonstration/shoulders/shrugs2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "Shrugs primarily target the trapezius muscles, which are responsible for lifting and rotating the shoulder blades. They're performed by holding dumbbells or a barbell at your sides and lifting your shoulders towards your ears in a controlled manner.",
        replacement:
          "If you need an alternative to Shrugs, consider the Farmer's Walk. This exercise not only targets the trapezius muscles but also works the forearms, grip strength, and core stability. Simply hold a heavy dumbbell or kettlebell in each hand and walk for a certain distance or time, keeping your posture upright and shoulders back.",
      },
      {
        name: "Rear Delt Fly",
        image1: require("../demonstration/back/rearDeltFly1.jpg"),
        image2: require("../demonstration/back/rearDeltFly2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Rear Delt Fly with a machine targets the rear deltoids and upper back. Sit comfortably on the machine seat, adjust the handles to chest height, and pull them back by squeezing your shoulder blades together. Focus on keeping your back straight and your elbows slightly bent throughout the movement.",
        replacement:
          "An alternative to the Rear Delt Fly with a machine is the Rear Delt Fly with Dumbbells. This exercise also targets the rear deltoids and upper back. Stand with a dumbbell in each hand, bend at the hips, and raise the dumbbells to the sides until they reach shoulder height, focusing on squeezing your shoulder blades together at the top of the movement.",
      },
      {
        name: "Barebell Curl",
        image1: require("../demonstration/biceps/bbCurl1.jpg"),
        image2: require("../demonstration/biceps/bbCurl2.jpg"),
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
        image1: require("../demonstration/triceps/closeGripBench1.jpg"),
        image2: require("../demonstration/triceps/closeGripBench2.jpg"),
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
        name: "Preacher Curl",
        image1: require("../demonstration/biceps/preacherCurl1.jpg"),
        image2: require("../demonstration/biceps/preacherCurl2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Medium Sets",
        completed: false,
        description:
          "The Preacher Curl targets the biceps. It's performed by sitting on a preacher bench and curling a barbell or dumbbells upwards towards the shoulders while keeping the upper arms against the preacher bench for support.",
        replacement:
          "An alternative to the Preacher Curl is the Incline Dumbbell Curl. This exercise also targets the biceps but involves lying on an incline bench and curling dumbbells upwards towards the shoulders while keeping the elbows stationary.",
      },
      {
        name: "Straight Bar Extension",
        image1: require("../demonstration/triceps/straightBarExtension1.jpg"),
        image2: require("../demonstration/triceps/straightBarExtension2.jpg"),
        sets: 3,
        reps: 10,
        tip: "Normal Sets",
        completed: false,
        description:
          "The Straight Bar Extension targets the triceps. It's performed by holding a straight bar overhead with arms fully extended and then bending the elbows to lower the bar behind the head before extending them back to the starting position.",
        replacement:
          "A suitable alternative to the Straight Bar Extension is the Overhead Tricep Extension with Dumbbell. This exercise also targets the triceps but involves holding a dumbbell with both hands and extending it overhead while keeping the elbows close to the head.",
      },
    ],
  },
  {
    day: "Day 34: Legs",
    exercises: [
      {
        name: "Deadlift",
        image1: require("../demonstration/legs/deadlift1.jpg"),
        image2: require("../demonstration/legs/deadlift2.jpg"),
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
        name: "Standing Calf Raise",
        image1: require("../demonstration/legs/calfRaise1.jpg"),
        image2: require("../demonstration/legs/calfRaise2.jpg"),
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
];

export default workoutProgram;
