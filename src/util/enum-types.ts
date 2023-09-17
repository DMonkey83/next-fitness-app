// Equipment Type Enum
export enum EquiptmentType {
  Barbell = 'Barbell',
  Dumbbell = 'Dumbbell',
  Machine = 'Machine',
  Bodyweight = 'Bodyweight',
  Other = 'Other',
  Cable = 'Other'
};

// Completion Type Enum
export enum CompletionEnum {
  Completed = 'Completed',
  Incomplete = 'Incomplete',
  NotStarted = 'NotStarted'
}

// Weight Unit Enum
export enum WeightUnit {
  Kilograms = 'kg',
  Pounds = 'lb'

}

// Create the muscle_group_enum type if it doesn't exist
export enum MuscleGroupEnum {
  Chest = 'Chest',
  Back = 'Back',
  Legs = 'Legs',
  Shoulders = 'Shoulders',
  Arms = 'Arms',
  Abs = 'Abs',
  Cardio = 'Cardio'
}

// Create the muscle_group_enum type if it doesn't exist
export enum WorkoutGoalEnum {
  BuildMuscle = 'Build Muscle',
  LooseWeight = 'Lose Weight',
  ImproveEndurance = 'Improve Endurance',
  MaintainFitness = 'Maintain Fitness',
  ToneBody = 'Tone Body',
  Custom = 'Custom'
}

// Define the "Difficulty" enum type
export enum Difficulty {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced'
}

// Define the "Visibility" enum type
export enum Visibility {
  Public = 'Public',
  Private = 'Private'
}

// Define the "Rating" enum type
export enum Rating {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5
}

// Define the "FatigueLevel" enum type
export enum FatigueLevel {
  VeryLight = 'Very Light',
  Light = 'Light',
  Moderate = 'Moderate',
  Heavy = 'Heavy',
  VeryHeavy = 'Very Heavy'

}
