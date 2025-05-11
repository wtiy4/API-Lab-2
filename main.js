fetch("https://coffee.alexflipnote.dev/random.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let img = document.createElement("img");
        document.body.appendChild(img);

        function update() {
            fetch("https://coffee.alexflipnote.dev/random.json")
                .then(response => response.json())
                .then(data => {
                    img.src = data.file;
                });
        }
        img.src = data.file;
        img.style.width = "200px"

        setInterval(update, 2000);
    });