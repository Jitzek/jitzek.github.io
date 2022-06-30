export function longpressTouch(node: any, duration: number) {
  let timer: NodeJS.Timeout;

  const handleTouchStart = (e: TouchEvent) => {
    timer = setTimeout(() => {
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

  const handleTouchEnd = () => {
    clearTimeout(timer);
  };

  node.addEventListener("touchstart", handleTouchStart);
  node.addEventListener("touchend", handleTouchEnd);

  return {
    update(newDuration: number) {
      duration = newDuration;
    },
    destroy() {
      node.removeEventListener("touchstart", handleTouchStart);
      node.removeEventListener("touchend", handleTouchEnd);
    },
  };
}

export function longpressMouse(node: any, duration: number) {
  let timer: NodeJS.Timeout;

  const handleMouseDown = () => {
    timer = setTimeout(() => {
      node.dispatchEvent(new MouseEvent("longpressmouse", node));
    }, duration);
  };

  const handleMouseUp = () => {
    clearTimeout(timer);
  };

  node.addEventListener("mousedown", handleMouseDown);
  node.addEventListener("mousup", handleMouseUp);

  return {
    update(newDuration: number) {
      duration = newDuration;
    },
    destroy() {
      node.removeEventListener("mousedown", handleMouseDown);
      node.removeEventListener("mousup", handleMouseUp);
    },
  };
}
