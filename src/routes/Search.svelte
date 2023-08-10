<script>
  import SearchTool from "~/components/SearchTool.svelte"
  import WorkoutList from "~/components/WorkoutList.svelte"
  import Workout from "~/components/Workout.svelte"
  import { initWorkouts, theWorkout } from '~/store/workouts'

  initWorkouts()
</script>

<div class="container">
  <SearchTool />
  {#if $theWorkout.name != undefined}
    <Workout />
  {/if}
  <WorkoutList />
</div>

<style lang="scss"></style>