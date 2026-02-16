import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo/Brand Name */}
                <Link to="/" className="text-xl font-bold text-blue-600 tracking-tight">
                    Journal App.
                </Link>

                {/* Navigation Links */}
                <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
                    <li>
                        <Link to="/" className="hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/journal" className="hover:text-blue-600 transition-colors">
                            My Journal
                        </Link>
                    </li>
                    {/* Entry link usually hidden or styled as a button in 2026 UIs */}
                    {/* <li>
                        <Link 
                            to="/journal/1" 
                            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"
                        >
                            Latest Entry
                        </Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}