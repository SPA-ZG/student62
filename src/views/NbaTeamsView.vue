<template>
  <h2>Stranica o NBA timovima!</h2>
  <div class="container-fluid">
    <nba-team
      v-for="team in nbaTeams"
      :key="team.id"
      :image="team.image"
      :teamName="team.teamName"
      :coach="team.coach"
    />
  </div>
</template>

<script>
import NbaTeam from "../components/NbaTeam.vue";
import nbaTeamsData from "../../nbaTeams.json";
export default {
  components: {
    NbaTeam,
  },
  data() {
    return {
      nbaTeams: nbaTeamsData,
    };
  },
};
</script>

<style scoped>
/* SCOPED STYLE */
.container-fluid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.nba-team {
  margin: 8px;
}
</style>
