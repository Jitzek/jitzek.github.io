export function longpressTouch(node: any, duration: number) {
    let timer: NodeJS.Timeout;

    let touchMoving = false;

    const handleTouchStart = (e: TouchEvent) => {
        touchMoving = false;
        timer = setTimeout(() => {
            if (touchMoving) return;
            node.dispatchEvent(
                new CustomEvent("longpresstouch", {
                    detail: {
                        clientX: e.targetTouches[0].clientX,
                        clientY: e.targetTouches[0].clientY,
                    },
                })
            );
        }, duration);
    };

    const handleTouchMove = () => {
        touchMoving = true;
    };

    const handleTouchEnd = () => {
        clearTimeout(timer);
    };
    node.addEventListener("touchstart", handleTouchStart);
    node.addEventListener("touchmove", handleTouchMove);
    node.addEventListener("touchend", handleTouchEnd);

    return {
        update(newDuration: number) {
            duration = newDuration;
        },
        destroy() {
            node.removeEventListener("touchstart", handleTouchStart);
            node.removeEventListener("touchend", handleTouchEnd);
            node.removeEventListener("touchmove", handleTouchMove);
        },
    };
}

export function longpressMouse(node: any, duration: number) {
    let timer: NodeJS.Timeout;

    let mouseMoving = false;

    const handleMouseDown = () => {
        mouseMoving = false;
        timer = setTimeout(() => {
            node.dispatchEvent(new MouseEvent("longpressmouse", node));
        }, duration);
    };

    const handleMouseMoving = () => {
        mouseMoving = true;
    };

    const handleMouseUp = () => {
        clearTimeout(timer);
    };

    node.addEventListener("mousedown", handleMouseDown);
    node.addEventListener("mousemove", handleMouseMoving);
    node.addEventListener("mousup", handleMouseUp);

    return {
        update(newDuration: number) {
            duration = newDuration;
        },
        destroy() {
            node.removeEventListener("mousedown", handleMouseDown);
            node.removeEventListener("mousemove", handleMouseMoving);
            node.removeEventListener("mousup", handleMouseUp);
        },
    };
}
