import LocaleSwitcher from "./LocaleSwitcher";

export default async function Navigation() {
  return (
    <nav className="flex flex-row gap-3 md:gap-5">
      <LocaleSwitcher />
    </nav>
  );
}
