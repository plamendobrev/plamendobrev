const homeArticleContent = `<article id="home-article">` + document.querySelector("#home-article").innerHTML + "</div>";

for (let i = 0; i < document.querySelectorAll("nav ul li button").length; i++) {
    document.querySelectorAll("nav ul li button")[i].addEventListener("click", function() {
        for (let i = 0; i < document.querySelectorAll("nav ul li button").length; i++) {
            document.querySelectorAll("nav ul li button")[i].classList.remove("selected");
        }

        document.querySelectorAll("nav ul li button")[i].classList.add("selected");

        for (let i = 0; i < document.querySelectorAll("button").length; i++) {
            document.querySelectorAll("button")[i].style.pointerEvents = "none";
            document.querySelectorAll("button")[i].setAttribute("tabindex", "-1");
        }

        document.querySelector("main article").style.animation = "fade-out 0.2s forwards, shrink 0.3s 0.2s forwards";
        setTimeout(function() {
            document.querySelector("main article").remove();

            switch (document.querySelectorAll("nav ul li button")[i].getAttribute("id")) {
                case "home-button":
                    document.querySelector("main").insertAdjacentHTML("beforeend", homeArticleContent);

                    break;
                case "about-button":
                    document.querySelector("main").insertAdjacentHTML("beforeend", `
                    <article id="about-article">
                        <div class="wrapper">
                            <section>
                                <div>
                                    <figure>
                                        <img alt="A portrait of Plamen Dobrev" draggable="false" src="./public/assets/images/plamen-dobrev-portrait.jpeg">
                                    </figure>
                                </div>
                                <div>
                                    <div>
                                        <h3>I’m Plamen…</h3>
                                        <p>I honestly don’t have much to say here yet. I’m just 19 years old, and I’m from Bulgaria. I have been actively learning web development since 2018. I have done quite a few things since then. You will be able to explore some of my work and its history on this little website. I hope you find what you see here interesting. I will also be posting updates about future projects, as well as the ones I’m currently working on. Enjoy!</p>
                                    </div>
                                    <div>
                                        <h3>Coding Skills</h3>
                                        <p>HTML5, CSS3, JavaScript, Node.js, Socket.IO, Electron, SQL, MongoDB, Redis.</p>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <h3>But wait!</h3>
                                    <p>What about my hobbies? What about my favourite type of music? What about my favourite colour?</p>
                                    <p>Fine…</p>
                                    <p>Let’s do it!</p>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <h3>Hobbies</h3>
                                    <p>To be honest, I don’t believe I have many hobbies, or at least I don’t consider them as such. Cooking, particularly when it involves making desserts, is something I find enjoyable. I also love working out at home. Is that really a hobby, though?</p>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <h3>Languages</h3>
                                    <p>I am fluent in both English and Bulgarian. Currently, I am learning Spanish and French.</p>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <h3>Music</h3>
                                    <p>In my work, I actually draw significant inspiration from music, particularly pop and hip-hop genres. Some of my favorite artists include Madonna, Britney Spears, Miley Cyrus, Nicki Minaj, and of course, my dear love AD-22. 💗</p>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <h3>Favorite Color</h3>
                                    <p>It isn’t just one! But one of them is kind of obvious!</p>
                                </div>
                            </section>
                        </div>
                    </article>
                    `);

                    break;
            }

            setTimeout(function() {
                for (let i = 0; i < document.querySelectorAll("button").length; i++) {
                    document.querySelectorAll("button")[i].removeAttribute("style");
                    document.querySelectorAll("button")[i].setAttribute("tabindex", "0");
                }

                document.querySelectorAll("nav ul li button")[i].setAttribute("tabindex", "-1");
            }, 500);
        }, 500);
    });
}