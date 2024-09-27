<template>
  <div>
    <h2>Turnir</h2>
    <table>
      <thead>
        <tr>
          <th>Ime</th>
          <th>Prezime</th>
          <th>Bodovi</th>
          <th>Pobjede</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in allPlayers" :key="player.id">
          <td>{{ player.firstName }}</td>
          <td>{{ player.lastName }}</td>
          <td>{{ player.points }}</td>
          <td>{{ player.wins }}</td>
          <td>
            <form @submit.prevent="updateResults(player)">
              <label>Pobjede:</label>
              <input
                v-model.number="playerWins[player.id]"
                type="number"
                min="0"
              />
              <label>Porazi:</label>
              <input
                v-model.number="playerLosses[player.id]"
                type="number"
                min="0"
              />
              <label>Remiji:</label>
              <input
                v-model.number="playerDraws[player.id]"
                type="number"
                min="0"
              />
              <button type="submit">Unesi</button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useDartsStore } from "../stores/darts";

export default defineComponent({
  setup() {
    const dartsStore = useDartsStore();
    const allPlayers = dartsStore.allPlayers;

    const playerWins = ref({});
    const playerLosses = ref({});
    const playerDraws = ref({});

    allPlayers.forEach((player) => {
      playerWins.value[player.id] = 0;
      playerLosses.value[player.id] = 0;
      playerDraws.value[player.id] = 0;
    });

    const updateResults = (player) => {
      const newPoints =
        player.points +
        playerWins.value[player.id] * 2 +
        playerDraws.value[player.id] * 1;
      dartsStore.updateResult(
        player.id,
        playerWins.value[player.id],
        playerLosses.value[player.id],
        playerDraws.value[player.id],
        newPoints
      );
      playerWins.value[player.id] = 0;
      playerLosses.value[player.id] = 0;
      playerDraws.value[player.id] = 0;
    };
    return {
      updateResults,
      allPlayers,
      playerWins,
      playerDraws,
      playerLosses,
    };
  },
});
</script>
