import React from "react";

// Higher-Order Component that adds a background image with TailwindCSS
export function apiSectionBackgroundImage(Component) {
    return (props) => {
        return (
            <Component
                {...props}
                className="bg-black bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage:
                        'url("https://res.cloudinary.com/dmpf5fukm/image/upload/f_auto,q_auto/v1677117615/image_84_dlc6jf.png")',
                }}
            />
        );
    };
}

// Higher-Order Component that applies word wrap using TailwindCSS
export function withWordWrap(Component) {
    return (props) => {
        return <Component {...props} className="break-words" />;
    };
}
