<template>
  <h2>Kalkulator za masu i kategoriju.</h2>
  <form>
    <div>
      <label>Kilogrami: </label>
      <div>
        <input
          v-model.number="kgs"
          type="number"
          id="kg"
          @keyup.enter="kgsToLbs"
          min="0"
        />
      </div>
    </div>

    <div>
      <label>Funte: </label>
      <div>
        <input
          v-model.number="lbs"
          type="number"
          id="lbs"
          @keyup.enter="lbsToKgs"
          min="0"
        />
      </div>
    </div>

    <div>
      <!-- INTERPOLATION -->
      <p>Kilogrami: {{ kgs }}</p>
      <p>Funte: {{ lbs }}</p>
    </div>
  </form>

  <div>
    <!-- INTERPOLATION -->
    <h3>Kategorija: {{ category.category }}</h3>
    <h3>Prvakinja: {{ category.womenChamp }}</h3>
    <h3>Prvak: {{ category.menChamp }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kgs: 0,
      lbs: 0,
    };
  },
  methods: {
    lbsToKgs() {
      this.kgs = Math.round(this.lbs * 0.453592);
    },
    kgsToLbs() {
      this.lbs = Math.round(this.kgs / 0.453592);
    },
  },
  computed: {
    category() {
      const weight = this.lbs;

      if (weight > 0 && weight <= 115) {
        return {
          category: "Strawweight (Slamka kategorija)",
          womenChamp: "Zhang Weili",
          menChamp: "-",
        };
      } else if (weight > 115 && weight <= 125) {
        return {
          category: "Flyweight (Muha kategorija)",
          womenChamp: "Alexa Grasso",
          menChamp: "Alexandre Pantoja",
        };
      } else if (weight > 125 && weight <= 135) {
        return {
          category: "Bantamweight",
          womenChamp: "-",
          menChamp: "Sean O'Malley",
        };
      } else if (weight > 135 && weight <= 145) {
        return {
          category: "Featherweight (Kategorija Pero)",
          womenChamp: "-",
          menChamp: "Alexander Volkanovski",
        };
      } else if (weight > 145 && weight <= 155) {
        return {
          category: "Lightweight (Laka kategorija)",
          womenChamp: "-",
          menChamp: "Islam Makhachev",
        };
      } else if (weight > 155 && weight <= 170) {
        return {
          category: "Welterweight",
          womenChamp: "-",
          menChamp: "Leon Edwards",
        };
      } else if (weight > 170 && weight <= 185) {
        return {
          category: "Middleweight (Srednja kategorija)",
          womenChamp: "-",
          menChamp: "Sean Strickland",
        };
      } else if (weight > 185 && weight <= 205) {
        return {
          category: "Light Heavyweight (Poluteška kategorija)",
          womenChamp: "-",
          menChamp: "Alex Perreira",
        };
      } else if (weight > 205 && weight <= 265) {
        return {
          category: "Heavyweight (Teška kategorija)",
          womenChamp: "-",
          menChamp: "Jon Jones",
        };
      } else {
        return "";
      }
    },
  },
};
</script>

<style></style>
