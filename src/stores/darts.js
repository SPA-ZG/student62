import { defineStore } from "pinia";

export const useDartsStore = defineStore({
  id: "darts",
  state: () => ({
    players: [
      {
        id: 1,
        firstName: "Michael",
        lastName: "Smith",
        wins: 0,
        losses: 0,
        draws: 0,
        points: 0,
      },
      {
        id: 2,
        firstName: "Michael",
        lastName: "vanGerwen",
        wins: 0,
        losses: 0,
        draws: 0,
        points: 0,
      },
      {
        id: 3,
        firstName: "Luke",
        lastName: "Humphries",
        wins: 0,
        losses: 0,
        draws: 0,
        points: 0,
      },
      {
        id: 4,
        firstName: "Nathan",
        lastName: "Aspinall",
        wins: 0,
        losses: 0,
        draws: 0,
        points: 0,
      },
      {
        id: 5,
        firstName: "Gerwyn",
        lastName: "Price",
        wins: 0,
        losses: 0,
        draws: 0,
        points: 0,
      },
      {
        id: 6,
        firstName: "Rob",
        lastName: "Cross",
        wins: 0,
        losses: 0,
        draws: 0,
        points: 0,
      },
      {
        id: 7,
        firstName: "Danny",
        lastName: "Noppert",
        wins: 0,
        losses: 0,
        draws: 0,
        points: 0,
      },
      {
        id: 8,
        firstName: "Jonny",
        lastName: "Clayton",
        wins: 0,
        losses: 0,
        draws: 0,
        points: 0,
      },
    ],
  }),
  getters: {
    allPlayers() {
      return this.players;
    },
  },
  actions: {
    updateResult(id, wins, losses, draws, points) {
      const player = this.players.find((p) => p.id == id);
      if (player) {
        player.wins += wins;
        player.losses += losses;
        player.draws += draws;
        player.points = points;
      }
    },
  },
});
