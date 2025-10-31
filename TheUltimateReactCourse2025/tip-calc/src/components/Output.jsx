export function Output({ cost, yourValue, friendsValue }) {
  const c = Number(cost);
  const yv = Number(yourValue);
  const fv = Number(friendsValue);

  if (c === 0 || yv === 0 || fv === 0) return null;

  const totalTip = c * ((yv + fv) / 100);
  const total = c + totalTip;

  return (
    <div>
      <h3>
        You Pay ${total.toFixed(2)} (${c.toFixed(2)} + ${totalTip.toFixed(2)} tip)
      </h3>
    </div>
  )
}