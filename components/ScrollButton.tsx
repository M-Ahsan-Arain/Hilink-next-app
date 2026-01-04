"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type ScrollButtonProps = {
    direction: "left" | "right";
    onClick: () => void;
};

const ScrollButton = ({ direction, onClick }: ScrollButtonProps) => {
    return (
        <button
            onClick={onClick}
            aria-label={`scroll-${direction}`}
            className="flex h-12 w-12 items-center justify-center rounded-full btn_white_text text-white shadow-md hover:bg-green-50 transition"
        >
            <FontAwesomeIcon
                icon={direction === "left" ? faChevronLeft : faChevronRight}
                className="h-5 w-5"
            />
        </button>
    );
};

export default ScrollButton;
