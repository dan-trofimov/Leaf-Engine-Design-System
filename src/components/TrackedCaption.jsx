import './TrackedCaption.css';

export default function TrackedCaption({ progress, start = 0, end = 1, position = 'center', children }) {
  const visible = progress >= start && progress <= end;
  const fadeRange = 0.05;
  let opacity = 0;

  if (visible) {
    const fadeIn = Math.min(1, (progress - start) / fadeRange);
    const fadeOut = Math.min(1, (end - progress) / fadeRange);
    opacity = Math.min(fadeIn, fadeOut);
  }

  return (
    <div
      className={`tracked-caption tracked-caption--${position}`}
      style={{
        opacity,
        transform: `translateY(${visible ? 0 : 20}px)`,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {children}
    </div>
  );
}
