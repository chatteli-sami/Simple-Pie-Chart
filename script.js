const ctx = document.querySelector("#myChart");

new CharacterData(ctx, {
  type: "pie",
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Simple Chart",
        data: [200, 50, 100], // chart Data,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  },
});
