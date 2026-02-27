import React from 'react'
import logo from '../../assets/Logo.PNG'

const NavMenu = [
    {
        id: 1,
        title: "Services",
        link: '#'
    },
    {
        id: 2,
        title: "Works",
        link: '#'

    },
    {
        id: 3,
        title: "Blog",
        link: '#'

    },
    {
        id: 4,
        title: "About Me",
        link: '#'
    },


];
const Navbar = () => {
    return (
        <div className="py-5 bg-[color:theme('colors.gray')] text-white shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
                
                {/* Logo Section */}
                <div>
                    <img src={logo} alt="Logo" className="h-10" />
                </div>

                {/* Nav Menu Section */}
                <div>
                    <ul className="flex justify-center gap-8 font-medium">
                        {NavMenu.map((item) => (
                            <li key={item.id}>
                                <a 
                                    href={item.link}
                                    className="hover:text-primary transition"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;