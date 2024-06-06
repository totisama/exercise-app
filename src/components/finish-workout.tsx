export const FinishWorkout = ({
  finishedWorkout,
}: {
  finishedWorkout: boolean
}) => {
  return (
    <>
      {finishedWorkout && (
        <div className='absolute rounded-3xl top-1/2 py-5 bg-orange w-4/5'>
          <h3 className='text-center text-4xl font-bold'>You Finished!!</h3>
        </div>
      )}
    </>
  )
}
