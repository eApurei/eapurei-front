export default function ContainerApp({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <section className="py-12">{children}</section>
}
