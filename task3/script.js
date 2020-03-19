/* Задание №3*/

document.addEventListener("DOMContentLoaded", () => {
	(function () {
		fetch("form.json")
			.then(response => response.json())
			.then(response => {
				load(response);
			});
	})();

	function load(response) {
		const {
			form: {
				name,
				items,
				postmessage
			}
		} = response;

		let output = ``;
		output += `<form name=${name}>`;

		for (let i = 0; i < items.length; i++) {
			if (items[i].type === "filler")
				output += `<div>${items[i].message}</div>`;

			if (items[i].type === "text") {
				output += ` <p>
						<label>
						${items[i].label}
						<br>
						<input
						type= '${items[i].type}'
						name='${items[i].name}' 
						placeholder='${items[i].placeholder} '
						required='${items[i].required}'
						value='${items[i].value}'
						class='${items[i].class}'
						 ${items[i].disabled ? "disabled" : ""}
						/>
						</label>
						</p>
						`;
			}
			if (items[i].type === "radio") {
				output += `<p>
						<label>
						${items[i].label}
						<br>
						<input
						type= '${items[i].type}'
						name='${items[i].name}' 
						value='${items[i].value}'
						class='${items[i].class}'
						 ${items[i].checked ? "checked" : ""}
						/>
						мужской
						</label>
						<label>
						<input
						type= '${items[i].type}'
						name='${items[i].name}' 
						value='${items[i].value}'
						class='${items[i].class}'
						 ${items[i].checked ? "checked" : ""}
						/>
						женский
						</label>
						</p>
						`;
			}
			if (items[i].type === "email") {
				output += `<p>
						<label>
						${items[i].label}
						<br>
						<input
						type= '${items[i].type}'
						name='${items[i].name}' 
						placeholder='${items[i].placeholder} '
						required='${items[i].required}'
						value='${items[i].value}'
						class='${items[i].class}'
						${items[i].disabled ? "disabled" : ""}
						/>
						</label>
						</p>
						`;
			}
			if (items[i].type === "tel") {
				output += `<p>
						<label>
						${items[i].label}
						<br>
						<input
						type= '${items[i].type}'
						name='${items[i].name}' 
						placeholder='${items[i].placeholder} '
						required='${items[i].required}'
						value='${items[i].value}'
						class='${items[i].class}'
						${items[i].disabled ? "disabled" : ""}
						/>
						</label>
						</p>
						`;
			}
			if (items[i].type === "textarea") {
				output += `<p>
						<label>
						${items[i].label}
						<br>
						<textarea
						cols="40"
						rows="5"
						name='${items[i].name}' 
						placeholder='${items[i].placeholder} '
						required='${items[i].required}'
						value='${items[i].placeholder}'
						class='${items[i].class}'
						${items[i].disabled ? "disabled" : ""}
						>
						</textarea>
						</label>
						</p>`;
			}
			if (items[i].type === "select") {
				let option = items[i].options.length;
				const countries = Object.values(items[i].options);
				output += `
						<p>
						<label>
						${items[i].label}
						<br>
						<select name=${items[i].name}>`;

				output += `<option>Выберите страну проживания</option>`;
				for (let i = 0; i < option; i++) {
					output += `<option 
							${countries[i].value} 
							${countries[i].selected ? "selected" : ""}
							>
							${countries[i].text}
							</option>`;
				}

				output += `
						</select>
						</label>
						</p>`;
			}
			if (items[i].type === "checkbox") {
				output += `<p><label>
						${items[i].label}
						<br>
						<input
						type='${items[i].type}'
						name='${items[i].name}' 
						required='${items[i].required}'
						value='${items[i].value}'
						class='${items[i].class}'
						${items[i].checked ? "checked" : ""}
						${items[i].disabled ? "disabled" : ""}
						/>
						</label></p>`;
			}

			if (items[i].type === "button") {
				output += `<label>
						<input
						type='${items[i].type}'
						class='${items[i].class}'
						value=${items[i].text}
						/>
						</label>`;
			}
		}
		output += `<div>${postmessage}</div>`;
		output += `</form>`;
		document.body.innerHTML = output;
	}
});