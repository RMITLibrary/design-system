<form onsubmit="event.preventDefault();">
<p>As the context and layout can vary dramatically from project to project, margins are not added by default. Instead, write addtional styles or make use of the responsive, inbuilt spacing classes to provide space.</p>
<div class="margin-bot-md">
	<label for="my-field" class="form-label">Title</label>
	<input type="text" class="form-control" id="my-field">
</div>
<h2>Side by side</h2>
<p>Apply input-group to the container div to allow label to be placed alongside the input field. Extra styles would need to be written to ensure alignment with severval label and field groups.</p>
<div class="input-group margin-bot-md">
	<label for="title-url" class="form-label">URL</label>
	<input type="text" name="title-url" id="title-url" class="form-control">
</div>
<h2>Checkbox</h2>
<p>ffdrfdfd</p>
<div class="margin-bot-md">
	<input type="checkbox" id="derivative-check" class="form-check-input">
    <label for="derivative-check">This work is a derivative</label>
</div>
<h2>Radio buttons</h2>
<p>ffdrfdfd</p>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
<h2>Select</h2>
<p>ffdrfdfd</p>
<select id="license-select" class="form-select">
	<option selected="">Choose a license...</option>
	<!-- other options generated via javaScript -->
	<option value="CC BY">Attribution (CC BY)</option>
	<option value="CC BY-SA">Attribution-ShareAlike (CC BY-SA)</option>
	<option value="CC BY-ND">Attribution-NoDerivs (CC BY-ND)</option>
	<option value="CC BY-NC">Attribution-NonCommercial (CC BY-NC)</option>
	<option value="CC BY-NC-SA">Attribution-NonCommercial-ShareAlike (CC BY-NC-SA)</option>
	<option value="CC BY-NC-ND">Attribution-NonCommercial-NoDerivs (CC BY-NC-ND)</option>
	<option value="Public Domain">Public Domain (General)</option>
	<option value="Public Domain (CC0)">Public Domain (CC0)</option>
</select>
<h2>Select sized</h2>
<p>ffdrfdfd</p>
<select id="license-select" class="form-select" size="9">
	<option selected="">Choose a license...</option>
	<!-- other options generated via javaScript -->
	<option value="CC BY">Attribution (CC BY)</option>
	<option value="CC BY-SA">Attribution-ShareAlike (CC BY-SA)</option>
	<option value="CC BY-ND">Attribution-NoDerivs (CC BY-ND)</option>
	<option value="CC BY-NC">Attribution-NonCommercial (CC BY-NC)</option>
	<option value="CC BY-NC-SA">Attribution-NonCommercial-ShareAlike (CC BY-NC-SA)</option>
	<option value="CC BY-NC-ND">Attribution-NonCommercial-NoDerivs (CC BY-NC-ND)</option>
	<option value="Public Domain">Public Domain (General)</option>
	<option value="Public Domain (CC0)">Public Domain (CC0)</option>
</select>
<h2>Select small</h2>
<p>ffdrfdfd</p>
<select class="form-select form-select-sm" aria-label=".form-select-sm example">
	<option selected>Open this select menu</option>
	<option value="1">One</option>
	<option value="2">Two</option>
	<option value="3">Three</option>
</select>
</form>
<h2>Validation</h2>
<p>While a complete implementation of form validation is beyond the scope of this design system, Bootstrap offers some support for form validation off the shelf. These styles can be easily adapted to suit the context of a given project.</p>
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()
</script>