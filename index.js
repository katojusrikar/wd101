document.addEventListener("DOMContentLoaded", function () {
  const dobInput = document.getElementById("dob");
  const userForm = document.getElementById("user-form");
  const userEntriesContainer = document.getElementById("user-entries");

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
});
