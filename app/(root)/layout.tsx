import Header from "@/components/Header";
import StoreProvider from '@/app/(root)/StoreProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-slate-800 to-slate-700">
      <Header />
      <section className="py-8">
        <div className="px-4 mx-auto">
          <StoreProvider>
            {children}
          </StoreProvider>
        </div>
      </section>
    </main>
  );
}
