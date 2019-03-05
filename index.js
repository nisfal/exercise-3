// @nisfal

const getPeoples = () => {
  try {
    return axios.get('https://swapi.co/api/people')
  } catch (error) {
    console.error(error)
  }
}
const app = document.getElementById('root');

const container = document.createElement('tbody');
container.setAttribute('id', 'myTable');

app.appendChild(container);

const countPeoples = async () => {
  const peoples = getPeoples()
    .then(response => {
      if (response.data.results) {
        var x = response.data.results;
        for (let index = 0; index < x.length; index++) {
          const element = x[index];
          console.log(element);
          
          const star = document.createElement('tr');
      // star.setAttribute('class', '');

      const nama = document.createElement('td');
      nama.textContent = element.name;

      const tinggi = document.createElement('td');
      tinggi.textContent = `${element.height} cm`;

      const berat = document.createElement('td');
      berat.textContent = `${element.mass} kg`;
      
      const rambut = document.createElement('td');
      rambut.textContent = element.hair_color;

      const kulit = document.createElement('td');
      kulit.textContent = element.skin_color;

      const mata = document.createElement('td');
      mata.textContent = element.eye_color;

      const lahir = document.createElement('td');
      lahir.textContent = element.birth_year;
      
      const kelamin = document.createElement('td');
      kelamin.textContent = element.gender;

      const alamat = document.createElement('td');
      container.appendChild(star);
      star.appendChild(nama);
      star.appendChild(tinggi);
      star.appendChild(berat);
      star.appendChild(rambut);
      star.appendChild(kulit);
      star.appendChild(mata);
      star.appendChild(lahir);
      star.appendChild(kelamin);
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
}

countPeoples()