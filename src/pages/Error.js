import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <section className="error-page">
            <div className="error-container">
                <h1>oops! it's a dead end</h1>
                <Link to="/" className="error-btn">
                    back home
                </Link>
            </div>
        </section>
    );
}