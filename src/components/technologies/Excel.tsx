export default function Excel() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background rounded square */}
      <rect width="48" height="48" rx="8" fill="#107C41" />

      {/* Stylized X for Excel */}
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="24"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        X
      </text>
    </svg>
  );
}
