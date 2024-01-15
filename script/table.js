gsap.from("#tableau h2", {
  opacity: 0,       // Définissez l'opacité initiale à 0 (invisible)
  y: 50,            // Déplacez verticalement vers le bas
  duration: 1,      // Durée de l'animation en secondes
  ease: "power4.out", // Courbe d'animation (facultatif, ajustez selon vos préférences)
  scrollTrigger: {
    trigger: "#tableau", // Déclencheur de l'animation (section du tableau)
    start: "top 80%",    // Moment où l'animation commence (ajustez selon vos besoins)
    toggleActions: "play none none reverse", // Comportement de l'animation en défilement
  },
});

// Fonction pour afficher la modal
function showModal() {
  // Affiche la modal en animant son apparition
  document.querySelector(".modal").style.display = "block";
  gsap.set(".modal-content", {y: -150, opacity: 0});
  gsap.to(".modal-content", {
    duration: 0.5,
    y: 0,
    opacity: 1
  });
}

// Fonction pour cacher la modal
function hideModal() {
  // Cache la modal en animant sa disparition
  gsap.to(".modal-content", {
    duration: 0.5,
    y: +150,
    opacity: 0,
    onComplete: () => {
      document.querySelector(".modal").style.display = "none";
    }
  });
}

let i = 1;

// Fonction pour créer une nouvelle rangée dans le tableau
function createRow() {
  let modalButton = document.getElementById("modalButton");
  modalButton.value = "Ajouter";
  modalButton.onclick = function () {
    create();
  };

  // Affiche la modal pour ajouter une rangée
  showModal();
}

// Fonction pour ajouter une rangée au tableau
function create() {
  let firstName = document.getElementById("firstNameInput").value;
  let lastName = document.getElementById("lastNameInput").value;
  let email = document.getElementById("emailInput").value;

  if (firstName && lastName && email) {
    let rowIndex = i;
    addRow([
      firstName,
      lastName,
      email,
      '<button onclick="modifyRow(' + rowIndex + ', \'' + firstName + '\', \'' + lastName + '\', \'' + email + '\')"><i class="fas fa-edit"></i></button>' +
      '<button onclick="removeRow(' + rowIndex + ')"><i class="fas fa-trash"></i></button>'
    ]);
    document.getElementById("dataForm").reset();
    hideModal();
    i++;
  }
}

// Fonction pour ajouter une rangée au tableau
function addRow(data) {
  let table = document.getElementById("table");
  let newRow = table.insertRow(-1);
  newRow.id = i;
  data.forEach((el) => {
    newRow.insertCell(-1).innerHTML = el;
  });

  // Anime l'apparition de la nouvelle rangée
  gsap.from(newRow, {duration: 1, autoAlpha: 0, y: -20});
}

// Fonction pour modifier une rangée du tableau
function modifyRow(rowIndex, firstName, lastName, email) {
  // Remplit les champs de la modal avec les valeurs de la rangée
  document.getElementById("firstNameInput").value = firstName;
  document.getElementById("lastNameInput").value = lastName;
  document.getElementById("emailInput").value = email;

  // Change le bouton de la modal en "Modifier"
  let modalButton = document.getElementById("modalButton");
  modalButton.value = "Modifier";
  modalButton.onclick = function () {
    updateRow(rowIndex);
  };

  // Affiche la modal pour la modification
  showModal();
}

// Fonction pour mettre à jour une rangée du tableau
function updateRow(rowIndex) {
  let firstName = document.getElementById("firstNameInput").value;
  let lastName = document.getElementById("lastNameInput").value;
  let email = document.getElementById("emailInput").value;

  // Met à jour la rangée du tableau avec les nouvelles valeurs
  let table = document.getElementById("table");
  let row = table.rows[rowIndex];
  row.cells[0].innerHTML = firstName;
  row.cells[1].innerHTML = lastName;
  row.cells[2].innerHTML = email;

  // Réinitialise et cache la modal
  document.getElementById("dataForm").reset();
  hideModal();
}

// Fonction pour supprimer une rangée du tableau
function removeRow(rowIndex) {
  let table = document.getElementById("table");
  if (table.rows.length > rowIndex) {
    let row = table.rows[rowIndex];

    // Anime la disparition de la rangée avant de la supprimer
    gsap.to(row, {
      duration: 1,
      autoAlpha: 0,
      y: 20,
      onComplete: function () {
        table.deleteRow(rowIndex);
      }
    });
  }
}
