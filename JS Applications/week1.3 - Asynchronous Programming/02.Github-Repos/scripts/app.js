function loadRepos() {
	const reposUL = document.getElementById('repos');
	const username = document.getElementById('username').value;
	let url = `https://api.github.com/users/${username}/repos`;
	//            <a href="{repo.html_url}">{repo.full_name}</a>

	fetch(url)
		.then(res => res.json())
		.then(repos => {
			reposUL.innerHTML = '';
			repos.forEach(repo => {
				const aElement = document.createElement('a');
				aElement.href = repo.html_url;
				aElement.textContent = repo.full_name;
				const liElement = document.createElement('li');
				liElement.appendChild(aElement);

				reposUL.appendChild(liElement);
			});

		})
		.catch(err => console.log(err)
		)



}