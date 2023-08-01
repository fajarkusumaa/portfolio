import "./App.css";
// import Hero from "./Hero";
// import Work from "./Work";
import Header from "./Header";

function App() {
    const trailer = document.getElementById("trailer");

    window.onmousemove = (e) => {
        const x = e.clientX - trailer.offsetWidth / 2,
            y = e.clientY - trailer.offsetHeight / 2;

        const keyframes = {
            transform: `translate(${x}px, ${y}px)`
        };

        trailer.animate(keyframes, {
            duration: 1200,
            fill: "forwards"
        });
    };

    return (
        <>
            <div
                id="trailer"
                className="h-20 w-20 fixed bg-teal-500 blur-3xl z-50 top-0 left-0 pointer-events-none"
            >
                asd
            </div>

            <div className="h-screen w-screen flex flex-col container">
                <div className="sticky top-0">
                    <Header />
                </div>
                {/* <Hero /> */}
                {/* <Work /> */}
            </div>
        </>
    );
}

export default App;
