interface CounterButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function CounterButton({ onClick: handleClick, children }: CounterButtonProps) {
  return <button onClick={handleClick}>{children}</button>;
}

export default CounterButton;
