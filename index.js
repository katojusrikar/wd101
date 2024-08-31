document.addEventListener("DOMContentLoaded", function () {
<<<<<<< HEAD
  const dobInput = document.getElementById("dob");
<<<<<<< HEAD
=======
  const today = new Date();
  const minAge = 18;
  const maxAge = 55; // Correct age capping logic
=======
  const email = document.getElementById("email");
  email.addEventListener("input", () => validatemail(email));

  function ny() {
    const dobInput = document.getElementById("dob");
    const today = new Date();
    const minAge = 18;
    const maxAge = 55;
>>>>>>> parent of 6187d3e (New)

    const minDate = new Date(
      today.getFullYear() - maxAge,
      today.getMonth(),
      today.getDate() + 1
    );
    const maxDate = new Date(
      today.getFullYear() - minAge,
      today.getMonth(),
      today.getDate() + 1
    );

    dobInput.min = minDate.toISOString().split("T")[0];
    dobInput.max = maxDate.toISOString().split("T")[0];
  }
  ny();

  const validatemail = (element) => {
    const value = element.value;
    let m = "";

    if (value === "") {
      m = "Email cann't be blank.";
    } else if (!/@/.test(value)) {
      m = "Email must contain '@'.";
    } else if (!/\./.test(value.split("@")[1])) {
      m = "Email must contain '.' after '@'.";
    } else {
      m = "";
    }

    element.setCustomValidity(m);
    element.reportValidity();
  };

>>>>>>> parent of 3136ced (New)
  const userForm = document.getElementById("user-form");
<<<<<<< HEAD
  const userEntriesContainer = document.getElementById("user-entries");
=======

  const saveUserForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const termsandconditions = document.getElementById("acceptTerms").checked;

    const entry = {
      name,
      email,
      password,
      dob,
      termsandconditions,
    };

    let userEntries = retrieveEntries();
    userEntries.push(entry);

    localStorage.setItem("users", JSON.stringify(userEntries));
    displayEntries();
    userForm.reset();
  };

  userForm.addEventListener("submit", saveUserForm);

  const retrieveEntries = () => {
    let entries = localStorage.getItem("users");
    if (entries) {
      return JSON.parse(entries);
    } else {
      return [];
    }
  };
>>>>>>> parent of 6187d3e (New)

  const displayEntries = () => {
    const entries = retrieveEntries();
    const tableEntries = entries
      .map((entry) => {
        return `<tr>
        <td class='border px-4 py-2'>${entry.name}</td>
        <td class='border px-4 py-2'>${entry.email}</td>
        <td class='border px-4 py-2'>${entry.password}</td>
        <td class='border px-4 py-2'>${entry.dob}</td>
        <td class='border px-4 py-2'>${
          entry.termsandconditions ? "Yes" : "No"
        }</td>
      </tr>`;
      })
      .join("\n");

<<<<<<< HEAD
    userEntriesContainer.innerHTML = `
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class='border px-4 py-2'>Name</th>
            <th class='border px-4 py-2'>Email</th>
            <th class='border px-4 py-2'>Password</th>
            <th class='border px-4 py-2'>Dob</th>
            <th class='border px-4 py-2'>Accepted terms?</th>
          </tr>
        </thead>
        <tbody>
          ${tableEntries}
        </tbody>
      </table>`;
  };

  const saveUserForm = (event) => {
    event.preventDefault();

    const dob = new Date(dobInput.value);
    const today = new Date();
    const minAge = 18;
    const maxAge = 55;

    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    if (age < minAge || age > maxAge) {
      alert(
        "Please enter a date of birth that gives an age between 18 and 55 years."
      );
      return;
    }

    const entry = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      dob: document.getElementById("dob").value,
      termsandconditions: document.getElementById("acceptTerms").checked,
    };

    const entries = retrieveEntries();
    entries.push(entry);
    localStorage.setItem("users", JSON.stringify(entries));

    displayEntries();
    userForm.reset(); // Clear form fields after successful submission
  };

  userForm.addEventListener("submit", saveUserForm);

  const retrieveEntries = () => {
    const entries = localStorage.getItem("users");
    return entries ? JSON.parse(entries) : [];
  };

  displayEntries(); // Load entries on initial page load
=======
    const table = `<table class="table table-striped"><thead>
      <tr>
        <th>Name</th> &nbsp
        <th>Email</th> &nbsp
        <th>Password</th> &nbsp
        <th>Dob</th> &nbsp
        <th>Accepted Terms?</th> &nbsp
      </tr>
    </thead><tbody>${tableEntries}</tbody></table>`;

    document.getElementById("user-entries").innerHTML = table;
  };

  displayEntries();
>>>>>>> parent of 6187d3e (New)
});
