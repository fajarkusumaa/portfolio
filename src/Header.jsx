import Logo from "./assets/logo-f.png";

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <img src={Logo} alt="" />
            <ul className="flex  items-center gap-12">
                <li>
                    <a
                        href=""
                        className="text-white font-bold hover:text-white hover:opacity-100"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href=""
                        className="text-white font-bold opacity-40 active:opacity-100 hover:text-white hover:opacity-100"
                    >
                        Works
                    </a>
                </li>
                <li>
                    <button className="border-1 border-slate-100 hover:border-teal-500">
                        Get in Touch
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Header;
