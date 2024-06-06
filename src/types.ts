import { type ExerciseType } from './generated/graphql'

export interface Exercise {
  id: string
  name: string
  description: string
  instructions: string
  sets: number
  duration: number
  repetitions: number
  type: ExerciseType
  video: string | null
  image: Image
}

export interface Workout {
  id: string
  name?: string | null | undefined
  subtitle?: string | null | undefined
  description?: string | null | undefined
  image: Image
}

interface Image {
  url: string
}
