let touchDragging = false;

export function touchDragOrPress(node: any, duration: number) {
    let timer: NodeJS.Timeout;

    let touchMoving = false;
    let touchCanceled = false;

    const handleTouchStart = (e: TouchEvent) => {
        touchMoving = false;
        touchDragging = false;
        touchCanceled = false;
        timer = setTimeout(() => {
            if (touchMoving) return;
            if (touchCanceled) {
                node.dispatchEvent(
                    new CustomEvent("touchdragorpress", {
                        detail: {
                            clientX: e.targetTouches[0].clientX,
                            clientY: e.targetTouches[0].clientY,
                            press: true,
                            drag: false,
                        },
                    })
                );
                return;
            }
            node.dispatchEvent(
                new CustomEvent("touchdragorpress", {
                    detail: {
                        clientX: e.targetTouches[0].clientX,
                        clientY: e.targetTouches[0].clientY,
                        touch: false,
                        drag: true,
                    },
                })
            );
            touchDragging = true;
        }, duration);
    };

    const handleTouchMove = () => {
        touchMoving = true;
    };

    const handleTouchEnd = () => {
        touchCanceled = true;
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
            clearTimeout(timer);
        },
    };
}

export function touchDragStart(node: any, duration: number) {
    let timer: NodeJS.Timeout;

    let touchMoving = false;

    const handleTouchStart = (e: TouchEvent) => {
        touchMoving = false;
        touchDragging = false;
        timer = setTimeout(() => {
            if (touchMoving) return;
            node.dispatchEvent(
                new CustomEvent("touchdragstart", {
                    detail: {
                        clientX: e.targetTouches[0].clientX,
                        clientY: e.targetTouches[0].clientY,
                    },
                })
            );
            touchDragging = true;
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

export function touchDragMove(node: any) {
    const handleTouchMove = (e: TouchEvent) => {
        if (!touchDragging) return;
        node.dispatchEvent(
            new CustomEvent("touchdragmove", {
                detail: {
                    clientX: e.targetTouches[0].clientX,
                    clientY: e.targetTouches[0].clientY,
                },
            })
        );
    };

    node.addEventListener("touchmove", handleTouchMove);

    return {
        destroy() {
            node.removeEventListener("touchmove", handleTouchMove);
        },
    };
}

export function touchDragEnd(node: any) {
    const handleTouchEnd = (e: TouchEvent) => {
        if (!touchDragging) return;
        node.dispatchEvent(
            new CustomEvent("touchdragend", {
                detail: {
                    clientX: e.targetTouches[0].clientX,
                    clientY: e.targetTouches[0].clientY,
                },
            })
        );
        touchDragging = false;
    };

    node.addEventListener("touchend", handleTouchEnd);

    return {
        destroy() {
            node.removeEventListener("touchend", handleTouchEnd);
        },
    };
}
