export function Navbar({ children }: { children?: React.ReactNode }) {
  return <>
    <ul className="bg-white w-full md:w-100 h-20 md:h-full">{children}</ul>
  </>
}