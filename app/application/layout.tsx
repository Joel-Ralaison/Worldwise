interface AppLayoutProps {
  citymanager: React.ReactNode;
  mainmap: React.ReactNode;
}

export default function ApplicationLayout({
  citymanager,
  mainmap,
}: AppLayoutProps) {
  return (
    <main className="h-svh w-svw">
      <>{citymanager}</>
      <>{mainmap}</>
    </main>
  );
}
