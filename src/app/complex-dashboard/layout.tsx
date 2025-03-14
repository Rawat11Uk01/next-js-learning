export default function DashBoardLayout({
  children,
  notification,
  news,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  news: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div>{notification}</div>
      <div>{news}</div>
    </div>
  );
}
