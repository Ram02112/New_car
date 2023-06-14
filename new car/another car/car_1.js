const carsDisplay = document.getElementById("display_cars");

const generateCars = () => {
  return (carsDisplay.innerHTML = carsData
    .map((x) => {
      let { id, company, model, price, img } = x;
      return `
      <div class="display_con">
      <div id=${id} class="car_display">
        <img src=${img} class="car_img"/>
        <div class="car_content">
        <h2>Company :${company}</h2>
        <h3>Model :${model}</h3>
        <p>Price :${price} Lakhs</p>
        <button class="call-back" onclick="callBack()">Get a call back</button>
        </div>
      </div>
      </div>
    `;
    })
    .join());
};
generateCars();

function callBack() {
  alert("You need to 'LOGIN' to use this feature");
}
