const intersectionCallback = function(entries) {
    for (const entry of entries) {
         if (entry.isIntersecting) {
            entry.target.dataset.isInViewport = "true";
        }
    }
}

const observer = new IntersectionObserver(intersectionCallback);

const homeArticleContent = `<article id="home-article">` + document.querySelector("#home-article").innerHTML + "</div>";

const observeContent = function() {
    const elementsToBeAnimated = document.querySelectorAll("[data-is-in-viewport]");
            
    for (const elementToBeAnimated of elementsToBeAnimated) {
        observer.observe(elementToBeAnimated);
    }
}

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
                                        <img alt="A portrait of Plamen Dobrev" draggable="false" src="./public/assets/images/plamen-dobrev-portrait.jpg">
                                    </figure>
                                </div>
                                <div>
                                    <div>
                                        <h3>I’m Plamen…</h3>
                                        <p>I honestly don’t have much to say here yet. I’m just 20 years old, and I’m from Bulgaria. I have been actively learning web development since 2018. I have done quite a few things since then. You will be able to explore my recent work on this little website. I hope you find what you see here interesting. I will be posting updates about future projects, as well as the ones I’m currently working on. Enjoy!</p>
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
                                <div>
                                    <h3>Hobbies</h3>
                                    <p>To be honest, I don’t believe I have many hobbies, or at least I don’t consider them as such. I enjoy various types of workouts, such as Pilates and Tabata. I also enjoy reading books.</p>
                                </div>
                                <div>
                                    <h3>Languages</h3>
                                    <p>I am fluent in both English and Bulgarian. Currently, I am learning French.</p>
                                </div>
                                <div>
                                    <h3>Music</h3>
                                    <p>In my work, I actually draw significant inspiration from music, particularly pop and hip-hop genres. Some of my favorite artists include Madonna, Britney Spears, Miley Cyrus and Nicki Minaj. Just to name a few.</p>
                                </div>
                                <div>
                                    <h3>Favorite Color</h3>
                                    <p>Changes all the time. Never orange though.</p>
                                </div>
                            </section>
                        </div>
                    </article>
                    `);

                    break;
                    document.querySelector("main").insertAdjacentHTML("beforeend", `
                    <article id="words-speak-volumes-article">
                        <div class="wrapper">
                            <section>
                                <div>
                                    <figure>
                                        <img alt="Logo of “Words Speak Volumes”" draggable="false" src="./public/assets/images/words-speak-volumes-text-white.svg">
                                    </figure>
                                </div>
                                <div>
                                    <h3>Background</h3>
                                    <p>During Wealm’s development, I came up with the idea of creating a platform for buying and selling books. There’s a weird catch to this, though. I didn't become interested in books myself until later. It was my dear friend Raya who made me willingly open a book for the first time. But even prior to that, as strange as it sounds, I was still fascinated by the concept of reading, though, especially on a screen, since I came up with some ideas. I was fully aware of the fact that digital bookstores have existed for a long time. But I wanted to try to create something extra. My work has to feel like it is mine, it has to be truly unique, it has to have a piece of my soul, it can’t be just another bookstore.</p>
                                    <p>Like I said, these thoughts occurred during Wealm’s development. I wasn’t even thinking about the name of the bookstore in question. I kept going with Wealm, and right after the first tournament where I presented it, I spiraled down into a huge depression. I was done with Wealm, or at least I knew it was something I wasn’t really going to develop much further. I felt like the idea didn’t really have a future. I didn’t even think like this because I had to rush its development; I just felt like I didn’t really stand any chance against competitors. But I also fell out of love with the idea. That time around, I was actually pretty open with my family about what I was working on. I honestly did not feel like I had the support I needed. I was very hurt. Quickly, however, I was also ready to move on, in many aspects. The day after the tournament, I began to work and think on this still pretty recent idea. An idea that I knew I was not going to ignore.</p>
                                </div>
                                <div>
                                    <h3>Early Development</h3>
                                    <figure data-is-in-viewport="false">
                                        <img alt="Icon of Letters" draggable="false" src="./public/assets/images/letters-icon-old.png">
                                        <img alt="Icon of Books" draggable="false" src="./public/assets/images/books-icon-old.png">
                                    </figure>
                                    <p>I came up with the concept of separating the project into two apps. I called them Type and Books. I renamed Type to Letters a few days later because it just felt better and more creative. Letters is an app for writing only. I wanted people to use it to write all sorts of things, not just books. Books, on the other hand, is intended to be an app specifically for books, as the name suggests. The concept is simple – you write in Letters, and you can easily share and even price your creations in Books.</p>
                                    <p>The day after the tournament, I edited the logos. I use the term “edited” because I didn’t actually draw them; I can’t draw. The icons are created by <a href="https://www.flaticon.com/authors/freepik/">Freepik</a> and <a href="https://www.flaticon.com/authors/srip">srip</a>. What I did was resize them and place them in rounded rectangles.</p>
                                    <p>I was very inspired and ready to work. I knew this was going to be a huge step for me. This project was intended to be something much bigger than Wealm. I began by creating a main site. While Nemalp, now called Revamle, was never mentioned during the presentation of Wealm, the project still belonged to Nemalp, if that makes sense. I had briefly worked on a website for Nemalp before, which was never finished because I decided to focus on Wealm first. At that time, I hadn’t developed anything like an account system that connects users to everything related to Revamle or Nemalp. So, I started working on such a site from scratch.</p>
                                </div>
                                <div>
                                    <h3>The Main Site</h3>
                                    <figure data-is-in-viewport="false">
                                        <img alt="Login Screen of the Older Main Site" draggable="false" src="./public/assets/images/older-main-site-login-screen.png">
                                        <img alt="Sign Up Screen of the Older Main Site" draggable="false" src="./public/assets/images/older-main-site-sign-up-screen.png">
                                    </figure>
                                    <p>I began working on it the day I edited the logos. I’ve made slight changes to the design over the time I’ve been working on it. The current design was established quite easily, but there was initially a different approach to the design. However, I didn’t proceed with it because I wanted the site to feel even simpler and easier to navigate on every page. I believe that having fewer pages is more appreciated and enhances the user experience. That was the issue with the first design—it had too many separate pages.</p>
                                    <p>As I became busier and more engrossed in the “school” I was attending, the development slowly came to a halt. Or rather, I paused it. However, there was another issue: the code was bad. Very, very, very bad. While it did function, maintaining it was becoming increasingly difficult. After being compelled to pause my work, I was honestly devastated. I couldn’t bear the fact that my site not only needed to be completed but essentially remade beforehand. In the summer of 2021, I felt exhausted and lacking in inspiration. I didn’t work on anything, using the time to rest and rejuvenate, returning with new ideas, designs, and goals. When the new school year began, I was once again occupied, especially at the start, but I had had enough. In December, almost a year since I last worked on it, I started working on it again. And I was more than ready to demonstrate to myself, above all, what I’m capable of.</p>
                                </div>
                                <div>
                                    <h3>Letters</h3>
                                    <p>I was still very busy with school, so the process was slow, but I was still progressing. I focused on the main site. By the time summer arrived, I had just finished it, which was exactly how I planned it. Freedom brings inspiration, creativity, and energy that I needed to put into Letters. The ideas flowed naturally, and there was no stopping. I kept going, loving every second of it.</p>
                                    <p>When I began developing the main site back in December 2020, I actually immediately started working on Letters. Initially, it was intended to be a downloadable application rather than a browser-based one. However, I halted its development because I felt that the main site needed to be completed first. I realized that I needed an account system in place. This time, I resolved to approach things one step at a time, without any more chaos.</p>
                                    <p>As I mentioned, when I returned to Letters in the summer of 2022, I brought with me numerous new ideas and perspectives. One of these was the belief that Letters should be easy to use and accessible in various forms – via web browsers, desktop applications, mobile phones, and more. I felt strongly that everyone should have access to a platform dedicated to self-expression. Consequently, I abandoned the initial design and concept as it no longer aligned with my vision. Surprisingly, the break from work ultimately enhanced my vision and fueled my determination to bring my ideas to life. One of my most memorable is the “magic effects”. Though challenging to translate from imagination to reality, I firmly believe this idea holds immense potential and can imbue a book with depth in a manner never seen before.</p>
                                </div>
                                <div>
                                    <h3>Books</h3>
                                    <p>By the end of the summer, Letters was finished. It wasn’t as polished as I had hoped, but it was good. I felt satisfied with my work. I wanted to showcase my work in school contests and Olympiads, since I love expressing myself through my projects. So, I had a deadline to meet. The first contest was on December 3rd of the same year. Despite my dislike for rushing myself, I had to if I wanted to participate. A few days before the start of the new school year, I began working on Books. Over the next three months, I worked whenever I had the time to. In the end, Books did turn out to be what I envisioned—a functional online bookstore. However, I felt that its design, as well as many other aspects of its functionality, were uninspired due to the rushed development and could have been done better. Nevertheless, it was in a state that allowed me to showcase it in front of others. At this point, I paused the development of the entire project and began preparing to present it.</p>
                                </div>
                                <div>
                                    <h3>Words Speak Volumes</h3>
                                    <p>The website you are in right now used to look completely different and offer content, regarding the journey of this project. Here's what the home page once said:</p>
                                    <blockquote>Words Speak Volumes is a series of presentations that promote the world of Nemalp and Books, a library built on the capabilities of Letters, a text editor that embraces simplicity.</blockquote>
                                    <p>Words Speak Volumes is like an umbrella term for these apps. It is the name of this entire project. It did cause some confusion at the competitions, but I am still happy with how I named the project.</p>
                                </div>
                            </section>
                        </div>
                    </article>
                    `);

                    break;
            }

            observeContent();

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

observeContent();